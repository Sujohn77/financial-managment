import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import UserHome from '../components/UserHome.jsx';

import {setCurrentCategory,createCategory} from "../redux/actions/user";

import {getNamesCategories} from "../redux/selectors/profile-selectors";

import {hashCode} from "../utils/hash";

const UserHomeContainer = ({categories,setCurrentCategory,...props}) => {
    const history = useHistory();
    const [createMode,setCreateMode] = useState(true);
    const [inputValue,setInputValue] = useState("");
    // const ref = React.createRef();

    const goToCosts = () =>{
        history.push("/costs")
    }
    
    const goToAddExpense = category =>{
        setCurrentCategory(category);
        history.push("/addExpense")
    }
    const categoryNames = categories && categories.map((category)=><div key={hashCode(category)} onClick={()=>goToAddExpense(category)}>
        {category}
    </div>)

    return <UserHome {...props} 

    inputValue={inputValue} setInputValue={setInputValue}
    createMode={createMode} setCreateMode={setCreateMode} 
    categoryNames={categoryNames} goToCosts={goToCosts}/>
};

UserHomeContainer.propTypes = {
    categories:PropTypes.array,
    setCurrentCategory:PropTypes.func
};


const mapStateToProps = state => {
    return {
        categories:getNamesCategories(state.profile)
    }
  };
  
export default connect(mapStateToProps,{setCurrentCategory,createCategory})(UserHomeContainer);
  


