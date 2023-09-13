'use client'

import './header.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {

    function abrirMenu(e) {
        const navegadores = document.querySelector('[name="navegadores"]')
        const btnAbrir = document.querySelector('#btnAbrir')
        const btnFechar = document.querySelector('#btnFechar')


        navegadores.classList.toggle('flex')
        navegadores.classList.toggle('hidden')

        btnAbrir.classList.toggle('hidden')
        btnFechar.classList.toggle('hidden')
    }

    return (
        <nav className="top-0 right-0 left-0 flex flex-col md:flex-row justify-center md:justify-between md:px-20 lg:px-32 text-2xl items-center py-10 md:absolute relative">
            <div className="flex items-center">
                <p className="text-3xl select-none font-semibold">Marcelo Ramalho</p>
            </div>

            <ul name='navegadores' className="mt-6 md:mt-0 gap-4 hidden flex-col md:flex md:flex-row md:gap-8 justify-center items-center">
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
                <button onClick={abrirMenu}>
                    <AiOutlineMenu id='btnAbrir' />
                    <AiOutlineClose className='hidden' id='btnFechar' />
                </button>
            </div>

        </nav>
    )
}