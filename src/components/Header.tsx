import styled from 'styled-components';

// Styled header component with padding and a background color
const Headers = styled.header`
    padding: 1%;
    background-color: gray;  // Default background color

    @media screen and (max-width: 750px) {
        text-align: center;  // Center the text on smaller screens
    }
`;

// HeaderProps interface to accept optional subtitle and style properties
interface HeaderProps {
    subtitle?: string;  // Optional subtitle
    style?: React.CSSProperties;  // Optional inline styles
}

// Header component that displays a title and optional subtitle
export default function Header({ subtitle, style }: HeaderProps) {
    return (
        <Headers style={style}>  {/* Apply optional custom styles */}
            <h1>Stavros Constantinou</h1>  {/* Main heading */}
            <h2>{subtitle}</h2>  {/* Subtitle, if provided */}
        </Headers>
    );
}
