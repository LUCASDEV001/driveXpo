import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20" id="home">
      <div>
        <h2
          className="text-[40px] md:text-[60px] 
            font-bold "
        >
          Aluguel de Carros <span className="text-blue-600">Premium</span> em
          Sua Região
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Alugue um carro sem esforço e pague apenas para dirigir. Reserve
          agora!
        </h2>
        <a href="#catalog">
          <button
            className="p-2 mt-5 bg-blue-500 text-white
            px-4 rounded-full 
            hover:scale-105 transition-all"
          >
            Explorar Carros
          </button>
        </a>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="imagem de carro branco"
          width={400}
          height={500}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
}

export default Hero;
