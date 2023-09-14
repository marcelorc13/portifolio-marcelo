'use client'

import './marcelo.css'

import Link from 'next/link'

import Image from 'next/image'
import FotoMarcelo from '@/public/foto-marcelo.jpeg'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import '@/public/marcelo-cv.pdf'

export default function Marcelo() {

    function handleDownload() {
        const arquivo = '/_next/static/files/marcelo-cv.pdf'

        const link = document.createElement('a');
        link.href = arquivo;
        link.download = 'marcelo-cv.pdf';
        link.click()
    }

    return (
        <section className=" flex flex-col md:flex-row gap-2 md:gap-8 h-screen">
            <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                <Image className='rounded-full h-56 w-56 object-cover drop-shadow-md' priority src={FotoMarcelo} alt='Foto do meu rosto' />
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start items-center">
                <div className='flex flex-col gap-3 items-center '>
                    <div className='flex flex-col items-center'>
                        <p className='text-2xl text-gray-500'>Olá!</p>
                        <p className='text-gray-500'>Meu nome é:</p>
                        <h1 className='text-5xl font-bold text-center'>Marcelo <br /> Ramalho</h1>
                    </div>

                    <div id='btnContact' className='flex flex-row gap-2 mt-2 justify-center'>
                        <button onClick={handleDownload} className='bg-gray-900 text-white'>Baixar CV</button>
                        <button className=''><a href='#contato'>Contato</a></button>
                    </div>

                    <div id='btnSocial' className='flex flex-row gap-2 justify-center'>
                        <Link target='_blank' href='https://github.com/marcelorc13'><FaGithub /></Link>
                        <Link target='_blank' href='https://www.linkedin.com/in/marcelo-ramalho-ab9131276/'><FaLinkedin /></Link>
                    </div>
                </div>

            </div>
        </section>
    )
}