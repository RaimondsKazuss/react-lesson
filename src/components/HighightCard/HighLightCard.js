const HighLightCard = ({title, src}) => {
    return (
        <div>
            <img src={src} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}

export default HighLightCard