import axios from "axios";
const GithubRequest = (query) => {
  if (!query) {
    return Promise.reject("Provide user name");
  }
  return axios.get("https://api.github.com/search/users", {
    params: { q: query },
  });
};
export default GithubRequest;
