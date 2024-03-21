import React from 'react'
import { ArrowDropDown, Search } from "@material-ui/icons";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
    width: 100%;
    color: white;
    font-size: 14px;
    position: fixed;
    top: 0;
    z-index: 999;
    background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
`
const MainContainer = styled.div`
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 25px;
        margin-right: 40px;
    }
    span {
        margin-right: 20px;
        cursor: pointer;
    }
`
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
    }
    span {
        padding: 10px;
        cursor: pointer;
    }
`
const ProfileContainer = styled.div`
    .options {
        display: none;
        background-color: #0b0b0b;
        border-radius: 5px;
    }
    &:hover {
        .options {
            display: flex;
            flex-direction: column;
            position: absolute;
        }
    }
`
const sharedStyle = css`
    margin: 0px 15px;
    cursor: pointer;
`
const MySearch = styled(Search)`
    ${sharedStyle}
`

const MyArrowDropDown = styled(ArrowDropDown)`
    ${sharedStyle}
`

const Navbar = () => {
    return (
        <NavContainer>
            <MainContainer>
                <LeftContainer>
                    <h1 className='heading'>watchflix</h1>
                    <Link to="/" className="link">
                        <span>Homepage</span>    
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>    
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>    
                    </Link>      
                </LeftContainer>    
                <RightContainer>
                    <MySearch />
                    <img src="https://wallpapercave.com/wp/wp1917119.jpg" alt="user" />
                    <ProfileContainer>
                        <MyArrowDropDown />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </ProfileContainer>
                </RightContainer>    
            </MainContainer>            
        </NavContainer>
    )
}

export default Navbar
