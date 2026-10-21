import "./CardsIndicadores.css";

const indicadores = [
  {
    titulo: "Contatos enriquecidos",
    numero: "1.284",
    descricao: "+42 nas últimas 24h",
    icone: "♙",
    cor: "azul",
  },
  {
    titulo: "Interesses identificados",
    numero: "18",
    descricao: "18 interesses na base enriquecida",
    icone: "▤",
    cor: "azul",
  },
  {
    titulo: "Oportunidades pendentes",
    numero: "7",
    descricao: "7 sugestões aguardam revisão",
    icone: "!",
    cor: "azul",
  },
  {
    titulo: "Atributos confirmados",
    numero: "94%",
    descricao: "Confiança média das fontes: 91%",
    icone: "✓",
    cor: "verde",
  },
];

export default function CardsIndicadores() {
  return (
    <div className="indicadores">
      {indicadores.map((item) => (
        <article className="card-indicador" key={item.titulo}>
          <div className="card-cabecalho">
            <span className="card-titulo">{item.titulo}</span>

            <div className={`card-icone ${item.cor}`}>
              {item.icone}
            </div>
          </div>

          <h2>{item.numero}</h2>

          <p>{item.descricao}</p>
        </article>
      ))}
    </div>
  );
}