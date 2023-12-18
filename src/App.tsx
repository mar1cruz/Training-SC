import React from 'react';

import './App.css';
import {Card} from "./components/Card.styled";
import {BodyCard} from "./components/BodyCard.styled";
import {Text} from "./components/Text.styled";
import {Title} from "./components/Title.styled";
import {WrapperBtnStyled} from "./components/WrapperBtn.styled";
import {Btn} from "./components/Btn.styled";

function App() {
    return (
        <Card>
            <img src='image.png' alt='image'/>

            <BodyCard>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <WrapperBtnStyled>
                    <Btn primary>See more</Btn>
                    <Btn outlined>Save</Btn>
                </WrapperBtnStyled>
            </BodyCard>
        </Card>
    );
}

export default App;
