import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import logoUser from "./../assets/imgs/logoUser.png";
import styled from "styled-components";
import Container from '@material-ui/core/Container';


const Flex = styled.div`
    display:flex;
    padding:0 10px;
    align-items: center;
    border-top-right-radius:3px;
        border-top-left-radius:3px;
    &:hover{
        background: lightblue;
        transition:.3s all;
    }
    >div:first-child{
        width:20%;
    }
`
const Button = styled.button`
    
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    height:40px;
    width:100%;
    padding: 0.25em 1em;
`

const FieldCreateUser = styled.div`
    border-radius: 3px;
    border: 2px solid palevioletred;
    display:flex;
    align-items:center;
    height:40px;
    padding:0 12px;
`
const ListUsers = ({userName,setUserName,setCreateUserMode,createUserMode,users,saveNewUser,goToProfile}) => {
    const usersDOM = users && users.map((item,key)=>item && <Flex key={key} onClick={()=>{goToProfile(item)}}>
        <div><img src={logoUser} width="40" alt="logo"/></div>
        <div>{item}</div>
    </Flex>);

    return (
        <Container>
            {usersDOM}
            <div>
                {!createUserMode && <Button onClick={()=>{setCreateUserMode(true)}}>Добавить пользователя</Button>}
                {createUserMode && <FieldCreateUser>
                    <img src={logoUser} height="30" alt="Uplaod_photo"/>
                    <input type="text" value={userName} onChange={(e)=>{
                            setUserName(e.target.value);
                        }
                    }/>
                    <button onClick={(e)=>{saveNewUser(userName)}}>SAVE</button> 
                </FieldCreateUser>
                }  
            </div>
        </Container>
    );
};

ListUsers.propTypes = {
    userName:PropTypes.string,
    createUserMode:PropTypes.bool,
    setUserName:PropTypes.func,
    setCreateUserMode:PropTypes.func,
    saveNewUser:PropTypes.func,
    users:PropTypes.array,
    goToProfile:PropTypes.func,
};

export default ListUsers;