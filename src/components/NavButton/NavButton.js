import React, {useState} from "react"
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    min-width: 6rem;
    min-height: 2rem;
    background: #f1f1f0;
    padding: 0.5rem;
    margin: 0 1rem;
`

const DropDown = styled.div`
    position: absolute;
    top: 3.5rem;
    min-width: 6rem;
    height: 6rem;
    background: #f1f1f0;
`

const NavButton = ({title}) => {
    const [isOpen, setIsOpen] = useState(false)


    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Button onClick={clickHandler}>
            <span>{title}</span>
            { isOpen && (<DropDown>this is a dropdown</DropDown>)}
        </Button>
    )
}

export default NavButton



