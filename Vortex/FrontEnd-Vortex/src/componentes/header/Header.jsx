import "./Header.css";
import Logo from "../../assets/Orb.svg"

const Header = () => {
return (
<header className="header">
<button className="menu">☰</button>

  <div className="logo">
    <img src={Logo} alt="Logo da empresa" />
    <h3>NEOCORE</h3>
  </div>

  <div className="usuario">
    <span>Olá, RawAnne</span>
    <div className="avatar">RA</div>
  </div>
</header>

);
};

export default Header;