import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function Home() {
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar entre mostrar/ocultar a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('./imagem2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-sm sm:max-w-xs">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                className="mt-1 block w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-600"
                placeholder="Digite seu email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
              
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"} 
                id="password"
                className="mt-1 block w-full pl-10 pr-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-600"
                placeholder="Digite sua senha"
              />
              
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-800">
          Não tem uma conta?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
