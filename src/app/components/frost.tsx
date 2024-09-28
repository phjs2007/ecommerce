import { Heart, ShoppingCart } from 'lucide-react';
import Image from "next/image";

export default function Frost() {
    return (
        <div>
            <div>
                <Image
                    src="/imagens/Frostpunk2.webp"
                    alt="Descrição da imagem"
                    width={500} // largura em pixels
                    height={200} // altura em pixels
                    className="rounded-lg"
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 justify-center items-center text-slate-50">
                <div className="col-span-2">
                    <p className="text-lg font-light">Compre agora e ganhe um jogo de graça</p>
                </div>
                <div className="row-start-2">
                    <h1 className="text-2xl font-semibold">Agora disponível</h1>
                </div>
                <div className="row-start-2 flex space-x-4 justify-center items-center">
                    <p className="font-semibold text-2xl">R$119.99</p>
                    <button className="border p-2"><Heart size={25} /></button>
                    <button className="flex p-2 bg-custom-gradient text-2xl font-semibold"> <ShoppingCart size={30} /> <span className="ml-2">Add to cart</span> </button>
                </div>
            </div>
        </div>
    )
}