import React from 'react';
import styled,{ keyframes } from 'styled-components';

const slideIn = keyframes`
 0% { top: -100%; }
 100% { top: 0; }
`

const slideOut = keyframes`
 0% { top: 0; }
 100% { top: -100%; }
`

const Container = styled.section`
    position: fixed;
    inset: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    animation-name: ${slideIn};
    animation-duration: 0.3s;
    animation-iteration-count: 1;

    p {
        color: #f2f2f2;
    }

    &.slide-out {
        animation-name: ${slideOut};
        animation-duration: 0.3s;
        animation-iteration-count: 1;
    }
`



const Popup = (props) => {

    if(!props.popupVisible){
        return '';
    }

    return(
        
        <Container>
            <div className="wrapper">
                {props.children}
            </div>
        </Container>
    )
}

export default Popup;