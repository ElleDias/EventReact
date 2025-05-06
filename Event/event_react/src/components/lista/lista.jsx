import './lista.css';
import Lixo from "../../assets/img/Lixo_Branco.png"
import Caneta from  "../../assets/img/caneta.png"

const Lista = (props) => {
  return (
    <section className="layout_grid listagem lista-container">
      <h1 className="lista-titulo">{props.tituloLista}</h1>
      <hr className="linha-subtitulo" />

      <div className="tabela">
        <table className="tabela-eventos">
          <thead>
            <tr className="table_cabecalho">
              <th>Título</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="item_lista">
              <td data-cell="Título">Tipo Evento</td>
              <td>
                <img
                  src={Caneta}
                  alt="ícone editar"
                  className="icone editar"
                />
              </td>
              <td>
                <img
                  src={Lixo}
                  alt="ícone deletar"
                  className="icone deletar"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Lista;
