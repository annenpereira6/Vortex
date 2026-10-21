import "./Sidebar.css";

const itens = [
  "Início",
  "Contatos",
  "Importar",
  "Segmentos",
  "Governança",
  "Logs de auditoria",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-titulo">
        <span>Workspace</span>
        <h2>Operações</h2>
      </div>

      <nav className="sidebar-menu">
        {itens.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`sidebar-item ${index === 0 ? "ativo" : ""}`}
            onClick={(e) => e.preventDefault()}
          >
            <span className="sidebar-ponto"></span>
            <span>{item}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-aviso">
        <span>Atualização</span>
        <strong>
          12 novos cadastros foram importados hoje
        </strong>
        <p>
          3 precisam de revisão manual antes da conciliação.
        </p>
      </div>
    </aside>
  );
}