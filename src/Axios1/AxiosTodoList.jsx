import { useEffect, useState } from "react";
import AxiosDisplay from "./AxiosDisplay";
import AxiosTodo from "./AxiosTodo";
const axios = require("axios");

const AxiosTodoList = () => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiurl, setApiurl] = useState("http://localhost:8080/task");

  useEffect(() => {
    getRequestTodo();
    setIsLoading(false);
  }, []);
  const getRequestTodo = () => {
    axios
      .get(apiurl)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  };
  const postRequestTodo = (title) => {
    return axios.post(apiurl, title);
  };
  const handleTodo = async (title) => {
    const data = {
      title,
      status: false,
    };
    try {
      setIsLoading(true);
      await postRequestTodo(data);
      await getRequestTodo();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggle = async (status) => {
    try {
      let ids = todo.map((id) => id.id);

      for (let id of ids) {
        await axios.patch(`http://localhost:8080/task/${id}`, {
          status: status,
        });
      }

      await getRequestTodo();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/task/${id}`);
    await getRequestTodo();
  };
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <AxiosTodo handleTodo={handleTodo} />

      {todo.map((item) => (
        <AxiosDisplay
          id={item.id}
          key={item.id}
          title={item.title}
          status={item.status}
          handleDelete={handleDelete}
        />
      ))}
      <div>
        {" "}
        <button onClick={() => handleToggle(true)}>Done</button>
        <button onClick={() => handleToggle(false)}>Pending</button>
      </div>
    </div>
  );
};
export default AxiosTodoList;
