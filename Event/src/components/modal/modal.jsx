import React from 'react'
import Deletar from "../../assets/img/lixo.png"

const modal = (props) => {
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
                  <strong>{item.usario.nomeUsuario}</strong>
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

export default modal
