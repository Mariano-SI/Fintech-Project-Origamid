import React, { useState } from 'react'
import DateInput from '../DateInput/DateInput'

type Props = {}

function DateRange({}: Props) {

    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');



    return (
        <form onSubmit={(e)=> e.preventDefault()} className='box flex'>
            <DateInput 
                label="Início" 
                value={inicio} 
                onChange={({target})=> setInicio(target.value)}
            />
            <DateInput 
                label="Final" 
                value={final}
                onChange={({target})=> setFinal(target.value)}
            />

        </form>
    )
}

export default DateRange