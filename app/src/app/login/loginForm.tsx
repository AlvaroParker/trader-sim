"use client"

import { useState } from "react"

export default function LoginForm() {
  const [error, _setError] = useState<string>("")

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
          <label className="font-light text-4xl mb-4">Trader<span className="font-bold italic">sim</span></label>
          <p className="text-center mb-4">
            Plataforma para simulación de trading en tiempo real.
          </p>
          <a
            href="/api/auth/microsoft/login"
            className="w-full max-w-xs my-5 font-bold shadow-sm rounded-lg py-3 bg-indigo-500 text-gray-100 flex items-center justify-center focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
            <div className="bg-indigo-500 p-1 rounded-full">
              <svg width="16px" height="16px" viewBox="0 0 32 32" version="1.1">
                <g>
                  <polygon fill="#F1511B" points="15.3330475 15.3330475 0 15.3330475 0 0 15.3330475 0"></polygon>
                  <polygon fill="#80CC28" points="32 15.3330475 16.7921075 15.3330475 16.7921075 0 32 0"></polygon>
                  <polygon fill="#00ADEF" points="15.331597 32 0 32 0 16.792095 15.331597 16.792095"></polygon>
                  <polygon fill="#FBBC09" points="32 32 16.7921075 32 16.7921075 16.792095 32 16.792095"></polygon>
                </g>
              </svg>
            </div>
            <span className="ml-2">Continuar con Microsoft</span>
          </a>

          <a
            href="/api/auth/google/login"
            className="w-full max-w-xs my-5 font-bold shadow-sm rounded-lg py-3 bg-indigo-500 text-gray-100 flex items-center justify-center focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
            <div className="bg-white p-1 rounded-full">
              <svg className="w-4" viewBox="0 0 533.5 544.3">
                <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
              </svg>
            </div>
            <span className="ml-2">Continuar con Google</span>
          </a>
        </div>
      </div>
    </>
  )
}
