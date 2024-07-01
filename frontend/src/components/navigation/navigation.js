import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'

function navigation() {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt='' />
            <div className='text'>
                <h2>User</h2>
                <p>Your Money</p>
            </div>
        </div>
        <div>
        <ul className='menu-items'>

        </ul>
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

export default navigation
