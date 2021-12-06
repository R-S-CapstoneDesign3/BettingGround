import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Loginmain from "../screens/Loginmain";
import IdPwdFindForm from "../screens/IdPwdFindForm";
import JoinForm from "../screens/JoinForm";

const Stack=createStackNavigator();

const StackNavigation=()=>{
    return (
        <Stack.Navigator 
            initialRouteName="Loginmain"
            screenOptions={{
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen name="로그인" component={Loginmain}/>
            <Stack.Screen name="아이디/비밀번호 찾기" component={IdPwdFindForm}/>
            <Stack.Screen name="회원가입" component={JoinForm}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;