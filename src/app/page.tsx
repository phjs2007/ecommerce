"use client";
import Image from "next/image";
import Frost from "./components/frost";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/jogos");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados dos jogos");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  return(
    <main className="container ">
      <section className="w-screen h-[50vh]  ">
      <Frost />
      </section>
      <section className="w-full flex overflow-x-auto gap-1 mt-9 ">
          {data.map((game) => {
            const { id, name, nota, descricao_breve, price, imageUrl } = game; // Incluindo imageUrl
            return (
              <div key={id} className="group rounded-3xl flex-none w-1/4 h-fit p-2 hover:scale-125">
                <div className="group-hover:">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={name}
                      width={500}
                      height={100}
                      className="object-fill" // Estilo responsivo
                    />
                  )}
                </div>
                <div className="flex flex-col space-y-8 bg-slate-700 text-gray-50 p-3 group-hover:text-xs">
                  <div className="flex justify-between group-hover:text-xs">
                    <h1 className="group-hover:text-xs">{name}</h1>
                    <div>
                      <p>Nota: {nota}</p>
                    </div>
                  </div>
                  <div>
                    <p>{descricao_breve}</p> {/* Exibe a descrição breve */}
                  </div>
                  <div className="flex justify-end mr-2 group-hover:text-sm">
                    <p>R${price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-full flex overflow-x-auto gap-1 mt-9 ">
          {data.map((game) => {
            const { id, name, nota, descricao_breve, price, imageUrl } = game; // Incluindo imageUrl
            return (
              <div key={id} className="group rounded-3xl flex-none w-1/4 h-fit p-2 hover:scale-125">
                <div className="group-hover:">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={name}
                      width={500}
                      height={100}
                      className="object-fill" // Estilo responsivo
                    />
                  )}
                </div>
                <div className="flex flex-col space-y-8 bg-slate-700 text-gray-50 p-3 group-hover:text-xs">
                  <div className="flex justify-between group-hover:text-xs">
                    <h1 className="group-hover:text-xs">{name}</h1>
                    <div>
                      <p>Nota: {nota}</p>
                    </div>
                  </div>
                  <div>
                    <p>{descricao_breve}</p> {/* Exibe a descrição breve */}
                  </div>
                  <div className="flex justify-end mr-2 group-hover:text-sm">
                    <p>R${price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
  )

}




