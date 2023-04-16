import { Link } from "react-router-dom";
import "../css/VegCard.css";
import VegCardProp from "./VegCardProp";

function VegCard() {
  return (
    <>
      <div className="box">
        <VegCardProp image={"salladsfrö"} title={"Sallad"} />
        <VegCardProp image={"tomatbild"} title={"Grönsaker"} />
      </div>
      <div className="box">
        <VegCardProp image={"potatis"} title={"Rotfrukter"} />
        <VegCardProp image={"Lök"} title={"Lök"} />
      </div>
      <div className="box">
        <VegCardProp image={"jordgubbar"} title={"Bär"} />
        <VegCardProp image={"kryddor"} title={"Kryddor"} />
      </div>
    </>
  );
}
export default VegCard;
