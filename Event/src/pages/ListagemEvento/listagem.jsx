import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imagemListarEvento from "../../assets/img/cadastroDeEvento_imagem.svg";


const ListagemEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    nametitulo="Tipo Evento"
                    imagem={imagemListarEvento}
                    tituloCadastro="Cadastro de Evento"
                    namePlace="Nome"
                    exibirTipoEvento={true} />

                <Lista
                    nametitulo="Tipo Evento"
                    tituloItemLista="Nome"
                    tituloItemLista2="Tipo Evento"
                    tituloLista="Lista de Evento"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    )
}
export default ListagemEvento;