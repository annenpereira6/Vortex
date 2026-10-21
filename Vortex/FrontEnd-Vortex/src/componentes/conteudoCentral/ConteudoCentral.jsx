import "./ConteudoCentral.css";

const dadosGrafico = [
  { nome: "SaaS", azul: 42, cinza: 30 },
  { nome: "Moda", azul: 58, cinza: 44 },
  { nome: "Casa", azul: 72, cinza: 56 },
  { nome: "Saúde", azul: 53, cinza: 36 },
  { nome: "Tech", azul: 75, cinza: 66 },
  { nome: "B2B", azul: 64, cinza: 48 },
  { nome: "Outros", azul: 74, cinza: 60 },
];

const contatos = [
  {
    iniciais: "MS",
    nome: "Mariana Souza Ltda",
    detalhe: "Tecnologia · CRM · declarado · 93%",
    status: "Confirmado",
  },
  {
    iniciais: "AT",
    nome: "Ateliê Nova Era",
    detalhe: "Moda · campanhas · observado · 91%",
    status: "Confirmado",
  },
  {
    iniciais: "BR",
    nome: "Brasil Comércio",
    detalhe: "SaaS B2B · IA · sugerido · 67%",
    status: "Pendente",
  },
];

export default function ConteudoCentral() {
  return (
    <div className="conteudo-central">

      <section className="grafico-card">
        <div className="central-cabecalho">
          <div>
            <h2>Afinidades do público</h2>
            <p>Afinidades · azul: alto interesse; cinza: moderado</p>
          </div>
          <span className="selo-demo">Demo</span>
        </div>

        <div className="grafico-barras">
          {dadosGrafico.map((dado) => (
            <div className="grupo-barra" key={dado.nome}>
              <div className="barras">
                <div
                  className="barra azul"
                  style={{ height: `${dado.azul}%` }}
                />
                <div
                  className="barra cinza"
                  style={{ height: `${dado.cinza}%` }}
                />
              </div>
              <span>{dado.nome}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="inteligencia-card">
        <div className="central-cabecalho">
          <div>
            <h2>Inteligência recente</h2>
            <p>Interesses e preferências · origem e confiança</p>
          </div>
          <button className="explorar-btn">Explorar interesses</button>
        </div>

        <div className="lista-contatos">
          {contatos.map((contato) => (
            <div className="contato-linha" key={contato.nome}>
              <div className="contato-avatar">{contato.iniciais}</div>

              <div className="contato-info">
                <strong>{contato.nome}</strong>
                <span>{contato.detalhe}</span>
              </div>

              <span
                className={`status ${
                  contato.status === "Pendente" ? "pendente" : ""
                }`}
              >
                {contato.status}
              </span>
            </div>
          ))}
        </div>

        <div className="feedback-card">
          <strong>Feedback do enriquecimento</strong>
          <p>Concluído · 42 contatos enriquecidos nas últimas 24h.</p>
          <p>Sem interesses? Inicie um enriquecimento para descobrir afinidades.</p>
          <p>Erro de fonte? Os atributos confirmados são preservados. Tente novamente.</p>
        </div>
      </section>

    </div>
  );
}