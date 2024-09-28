"use client";
import Frost from "./components/frost";
import { useEffect, useState } from "react";



export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, ] = useState(null); // Estado para controlar erros
  const [currentIndex, setCurrentindex] = useState(0)
  const [slides, setSlides] = useState([])

  const nextslide = () => {
    setCurrentindex( (prevIndex) => (prevIndex+1) %slides.length)
  }
  const prevSlide = () => {
    setCurrentindex( (prevIndex) => (prevIndex -1 +slides.length) %slides.length)
  }


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
      } finally {
        setLoading(false); // Define loading como false após a tentativa de fetch
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>; // Mensagem de carregamento
  if (error) return <p>{error}</p>; // Mensagem de erro

  return (
    <div className="relative bg-[url('/imagens/2.jpg')] box-border w-full h-[50vh] object-cover ">
      <main className="box-border w-screen h-screen p-main relative z-20">
        <section>
          <Frost />
        </section>
        <section className=" w-full h-fit flex overflow-x-auto  gap-1 mt-6 ">
          {data.map((game) => {
            const { id, name, nota, descricao_breve, price, imageUrl } = game; // Incluindo imageUrl
            return (
              <div key={id} className=" rounded-lg flex-none w-1/4 h-fit p-2">
                <div>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={name}
                      width={400}
                      height={100}
                      className="w-full" // Estilo responsivo
                    />
                  )}
                </div>
                <div className="flex flex-col space-y-8 bg-slate-700 text-gray-50 ">
                  <div>
                    <h1>{name}</h1>
                  </div>
                  <div>
                    <p>R${price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

