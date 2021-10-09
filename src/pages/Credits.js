import Header from '../parts/Header';
import Footer from '../parts/Footer';
import styled from 'styled-components';


const Container = styled.section`
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
            <Container>
                <div className="wrapper">
                    <p>Quiz data is pulled from <a href="https://opentdb.com/" target="_blank" rel="noreferrer">https://opentdb.com/</a>, big thanks to the team for developing the awesome API. Read more about API <a href="https://opentdb.com/api_config.php" target="_blank" rel="noreferrer">here</a>.</p>
                    <p>Website Favicon used from <a href="https://www.freepik.com" title="Freepik">Freepik</a></p>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Credits;