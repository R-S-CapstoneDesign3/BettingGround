import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity, Button} from "react-native";
import Input from '../components/LoginInput';

const Container = styled.View`
      flex: 1;
      justify-content:center;
      background-color:#ffffff;
`

const FixToText = styled.Text`
     fontSize:15;
     marginTop:10;
     marginLeft:50;
`;


const JoinForm = () =>{
    return ( 
        <Container> 
            <FixToText>아이디</FixToText>
            <Input placeholder="ID"/>

            <FixToText>비밀번호</FixToText>
            <Input placeholder="Password"/>

            <FixToText>비밀번호 확인</FixToText>
            <Input placeholder="Passwordckd"/>

            <FixToText>닉네임</FixToText>
            <Input placeholder="Nickname"/>

            <FixToText>이메일</FixToText>
            <Input placeholder="email"/>
            
            <TouchableOpacity style={{marginLeft: 50, marginRight: 50, marginTop:20}}>
                <Button title="회원가입" color="black"/>
            </TouchableOpacity>
        </Container>
    );
};


export default JoinForm;