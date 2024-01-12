import React from 'react'
import { ISale } from '../../Context/DataContext'
import { SaleCardStyled } from './SaleCard.style'
import { NavLink } from 'react-router-dom';

const SaleCard = ({sale}: {sale: ISale}) => {

  const {id, nome, preco} = sale;
  return (
    <SaleCardStyled className='box'>
        <NavLink className='saleCardLink' to={`/sales/${sale.id}`}>{id}</NavLink>
        <div>
            {nome}
        </div>
        <div className='salePrice'>
            {preco.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}
        </div>
    </SaleCardStyled>
  )
}

export default SaleCard