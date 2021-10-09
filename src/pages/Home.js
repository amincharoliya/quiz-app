import React from 'react'

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import HomeBanner from '../components/HomeBanner';
import FeatureBlock from '../components/FeatureBlock';
import QuizItemList from '../components/QuizItemList';

const Home = (props) => {
    return (
        <>
            <Header history={props.history} />
            <div className="content-part">
                <HomeBanner />
                <FeatureBlock/>
                <QuizItemList />
            </div>
            <Footer/>
        </>
    )
}


export default Home;