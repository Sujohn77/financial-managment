import React,{useState,useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import addImage from "./../assets/imgs/add.png";
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import HighChartContainer from "../containers/HighChartContainer";

import maxresdefault from "./../assets/imgs/coloristic.jpg";


const StyledContainer = styled(Container)`
    height: 100vh;
    border-left: 1px solid;
    border-right: 1px solid;
`
const Flex = styled.div`
    display:flex;
    align-items: center;
    border-top-right-radius:3px;
    border-top-left-radius:3px;
    >div:nth-child(2){
        text-align-last: right;
        width: 100%;
    }
`

const Background = styled.div`
    background:url(${maxresdefault});
    background-size:cover;
    height:100vh;
    >div{
        padding-top:1rem;
    }
`

const Item = styled.div`
    padding:10px;
    border-top:none;
    border:1px solid lightblue;
    color:blue;
    height:45px;
    display:flex;
    align-items:center;
    margin-bottom:5px;
`

const Grid = styled.div`
    margin-top:0.5rem;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    >div{
        height:80px;
        border-top:none;
        border-right:none;
        border:1px solid lightblue;
        display:flex;
        align-items:center;
        border-radius:4px;
        margin:5px;
        justify-content:center;
        color:blue;
        font-family: Montserrat;
        font-weight:600;
        font-size:18px;
        &:hover{
            background-color:lightgreen;
            color:#000;

        }
        img{
            filter: contrast(0.2);
        }
    }
`

const StyledInput = styled.input`
    height:78px;
    width:395px;
    border-radius:5px;
    outline:none;
    border:1px solid lightgrey;
    font-family: Montserrat;
    text-align:center;
    font-weight:600;
    font-size:18px;
    color:dimgray;
    >div{
        height: 300px;
    }
`
const UserHome = ({goToCosts,categoryNames,createMode,setCreateMode,inputValue,setInputValue,createCategory}) => {
    let inputRef = React.createRef();
    const checkSubmit = (e) => {
        setTimeout(()=>{
            if(inputRef.current){
                if(inputRef.current.value !== "" && e.keyCode === 13){
                    setCreateMode(true);
                    createCategory({name:inputValue,expenses:[]});
                    setInputValue("");
                }
            }
        },200,e);    
    }

    useEffect(()=>{
        window.addEventListener("keypress",checkSubmit.bind(this));
        return () => window.removeEventListener("keypress",checkSubmit);
    },[inputValue]);

    return (
        <Background>
        <StyledContainer>
            <Flex>
                <HighChartContainer/>
                <div>
                    <Item onClick={goToCosts}><p>Затраты</p></Item>
                    {/* <Item><p>История Затрат</p></Item> */}
                </div>
                
            </Flex>
            <Grid>
                {categoryNames}
                <div>
                    {createMode && <img src={addImage} width="42" alt="Add category" onClick={()=>setCreateMode(false)}/>}
                    {!createMode && <StyledInput type="text"
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={(e)=>{setInputValue(e.target.value)}}/>}   
                </div>
            </Grid>
            {/* Список пользователей */}
        </StyledContainer>
        </Background>
    );
};

UserHome.propTypes = {
    goToCosts:PropTypes.func,
    categoryNames:PropTypes.array
};

export default UserHome;