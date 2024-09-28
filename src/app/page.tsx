"use client";
import Image from "next/image";
import Frost from "./components/frost";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, ] = useState(null); // Estado para controlar erros


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
        <section className=" w-full flex overflow-x-auto  gap-1 mt-6 ">
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {data.map((game) => {
            const { id, name, nota, descricao_breve, price, imageUrl } = game; // Incluindo imageUrl
            return (
              <SwiperSlide key={id} className="flex gap-4 mx-3">
                  <div className="w-full">
                  <Image
                      src={imageUrl}
                      alt={name}
                      width={500} // largura em pixels
                      height={200} // altura em pixels
                      className="w-full h-auto"
                  />
                  </div>
                  <div className="flex flex-col justify-center p-2 gap-3 bg-slate-300">
                    <div className="flex justify-between">
                    <h1>
                      {name}
                    </h1>
                    <div>
                      <p>nota: {nota}</p>
                    </div>
                    </div>
                    <div>
                      <p>
                        {descricao_breve}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <p>
                        R${price}
                      </p>
                    </div>
                  </div>

              </SwiperSlide>
            );
          })}
          </Swiper>
          
        </section>
      </main>
    </div>
  );
}

{/* <div key={id} className="group rounded-lg flex-none w-1/4 h-fit p-2 hover:scale-125">
<div className=" group-hover: ">
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
<div className="flex flex-col space-y-8 bg-slate-700 text-gray-50 p-3 group-hover:text-xs  ">
  <div className="flex justify-between group-hover:text-xs">
    <h1 className="group-hover:text-xs">{name}</h1>
    <div>
    <p>Nota:{nota}</p>
    </div>
  </div>
  <div>
    <p></p>
  </div>
  <div className="flex justify-end mr-2 group-hover:text-sm">
    <p>R${price}</p>
  </div>
</div>
</div> */}





