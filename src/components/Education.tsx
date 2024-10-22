import styled from 'styled-components';
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        max-width: 20%;
        height: auto;
        margin-right: 5%;
        filter: drop-shadow(5px 5px);
        margin-bottom: 5%;

    }

    @media (max-width: 750px) {
        flex-direction: column;
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

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`;
export default function Education() {
    return (
        <>
        <ProfileContainer>
            <img src={`public/bu.webp`} alt={`BU`}/>
            <ImageText>
                <p>Currently I am a senior at Boston University studying Computer Science</p>
                <p>The Computer Science classes that I am currently taking are CS 350, CS 357, and CS 391.</p>
                <p>Other classes that I have taken are CS 330, a course in Computer Algorithms.</p>
                <p>I have also taken CS 320, a course in functional programming. The language used in this class is
                    OCaml, and at the end of this class I created a language compiler.</p>
                <p>I have also taken CS 237, which is a class in Probabilities and Statistics in Computing.</p>
            </ImageText>
        </ProfileContainer>
        <ProfileContainer>
            <img src={`public/umass.jpg`} alt={`UMASS`}/>
            <ImageText>
                <p>For my freshman year I went to UMASS Amherst and I was a Finance Major. After taking some classes in Computer Science and doing research on the major I decided to switch my major.</p>
            </ImageText>
        </ProfileContainer>
        </>
    )
}