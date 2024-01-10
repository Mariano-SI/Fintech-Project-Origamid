import React from 'react'
import { useData } from '../../Context/DataContext'
import DateRange from '../DateRange/DateRange'
import MonthButtonsContainer from '../MonthButtonsContainer/MonthButtonsContainer'

function Header() {

  return (
    <header className='mb'>
      <div className='mb'>
        <DateRange/>
      </div>
      <MonthButtonsContainer/>
    </header>
  )
}

export default Header