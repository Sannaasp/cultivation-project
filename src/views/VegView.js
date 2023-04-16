import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/VegView.css";
import "../index.css";
import ShowModal from "../components/ShowModal.js";
import VegInfo from "../components/VegInfo";

function VegView() {
  const [vegetables, setVegetables] = useState(null);
  const [filteredVegetables, setFilteredVegetables] = useState([]);
  const { name } = useParams();
  const [vegTip, setVegTip] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios
      .get("/vegetables.json")
      .then((response) => {
        setVegetables(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (vegetables) {
      setFilteredVegetables(
        vegetables.filter((vegetable) => vegetable.name === name)
      );
    }
  }, [vegetables, name]);

  useEffect(() => {
    axios
      .get("/plantTip.json")
      .then((response) => {
        setVegTip(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {filteredVegetables.length > 0 && (
        <div key={filteredVegetables.id}>
          <div key={filteredVegetables.id} className="imgContainer">
            <img
              className="VegView-image"
              src={filteredVegetables[0].img}
              alt={filteredVegetables[0].name}
            />
          </div>

          <ol className="VegView-infoContainer">
            <h1 className="nameContainer">
              {filteredVegetables[0].name.charAt(0).toUpperCase() +
                filteredVegetables[0].name.slice(1)}
            </h1>
            {!showModal && (
              <button className="button" onClick={() => setShowModal(true)}>
                Odla i pallkrage?
              </button>
            )}
            {showModal && (
              <ShowModal
                title={"Vad är pallkrage?"}
                tip={vegTip}
                closeModal={closeModal}
              />
            )}
            <hr />
            <VegInfo
              title={"Placering"}
              info={filteredVegetables[0].placement}
              icon={"./icons/gardener.png"}
              leftSide={true}
            />
            <VegInfo
              title={"Jord"}
              info={filteredVegetables[0].soil}
              icon={"./icons/garden.png"}
              leftSide={false}
            />
            <VegInfo
              title={"Plantering"}
              info={filteredVegetables[0].planting}
              icon={"./icons/rubber-gloves.png"}
              leftSide={true}
            />
            <VegInfo
              title={"Bevattning"}
              info={filteredVegetables[0].watering}
              icon={"./icons/watering-can.png"}
              leftSide={false}
            />
            <VegInfo
              title={"Skörd"}
              info={filteredVegetables[0].harvest}
              icon={"./icons/scissors.png"}
              leftSide={true}
            />
          </ol>
        </div>
      )}
    </>
  );
}
export default VegView;
