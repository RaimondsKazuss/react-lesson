import React, {useState} from "react"

const NavButton = ({title}) => {
    //react state hook
    const [isOpen, setIsOpen] = useState(false)


    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div onClick={clickHandler}>
            <span>{title}</span>
            { isOpen && (<div>this is a dropdown</div>)}
        </div>
    )
}

export default NavButton