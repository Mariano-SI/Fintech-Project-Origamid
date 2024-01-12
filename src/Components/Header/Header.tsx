import React, { useState } from 'react'
import { useData } from '../../Context/DataContext'
import DateRange from '../DateRange/DateRange'
import MonthButtonsContainer from '../MonthButtonsContainer/MonthButtonsContainer'
import { HeaderStyled } from './Header.style';

function Header() {

  const [title, setTitle] = useState('Resumo');

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