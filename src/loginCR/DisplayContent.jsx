const DisplayContent = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <ul
            key={item.id}
            style={{
              border: "1px solid black",
              padding: "15px",
            }}
          >
            <li>
              {item.name}-{item.email}-{item.status ? "Done" : "Pending"}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default DisplayContent;
