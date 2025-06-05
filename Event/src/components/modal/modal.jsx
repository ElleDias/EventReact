import React, { use, useEffect, useState } from 'react'
import Deletar from "../../assets/img/lixo.png"
import api from "../../services/Service";
import "./modal.css"

const Modal = (props) => {
  const [comentarios, setComentarios] = useState([]);

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
  }, [])

  async function cadastrarComentario() {

  }

  async function excluirComentario() {
    
  }

  return (
    <>
      <div className="model_overlay" onClick={props.fecharModal}></div>
      <div className="model">
        <h1>{props.titulo}</h1>
        <div className="model_conteudo">
          {props.tipoModel === "descricaoEvento" ? (
            <p>{props.descricao}</p>
          ) : (
            <>
              {comentarios.map((item) =>
                <div key={item.idComentarioEvento}>
                  <strong>{item.usuario.nomeUsuario}</strong>
                  <img src={Deletar} alt="Deletar" />
                  <p>{item.descricao}</p>
                  <hr />
                </div>
              )}
              <div>
                <input type="text" placeholder='Escreva seu comentario ...' />
                <button>
                  Cadastrar
                </button>
              </div>
            </>
          )}
        </div>
      </div>

    </>
  )
}

export default Modal
