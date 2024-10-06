import { Heart, ShoppingCart } from 'lucide-react';
import Image from "next/image";

export default function Frost() {
    return (
        <div className="w-screen h-[50vh] relative ">
            <Image
                src="/imagens/2.jpg"
                alt="Descrição da imagem"
                width={1000} // largura em pixels
                height={1000} // altura em pixels
                className="w-[100vw] sm:w-[100vw] md:w-[100vw] lg:w-[100vw]  rounded-lg z-0 absolute  h-full object-cover "
            />
            <div className=" p-2 z-10 relative h-full w-full flex flex-col justify-end   sm:p-5">
                <div className="w-1/2 md:w-1/2 sm:w-1/2">
                    <Image
                        src="/imagens/Frostpunk2.webp"
                        alt="Descrição da imagem"
                        layout="responsive"
                        width={1000} // largura em pixels
                        height={200} // altura em pixels
                        className="md:w-full sm:w-full lg:w-full rounded-lg  "
                    />
                </div>
                <div className="grid grid-cols-1 grid-rows-2 gap-3 sm:gap-1 justify-center items-center text-slate-50  ">
                    <div className="col-span-2">
                        <p className="sm:text-sm md:text-base text-lg font-light">Compre agora e ganhe um jogo de graça</p>
                    </div>
                    <div className="row-start-2">
                        <h1 className="text-sm sm:text-base w-full font-semibold tracking-widest">Agora disponível</h1>
                    </div>
                    <div className="row-start-2 flex space-x-4 sm:space-x-2 lg:space-x-4 justify-center items-center">
                        <p className="font-semibold text-sm sm:text-2xl">R$119.99</p>
                        <button className="border p-1 sm:p-2"><Heart size={25} /></button>
                        <button className=" sm-p-1  flex p-1 sm:p-2  bg-custom-gradient font-semibold ">
                            <ShoppingCart size={30} />
                            <span className="hidden sm:hidden md:block md:text-lg ">Add to cart</span> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}