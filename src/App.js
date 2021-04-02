import "./App.css";
import GitHubUserContext from "./UserContextValue";
import ContextProvider from "./UserCreateContext";

function App() {
  return (
    <div>
      <ContextProvider>
        <GitHubUserContext />
      </ContextProvider>
    </div>
  );
}

export default App;
