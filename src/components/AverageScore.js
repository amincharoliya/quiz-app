import styled from 'styled-components'

const AverageScoreWrap = styled.div`
    background-color: var(--secondary-bg-color);
    border-radius: 5px;
    text-align: center;
    padding: 35px 15px;
    width: 100%;

    p {
        margin-bottom: 0;
    }
`
const Progress = styled.progress`
    height: 15px;
    border-radius: 20px;
    appearance: none;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    border: 0;${'' /*Firefox adds border */}

    &::-webkit-progress-bar {
        border-radius: 20px;
    }

    &::-webkit-progress-value {
        background-image: -webkit-linear-gradient(-45deg, transparent 33%, rgba(0, 0, 0, .1) 33%, rgba(0,0, 0, .1) 66%, transparent 66%), -webkit-linear-gradient(top, rgba(255, 255, 255, .25), rgba(0, 0, 0, .25)), -webkit-linear-gradient(left, #09c, #f44);
        border-radius: 20px;
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }
`

const AverageScore = ({ data }) => {

    const avgScore = () => {
        if(data?.length) {
            const totalScore = data.map( (item) =>  item.score).reduce((a, b) => a + b)
            return Math.round(totalScore / data.length);
        } else {
            return 0;
        }        
    };

    return(
        <AverageScoreWrap>
            <Progress max="10" value={avgScore()}></Progress>
            <p>Your Average score is <strong>{avgScore()}</strong> after <strong>{data ? data.length : '0'}</strong> attempt{data?.length > 1 ? "s" : ''}.</p>
        </AverageScoreWrap>
    )
}

export default AverageScore;