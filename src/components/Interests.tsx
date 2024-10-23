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

`;
export default function Interests() {
    return(
        <>
            <ProfileContainer>
                <img src={`public/csec.jpeg`} alt={`Cyber Security`}/>
                <ImageText>
                    <p>One area that I would like to explore after my undergraduate degree is Cyber Security. I think it
                        is an important field to work in for the future, and ethical hacking is something that interests
                        me and I would like to apply my skills to defend against cyber crime.</p>
                </ImageText>
            </ProfileContainer>
            <ProfileContainer>
                <img src={`public/software%20eng.jpg`} alt={`Software Engineering`}/>
                <ImageText>
                    <p>Another area that I would like to explore after college is Software Engineering. I like working
                        on APIs and doing backend development.</p>
            </ImageText>
        </ProfileContainer>
</>
)
}