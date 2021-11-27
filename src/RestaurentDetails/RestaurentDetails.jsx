import data from "./data.json";
import TemplateCard from "./TemplateCard";
const RestaurentDetails = () => {
  return (
    <div>
      {data.map((item) => (
        <TemplateCard data={item} />
      ))}
    </div>
  );
};
export default RestaurentDetails;
