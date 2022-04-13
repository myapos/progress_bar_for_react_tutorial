import * as Examples from "./examples";
import "./App.css";

function App() {
  return (
    <div style={{ marginTop: "20px" }}>
      {Object.keys(Examples).map((key) => {
        const ExampleToRender = Examples[key];
        return (
          <div key={key}>
            <h3 style={{ textAlign: "center" }}>{key}</h3>
            <ExampleToRender />
          </div>
        );
      })}
    </div>
  );
}

export default App;
