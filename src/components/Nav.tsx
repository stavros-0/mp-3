import {Link} from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    background: rgb(216, 212, 212);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 1%;

    ul {
        list-style: none;
        padding-left: 0;
        margin: 0 auto;
        width: 100%;
    }

    li {
        padding: 10% 15%;
        color: black;
        border: solid .5px black;
        border-radius: 1%;
        margin: 17%;
        text-align: center;
        background-color: white;
        

    }

    a {
        text-decoration: none;
        color: black;
        font-size: calc(6px + 1vw);
        text-align: center;
    }
    @media (max-width: 750px) {
            width: 100%;

        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
        }

        li {
            margin: 0 1%;
            padding: 1% 2%;
            text-align: center;
            font-size: medium;
        }

        a {
            font-size: calc(2px + 1vw);
        }
    }
`;

export default function Nav(){
    return (

            <Navigation>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/Books`}>Books</Link>
                    </li>
                    <li>
                        <Link to={`/Projects`}>Projects</Link>
                    </li>
                    <li>
                        <Link to={`/Courses`}>Courses</Link>
                    </li>
                    <li>
                        <Link to={`/Education`}>Education</Link>
                    </li>
                    <li>
                        <Link to={`/Experiences`}>Experiences</Link>
                    </li>
                    <li>
                        <Link to={`/Interests`}>Interests</Link>
                    </li>
                </ul>
            </Navigation>

    )
}