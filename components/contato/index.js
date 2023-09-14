import './contato.css'

import { FaMapLocationDot } from 'react-icons/fa6'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'

export default function Contato() {
    return (
        <section id="contato" className="h-screen flex flex-col gap-6 items-center justify-center w-full">
            <h1 className="text-5xl font-semibold">Contato:</h1>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='cardContato'>
                    <FaMapLocationDot />
                    <p className='cursor-default'>Maceió, AL</p>
                </div>

                <div className='cardContato'>
                    <AiOutlineMail />
                    <p className='select-all'>marcelorcarnauba@gmail.com</p>
                </div>

                <div className='cardContato'>
                    <AiFillLinkedin />
                    <a target='_blank' href='https://www.linkedin.com/in/marcelo-ramalho-ab9131276/'>LinkedIn</a>
                </div>

                <div className='cardContato'>
                    <AiFillPhone />
                    <p className='select-all'>(82)999711000</p>
                </div>
            </div>
        </section>
    )
}