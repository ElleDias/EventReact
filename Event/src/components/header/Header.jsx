import "./Header.css";
import Logo from "../../assets/img/logo1.svg"
import ADM from "../../assets/img/ADM.png"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <link rel="stylesheet" href="https://use.typekit.net/pam4ubo.css"></link>

            <div className="layout_grid header_header">
                <img className="login_img " src={Logo} alt="" />
                <nav className="nav_header">
                    <Link href="" to="/home" className="link_header">Home</Link>
                    <Link href="" to="/ListagemEvento" className="link_header">Eventos</Link>
                    <Link href="" to="/CadastroTipoUsuario" className="link_header">Usuários</Link>
                    <Link href="" className="link_header">Contatos</Link>
                </nav>
                <nav className="navs_header">
                    <div className="adm_info">
                        <a href="#" className="link_header">Administrador</a>
                        <img src={ADM} alt="Foto do administrador" />
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;