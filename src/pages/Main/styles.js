import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Search = styled.div`
    display: flex;
    gap: 10px;
`;

export const Input = styled.input`
    border: none;
    height: 2.2rem;
    width: 20rem;
    border-radius: 20px;
    padding-left: 15px;
    background-color: ${(props) => props.color || props.theme.colors.gray300};

    &:focus {
        outline: none;
    }
`;

export const SearchFa = styled(FaSearch)`
    color: ${(props) => props.color || props.theme.colors.gray300};
    cursor: pointer;
    font-size: 2.2rem;

    &:Hover {
        color: ${(props) => props.color || props.theme.colors.gray700};
    }
`;

const floatAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const Location = styled(FaMapLocationDot)`
    color: ${(props) => props.color || props.theme.colors.gray300};
    font-size: 10rem;
    animation: ${floatAnimation} 2s ease-in-out infinite;
`;