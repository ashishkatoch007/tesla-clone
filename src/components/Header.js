import React from 'react'
import styled from 'styled-components'


function Header() {
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

                <a href="#">
                  <img src='images/menu.svg' alt="menu" />
                </a>

              </li>
        </RightMenu>
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

