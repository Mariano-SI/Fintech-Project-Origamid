import React, { useEffect, useState } from 'react'
import { useData } from '../../Context/DataContext'
import DateRange from '../DateRange/DateRange'
import MonthButtonsContainer from '../MonthButtonsContainer/MonthButtonsContainer'
import { HeaderStyled } from './Header.style';
import { useLocation } from 'react-router-dom';

function Header() {

  const [title, setTitle] = useState('Resumo');

  const location = useLocation();

  useEffect(()=>{
    switch(location.pathname){
      case "/":
        setTitle("Resumo");
        document.title = "Fintech | Resumo";
        break;
      case "/sales":
        setTitle("Vendas");
        document.title = "Fintech | Vendas";
        break;
    }
  }, [location.pathname])


  return (
    <HeaderStyled className='mb'>
      <div className='mb dateRangeContainer'>
        <DateRange/>
        <h1 className='box bg-3'>{title}</h1>
      </div>
      <MonthButtonsContainer/>
    </HeaderStyled>
  )
}

export default Header