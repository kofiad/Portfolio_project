import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';


function Orb() {
    const size = useWindowSize();
    console.log(size);

    const moveOrb = keyframes`
      0%{
        transform: translate(0, 0);
      }
      50%{
        transform: translate(${useWindowSize.width}, ${height});
      }
      100%{
        transform: translate(0, 0);
      }


    `

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-left: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(100px);
        animation: ${moveOrb} 1s linear infinite;
    `;

  return (
    <OrbStyled></OrbStyled>
  )
}

export default Orb
