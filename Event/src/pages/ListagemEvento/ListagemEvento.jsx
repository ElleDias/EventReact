import "./ListagemEvento.css"

// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Cadastro from "../../components/cadastro/Cadastro";
// import Lista from "../../components/lista/Lista";
import Modal from "../../components/modal/modal"

import nuvem from "../../assets/img/nuvem.png";
import descricao from "../../assets/img/informacao.png";
import api from "../../services/Service";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Toggle from "../../components/toggle/Toggle"


const ListagemEvento = () => {
    const [listaEventos, setListaEvento] = useState([]);
    const [tipoModal, setTipoModal] = useState("");//descricaoevento ou comentario
    const [dadosModal, setDadosModal] = useState({});//descricao. idevento, etc
    const [modalAberto, setModalAberto] = useState(false);
    const [usuarioId, setUsuarioId] = useState("7B53EF89-AFCB-46C9-8BED-80528A8144EA");


    async function listarEvento() {
        try {
            const resposta = await api.get("eventos");
            const todosOsEventos = resposta.data;
            const respostaPresenca = await api.get("PresencasEventos/ListarMinhas/" + usuarioId);
            const minhasPresencas = respostaPresenca.data;

            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento);

                return {
                    ...atualEvento,
                    possuiPresenca: presenca?.situacao === true,
                    idPresenca: presenca?.idPresencaEvento || null
                };
            });

            setListaEvento(eventosComPresencas);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        listarEvento();
    }, []);

    function abrirModal(tipo, dados) {
        setTipoModal(tipo);
        setDadosModal(dados);
        setModalAberto(true);
    }

    function fecharModal() {
        setModalAberto(false);
        setDadosModal({});
        setTipoModal("");
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                //atualizacao: situacao para FALSE

            } else if (idPresenca != "") {
                //atualizacao: situacao para TRUE
            }
            else {
                //cadastra uma nova presenca
                
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <main className="main_lista_eventos layout_grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr />
                </div>

                <select className="selecaoDeEventos" name="" id="">
                    <option value="">Todos os eventos</option>
                </select>

                <table className="tabela_lista_eventos">
                    <thead>
                        <tr className="sub_eventos">
                            <th>Título</th>
                            <th>Data</th>
                            <th>Tipo de Evento</th>
                            <th>Descrição</th>
                            <th>Comentário</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody className="corpoListagem">
                        {listaEventos.length > 0 ? (
                            listaEventos.map((item) => (
                                <tr className="listagemDoEvento" key={item.idEvento}>
                                    <td data-cell="Nome">{item.nomeEvento}</td>
                                    <td data-cell="Data">{format(item.dataEvento, "dd/MM/yy")}</td>
                                    <td data-cell="Tipo Evento">{item.IdTipoEvento?.TituloTipoEvento}</td>
                                    <td data-cell="Descricao">
                                        <img className="imagemListagem" style={{ cursor: "pointer" }} onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })} src={descricao} alt="Descrição" />
                                    </td>
                                    <td data-cell="Comentários">
                                        <img style={{ cursor: "pointer" }} onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })} src={nuvem} alt="Comentários" />
                                    </td>
                                    <td data-cell="Participar">
                                        <Toggle
                                            presenca={item.possuiPresenca} 
                                            manipular={() => manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)} />
                                    </td>
                                    <hr />
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6}>Nenhum evento encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
            {modalAberto && (
                <Modal
                    titulo={tipoModal == "descricaoEvento" ? "Descricao do evento"
                        : "Comentario"}
                    tipoModel={tipoModal}
                    idEvento={dadosModal.idEvento}
                    descricao={dadosModal.descricao}
                    fecharModal={fecharModal}
                />
            )}
        </>
    );
};

export default ListagemEvento;
