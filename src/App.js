import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        borderRadius: "10px",
        height: "100%",
        justifyContent: "center",
        marginTop: "50%",
        alignItems: "center",
      }}
    >
      <div
        className="hover"
        style={{
          display: "flex",
          width: "fit-content",
          color: "red",
          background: "darkred ",
          padding: "10px",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid orange",
        }}
      >
        Hello Coder!!!
      </div>
    </div>
  );
}

export default App;
