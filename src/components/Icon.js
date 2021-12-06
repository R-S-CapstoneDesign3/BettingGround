import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import { images } from "../images";

const Icon=styled.Image`
    
`;

const IconImage=({type})=>{
    return (
        <>
        <Icon source={type}/>
        </>
    );
};

IconImage.prototype={
    type:PropTypes.oneOf(Object.values(images)).isRequired,
};

export default IconImage;

