import VegCard from "../components/VegCard";
function HomeView() {
  return (
    <>
      <header className="App-header">
        <img className="App-img" src="./images/kanna.jpg" alt="kanna.jpg" />
        <div className="App-start">
          <p>Lär dig odla</p>
        </div>
        <h1 className="App-heading">Sannas odling</h1>
      </header>
      <VegCard />
    </>
  );
}
export default HomeView;
