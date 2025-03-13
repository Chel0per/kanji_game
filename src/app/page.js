"use client";

import { Container,GameBox,GameScreen,Title,Hiragana,Kanji,Button} from "./styles"
import { useState } from "react";
import data from "./output";

export default function Home() {

    const [buttonText, setButtonText] = useState("Start");
    const [bigText,setBigText] = useState("Start the game!");
    const [smallText,setSmallText] = useState("");
    const [gameState,setGameState] = useState("Start");
    const [gameRound,setGameRound] = useState(0);
    const [kanjis,setKanjis] = useState(data);

    function shuffleArray(array) {
        let shuffled = [...array]; 
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function handleButton(info) {
        if (gameState == "Start") {
            setBigText(info[gameRound].english);
            setGameState("Writing");
            setButtonText("Answer");
        } else if (gameState == "Writing") {
            setBigText(info[gameRound].kanji);
            setSmallText(info[gameRound].hiragana);
            setGameState("Answer");
            setButtonText("Next");
            setGameRound(gameRound + 1);
        } else if (gameState == "Answer") {
            if (gameRound < 199){
                setBigText(info[gameRound].english);
                setSmallText("");
                setGameState("Writing");
                setButtonText("Answer");
            }
            else {
                setBigText("Completed!");
                setSmallText("");
                setGameState("Finished");
                setButtonText("Refresh");
            }
        } else if (gameState == "Finished") {
            setBigText("Start the game!");
            setGameState("Start");
            setGameRound(0);
            setButtonText("Start");
            setKanjis(shuffleArray(kanjis));
        }
    }

    return (
        <Container>
            <GameBox>
                <Title>漢字ゲーム</Title>
                <GameScreen>
                    <Kanji>{bigText}</Kanji>
                    <Hiragana>{smallText}</Hiragana>
                </GameScreen>
                <Button onClick={() => handleButton(kanjis)}>{buttonText}</Button>                
            </GameBox>        
        </Container>
    );
}