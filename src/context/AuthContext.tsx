"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  email: string;
  token: string;
  role: "admin" | "user";
}

interface AuthContextProps {
  user: User | null;
  login: (identifier: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
    role: "admin" | "user"
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Sincronizar o estado do usuário com os dados armazenados
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const decoded = JSON.parse(atob(parsedUser.token)); // Decodificar o token
        setUser({ ...parsedUser, role: decoded.role }); // Garantir que role está presente
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        localStorage.removeItem("user");
        router.push("/login");
      }
    }
  }, []);

  const login = async (identifier: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find(
      (user: any) =>
        (user.email === identifier || user.username === identifier) &&
        user.password === password
    );

    if (existingUser) {
      const token = btoa(
        JSON.stringify({
          username: existingUser.username,
          role: existingUser.role,
        })
      );

      const loggedUser = { ...existingUser, token };
      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      router.push("/"); // Redirecionar para a página inicial após login
    } else {
      alert("Credenciais inválidas");
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string,
    role: "admin" | "user"
  ) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (
      users.some(
        (user: any) => user.email === email || user.username === username
      )
    ) {
      alert("Username ou email já cadastrados");
      return;
    }

    const newUser = { username, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro bem-sucedido! Agora você pode fazer login.");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login"); // Redirecionar para a página de login
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export default AuthContext;
