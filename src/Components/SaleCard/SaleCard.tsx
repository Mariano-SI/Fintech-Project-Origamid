import React from 'react'
import { ISale } from '../../Context/DataContext'
import { SaleCardStyled } from './SaleCard.style'

const SaleCard = ({sale}: {sale: ISale}) => {

    const {id, nome, preco} = sale;
  return (
    <SaleCardStyled className='box'>
        <a href="" className='saleCardLink'>{id}</a>
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