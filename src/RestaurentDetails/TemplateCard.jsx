const TemplateCard = ({ data }) => {
  const {
    name,
    id,
    url,
    cusine,
    costForTwo,
    minOrder,
    deliverTime,
    payment_method,
    rating,
    votes,
    reviwes,
  } = data;

  return (
    <div
      key={id}
      style={{
        display: "flex",
        border: "1px solid black",
        width: "600px",
        height: "200px",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <div style={{ width: "150px" }}>
        <img style={{ width: "150px", height: "150px" }} src={url} alt={name} />
      </div>
      <div style={{ textAlign: "left", marginLeft: "15px" }}>
        <p>{name}</p>
        <p>{cusine.join(" , ")}</p>
        <p>{`Cost $${costForTwo} for two`}</p>
        <p>{`Min $${minOrder} up to ${deliverTime} min`}</p>
        <p>{`Accepts ${payment_method.card ? "Card" : "Cash"} only`}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p>{`${rating} *`}</p>
        <p>{`${votes} votes`}</p>
        <p>{`${reviwes} reviews`}</p>
      </div>
    </div>
  );
};
export default TemplateCard;
