import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="mt-28 border-t-[1px] ] " id="about">
      <h2 className="mt-28 font-bold text-[30px] flex justify-center">
        Nossa História
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <h2 className="justify-center text-justify p-10 md:p-0 max-w-3xl mt-10 text-lg md:ml-60 2xl:ml-auto">
          Bem-vindo ao <span className="text-blue-500 font-bold">DriveXpo</span>
          , sua escolha definitiva para o aluguel de carros de qualidade e
          experiências de condução excepcionais. Desde o nosso início, em 2005,
          na cidade de São Paulo, temos orgulhosamente servido a nossa
          comunidade e visitantes com uma ampla gama de veículos premium para
          aluguel. O nosso compromisso inabalável com a qualidade, segurança e
          satisfação do cliente nos permitiu crescer e expandir para atender
          clientes de todo o país. Acreditamos que a condução vai além de
          simplesmente chegar do ponto A ao ponto B. É a sensação de liberdade,
          a emoção da estrada aberta e as memórias que você cria ao longo do
          caminho. Convidamos você a fazer parte da nossa comunidade de
          entusiastas de carros e a embarcar em uma jornada de exploração e
          aventura.
        </h2>

        <Image
          src="/sao-paulo-173-c.jpg"
          alt="hero"
          width={5000}
          height={1000}
          className="w-96 rounded-full h-96 mx-auto md:mx-0 object-cover shadow-xl align-middle md:mt-10 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default About;
