import styled from 'styled-components';
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
`;
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
`;
const HomeImages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 8%;
    
    img {
        width: 25%;
        height: auto;
        margin-right: 5%;
        margin-bottom: 3%;
        max-width: 90%;
        filter: drop-shadow(5px 5px);

    }
`;


export default function Home(){
    return (
        <>
        <ProfileContainer>
            <img src={`public/headshot2.png`} alt={"Stavros Headshot"}/>
            <ImageText>
                <p>Welcome to my personal website. I am a Senior at Boston University studying Computer Science.</p>
                <p>I am currently a Software Developer for Lemma Legal where I have been working for over a year.</p>
                <p>I am also a content creator for one of the largest Sports Cards creators on Instagram where I write
                    and create graphics for their newsletter.</p>
                <p>I enjoy creating projects that align with my hobbies. Currently, I am working on a blog web app that
                    will allow users to write about sports or business.</p>
                <p>I also enjoy travelling to Greece and Cyprus. I have family and friends there, and the beaches are
                    very nice.
                </p>
            </ImageText>
        </ProfileContainer>
            <HomeImages>
                <img src="public/csec.jpeg" alt="Cyber Security"/>
                <img src="public/slab.jpg" alt="Slabstox"/>
                <img src="public/Lemma%20Legal.svg" alt="Lemma Legal"/>
                <img src="public/cyprus.jpg" alt="Cyprus Beach"/>
                <img src="public/bu.webp" alt="Image of BU"/>
                <img src="public/liverpool.jpg" alt="Liverpool Logo"/>
            </HomeImages>

        </>
    )
}