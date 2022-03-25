import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1E2140;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleApp = styled.h1`
    text-align: center;
    color: white;
    font-size: 30px;
`

export const ContainerButtons = styled.div`
    margin: 1rem 0;

    button{
        padding: 0.6rem 1.5rem;
        background-color: #FC7270;
        color: #1E2140;
        margin: 0 1rem;
        border: none;
        border-radius: 13px;
        cursor: pointer;
        transition: all ease 0.3s;
        font-size: 16px;
        font-weight: bold;
    }
`

export const ContainerBTNTIMER = styled.div`

`

export const ContainerTimer = styled.div`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
`

export const NumberTimer = styled.h1`
    font-size: 75px;
    color: #D5DFFE;
`

export const ButtonStartPause = styled.button`
    font-size: 25px;
    text-transform: uppercase;
    background: none;
    border: none;
    color: #D5DFFE;
    cursor: pointer;
`

export const ContainerButtonStartPause = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
`

export const ContainerProgressBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`

export const ContentProgessBar = styled.div`
    padding: 0.9rem 0.6rem 0.9rem 0.8rem;
    width: 25rem;
    border-radius: 400px;
    background-color: #151932; 
    box-shadow: -9px -9px 21px 8px rgba(38,42,87,0.42);
`

export const MessageZeroTime = styled.div`
    font-size: 45px;
    font-weight: bold;
    color: #D5DFFE;
    text-align: center;
`

export const ContainerBtnConfig = styled.div`
    display: flex;
    justify-content: center;
`

export const ContentBtnConfig = styled.div`
    button{
        font-size: 25px;
        background: none;
        border: none;
        color: #5D607F;
        cursor: pointer;
    }
`