import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    position: fixed;
    inset: 0;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
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