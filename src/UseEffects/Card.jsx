const Card = ({ name, url, id }) => {
  return (
    <div
      style={{
        border: "1px solid black",

        display: "flex",
      }}
    >
      <h3>{name}</h3>
      <p>{id}</p>
      <div>
        <img width="70" src={url} alt={name} />
      </div>
    </div>
  );
};
export default Card;
