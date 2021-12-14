import { useEffect, useState } from "react";
import GithubRequest from "./GithubRequest";

const AxiosGithubList = () => {
  const [users, setUsers] = useState("");
  const [userData, setUserData] = useState([]);
  const handleSearch = () => {
    GithubRequest(users)
      .then((res) => setUserData(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>GitHub Users</h1>
      <input
        placeholder="Search"
        onChange={(e) => setUsers(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
      {userData?.map((item) => (
        <div key={item.id}> {item.login}</div>
      ))}
    </div>
  );
};
export default AxiosGithubList;
