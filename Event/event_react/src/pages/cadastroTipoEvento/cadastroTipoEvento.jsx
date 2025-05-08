import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/cadastro";
import Lista from '../../components/lista/lista'; 
import imagemTipoEvento from "../../assets/img/cadastroTipoEvento_imagem.svg"

const CadastroTipoEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    imagem={imagemTipoEvento}
                    tituloCadastro="Cadastro Tipo de Evento"
                    namePlace="Titulo"
                />

                <Lista
                    tituloItemLista="Tipo Evento"
                    tituloLista="Lista De Eventos"
                     tituloItemLista2=" "
                     visibilidade="none"
                />

            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoEvento;