
const ContentContainer = (props) => {
    //destructuring
    const {children} = props


    return (
        <div className="content-wrapper">
           {children} 
        </div>
    )
}

export default ContentContainer


