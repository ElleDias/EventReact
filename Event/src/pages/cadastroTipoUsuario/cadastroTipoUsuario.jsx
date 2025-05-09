import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imagemTipoUsuario from "../../assets/img/cadastrotipoUsuario_imagem.svg";

const CadastroTipoGenero = () => {
  return (
    <>
      <Header />
      <main>
        <Cadastro
          imagem={imagemTipoUsuario} 
          tituloCadastro="Cadastro Tipo de Usuário"
          namePlace="Título"
        />

        <Lista
          tituloItemLista="Tipo Usuário"
          tituloLista="Lista De Tipo Usuário"
           visibilidade="none"
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroTipoGenero;
