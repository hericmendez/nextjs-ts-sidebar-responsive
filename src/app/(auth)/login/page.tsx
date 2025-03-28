"use client"; // Certifique-se de que este comando está no início do arquivo

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Use `useEffect` para acessar o `document.cookie` no client-side

  interface LoginResponse {
    token: string;
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    try {
      const response = await axios.post<LoginResponse>("http://localhost:1337/login", {
        email: email,
        password: password,
      });
  
      const { token } = response.data;
  
      // Salva o token no localStorage
      localStorage.setItem("session", token);
  
      console.log("Token salvo no localStorage:", token);
  
      // Redireciona para a página protegida
      router.push('/')
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 mb-6 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Não tem uma conta?{" "}
          <Link className="text-blue-500 hover:underline" href="/register">
            Registre-se
          </Link>
        </p>
{/*         <p className="mt-2 text-xs text-center text-gray-500 break-all">
          Localstorage: {localStorage?.session || "Nenhum token encontrado"}
        </p> */}
      </div>
    </div>
  );
}