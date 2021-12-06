import React from "react";
import {View, Button } from "react-native";
import styled from "styled-components/native";
import Input from '../components/LoginInput';

const Container = styled.View`
    flex : 1;
    justify-content: center;
    background-color:#ffffff;
`

const StyledText=styled.Text`
    font-size:15px;
    margin:20px 50px;
`;


const IdPwdFindForm = () => {
    return (
        <Container>
            <StyledText>아이디 찾기</StyledText>
            <Input placeholder="Nickname" />
            <View style={{marginLeft:50, marginTop:20, marginRight:50, marginBottom:20}}>
                <Button title="아이디 찾기" color="black"/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black', marginTop:10, marginLeft:15, marginRight:15}} />
            </View>
            <StyledText>비밀번호 찾기</StyledText>
            <Input placeholder="Id"/>
            <Input placeholder="Email"/>
            <View style={{marginLeft:50, marginTop:20, marginRight:50, marginBottom:20}}>
                <Button title="비밀번호 찾기" color="black"/>
            </View>
        </Container>
    );
};

export default IdPwdFindForm;