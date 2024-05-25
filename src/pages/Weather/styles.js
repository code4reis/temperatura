import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 400px) {
        width: 100%;
        height: 100%;
    }
`;

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled(BiLoaderAlt)`
    animation: ${rotate} 2s linear infinite;
    font-size: 10rem;
    color: ${(props) => props.color || props.theme.colors.gray300};
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 35rem;
    padding: 20px;
`;

export const DivII = styled.div`
    display: flex;
    gap: 20px;

    @media screen and (max-width: 400px) {
        box-sizing: border-box;
    }
`;

export const DivIII = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivIV = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.color || props.theme.colors.gray700};
    padding: 20px;
    border-radius: 20px;

    @media screen and (max-width: 400px) {
        width: 19.6rem;
        border-radius: 20px;
    }
`;

export const Flex = styled.div`
    display: flex;
    gap: 6px;
`;

export const Temp = styled.div`
    font-size: 4.5rem;
    color: ${(props) => props.color || props.theme.colors.gray300};
`;

export const Desc = styled.div`
    font-size: 1.7rem;
    color: ${(props) => props.color || props.theme.colors.gray300};
`;

export const MinMax = styled.div`
    font-size: .9rem;
    color: ${(props) => props.color || props.theme.colors.gray300};
    margin-top: 5px;
`;

export const Next = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const Info = styled.div`
    gap: 10px;
    font-size: 1rem;
    color: ${(props) => props.color || props.theme.colors.gray300};
`;

export const Title = styled.div`
    display: flex;
    font-size: 1.5rem;
    padding: 5px;
    color: ${(props) => props.color || props.theme.colors.white};
`;

export const TitleII = styled.div`
    font-size: 1.1rem;
    padding: 5px;
    color: ${(props) => props.color || props.theme.colors.white};
`;

export const Linha = styled.div`
    max-width: 100%;
    min-width: 0%;
    border: 1px solid ${(props) => props.color || props.theme.colors.gray600};;
    margin-bottom: 5px;
`;