import React from 'react'
import { GraphicsStyled } from './Graphics.style'
import { ISale } from '../../Context/DataContext'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface DiarySaleData{
    date: string;
    pago: number;
    processando: number;
    falha: number;
}

function formateData(sales:ISale[] ): DiarySaleData[]{

    const days = sales.reduce((acc : {[key: string]: DiarySaleData}, actualItem)=>{
        const day = actualItem.data.split(' ')[0];

        if(!acc[day]){
            acc[day] = {
                date: day,
                pago: 0,
                falha: 0,
                processando: 0,
            };
        }

        acc[day][actualItem.status] += actualItem.preco;
        
        return acc;
    }, {})

   
    return Object.values(days);
}

function Graphics({data}: {data: ISale[]}) {

  const graphicData = formateData(data);
  return (
    <GraphicsStyled>

        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={graphicData}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="pago" stroke='#A36AF9' strokeWidth={3}/>
                <Line type="monotone" dataKey="processando" stroke='#FBCB21' strokeWidth={3}/>
                <Line type="monotone" dataKey="falha" stroke='#000' strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
        
    </GraphicsStyled>
  )
}

export default Graphics;