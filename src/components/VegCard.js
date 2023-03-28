import { Link } from "react-router-dom";

function VegCard() {
  return (
    <>
      <div className="box">
        <div className="categoryName">
          <Link to="/CategoryCard/sallad">
            <img
              className="category"
              src="./images/salladsfrö.jpg"
              alt="sallad.jpg"
            />
          </Link>
          <p className="categoryTitle">Sallad</p>
        </div>
        <div className="categoryName">
          <Link to="/CategoryCard/bär">
            <img
              className="category"
              src="./images/jordgubbar.jpg"
              alt="jordgubbar.jpg"
            />
          </Link>
          <p className="categoryTitle">Bär</p>
        </div>
      </div>
      <div className="box">
        <div className="categoryName">
          <Link to="/CategoryCard/kryddor">
            <img
              className="category"
              src="./images/kryddor.jpg"
              alt="kryddor.jpg"
            />
          </Link>
          <p className="categoryTitle">Kryddor</p>
        </div>
        <div className="categoryName">
          <Link to="/CategoryCard/lök">
            <img className="category" src="./images/Lök.jpg" alt="Lök.jpg" />
          </Link>
          <p className="categoryTitle">Lök</p>
        </div>
      </div>
      <div className="box">
        <div className="categoryName">
          <Link to="/CategoryCard/rotfrukter">
            <img
              className="category"
              src="./images/potatis.jpg"
              alt="potatis.jpg"
            />
          </Link>
          <p className="categoryTitle">Rotfrukter</p>
        </div>
        <Link to="/CategoryCard/rotfrukter">
          <img
            className="category"
            src="./images/plantera.jpg"
            alt="rotfrukter.jpg"
          />
        </Link>
      </div>
    </>
  );
}
export default VegCard;
