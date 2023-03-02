import React from 'react';
import styled from 'styled-components';
function Section({title,description,leftBtnText,rightBtnText, secBgImage}) {
    // console.log(props)
  return (
    <>
      <Wrap bgImage={secBgImage}>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText> 
        <ButtonsWrap>
          <ButtonGroup>
                <LeftButton>
                   {leftBtnText} 
                </LeftButton>
                <RightButton>
                   {rightBtnText}
                </RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg"/>
        </ButtonsWrap>
      </Wrap>
    </>
  )
}

export default Section

const Wrap = styled.section`
    width: 100vh;
    height: 100vh;
    background: url('/images/model-3.jpg') no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;
`

const LeftButton = styled.div`
    background: rgba(23,26,32,0.8);
    line-height: 40px;
    max-width: 250px;
    width: 100%;
    border-radius: 40px;
    color: #fff;
    text-align:center;
    margin: 10px;

`

const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.8;
    color: rgba(23,26,32,0.8);
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    margin: 0 auto 20px;
    display: block;
    animation: animateDown infinite 1s
`

const ButtonsWrap = styled.div`

`