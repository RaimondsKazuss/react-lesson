const SomeComp = (props) => {
    const {children} = props
    return (
        <div className="childComp">
            {children}
        </div>
    )
}

export default SomeComp;