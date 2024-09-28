"use client";
import Frost from "./components/frost";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para controlar erros

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
    <div className="relative bg-[url('/imagens/2.jpg')] box-border w-full h-[50vh] object-cover bg-no-repeat">
      <main className="box-border w-screen h-screen p-main relative z-20">
        <section>
          <Frost />
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map((game) => {
            const { id, name, nota, descricao_breve, price, imageUrl } = game; // Incluindo imageUrl
            return (
              <div key={id} className="p-4 bg-white shadow-md rounded-lg">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={name}
                    width={500}
                    height={200}
                    className="w-full h-auto rounded-t-lg" // Estilo responsivo
                  />
                )}
                <h2 className="text-xl font-bold mt-2">{name}</h2>
                <p>Nota: {nota}</p>
                <p>{descricao_breve}</p>
                <p className="font-semibold">R$ {price}</p> {/* Formatação de preço */}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

