import React, { use, useEffect, useState } from 'react'
import Deletar from "../../assets/img/lixo.png"
import api from "../../services/Service";
import "./modal.css"


const Modal = (props) => {
  const [comentarios, setComentarios] = useState([]);
  const [usuarioId, setUsuarioId] = useState("7B53EF89-AFCB-46C9-8BED-80528A8144EA");
  const [novoComentario, setNovoComentario] = useState("");

  async function listarComentarios() {
    try {
      const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`);
      setComentarios(resposta.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarComentarios();
  }, [comentarios])

  async function cadastrarComentario(comentario) {
    try {
      await api.post("comentariosEventos", {
        idUsuario: usuarioId,
        idEvento: props.idEvento,
        Descricao: comentario
      })
    } catch (error) {
      console.error(error);
    }
  }

  async function deletarComentario(idComentario) {
    try {
      await api.delete(`comentariosEventos/${idComentario}`);
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div className="model-overlay" onClick={props.fecharModal}>
        <div className="model" onClick={(e) => e.stopPropagation()}>
          <h1>{props.titulo}</h1>
          <div className="model_conteudo">
            {props.tipoModel === "descricaoEvento" ? (
              <p>{props.descricao}</p>
            ) : (
              <>
                {comentarios.map((item) =>
                  <div key={item.idComentarioEvento}>
                    <strong>{item.usuario.nomeUsuario}</strong>
                    <img src={Deletar} alt="Deletar" onClick={() => deletarComentario(item.idComentarioEvento)} />
                    <p>{item.descricao}</p>
                    <hr />
                  </div>
                )}
                <div>
                  <input type="text"
                    placeholder='Escreva seu comentario ...'
                    value={novoComentario}
                    onChange={(e) => setNovoComentario(e.target.value)}
                  />
                  <button onClick={() => cadastrarComentario(novoComentario)}>
                    Cadastrar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
