import './header.css'

import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
    return (
        <nav className="top-0 right-0 left-0 flex flex-row justify-center md:justify-between md:px-20 lg:px-32 text-2xl items-center py-10 md:absolute relative">
            <div className="flex items-center">
                <p className="text-3xl select-none font-semibold">Marcelo Ramalho</p>
            </div>

            <ul className="hidden md:flex flex-row gap-6 items-center">
                <li>
                    <a className='ancoras' href="#sobre-mim">Sobre Mim</a>
                </li>

                <li>
                    <a className='ancoras' href="#projetos">Projetos</a>
                </li>

                <li>
                    <a className='ancoras' href="#contato">Contato</a>
                </li>
            </ul>

            <div className='absolute right-8 top-12 md:hidden'>
                <button>
                    <AiOutlineMenu />
                </button>
            </div>

        </nav>
    )
}