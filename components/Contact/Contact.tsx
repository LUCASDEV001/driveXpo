import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="mt-28 border-t-[1px]" id="contact">
      <h2 className="font-bold text-[30px] flex justify-center mt-28 ">
        Entre em Contato
      </h2>
      <h2 className="text-[20px] flex justify-center text-center text-gray-500 mt-2">
        Está com alguma dúvida? Contate-nos agora!
      </h2>

      <div className="flex justify-center gap-20 mt-7 ">
        <div className="hidden md:block">
          <Image
            src="/Car-PNG-File.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-96 object-cover align-middle pt-20 pointer-events-none"
          />
        </div>

        <div>
          <div className="max-w-3xl mx-auto mt-3 text-lg border shadow-md p-5">
            <form>
              <div className="w-full flex flex-col my-4">
                <label className="font-bold text-gray-400" htmlFor="name">
                  Seu Nome
                </label>
                <input
                  type="text"
                  minLength={3}
                  maxLength={150}
                  required
                  className=" p-2 outline-none bg-gray-50 border border-gray-100 rounded-3xl "
                  autoComplete="off"
                  id="name"
                />
              </div>
              <div className="w-full flex flex-col my-4">
                <label className="font-bold text-gray-400" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  minLength={5}
                  maxLength={150}
                  required
                  className=" p-2 outline-none bg-gray-50 border border-gray-100 rounded-3xl "
                  autoComplete="off"
                  id="email"
                />
              </div>
              <div>
                <label className="font-bold text-gray-400" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  minLength={10}
                  maxLength={500}
                  name="message"
                  className="w-full outline-none resize-none p-4 bg-gray-50 border border-gray-100 rounded-3xl "
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 w-40 bg-blue-500 rounded-full disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 hover:scale-105 transition-all"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
