import styled from 'styled-components';

export const ContainerModal = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000007e;
    padding-top: 4rem;
    display: none;
`

export const ContentModal = styled.div`
    position: absolute;
    left: 32%;
    width: 500px;
    height: 400px;
    background-color: #FFFFFF;
    border-radius: 13px;
    padding: 2rem;
`

export const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding-bottom: 1rem;
`

export const BodyModal = styled.div`
`

export const TitleHeader = styled.h1`
    color: #000000;
    font-weight: bold;
    font-size: 20px;
`

export const BtnCloseModal = styled.span`
    color: grey;
    cursor: pointer;
    font-weight: bold;
`

export const ContainerChangeValueTimer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid grey;
    gap: 65px;
    padding: 1rem 0;

    h6{
        font-size: 14px;
        color: gray;
    }

    input{
        width: 100px;
        height: 30px;
        padding-left: 0.5rem;
        background-color: #EEF1FA;
        border: none;
        font-size: 15px;
        color: #15172E;
        font-weight: bold;
    }
`

export const TextsTimerModal = styled.h1`
    font-size: 16px;
    color: #000000;
    margin: 1rem 0rem;
`

export const ContainerChangeColor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`

export const ContentColors = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const SpanColor1 = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 360px;
    background-color: #FF6D71;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.3s;
    &:hover{
        transform: scale(1);
    }  
`
export const SpanColor2 = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 360px;
    background-color: #75F1F8;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.3s;
    &:hover{
        transform: scale(1);
    } 
`
export const SpanColor3 = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 360px;
    background-color: #D881F8;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.3s;
    &:hover{
        transform: scale(1);
    }
`


