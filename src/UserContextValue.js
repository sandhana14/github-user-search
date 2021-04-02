import { useContext } from "react";
import { UserContext } from "./UserCreateContext";

const GitHubUserContext = () => {
  const UserContextValue = useContext(UserContext);

  return (
    <div>
      <div className="header">
        <h1>Github user</h1>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="GitHub search"
          onChange={UserContextValue.onHandleChange}
        ></input>
        <button onClick={UserContextValue.onHandleClick}>Search</button>
      </div>

      {UserContextValue.loading && <h2 className="loading">Loading....</h2>}

      {UserContextValue.error ? (
        <h2 className="error">{UserContextValue.error}</h2>
      ) : (
        UserContextValue.data &&
        Object.keys(UserContextValue.data).length !== 0 && (
          <div className="card-holder">
            <div className="card">
              <div className="image">
                <img
                  src={UserContextValue.data.avatar_url}
                  alt="GitHub users"
                ></img>
              </div>
              <div>
                <h3>
                  Name : <span>{UserContextValue.data.name}</span>
                </h3>
              </div>
              <hr />
              <div>
                <h3>
                  Username : <span> {UserContextValue.data.login}</span>
                </h3>
              </div>
              <hr />
              <div>
                <h3>
                  Followers : <span>{UserContextValue.data.followers} </span>
                </h3>
              </div>
              <hr />
              <div>
                <h3>
                  Following : <span>{UserContextValue.data.following}</span>
                </h3>
              </div>

              <hr />
              <div>
                <h3>
                  Number of Repositories :{" "}
                  <span>{UserContextValue.data.public_repos}</span>
                </h3>
              </div>
              <hr />
              <div>
                <h3>User's GitHub page</h3>
                <a href={UserContextValue.data.html_url} target="blank">
                  Click me
                </a>
              </div>
              <hr />
              <div className="name_repos">
                <h3>Name of the Repositories</h3>
                {UserContextValue.repos.map((repos, index) => (
                  <li key={index}>{repos}</li>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default GitHubUserContext;
