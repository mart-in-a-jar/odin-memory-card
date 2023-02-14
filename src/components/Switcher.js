import hpPic from "../img/hp.png";
import rmPic from "../img/rm.png";
import "./Switcher.css";

export default function Switcher({ action, state }) {
    const img = state === "rm" ? hpPic : rmPic;
    return (
        <div className="switcher" onClick={action}>
            <img src={img} alt="Switch mode" />
        </div>
    );
}
