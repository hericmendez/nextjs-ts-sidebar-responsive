"use client";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import SideNav from "@/components/SideNav";
import PageWrapper from "@/components/PageWrapper";
import MarginWidthWrapper from "@/components/MarginWidthWrapper";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactNode, FC } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("session");

    if (!token) {
      console.log("Token ausente. Redirecionando para login.");
      router.push("/login");
    } else {
      console.log("Token encontrado. Acesso permitido.");
      // Adicione lógica de validação adicional, se necessário
    }
  }, []);
  return (
    <ThemeProvider>
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
