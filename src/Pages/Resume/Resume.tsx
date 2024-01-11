import React from 'react'
import { ResumeStyled } from './Resume.style'
import { useData } from '../../Context/DataContext'

function Resume() {

  const {data} = useData();
  
  const totalPrice = data && data.filter(({status})=> status !== 'falha').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  const totalReceived = data && data.filter(({status}) => status === 'pago').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});


  const totalInProcess = data && data.filter(({status}) => status === 'processando').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  if(!data) return null
  return (
    <ResumeStyled>
        <div className='resumeContainer flex mb'>
          <div className='box'>
            <h2>Vendas</h2>
            <span>{totalPrice}</span>  
          </div>
          <div className='box'>
            <h2>Recebido</h2>
            <span>{totalReceived}</span>  
          </div>
          <div className='box'>
            <h2>Processando</h2>
            <span>{totalInProcess}</span>  
          </div>
        </div>
        <div className='box'>
          Gráficos
        </div>
    </ResumeStyled>
  )
}

export default Resume