const Pagination = ({ totalPage, currentpage, onClickCallBack }) => {
  const page = new Array(totalPage).fill(0).map((a, i) =>
    i + 1 === currentpage ? (
      <button key={i} disabled style={{ background: "yellow" }}>
        {i + 1}
      </button>
    ) : (
      <button key={i} onClick={() => onClickCallBack(i + 1)}>
        {i + 1}
      </button>
    )
  );
  return <div>{page}</div>;
};
export default Pagination;
