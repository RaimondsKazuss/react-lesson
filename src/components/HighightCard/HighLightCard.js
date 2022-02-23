import styled from 'styled-components'

const Card = styled.div`
    width: 19rem;
    height: 19rem;
    border: 1px solid #ff0ff0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
    }

    h3 {
        text-align: center;
        color: #111111;
    }
`

const HighLightCard = ({title, src}) => {

    return (
        <Card>
            <img src={src} alt=""/>
            <h3>{title}</h3>
        </Card>
    )
}

export default HighLightCard


