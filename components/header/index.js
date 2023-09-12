import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
    return (
        <header className="top-0 right-0 left-0 flex flex-row justify-center md:justify-between md:px-20 lg:px-32 text-2xl items-center py-10 relative">
            <div className="flex items-center">
                <p className="text-3xl">Marcelo Ramalho</p>
            </div>

            <ul className="hidden md:flex flex-row gap-6 items-center">
                <li>
                    <a href="#">Sobre Mim</a>
                </li>

                <li>
                    <a href="#">Projetos</a>
                </li>

                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>

            <div className='absolute right-8 top-12 md:hidden'>
                <button>
                    <AiOutlineMenu />
                </button>
            </div>

        </header>
    )
}