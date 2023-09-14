import './footer.css'

export default function Footer() {
    return (
        <footer className="static bottom-0 left-0 right-0 flex flex-col items-center">
            <ul id="listaFooter" className="flex flex-row justify-center items-center gap-8 text-xl py-8">
                <li>
                    <a href="#">Início</a>
                </li>

                <li>
                    <a href="#sobre-mim">Sobre Mim</a>
                </li>

                <li>
                    <a href="#projetos">Projetos</a>
                </li>

                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
            <p className='opacity-50 text-sm mb-4'>Copyright &#169; Marcelo Ramalho. Todos os direitos reservados </p>
        </footer>
    )
}