import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContext{
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    final: string;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}

interface IVenda{
    id: string;
    nome:string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "boleto" | "pix" | "cartao";
    parcelas: number | null;
    data: string;
}

const DataContext = createContext<IDataContext | null>(null);

export function useData(){
    const context = useContext(DataContext);
    if(!context){
        throw new Error("useData precisa estar dentro de DataContextProvider");
    }

    return context;
}

function getDate(n: number){
    const date = new Date();
    date.setDate(date.getDate() - n)
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(2, "0");
    
    return `${year}-${month}-${day}`;
}


export function DataContextProvider({children}: PropsWithChildren){

    const [inicio, setInicio] = useState(getDate(30));
    const [final, setFinal] = useState(getDate(0));

    const {data, loading, error} = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);

    return ( 
    <DataContext.Provider value={{data, loading, error, inicio, setInicio, final, setFinal}}>
        {children}
    </DataContext.Provider>)
}