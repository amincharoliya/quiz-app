import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';


const CreditPage = styled.section`
    background-color: var(--main-bg-color);
    padding: 55px 15px;
    min-height: calc(100vh - 132px);
    display: flex;
    align-items: center;
    text-align: center;
`


const Credits = (props) => {
    return(
        <>
            <Header history={props.history}/>
            <CreditPage>
            <div className="wrapper">
                <p>Quiz data is pulled from <a href="https://opentdb.com/" target="_blank">https://opentdb.com/</a>, big thanks to the team for developing the awesome API. Read more about API <a href="https://opentdb.com/api_config.php" target="_blank">here</a>.</p>
            </div>
            </CreditPage>
            <Footer />
        </>
    )
}

export default Credits;