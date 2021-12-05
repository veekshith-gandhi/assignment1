import { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagintation";

const CreateCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const getUsers = ({ query = "masai", page }) => {
    return fetch(
      ""
      // `https://api.github.com/search/users?q=${query}&page=${page}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getUsers({ page })
      .then((res) => {
        setData(res);
        setIsLoading(false);
        if (res.total_count) {
          const totalPg = Math.ceil(res.total_count / 30);
          setTotalPage(totalPg);
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handlePageChange = (value) => {
    setPage(value);
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <Pagination
            totalPage={totalPage}
            onClickCallBack={handlePageChange}
            currentpage={page}
          />
          {data?.items?.map((user) => (
            <Card
              url={user.avatar_url}
              name={user.login}
              key={user.id}
              id={user.id}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default CreateCard;
