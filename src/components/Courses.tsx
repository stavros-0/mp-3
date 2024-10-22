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
export default function Courses(){
    return(
        <>
        <ProfileContainer>
            <img src={`public/webdev.webp`} alt={`CS 391`}/>
            <ImageText>
                <p>CS 391 is a web development class that teaches a variety of programming languages for web
                    development.</p>
                <p>Languages that are taught in this class include HTML, JS, CSS, React, and Node.js</p>
            </ImageText>
        </ProfileContainer>
        <ProfileContainer>
            <img src={`public/system.png`} alt={`CS 350`}/>
            <ImageText>
                <p>CS 350 is a course on distributed system and the coding assignments are in C. According to the
                    description of the class, The course discusses system design principles, performance analysis,
                    communication and synchronization primitives, concurrency control, database transactions, and data
                    consistency.
                </p>
            </ImageText>
        </ProfileContainer>
            <ProfileContainer>
                <img src={`public/infosec.avif`} alt={`CS 357`}/>
                <ImageText>
                    <p>CS 357 is a course on information security. According to the description of the class, The course
                        discusses basic concepts needed for understanding information security. Discusses
                        vulnerabilities,
                        design principles, basic algorithms, security definitions, and analytical methods. Covers system
                        security, network security, web security, cryptography, and data privacy.</p>
                </ImageText>
            </ProfileContainer>
        </>
    )
}