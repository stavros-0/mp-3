import styled from "styled-components";
import Calculator from "./Calculator";

const ImageText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    border: 2px solid gray;
    background-color: white;
    border-radius: 5px;
    filter: drop-shadow(5px 5px);
    line-height: 1.8;
    margin-bottom: 5%;
    padding: 1.25%;
    color: black;
    
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; 
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 40%;
        height: auto;
        margin-right: 5%;
        max-width: 50%;
        filter: drop-shadow(5px 5px);
        margin-bottom: 2%;

    }
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const CalculatorContainer = styled.div`
    padding-top: 1%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    background-color: rgb(216, 212, 212);
    filter: drop-shadow(5px 5px);
    margin-bottom: 5%;
    min-height: 15%;
`;
export default function Projects() {
    return (
        <>
            <ImageText>
                <p>Here is a javascript project completed in September 2024.</p>
            </ImageText>
            <CalculatorContainer>
                <Calculator />
            </CalculatorContainer>
            <ImageText>
                <p>Another Project that I have started in September 2024, is a blog web app.</p>
                <p>This is a full stack project that uses python and Flask.</p>
                <p>So far the backend is more developed than the frontend. Users are able to make an account, follow other
                accounts,</p>
                <p>write their own blog, and explore blogs from the explore page.</p>
        </ImageText>
        <ProfileContainer>
            <img src={`public/Screenshot%202024-09-20%20at%2010.21.39%E2%80%AFAM.png`} alt={`Blog`}/>
        </ProfileContainer>
        </>
    )
}