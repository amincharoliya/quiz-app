import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrapper = styled.div`
    background-color: var(--secondary-bg-color);
    padding: 15px;
    margin-bottom: 35px;
`

const Chart = (props) => {

    if(!props.data) {
        return null;
    }

    const DataKeys = Object.keys(props.data);
    const scores = DataKeys.map( (item)=>(props.data[item].score));
    const dates = DataKeys.map( (item)=>(props.data[item].date));
    const chartHeight = window.innerWidth < 768 ? 200 : 80;

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Score',
                data: scores,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    return(
        <ChartWrapper>
            <Bar data={data} height={chartHeight} />
        </ChartWrapper>
    )
}

export default Chart;