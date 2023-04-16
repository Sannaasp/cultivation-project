import VegCard from "../components/VegCard";
import "../index.css";
import "../css/HomeView.css";

function HomeView() {
  return (
    <>
      <header className="header">
        <img
          className="App-img"
          src="./images/headerImgTest.png"
          alt="img.jpg"
        />

        <div className="headingText"></div>
      </header>
      <div className="HomeView-header"></div>
      <p className="infoText">
        Här hittar du massor av praktisk information och tips om odlingstekniker
        och växtsorter. Oavsett om du är en erfaren odlare eller nybörjare,
        finns det alltid något nytt att lära sig. Utforska vår hemsida och
        upptäck en helt ny värld av möjligheter med odling!
      </p>
      <VegCard />
    </>
  );
}
export default HomeView;
