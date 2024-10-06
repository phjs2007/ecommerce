"use client";
import Image from "next/image";
import Frost from "./components/Frost";
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
        console.error("Erro ao buscar dados:", error); // Adicionei um log para o erro
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container ">
      <section className="w-screen h-[50vh]  ">
        <Frost />
      </section>
      <section className="w-full flex overflow-x-auto gap-1 mt-9">
        {data.map((game) => {
          const { id, name, nota, descricao_breve, imageUrl } = game; // Incluindo imageUrl
          return (
            <div key={id} className="group  flex-none grid grid-cols-1 grid-rows-1 w-1/4 h-auto gap-2 mx-11 bg-slate-800 items-center pb-2 text-white">
              <div>
                <Image
                  src={imageUrl}
                  alt={name}
                  layout="responsive"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-10 p-2 ">
                <div className="flex gap-2 justify-between">
                  <h1>{name}</h1>
                  <h1>Nota:{nota}</h1>
                </div>
                <div>{descricao_breve}</div>
              </div>
            </div>
          );
        })}
      </section>



    </main>
  )

}




