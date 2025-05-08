import './lista.css';
import Lixo from "../../assets/img/Lixo_Branco.png"
import Caneta from "../../assets/img/caneta.png"

const Lista = (props) => {
  return (
    <section className="layout_grid listagem">
      <h1>{props.tituloLista}</h1>
      <hr />

      <div className="tabela">
        <thead>
          <tr className="tabela_cabecalho">
            <th>Título</th>
            <th>{props.nametitulo}</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr className="item_lista">
            <td data-cell="Título">{props.tituloItemLista}</td>
            <td>{props.tituloItemLista2}</td>
            <td data-cell="Editar"><img src={Caneta} alt="Imagem de uma caneta" /></td>
            <td data-cell="Excluir"><img src={Lixo} alt="ícone deletar" /></td>
          </tr>
        </tbody>
      </div>
    </section>
  );
};

export default Lista;
