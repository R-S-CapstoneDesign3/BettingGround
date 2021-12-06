import React from "react";
import styled from "styled-components/native";

const LoginButton = styled.TouchableOpacity`
    margin: 3px 0;
    padding: 15px 47px;
    border-radius:10px;
    border:2px;
`;

const Title = styled.Text`
    font-size:12px;
    font-weight: 600;
    margin: 0px 90px;
`;

const LButton = props=>{
    return (
        <LoginButton>
            <Title>{props.title}</Title>
        </LoginButton>
    );
};

export default LButton;