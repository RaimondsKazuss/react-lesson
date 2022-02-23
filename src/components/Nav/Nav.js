import styled from 'styled-components'
import NavButton from "../NavButton/NavButton";

const NavMenu = styled.header`
    width: 100%;
    position: absolute;
    height: 5rem;
    border: 1px solid #ff0ff0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`

const Logo = styled.div`
    width: 4rem;
    height: 4rem;
    background: url('https://avatars.githubusercontent.com/u/19373870?v=4') center/contain;
`

const Nav = () => {
    return (
        <NavMenu>
            <Logo/>
            <NavButton title="Home"/>
            <NavButton title="All posts"/>
        </NavMenu>
    )
}

export default Nav;

