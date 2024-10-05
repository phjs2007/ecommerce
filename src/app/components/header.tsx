"use client"
import React from "react";
import { useState } from "react";
import { Menu } from 'lucide-react';



const Header = () => {
    const [isOpen, setisOpen] = useState(false)

    const open = () => {
        setisOpen(!isOpen)
    }
    return (
        <header className="w-full h-12  box-content absolute top-0 z-30 text-white ">
            <div className="flex items-center">
                <div className="flex w-full">
                    <div className="ml-2 flex justify-start items-center  box-border h-full w-1/2 sm:w-full sm:ml-7" >
                        <form action="pesquisa" method="get">
                            <input
                                type="search"
                                name="pes"
                                placeholder="Pesquisar"
                                className="border-b-2 bg-transparent px-1 py-1 text-white outline-none focus:outline-none w-auto"
                                aria-label="Pesquisar por jogos"
                            />
                        </form>
                    </div>
                </div>
                <div className="w-1/2 h-auto">
                    <nav className="flex h-full w-full justify-end items-center ">
                        <div className="sm:hidden me-4">
                            <button onClick={open}>
                            <Menu />
                            </button>
                        </div>

                        <div className="absolute top-8 bg-slate-500 right-3 transform">
                            {isOpen && (
                                <nav className=" p-5 transition-all delay-1000 duration-1000">
                                    <ul>
                                        <li className="font-bold hover:border-b-2 delay-100 my-3">Home</li>
                                        <li className="font-bold hover:border-b-2 delay-100 my-3">Catálogo</li>
                                        <li className="font-bold hover:border-b-2 delay-100 my-3">Suporte</li>
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </nav>

                    <nav className=" hidden justify-center items-center space-x-2 text-sm sm:block sm:text-base md:space-x-11 text-whit ">

                        <a className="hover:border-b-2 delay-100">Home</a>


                        <a className="hover:border-b-2 delay-100">Catálogo</a>


                        <a className="hover:border-b-2 delay-100">Suporte</a>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
