import styled from 'styled-components';

const Footers = styled.footer`
    background: rgb(216, 212, 212);
    padding: 2px;
    margin-top: 20px;
    color:black;

`;

export default function Footer() {
    return (
        <Footers>
            <p>All rights reserved: <a href="">Credits</a> &#169;</p>
        </Footers>
    )
}