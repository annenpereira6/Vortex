import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import "./VortexInicio.css"
import PainelInicio from "../painelInicio/PainelInicio"
import CardsIndicadores from "../cardsIndicadores/CardsIndicadores"
import PainelDetalhes from "../painelDetalhes/PainelDetalhes"
import ConteudoCentral from "../conteudoCentral/ConteudoCentral"

export default function VortexInicio() {
    return (
        <section>
            <Header />
            <div className="layout-inicio">
                <Sidebar />

                <main className="conteudo-inicio">
                    <PainelInicio />
                    <CardsIndicadores />

                    <div className="dashboard-corpo">
                        <div className="dashboard-centro">
                            <ConteudoCentral />
                        </div>

                        <div className="dashboard-lateral">
                            <PainelDetalhes />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}