import Image from "next/image"

import FotoTeste from '@/public/foto-projeto-teste.png'

export default function CardProjetos(props) {
    return (
        <div className="group border border-gray-900 rounded-3xl flex flex-col items-center gap-4 px-12 py-8 hover:scale-105 transition duration-300 bg-gray-200">
            <Image src={FotoTeste} alt={props.alt} className="object-cover h-40 w-60 rounded-xl drop-shadow-lg group-hover:scale-105 transition duration-300" />
            <h1 className="text-2xl font-bold">{props.nome}</h1>
            <div className="flex gap-2">
                <a href={props.hrefGit} className="rounded-full px-6 py-2 text-lg font-semibold border border-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 ">Código</a>
                <a href={props.hrefDemo} className="rounded-full px-6 py-2 text-lg font-semibold border border-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 ">Demo</a>
            </div>
        </div>
    )
}