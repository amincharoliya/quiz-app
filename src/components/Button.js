import styled from 'styled-components';

const CTA = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    text-decoration: none;
    background-color: #f53838;
    border-radius: 5px;
    padding: 12px 20px;
    float: left;
    min-width: 140px;
    max-width: 200px;
    box-shadow: 0 5px 10px rgb(245 56 56 / 27%);
    transition: all ease 0.3s;
    border: 0;
    cursor: pointer;

    span {
        font-size: 24px;
        margin-left: 10px;
        line-height: 1;
    }

    &:hover {
        box-shadow: inset 0 0 100px rgba(0,0,0,0.2), 0 5px 10px rgb(245 56 56 / 27%);
    }
`
const Button = ({Label = 'Button'}) => {
    return(
        <CTA>
            {Label}
        </CTA>
    )
}

export default Button;