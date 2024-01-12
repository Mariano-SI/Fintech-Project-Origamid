import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { ISale } from '../../Context/DataContext';
import Loading from '../../Components/Loading/Loading';

type ISaleWithoutDate = Omit<ISale, 'data'>

function Sale() {

  const {id} = useParams();
  const {data, loading} = useFetch<ISaleWithoutDate>(`https://data.origamid.dev/vendas/${id}`)


  if(loading) return <Loading/>
  if(!data) return null;
  return (
    <div>
        <div className='box mb'>ID: {data.id}</div>
        <div className='box mb'>Nome: {data.nome}</div>
        <div className='box mb'>Preço: {data.preco.toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'})}</div>
        <div className='box mb'>Status: {data.status}</div>
        <div className='box mb'>Pagamento: {data.pagamento}</div>
    </div>
  )
}

export default Sale