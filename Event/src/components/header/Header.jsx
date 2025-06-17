import "./Header.css";
import Logo from "../../assets/img/logo1.svg";
import ADM from "../../assets/img/ADM.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <link rel="stylesheet" href="https://use.typekit.net/pam4ubo.css"></link>

      <div className="layout_grid header_header">
        <img className="login_img" src={Logo} alt="Logo" />

        <nav className="nav_header">
          <Link to="/home" className="link_header">Home</Link>
          <Link to="/CadastroTipoEvento" className="link_header">Eventos</Link>
          <Link to="/CadastroTipoUsuario" className="link_header">Usuários</Link>
        </nav>

        <nav className="navs_header">
          <div className="adm_info">
            <span className="link_header">Administrador</span>
            <Link to="/">
              <img src={ADM} alt="Foto do administrador" className="link_header adm_img" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
