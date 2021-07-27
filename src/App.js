import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header title="A new Heading!" id={1} />
        <Header title="Secondary Prop" />
        <Header id={0} />
      </div>
    </div>
  );
}

export default App;