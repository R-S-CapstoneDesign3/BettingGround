import React from "react";
import styled from "styled-components/native";
import { Dimensions, View } from "react-native";

const TextInput = styled.TextInput`
    width:${({width})=>width-100}px;
    height:50px;
    margin: 3px 50px;
    padding: 15px 20px;
    border-radius:10px;
    border:2px;
    font-size:12px;
`;

const Input = ({placeholder}) => {
    const width = Dimensions.get('window').width;
    return (
    <View>
      <TextInput 
        width={width}
        placeholder={placeholder}
        placeholderTextColor="#d3d3d3"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
      />
    </View>
    );
};

export default Input;