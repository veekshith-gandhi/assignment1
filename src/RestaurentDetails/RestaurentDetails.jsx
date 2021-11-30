import { useState } from "react";
import data from "./data.json";
import TemplateCard from "./TemplateCard";
const RestaurentDetails = () => {
  const [filterRating, setFilterRating] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cost, setCost] = useState(null);

  const handleFilterRating = (rating) => {
    setFilterRating(rating);
  };
  const handlePayment = (method) => {
    setPaymentMethod(method);
  };
  const handleOrder = (order) => {
    setCost(order);
  };

  return (
    <div>
      <div>
        Rating
        <button onClick={() => handleFilterRating(4)}>4</button>
        <button onClick={() => handleFilterRating(3)}>3</button>
        <button onClick={() => handleFilterRating(2)}>2</button>
        <button onClick={() => handleFilterRating(1)}>1</button>
        <button onClick={() => handleFilterRating(0)}>ALL</button>
      </div>
      <div>
        Payment Method
        {["card", "cash"].map((method) => (
          <button key={method} onClick={() => handlePayment(method)}>
            {method}
          </button>
        ))}
      </div>
      <div>
        order
        {["asc", "des"].map((order) => (
          <button key={order} onClick={() => handleOrder(order)}>
            {order}
          </button>
        ))}
      </div>
      {data
        .filter(({ rating, payment_method, costForTwo }) => {
          return rating >= filterRating && payment_method[paymentMethod];
        })
        .sort((a, b) => {
          if (cost == null) {
            return 0;
          } else if (cost === "asc") {
            return a.costForTwo - b.costForTwo;
          } else if (cost === "des") {
            return b.costForTwo - a.costForTwo;
          }
        })
        .map((item) => (
          <TemplateCard key={item.id} data={item} />
        ))}
    </div>
  );
};
export default RestaurentDetails;
