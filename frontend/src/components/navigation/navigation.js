import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/icons'

function Navigation() {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt='' />
            <div className='text'>
                <h2>User</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((item) => {
                return (
                    <li key={item.id}>
                            {item.icon}
                            <span>{item.title}</span>
                    </li>
                )
            })}
        </ul>
        <div className='bottom-nav'>
            <li>
                {signout} Sign Out
            </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export default Navigation
