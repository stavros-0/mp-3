import styled from 'styled-components';

// Styled component for the profile section, aligning the image and text side by side
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 40%;          // Image takes up 40% of the container width
        height: auto;        // Keep aspect ratio of the image
        margin-right: 5%;    // Add margin between the image and text
        max-width: 50%;      // Ensure the image doesn't exceed 50% width
        filter: drop-shadow(5px 5px); // Add drop shadow effect to the image
        margin-bottom: 2%;   // Add space below the image
    }
`;

// Styled component for the text content beside the profile image
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

// Styled component for the section displaying additional images
const HomeImages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;  // Align images to the right
    flex-wrap: wrap;            // Wrap images to the next line if there's no space
    margin-top: 8%;             // Add space above the images

    img {
        width: 25%;             // Set width of each image to 25% of the container
        height: auto;           // Keep aspect ratio of the image
        margin-right: 5%;       // Add space between the images
        margin-bottom: 3%;      // Add space below the images
        max-width: 90%;         // Ensure the image width doesn't exceed 90% of the container
        filter: drop-shadow(5px 5px); // Add drop shadow effect to the images
    }
`;

// Home component with profile section and images
export default function Home() {
    return (
        <>
            {/* Profile section containing the headshot and description */}
            <ProfileContainer>
                <img src={`headshot2.png`} alt={"Stavros Headshot"} />
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

            {/* Section displaying additional images */}
            <HomeImages>
                <img src="csec.jpeg" alt="Cyber Security" />
                <img src="slab.jpg" alt="Slabstox" />
                <img src="Lemma%20Legal.svg" alt="Lemma Legal" />
                <img src="cyprus.jpg" alt="Cyprus Beach" />
                <img src="bu.webp" alt="Image of BU" />
                <img src="liverpool.jpg" alt="Liverpool Logo" />
            </HomeImages>
        </>
    );
}
