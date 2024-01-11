import React from 'react'
import { SalesStyled } from './Sales.style'
import { useData } from '../../Context/DataContext'
import SaleCard from '../../Components/SaleCard/SaleCard';

const Sales = () => {

  const {data} = useData();

  if(!data) return null;

  

  return (
    <SalesStyled>
        {data.map((sale)=>(
            <li key={sale.id}>
                <SaleCard sale={sale} />
            </li>
        ))}
    </SalesStyled>
  )
}

export default Sales