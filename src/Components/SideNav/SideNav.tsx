import React from 'react'
import { SideNavStyled } from './SideNav.style'
import resumeImage from '../../assets/icons/resumo.svg'
import salesIcon from '../../assets/icons/vendas.svg'
import webHooksIcon from '../../assets/icons/webhooks.svg'
import configIcon from '../../assets/icons/configuracoes.svg'
import contactIcon from '../../assets/icons/contato.svg'
import leaveIcon from '../../assets/icons/sair.svg'
import FintechSVG from '../../assets/FintechSVG'
import { NavLink } from 'react-router-dom'

function SideNav() {
  return (
    <SideNavStyled className='box bg-3'>
      <FintechSVG title='Fintech logo'/>
      <ul>
        <li>
          <span><img src={resumeImage} alt="" /></span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span><img src={salesIcon} alt="" /></span>
          <NavLink to="/sales">Vendas</NavLink>
        </li>
        <li>
          <span><img src={webHooksIcon} alt="" /></span>
          <a href="">WebHooks</a>
        </li>
        <li>
          <span><img src={configIcon} alt="" /></span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span><img src={contactIcon} alt="" /></span>
          <a href="">Contato</a>
        </li>
        <li>
          <span><img src={leaveIcon} alt="" /></span>
          <a href="">Sair</a>
        </li>
      </ul>
    </SideNavStyled>
  )
}

export default SideNav