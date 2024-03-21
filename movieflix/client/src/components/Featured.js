import { useEffect, useState } from "react";
import axios from "axios";
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const FeaturedContainer = styled.div`
    height: 90vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    img {
        width: 400px;
    }
    .desc {
        margin: 20px 0px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
`
const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background: ${props => props.primary ? "white" : "#0b0b0b"};
    color: ${props => props.primary ? "#0b0b0b" : "white"};
    span {
        margin-left: 5px;
    }
`

const CategoryContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 50px;
    font-size: 30px;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;
    select {
        cursor: pointer;
        background-color: red;
        border: 1px solid white;
        color: black;
        margin-left: 20px;
        padding: 5px;
    }
`

const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    const navigate = useNavigate();
    useEffect(() =>{
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}` ,{
                    headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjljN2Y5NWUxNTdjMWZmOGY0YTZmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDg3NDcwOSwiZXhwIjoxNzExMzA2NzA5fQ.3LOY71skl6Z3W5a4GbNCLF92o2VMX2XRrkvOoESU2eo" }
                })
                console.log(res.data)
                setContent(res.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    },[type])

    return (
        <FeaturedContainer>
            {type && (
                <CategoryContainer>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="romantic">Romance</option>
                        <option value="horror">Horror</option>
                        <option value="sci-fi">Sci-fi</option>
                    </select>
                </CategoryContainer>
            )}
            <img src="https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149921723.jpg?size=626&ext=jpg&ga=GA1.1.1608785215.1710959824&semt=ais" alt="main" />
        
            <InfoContainer>
                
                <span className="desc">
                    {content.desc}
                </span>
                <ButtonContainer>
                    <StyledButton primary onClick={() => navigate("/player")}>
                        <PlayArrow />
                        <span>Play</span>  
                    </StyledButton>
                    <StyledButton>
                        <InfoOutlined />
                        <span>Info</span>  
                    </StyledButton>
                </ButtonContainer>
            </InfoContainer>
        </FeaturedContainer>
    )
}

export default Featured
