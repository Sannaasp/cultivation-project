import "../css/VegView.css";
import "../index.css";

function VegInfo(props) {
  return (
    <div>
      <div
        className={
          props.leftSide ? "vegInfoLeftContainer" : "vegInfoRightContainer"
        }
      >
        <h2 className="title">{props.title}</h2>
        <img className="icon" src={props.icon} alt="icon" />
      </div>
      <div className={props.leftSide ? "" : "vegInfoRightContainer"}>
        <li> {props.info}</li>
      </div>
    </div>
  );
}

export default VegInfo;
