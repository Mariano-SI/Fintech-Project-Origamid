import React from 'react'
import { useData } from '../../Context/DataContext'
import DateRange from '../DateRange/DateRange'

function Header() {

  return (
    <div>
      <DateRange/>
    </div>
  )
}

export default Header