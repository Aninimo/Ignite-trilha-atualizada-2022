import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header(){
  return(
    <HeaderContainer>
      <span>
        <img src="https://raw.githubusercontent.com/rocketseat-education/02-ignite-timer/main/src/assets/logo-ignite.svg" alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
