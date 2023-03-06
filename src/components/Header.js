import React, {useState} from 'react'
import styled from 'styled-components'


function Header() {

  const[burgerActive, setburgerActive ] = useState(false)

  return (
    <ConWrap>
        <a>
          <img src='/images/logo.svg' alt="Logo" />
        </a>
        <Menu>
              <li>
                <a href='#'>Modal S</a>
              </li>
              <li>
                <a href='#'>Modal 3</a>
              </li>
              <li>
                <a href='#'>Modal X</a>
              </li>
              <li>
                <a href='#'>Modal Y</a>
              </li>
        </Menu>
        <RightMenu>
              <li>
                <a href='#'>Shop</a>
              </li>
              <li>
                <a href='#'>Tesla Account</a>
              </li>
              <li>

                <a onClick={()=> setburgerActive(true) } href="#">
                  <img src='images/menu.svg' alt="menu" />
                </a>

              </li>
        </RightMenu>
        <BurgerNav show={burgerActive}>
          <li><a href='#' onClick={() =>setburgerActive(false)}>
            <img src='images/close.svg' alt='close' />
          </a></li>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-In</a></li>
          <li><a href='#'>Demo Drive</a></li>
          <li><a href='#'>Insurance</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Semi</a></li>
          <li><a href='#'>Charging</a></li>
          <li><a href='#'>Powerwall</a></li>
          <li><a href='#'>Commercial Energy</a></li>
          <li><a href='#'>Utilities</a></li>
          <li><a href='#'>Find Us</a></li>
          <li><a href='#'>Support</a></li>
          <li><a href='#'>Investor Relations</a></li>
        </BurgerNav>
    </ConWrap>
  )
}

export default Header

const ConWrap = styled.header`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0px;
  left: 0px;
  right: 0px;
  justify-content: space-between;
  z-index: 9;
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:767px) {
    display:none;
  }

  li {
    list-style: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;

    a {
      text-decoration: none;
      cursor: pointer;

      &:hover{
        opacity: 0.8;
      }
    }
  }
`

const RightMenu = styled(Menu)`
  display: flex;
  align-items: center;

  a {
    cursor: pointer;

    

  }
`

const BurgerNav = styled.ul `
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 280px;
    background: #fff;
    width: 100%;
    padding: 25px 35px;
    z-index: 91;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'  };
    transition: transform 0.2s ease-in;

    li {
      padding: 10px 0;
      list-style: none;
      border-bottom: 1px solid #ccc;

      a {
        text-decoration: none;
        img {
          margin-left: auto;
          display: block;
          cursor: pointer;
        }
      }

    }

`

