import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.message) {
          setError(data.message);
        } else {
          setError("");
          setData(data);
        }
      });

    fetch(`https://api.github.com/users/${inputValue}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setError("");
          setRepos(data.map((repos) => repos.name));
        }
      });
  };

  const contextValues = {
    inputValue: inputValue,
    data: data,
    error: error,
    repos: repos,
    loading: loading,
    onHandleChange: (event) => {
      setInputValue(event.target.value);
    },
    onHandleClick: () => {
      return fetchData();
    },
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
