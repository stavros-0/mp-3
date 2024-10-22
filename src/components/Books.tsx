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

export default function Books() {
    return (
        <>

            <ProfileContainer>
                <img src={`public/snowball.jpg`} alt={"Snowball"}/>
                <ImageText>
                    <p>Snowball by Alice Shroeder is an 832 page book that goes through the life of Warren Buffett.</p>
                    <p>Buffett is regarded as the best investor by most people interested in the financial world.</p>
                    <p>He studied under the legendary Benjamin Graham that is known for his value investing
                        strategy.</p>
                    <p>Overall this book takes a deep dive in some of Buffett's successes and failures and allows the
                        reader
                        to learn from his life.
                    </p>
                </ImageText>
            </ProfileContainer>
            <ProfileContainer>
                <img src={`public/investor.webp`} alt={"The Intelligent Investor"}/>
                <ImageText>
                    <p>The Intelligent Investor is another long book that goes into detail the investing strategy of
                        Benjamin Graham.</p>
                    <p>Benjamin Graham became one of the most well known investors during the Great Depression.</p>
                    <p>His investment style is a reflection of the difficult time period that he lived through.</p>
                    <p>After the Great Depression and the crash of the stock market, people lost their trust in the
                        stock
                        market.</p>
                    <p>However, Graham was able to find a bullet proof investment principle that buys companies for less
                        than what they were worth.
                    </p>
                </ImageText>
            </ProfileContainer>
            <ProfileContainer>
                <img src={`public/door.png`} alt={"Third Door"}/>
                <ImageText>
                    <p>Third Door is about the principle that everything in life has 3 doors. The first being the most
                        conventional door where everyone lines up and waits outside of.</p>
                    <p>The second door is for the VIPs and people that have the connections already to help them past
                        the
                        ordinary crowd looking for success.</p>
                    <p>The third and last door is for the people that take the risk to leave the first two doors and to
                        find
                        another way into the doors of success.</p>
                    <p>In the book the author interviews major celebrities like Bill Gates, Steve Wozniak, Maya Angelou,
                        Larry King, Steven Speilberg, and much more.
                    </p>
                </ImageText>
            </ProfileContainer>
        </>
    )
}