import { Link } from "react-router-dom";
import "../css/VegCard.css";

function VegCardProp(props) {
  return (
    <>
      <div className="categoryBox">
        <Link to={`/CategoryCard/${props.title.toLowerCase()}`}>
          <div className="categoryImg">
            <img
              className="category"
              src={`./images/${props.image}.jpg`}
              alt="sallad.jpg"
            />
          </div>
          <div className="VegCard-container">
            <button className="button">{props.title}</button>
          </div>
        </Link>
      </div>
    </>
  );
}
export default VegCardProp;
