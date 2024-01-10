import React from 'react'
import MonthButton from '../MonthButton/MonthButton'

type Props = {}

function MonthButtonsContainer({}: Props) {
  return (
    <div className='flex'>
        <MonthButton number={-2}/>
        <MonthButton number={-1}/>
        <MonthButton number={0}/>
    </div>
  )
}

export default MonthButtonsContainer