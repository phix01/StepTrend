import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/logo.png";

const Header = ({ onShowCart }) => {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
          src={logo} 
          alt="StepTrend Logo" 
          style={{ height: "70px", marginRight: "10px" }} 
        />
        <h1 className="gradient-text">Step Trend</h1>  {/* BURAYA className EKLEDİM */}
      </div>

      <HeaderCartButton onShowCart={onShowCart} />
    </header>
  );
};

export default Header;

