import "./Header.css";
import Logo from "../../assets/img/logo1.svg"
import ADM from "../../assets/img/ADM.png"
const Header = () => {
    return (
        <header>
            <link rel="stylesheet" href="https://use.typekit.net/pam4ubo.css"></link>

            <div className="layout_grid header-header">
                <img className="loginImg" src={Logo} alt="" />
                <nav className="nav_header">
                    <a href="" className="link-header">Home</a>
                    <a href="" className="link-header">Eventos</a>
                    <a href="" className="link-header">Usuários</a>
                    <a href="" className="link-header">Contatos</a>
                </nav>
                <nav className="navas_header">
                    <div className="adm_info">
                        <a href="#" className="link-header">Administrador</a>
                        <img src={ADM} alt="Foto do administrador" />
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;