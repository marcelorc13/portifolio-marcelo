export default function SobreMim() {
    return (
        <section id="sobre-mim" className="h-screen flex flex-col items-center pt-10">
            <h1 className="text-5xl font-semibold">Sobre Mim:</h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-4 px-8 md:px-10 lg:px-20 py-4 md:py-20 lg:py-20">
                <div className="h-1/2 md:h-full md:w-1/2 flex flex-col items-center border border-gray-800 rounded-3xl overflow-hidden">
                    <h1 className="text-2xl py-2"> Quem é Marcelo? </h1>
                    <div className="w-full h-full">

                    </div>
                </div>

                <div className="h-1/2 md:h-full md:w-1/2 flex flex-col items-center border border-gray-800 rounded-3xl overflow-hidden">
                    <h1 className="text-2xl py-2"> Linguagens </h1>
                    <ul id="linguagens" className="grid grid-cols-2 w-full h-full">
                    </ul>
                </div>
            </div>

        </section>
    )
}