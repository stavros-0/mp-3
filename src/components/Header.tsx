import styled from 'styled-components';

const Headers = styled.header`
    padding: 1%;
    background-color: gray;
    @media screen and (max-width: 750px) {
        text-align: center;
    }
    }
`;
interface HeaderProps {
    subtitle?: string;
    style?: React.CSSProperties;
}


export default function Header({ subtitle, style }: HeaderProps) {
    return (
        <Headers style={style}>
            <h1>Stavros Constantinou</h1>
            <h2>{subtitle}</h2>
        </Headers>
    )
}