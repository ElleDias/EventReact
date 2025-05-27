import "./Cadastro.css";
import Botao from "../botao/Botao";
import Imagem from "../Imagem/Imagem";

const Cadastro = (props) => {
    return (
        <main className="layout_grid main_cadastro">
            <form className="layout_grid form_cadastro" onSubmit={props.onSubmit}>
                <div className="titulo">
                    <h1>{props.titulo_cadastro}</h1>
                    <hr />
                </div>

                <section className="layout_grid section_cadastro">
                    <div className="banner_cadastro">
                        <Imagem imagem={props.imagem} alt="Banner do cadastro" />
                    </div>

                    <div className="campos_cadastro">

                        <div className="campo_cad_titulo">
                            <label htmlFor="titulo">Título</label>
                            <input
                                type="text"
                                name="titulo"
                                id="titulo"
                                placeholder={props.placeholderTitulo || "Título"}
                                value={props.valorTitulo}
                                onChange={props.onChangeTitulo}
                            />
                        </div>

                        {props.exibirListaCadastro && (
                            <>

                                <div className="campo_cad_titulo">
                                    <label htmlFor="data">Data do Evento</label>
                                    <input
                                        type="date"
                                        id="data"
                                        name="data"
                                        value={props.valorData}
                                        onChange={props.onChangeData}
                                        required
                                    />
                                </div>

                                <div className="campo-cad_instituicao" style={{ display: props.visibilidade }}>
                                    <label htmlFor="instituicao">Instituição</label>
                                    <select
                                        name="instituicao"
                                        id="instituicao"
                                        value={props.valorSelectInstituicao}
                                        onChange={(e) => props.setValorSelectInstituicao(e.target.value)}
                                    >
                                        <option value="" disabled>Selecione</option>
                                        {props.listaInstituicoes?.map((instituicao) => (
                                            <option key={instituicao.IdInstituicao} value={instituicao.IdInstituicao}>
                                                {instituicao.NomeFantasia}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="campo-cad_tipoevento" style={{ display: props.visibilidade }}>
                                    <label htmlFor="tipoevento">Tipo Evento</label>
                                    <select
                                        name="tipoevento"
                                        id="tipoevento"
                                        value={props.valorSelectTipoEvento}
                                        onChange={(e) => props.setValorSelectTipoEvento(e.target.value)}
                                    >
                                        <option value="" disabled>Selecione</option>
                                        {props.listaTipoEventos?.map((tipoEvento) => (
                                            <option key={tipoEvento.IdTipoEvento} value={tipoEvento.IdTipoEvento}>
                                                {tipoEvento.TituloTipoEvento}
                                            </option>
                                        ))}
                                    </select>
                                </div>





                                <div className="campo_cad_titulo">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        placeholder="Descrição"
                                        value={props.valorNome}
                                        onChange={props.onChangeNome}
                                    />
                                </div>
                            </>
                        )}

                        <Botao nomeDoBotao="Cadastrar" tipo="submit" />
                    </div>
                </section>
            </form>
        </main>
    );
};

export default Cadastro;
