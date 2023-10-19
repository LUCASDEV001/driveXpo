import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex fixed w-full bg-white items-center justify-between p-3 px-5 shadow-sm border-b-[1px] ">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="hidden md:flex gap-5">
        <a href="#home">
          <h2 className="hover:bg-blue-500 duration-100 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Início
          </h2>
        </a>
        <a href="#about">
          <h2 className="hover:bg-blue-500 duration-100 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Sobre nós
          </h2>
        </a>
        <a href="#contact">
          <h2 className="hover:bg-blue-500 duration-100 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Contate-nos
          </h2>
        </a>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
