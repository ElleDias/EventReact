import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import api from "../../services/Service";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Cadastros from "../../assets/img/cadastroEvento.png";

const CadastroEvento = () => {
    const [CadastrarEvento, setCadastrarEvento] = useState("");
    const [listaEvento, setListaEvento] = useState([]);

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function cadastrarEvento(evento) {
        evento.preventDefault();

        if (CadastrarEvento.trim() !== "") {
            try {
                // Confirme o endpoint correto, aqui deixei 'eventos'
                await api.post("eventos", { nomeEvento: CadastrarEvento });
                alertar("success", "Cadastro realizado com sucesso!");
                setCadastrarEvento("");
                listarEvento();
            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte.");
                console.error(error);
            }
        } else {
            alertar("error", "Preencha o campo!");
        }
    }

    async function listarEvento() {
        try {
            const resposta = await api.get("eventos");
            setListaEvento(resposta.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function excluirEvento(idEvento) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });

        const result = await swalWithBootstrapButtons.fire({
            title: "Você tem certeza?",
            text: "Não será possível reverter!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, deletar!",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        });

        if (result.isConfirmed) {
            try {
                await api.delete(`eventos/${idEvento}`);
                swalWithBootstrapButtons.fire(
                    "Deletado!",
                    "O evento foi deletado com sucesso.",
                    "success"
                );
                listarEvento();
            } catch (error) {
                console.log(error);
                Swal.fire("Erro!", "Não foi possível deletar o evento.", "error");
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                "Cancelado",
                "O evento não foi deletado.",
                "error"
            );
        }
    }

    async function atualizarEvento(evento) {
        const { value: novoEvento } = await Swal.fire({
            title: "Digite o novo nome do evento",
            input: "text",
            inputLabel: "Novo nome",
            inputValue: evento.nomeEvento,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo não pode estar vazio!";
                }
            }
        });

        if (novoEvento) {
            try {
                await api.put(`eventos/${evento.idEvento}`, {
                    nomeEvento: novoEvento
                });
                Swal.fire(`Evento modificado para: ${novoEvento}`);
                listarEvento();
            } catch (error) {
                console.error("Erro ao atualizar:", error);
            }
        }
    }

    async function DescreverEvento(idDescricao) {
        try {
            const resposta = await api.get(`eventos/${idDescricao}`);
            const descricao = resposta.data.descricao || "Sem descrição disponível.";

            Swal.fire({
                title: "Descrição do Evento",
                text: descricao,
                icon: "info",
                confirmButtonText: "Fechar"
            });
        } catch (error) {
            console.error("Erro ao buscar descrição:", error);
            Swal.fire("Erro!", "Não foi possível carregar a descrição.", "error");
        }
    }

    useEffect(() => {
        listarEvento();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Cadastro

                    exibirListaCadastro={true}

                    imagem={Cadastros}
                    titulo_cadastro="Cadastro de Evento"
                    nome="nome"
                    valor={CadastrarEvento}
                    onChange={(e) => setCadastrarEvento(e.target.value)}
                    onSubmit={cadastrarEvento}
                />

                <Lista
                    exibir_tipo_evento
                    tituloLista="LISTA TIPO DE EVENTOS"
                    exibirData={true}
                    chaveData="dataEvento"
                    tituloCadastro="none"
                    lista={listaEvento}
                    chaveNome="nomeEvento"
                    listaTipoEvento="none"
                    chaveId="idEvento"
                    visibilidade="none"
                    exibirTipoEvento={true}
                    funcEditar={atualizarEvento}
                    funcExcluir={excluirEvento}
                    funcDescricao={DescreverEvento}
                    exibirSimboloDescricao={true}
                />
            </main>
            <Footer />
        </>
    );
};

export default CadastroEvento;
