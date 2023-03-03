import React from 'react'
import styled from 'styled-components'
import Section from './Section';




function Home() {


  return (
    
    
        <Wrapper>
            <Section 
            title= "Model S"
            description= "Order Online for Touchless Delivery"
            secBgImage= "model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title= "Model X"
            description= "Order Online for Touchless Delivery"
            secBgImage= "model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title= "Model 3"
            description= "Order Online for Touchless Delivery"
            secBgImage= "model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title= "Model Y"
            description= "Order Online for Touchless Delivery"
            secBgImage= "model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title= "Lowest Cost Solar Panels in America"
            description= "Money Back guaranty"
            secBgImage="Solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
             <Section 
            title= "Solar Roof"
            description= "Produce Clean Energy From Your Roof"
            secBgImage="Solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title= "Accessories"
           
            secBgImage="accessories.jpg"
            leftBtnText="Order Now"
            />
        </Wrapper>
        

  )
}

export default Home

const Wrapper = styled.main`
  background: transparent;
  height: 100vh;
  width: 100vw;
`;