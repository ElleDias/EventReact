import "./ListagemEvento.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import nuvem from "../../assets/img/nuvem.png";
import descricao from "../../assets/img/informacao.png";
import api from "../../services/Service";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Modal from "../../components/modal/modal"


const ListagemEvento = () => {
    const [listaEventos, setListaEvento] = useState([]);

    async function listarEvento() {
        try {
            const resposta = await api.get("eventos");
            setListaEvento(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEvento();
    }, []);

    return (
        <>
            <main className="main_lista_eventos layout_grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr />
                </div>

                <select name="" id="">
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
                    <tbody>
                        {listaEventos.length > 0 ? (
                            listaEventos.map((item) => (
                                <tr className="listagemDoEvento" key={item.idEvento}>
                                    <td data-cell="Nome">{item.nomeEvento}</td>
                                    <td data-cell="Data">{format(item.dataEvento, "dd/MM/yy")}</td>
                                    <td data-cell="Tipo Evento">{item.tiposEventos?.tituloTipoEvento}</td>
                                    <td data-cell="Descricao">
                                        <img className="imagemListagem" src={descricao} alt="Descrição" />
                                    </td>
                                    <td data-cell="Comentários">
                                        <img src={nuvem} alt="Comentários" />
                                    </td>
                                    <td data-cell="Participar">
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
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
            <Modal />
        </>
    );
};

export default ListagemEvento;
