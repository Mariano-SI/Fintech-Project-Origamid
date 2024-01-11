import React from 'react'
import MonthButton from '../MonthButton/MonthButton'


function MonthButtonsContainer() {
  return (
    <div className='flex'>
        <MonthButton number={-3}/>
        <MonthButton number={-2}/>
        <MonthButton number={-1}/>
        <MonthButton number={0}/>
    </div>
  )
}

export default MonthButtonsContainer