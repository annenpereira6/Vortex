import "./PainelInicio.css";

export default function PainelInicio() {
  return (
    <div className="painel-inicio">
      <div className="painel-titulo">
        <h1>Início</h1>
        <p>Inteligência de marketing · dados demonstrativos</p>
      </div>

      <div className="painel-acoes">
        <div className="campo-pesquisa">
          <span className="icone-pesquisa">⌕</span>
          <input
            type="text"
            placeholder="Buscar cliente ou cadastro"
          />
        </div>

        <button className="botao-exportar">
          Exportar
        </button>

        <button className="botao-enriquecimento">
          Iniciar enriquecimento
        </button>
      </div>
    </div>
  );
}