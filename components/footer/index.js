import './footer.css'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="static bottom-0 left-0 right-0 flex flex-col items-center">
            <ul id="listaFooter" className="flex flex-row justify-center items-center gap-8 md:text-xl py-8">
                <li>
                    <Link href="#">Início</Link>
                </li>

                <li>
                    <Link href="#sobre-mim">Sobre Mim</Link>
                </li>

                <li>
                    <Link href="#projetos">Projetos</Link>
                </li>

                <li>
                    <Link href="#contato">Contato</Link>
                </li>
            </ul>
            <p className='opacity-50 text-sm mb-4 text-center px-4'>Copyright &#169; Marcelo Ramalho. Todos os direitos reservados </p>
        </footer>
    )
}