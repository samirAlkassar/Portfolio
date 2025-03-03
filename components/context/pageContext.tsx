"use client";   

import { createContext, useContext } from "react";

const PageContext = createContext<Value|null>(null);

export const usePageContext = () => {
    const context  = useContext(PageContext);
    if (!context) {
        throw new Error("usePageContext must be used within a PageContextProvider");
    }
    return context;
}

const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 160; // Adjust for navbar height
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
    }
  };
type Value = {
    handleScroll: (id:string) => void;
}

const value: Value = {
    handleScroll
}

export const PageContextProvider = ({children}:{children: React.ReactNode}) => {
    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )
}