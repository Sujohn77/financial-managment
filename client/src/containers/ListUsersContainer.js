// LIBS
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
// COMPONENTS
import ListUsers from "../components/ListUsers.jsx";
// REDUX
import { addUser,setCurrentUser,initProfile } from "../redux/actions/user";

import {defaultCategories} from "../redux/defaultCategories"

const ListUsersContainer = ({ addUser,setCurrentUser,initProfile, ...props }) => {
  let [userName, setUserName] = useState("");
  let [createUserMode, setCreateUserMode] = useState(false);
  const history = useHistory();

  const goToProfile = (name) => {
    let profile = localStorage.getItem("profile-"+name)

    if(profile !== null){
      let {categories,currentCategory} = JSON.parse(profile);
      initProfile(categories,currentCategory);
    } else{
      initProfile(defaultCategories);
    }
    
    setCurrentUser(name);

    history.push("/profile");
    window.location.reload();
  };

  const saveNewUser = name => {
    if (name !== "") {
      addUser(name);
      setCurrentUser(name);
      setUserName("");
      setCreateUserMode(false);
    }
  };
  return (
    <ListUsers
      {...props}
      goToProfile={goToProfile}
      saveNewUser={saveNewUser}
      createUserMode={createUserMode}
      setCreateUserMode={setCreateUserMode}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

ListUsersContainer.propTypes = {
  addUser: PropTypes.func,
  state: PropTypes.object
};

const mapStateToProps = state => {
  return {
    users: state.user.users
  };
};

export default connect(mapStateToProps, { addUser,setCurrentUser,initProfile })(ListUsersContainer);
