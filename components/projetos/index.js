import './projetos.css'

import CardProjetos from "./projetosCard";

export default function Projetos() {
    return (
        <section id="projetos" className="flex flex-col items-center pt-10">
            <h1 className="text-5xl font-semibold">Projetos:</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-10 lg:px-20 py-4 md:py-20 lg:py-20">
                <div className="projetos">
                    <CardProjetos
                        alt=''
                        hrefGit='#'
                        hrefDemo='#'
                        nome='Teste 1' />
                </div>

                <div className="projetos">
                    <CardProjetos
                        alt=''
                        hrefGit='#'
                        hrefDemo='#'
                        nome='Teste 2' />
                </div>

                <div className="projetos">
                    <CardProjetos
                        alt=''
                        hrefGit='#'
                        hrefDemo='#'
                        nome='Teste 3' />
                </div>

                <div className="projetos">
                    <CardProjetos
                        alt=''
                        hrefGit='#'
                        hrefDemo='#'
                        nome='Teste 4' />
                </div>

                <div className="projetos">
                    <CardProjetos
                        alt=''
                        hrefGit='#'
                        hrefDemo='#'
                        nome='Teste 5' />
                </div>

                <div className="projetos">
                    <CardProjetos
                        alt=''
                        hrefGit='#'
                        hrefDemo='#'
                        nome='Teste 6' />
                </div>

            </div>
        </section>
    )
}