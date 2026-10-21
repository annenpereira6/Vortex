import "./PainelDetalhes.css";

export default function PainelDetalhes() {
  return (
    <div className="painel-detalhes">

      <section className="detalhe-card">
        <h2>Origem dos atributos</h2>
        <p className="detalhe-subtitulo">
          Fontes autorizadas · confiança média
        </p>

        <div className="origem-linha">
          <span className="origem-icone">☁</span>
          <span>CRM - declarados</span>
          <strong>93%</strong>
        </div>

        <div className="origem-linha">
          <span className="origem-icone">▤</span>
          <span>Campanhas - observados</span>
          <strong>91%</strong>
        </div>

        <div className="origem-linha">
          <span className="origem-icone">▧</span>
          <span>IA - sugestões</span>
          <strong>67%</strong>
        </div>

        <div className="detalhe-aviso">
          <strong>Dados demonstrativos</strong>
          <p>1.284 contatos · último lote hoje, 08:42</p>
        </div>
      </section>

      <section className="detalhe-card">
        <h2>Oportunidades pendentes</h2>
        <p className="detalhe-subtitulo">
          7 atributos para validar antes da campanha.
        </p>

        <div className="oportunidade-linha">
          <span>Interesses sugeridos</span>
          <strong>3</strong>
        </div>

        <div className="oportunidade-linha">
          <span>Preferências de canal</span>
          <strong>2</strong>
        </div>

        <div className="oportunidade-linha">
          <span>Afili­nidades de produto</span>
          <strong>2</strong>
        </div>

        <div className="detalhe-aviso">
          <strong>Revisão de marketing</strong>
          <p>
            Confirme ou rejeite as sugestões antes de segmentar.
          </p>
        </div>
      </section>

      <section className="detalhe-card">
        <h2>Ações rápidas</h2>
        <p className="detalhe-subtitulo">
          Enriquecimento e ativação de públicos.
        </p>

        <button className="acao-rapida">
          <span className="acao-icone">▤</span>
          <span>
            <strong>Enriquecer contatos</strong>
            <small>Descobrir interesses e preferências.</small>
          </span>
        </button>

        <button className="acao-rapida">
          <span className="acao-icone">▣</span>
          <span>
            <strong>Criar segmentos</strong>
            <small>Combinar atributos para campanhas.</small>
          </span>
        </button>
      </section>

    </div>
  );
}