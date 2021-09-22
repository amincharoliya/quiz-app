import React from 'react'

import Header from './Header';
import HomeBanner from './HomeBanner';
import FeatureBlock from './FeatureBlock';
import QuizItemList from './QuizItemList';
import Footer from './Footer';

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