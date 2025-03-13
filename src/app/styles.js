import styled from "styled-components";

export const Container = styled.div`
    --gray-rgb: 0, 0, 0;
    --gray-alpha-200: rgba(var(--gray-rgb), 0.08);
    --gray-alpha-100: rgba(var(--gray-rgb), 0.05);

    --button-primary-hover: #383838;
    --button-secondary-hover: #f2f2f2;

    padding: 20px;
    grid-template-rows: 20px 1fr 20px;
    align-items: center;
    justify-items: center;
    min-height: 100svh;
    gap: 64px;
    font-family: "MyFont", sans-serif;
    background-color: #ffb7c5;
`;

export const GameBox = styled.div`
    text-align: center;
    padding: 20px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px
`;

export const Title = styled.p`
    margin:0;
    font-size:48px
`;

export const GameScreen = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    margin:0;
    padding: 10px;
    background: #fafad2;
    border-radius: 5px;
    height:250px;
    width:300px;
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
`;

export const Button = styled.button`
    width:120px;
    padding: 10px 20px;
    border: none;
    background-color: 	#ffa500;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;

export const Kanji = styled.p`
    font-size: 44px;
    grid-row: 2;
    margin:0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Hiragana = styled.p`
    font-size:24px;
    grid-row:3;
    margin:0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;