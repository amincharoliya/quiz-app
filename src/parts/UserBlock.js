import React from 'react';
import styled from 'styled-components';

import { connect } from "react-redux"
import { additionData } from "../redux/Data/data.actions"

import useLocalStorage from '../utils/useLocalStorage';
import HandleEnterKey from '../utils/HandleEnterKey';

import Popup from './Popup'

const UserBlockWrapper = styled.div`
    display: flex;
    align-items: center;

    .img-block {
        border: 2px solid var(--main-bg-color);
        border-radius: 100%;
        height: 40px;
        width: 40px;
        position: relative;

        > a {
            height: 40px;
            width: 40px;
        }

        svg {
            height: 45px;
            width: 45px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            
            g {
                fill: var(--main-text-color);
            }
        }
    }

    p {
        display: flex;
        align-items: center;
        margin: 0;
    }

    .pencil-icon {
        fill: var(--main-text-color);
        cursor: pointer;
        
        svg {
            width: 12px;
        }
    }

    .user-name {
        display: block;
        overflow: hidden;
        max-width: 90px;
        white-space: nowrap;
        text-overflow: ellipsis;
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
    right: 5px;
    top: 0;
    font-size: 18px;
    color: #fff;

    p {
        margin: 0;
        line-height: 1;
    }
`

const NoUsernameError = styled.span`
    display: block;
    margin-bottom: 15px;
`

const UserBlock = (props) => {
    const [popupVisible, setpopupVisible] = React.useState(false);
    const [NoUsername, setNoUsername] = React.useState('');
    const [username, setUsername ] = useLocalStorage('name', 'Guest', props.additionData, false);

    const setName = () => {
        if(username === ''){
            setNoUsername('Username can\'t be empty');
            return;
        }
        setNoUsername('');
        setpopupVisible(false);
    }

    React.useEffect( () => {
        setUsername(username);
    },[username, setUsername]);

    return(
        <UserBlockWrapper>
            <div className="img-block">
                <a href="/user">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"  preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M6441 10989 c-264 -24 -558 -98 -714 -182 -68 -36 -151 -107 -172 -147 -11 -20 -27 -31 -62 -39 -69 -18 -225 -93 -298 -145 -139 -100 -250 -257 -289 -411 -64 -255 -32 -776 90 -1440 19 -104 44 -244 55 -310 65 -375 247 -777 479 -1053 l60 -72 0 -161 c0 -144 -2 -162 -19 -177 -10 -10 -47 -51 -81 -92 -104 -124 -296 -258 -569 -397 -155 -78 -324 -147 -661 -268 -637 -229 -891 -355 -1071 -535 -88 -88 -140 -183 -184 -335 -116 -403 15 -766 490 -1358 432 -537 888 -910 1471 -1200 555 -277 936 -377 1504 -394 538 -16 974 66 1450 272 295 128 490 233 740 400 235 157 403 296 630 524 410 410 720 843 829 1153 86 247 79 485 -20 725 -39 94 -76 148 -152 223 -167 166 -438 300 -1047 520 -374 135 -515 192 -710 291 -245 123 -397 216 -503 307 -124 106 -188 153 -198 146 -5 -3 -9 66 -9 157 l0 161 52 57 c237 258 444 680 513 1046 9 50 23 104 30 120 51 116 117 377 144 570 92 644 -49 1166 -426 1574 -326 355 -800 519 -1352 470z m1646 -2206 c-2 -21 -4 -6 -4 32 0 39 2 55 4 38 2 -18 2 -50 0 -70z"/>
                        </g>
                    </svg>
                </a>
            </div>
            <p>
                <a href="/user" className="user-name">{props.data.name}</a>
                <span className="pencil-icon" title="Edit Your Name" onKeyUp={ (event) => HandleEnterKey(event, () => setpopupVisible(true))} onClick= { () => (setpopupVisible(true) )} tabIndex="0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
                </span>
            </p>
            <Popup popupVisible={popupVisible}>
                <Form onSubmit={ (e) => ( e.preventDefault() ) }>
                    <CloseButton onKeyUp={ (event) => HandleEnterKey(event, () => setpopupVisible(false))} onClick={()=>(setpopupVisible(false))} tabIndex="0"><p>x</p></CloseButton>
                    <p>Edit your name</p>
                    <input type="text" value={username} onChange={(e)=> (setUsername(e.target.value))} autoFocus />
                    {NoUsername ? <NoUsernameError>{NoUsername}</NoUsernameError> : '' }
                    <Button onKeyUp={ (event) => HandleEnterKey(event, () => setName())} onClick={ () => (setName())} tabIndex="0">Save</Button>
                </Form>
            </Popup>
        </UserBlockWrapper>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserBlock)
  