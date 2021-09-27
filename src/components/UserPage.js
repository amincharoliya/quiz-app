import React from 'react';
import styled from 'styled-components';

import { connect } from "react-redux"
import { additionData } from "../redux/Data/data.actions"

import Header from './Header'
import Footer from './Footer'
import Popup from './Popup'

const Container = styled.section`
    background-color: var(--main-bg-color);
    padding: 55px 15px;
    min-height: calc(100vh - 132px);
    display: flex;

    .pencil-icon {
        fill: var(--main-text-color);
        cursor: pointer;
        position: relative;
        top: 4px;
        right: -10px;
        
        svg {
            width: 15px;
        }
    }

    h2 {
        font-size: 24px;
        text-align: center;
    }
`

const Form = styled.div`
    max-width: 450px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;

    p {
        font-size: 18px;
        margin-bottom: 15px;
    }

    input {
        border: 0;
        width: 100%;
        padding: 15px 10px;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 18px;
        outline: none;
    }

    button {
        width: 100%;
    }
`

const Button = styled.span`
    color: #fff !important;
    text-decoration: none;
    background-color: #f53838;
    border-radius: 5px;
    padding: 15px 20px;
    float: left;
    min-width: 140px;
    box-shadow: 0 5px 10px rgb(245 56 56 / 27%);
    transition: all ease 0.3s;
    width: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
        box-shadow: inset 0 0 100px rgba(0,0,0,0.2), 0 5px 10px rgb(245 56 56 / 27%);
    }
`

const CloseButton = styled.span`
    position: absolute;
    right: 0;
    top:0;
    font-size: 18px;
    color: #fff;
`

const UserPage = (props) => {
    const [username, setUsername] = React.useState('');
    const [popupVisible, setpopupVisible] = React.useState(false);
    const localUserName = window.localStorage.getItem('name');

    const setName = () => {
        props.additionData(username);
        window.localStorage.setItem('name',username);
        setpopupVisible(false);
    }

    React.useEffect( () => {
        if(localUserName === null) {
            setUsername('Guest');
            window.localStorage.setItem('name','Guest');
            props.additionData('Guest');
        } else {
            setUsername(localUserName);
            window.localStorage.setItem('name',localUserName);
            props.additionData(localUserName);
        }
    },[])

    return(
        <>
            <Header />
            <Container>
                <div className="wrapper">
                    <p>
                        Hello, {username}
                        <span className="pencil-icon" title="Edit Your Name" onClick= { () => (setpopupVisible(true) )}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
                        </span>
                    </p>
                    <Popup popupVisible={popupVisible}>
                        <Form>
                            <CloseButton onClick={()=>(setpopupVisible(false))}>x</CloseButton>
                            <p>Edit your name</p>
                            <input type="text" value={username} onChange={(e)=> (setUsername(e.target.value))} autoFocus />
                            <Button onClick={ () => (setName())}>Save</Button>
                        </Form>
                    </Popup>

                    <h2>Recent Taken Quizzes</h2>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

const mapStateToProps = state => {
    return {
      data: state.data.quizzes,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      additionData: (payload) => dispatch(additionData(payload))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
  