import React from 'react'
import { MonthButtonStyled } from './MonthButton.style';
import { useData } from '../../Context/DataContext';

interface IMonthButton {
    number: number;
}

function monthName(n:number){
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    return new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(date); 
}

function MonthButton({number}: IMonthButton) {

    const {setInicio, setFinal} = useData();

    function formatDate(date: Date){
        
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear());
        
        return `${year}-${month}-${day}`;
    }

    function setMonth(n: number){
        const date = new Date();
        date.setMonth(date.getMonth() + n);

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        setInicio(formatDate(firstDay));
        setFinal(formatDate(lastDay));      
    }  

    return (
        <MonthButtonStyled onClick={() => setMonth(number)}>
            {monthName(number)}
        </MonthButtonStyled>
    )
}

export default MonthButton