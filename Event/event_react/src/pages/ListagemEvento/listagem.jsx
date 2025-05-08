import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/cadastro";
import Lista from "../../components/lista/lista";
import imagemListarEvento from "../../assets/img/cadastroDeEvento_imagem.svg";


const ListagemEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    imagem={imagemListarEvento}
                    tituloCadastro="Cadastro de Evento"
                    namePlace="Nome"
                />
                <Lista
                    tituloItemLista="Nome"
                    tituloLista="Lista de Evento"
                />
            </main>
            <Footer />
        </>
    )
}
export default ListagemEvento;