import React  from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import styled from "styled-components";
import Costs from  "../components/Costs.jsx";
import {getAllExpenses} from "../redux/selectors/profile-selectors";

const FlexRow = styled.tr`
    line-height: 35px;
    >div:last-child{
      margin-left:1rem;
      width:95%;
    }
`

const CostsContainer = ({ addUser,expenses, ...props }) => {
  const today = new Date();
  const yersterday = new Date();
  const dayBeforeYersterday = new Date();

  yersterday.setDate(today.getDate() - 1);
  dayBeforeYersterday.setDate(today.getDate() - 2);
 
  const todayExpenses = expenses && expenses.filter(exp => new Date(exp.date).toDateString() === today.toDateString()).map((exp,key)=><FlexRow key={key}>
    <td>{new Date(exp.date).toDateString()}</td>
    <td>{exp.name}</td>
    <td>{exp.price} грн</td>
  </FlexRow>);
  const yesterdayExpenses = expenses && expenses.filter(exp=> new Date(exp.date).toDateString() === yersterday.toDateString()).map((exp,key)=><FlexRow key={key}>
  <td>{new Date(exp.date).toDateString()}</td>
    <td>{exp.name}</td>
    <td>{exp.price} грн</td>
</FlexRow>);
  const dayBeforeYesterdayExpenses = expenses && expenses.filter(exp=> new Date(exp.date).toDateString() === dayBeforeYersterday.toDateString()).map((exp,key)=><FlexRow key={key}>
  <td>{new Date(exp.date).toDateString()}</td>
    <td>{exp.name}</td>
    <td>{exp.price} грн</td>
</FlexRow>);
  
  const othersExpenses = expenses && expenses
    .filter(exp=> new Date(exp.date).toDateString() !== dayBeforeYersterday.toDateString() && 
    new Date(exp.date).toDateString() !== yersterday.toDateString() && 
    new Date(exp.date).toDateString() !== today.toDateString())
    .map((exp,key)=><FlexRow key={key}>
      <td>{new Date(exp.date).toDateString()}</td>
      <td>{exp.name}</td>
      <td>{exp.price}</td>
      </FlexRow>);
  return (
    <Costs
    todayExpenses={todayExpenses}
    yesterdayExpenses={yesterdayExpenses}
    dayBeforeYesterdayExpenses={dayBeforeYesterdayExpenses}
    othersExpenses={othersExpenses}
      {...props}
    />
  );
};

CostsContainer.propTypes = {

};

const mapStateToProps = state => {
  return {
      expenses:getAllExpenses(state.profile)
  };
};

export default connect(mapStateToProps, { })(CostsContainer);
