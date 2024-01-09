import React, { ComponentProps } from 'react'
import { CSSProperties } from 'styled-components';
import { DateInputStyled } from './DateInput.style';

interface IDateInput extends ComponentProps<'input'> {
    label: string;
}

function DateInput({label, ...props}: IDateInput) {
  return (
    <DateInputStyled>
        <label className='generalStyle label' htmlFor={label}>{label}</label>
        <input className='generalStyle input' type="date" id={label} name={label} {...props}/>
    </DateInputStyled>
  )
}

export default DateInput