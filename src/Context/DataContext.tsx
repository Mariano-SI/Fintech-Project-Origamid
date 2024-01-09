import React, { PropsWithChildren, createContext, useContext } from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContext{
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
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

export function DataContextProvider({children}: PropsWithChildren){

    const {data, loading, error} = useFetch<IVenda[]>('https://data.origamid.dev/vendas/');
    return ( 
    <DataContext.Provider value={{data, loading, error}}>
        {children}
    </DataContext.Provider>)
}