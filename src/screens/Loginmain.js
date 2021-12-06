import React from "react";
import styled from "styled-components/native";
import IconImage from '../components/Icon'
import Input from '../components/LoginInput';
import LButton from "../components/LoginButton";
import {View} from "react-native";
import { images } from "../images";

const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content: center;
    background-color:#ffffff;
`;

const StyledText = styled.Text`
    marginTop:5px;
    font-size:10px;
    color:blue;
`;

const Loginmain=({navigation})=>{
    return (
        <Container> 
            <IconImage type={images.LoginIcon}/>
            <Input placeholder="ID"/>
            <Input placeholder="Password"/>
            <LButton title="로그인"/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black', marginTop:10, marginLeft:15, marginRight:15}} />
            </View>
            <View flexDirection="row">
                <StyledText onPress={()=>navigation.navigate('회원가입')}>회원가입 </StyledText>
                <StyledText onPress={()=>navigation.navigate('아이디/비밀번호 찾기')}>아이디/비밀번호 찾기</StyledText>
            </View>
        </Container>
    );
};

export default Loginmain;