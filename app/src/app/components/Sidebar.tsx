"use client"
import { useEffect, useState } from "react";
import Link from "next/link"

export default function Sidebar({
  email,
  name,
  picture,
  default_path
}: { email: string, name: string, picture: string, default_path?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState(default_path);
  const getStyle = (componentPath: string) => {
    return path == componentPath ? "bg-gray-800 text-gray-200" : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
  }
  useEffect(() => {
    setPath(window.location.pathname);
    console.log(window.location.pathname);
  }, [])

  return (
    <div className="z-50 md:w-64">
      <div className="md:h-full">
        {/* Toggle button for smaller screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-4 left-4 md:hidden z-50 rounded-md w-full ${isOpen ? "hidden" : ""}`}
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <aside
          className={`z-40 transform top-0 left-0 w-64 border-r bg-gray-900 border-gray-700 fixed h-full pt-5 pb-10 flex flex-col overflow-y-auto transition-transform duration-200
          md:relative md:translate-x-0 md:top-0 md:left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className={`absolute top-4 right-4 md:hidden z-50`}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <a href="#" className="mx-auto mb-4 text-white">
            <label className="font-light text-4xl mb-4">Trader<span className="font-bold italic">sim</span></label>
          </a>
          <div className="flex flex-col items-center mb-8">
            <img className="object-cover w-24 h-24 rounded-full" src={picture} alt="avatar" />
            <h4 className="mt-3 text-lg font-medium text-gray-200">{name}</h4>
            <p className="text-sm font-medium text-gray-400">{email}</p>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4">
            <a className={`flex items-center px-4 py-2 rounded-lg ${getStyle("/")}`} href="/">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mx-4 font-medium">Panel de control</span>
            </a>
            <a className={`flex items-center px-4 py-2 rounded-lg ${getStyle("/browse")}`} href="/browse">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.6569 16.6569M16.6569 16.6569C18.1046 15.2091 19 13.2091 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2091 19 15.2091 18.1046 16.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mx-4 font-medium">Explorar acciones</span>
            </a>
            <a className="flex items-center px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mx-4 font-medium">Mis acciones</span>
            </a>
            <a className="flex items-center px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10V8a2 2 0 0 1 2-2h2m-4 4c1.333 0 4-.8 4-4m-4 4v4m18-4V8a2 2 0 0 0-2-2h-2m4 4c-1.333 0-4-.8-4-4m4 4v2M7 6h10M3 14v2a2 2 0 0 0 2 2h2m-4-4c1.333 0 4 .8 4 4m0 0h4" />
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 15v3m0 3v-3m0 0h-3m3 0h3" />
              </svg>
              <span className="mx-4 font-medium">Compar dolares</span>
            </a>
          </div>
          {/* Logout button at the bottop */}
          <a className="absolute bottom-0 w-full flex items-center px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200" href="/api/auth/logout">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 16L21 12M21 12L17 8M21 12L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mx-4 font-medium">Cerrar sesión</span>
          </a>
        </aside>
      </div>
    </div>
  );
}
