"use client";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import HeaderMobile from "./HeaderMobile";
import SideNav from "../components/SideNav";
import PageWrapper from "../components/PageWrapper";
import MarginWidthWrapper from "./MarginWidthWrapper";
import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { ReactNode, FC } from "react";


const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (


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

  );
};

export default AppLayout;
