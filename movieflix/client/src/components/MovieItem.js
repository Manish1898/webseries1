import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemContainer = styled.div`
    width: 225px; 
    height: 120px;
    background-color: #0b0b0b;
    margin-right: 5px;
    overflow: hidden;
    cursor: pointer;
    color: white;
    &:hover {
        width: 325px;
        height: 300px;
        position: absolute;
        top: -150px;
        box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        border-radius: 5px;
        img {
            height: 140px;
        }
    }
`

const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Video = styled.video`
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`
const ItemInfo = styled.div`
        display: flex;
        flex-direction: column;
        padding: 5px;
`
const IconsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
.icon {
        border: 2px solid white;
        padding: 5px;
        border-radius: 50%;
        margin-right: 10px;
        font-size: 16px;
    }
        
`
const InfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
    .limit {
        border: 1px solid gray;
        padding: 1px 3px;
        margin: 0 10px;
    }
`
const Description = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`
const Genre = styled.div`
    font-size: 14px;
    color: lightgray;
`

const MovieItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() =>{
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item,{
                    headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjljN2Y5NWUxNTdjMWZmOGY0YTZmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDg3NDcwOSwiZXhwIjoxNzExMzA2NzA5fQ.3LOY71skl6Z3W5a4GbNCLF92o2VMX2XRrkvOoESU2eo" }
                })
                console.log(res.data)
                setMovie(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    },[item])

    return (
        <ItemContainer style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() =>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <MainImage src={movie.img} alt="trailer" />
            {isHovered && (
                <>
                    <Video src={movie.trailer} autoPlay loop />
                    <ItemInfo>
                        <IconsContainer>
                            <Link to={{ pathname: "/player", movie: movie }}>
                                <PlayArrow className="icon" />
                            </Link>
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </IconsContainer>
                        <InfoTop>
                            <span>{movie.duration}</span>
                            <span className="limit">{movie.ageLimit}+</span>
                            <span>{movie.year}</span>
                        </InfoTop>
                        <Description>{movie.desc}</Description>
                        <Genre>{movie.genre}</Genre>
                    </ItemInfo>
                </>
            )}
        </ItemContainer>
    )
}

export default MovieItem
