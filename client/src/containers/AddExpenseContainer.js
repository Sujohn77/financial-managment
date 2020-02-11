import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import styled from "styled-components";
import { AddExpense } from "../components/AddExpense.jsx";

import { addPayment } from "../redux/actions/user";
import { updateChartData } from "../redux/actions/chart";

import { filterPayments } from "../redux/selectors/profile-selectors";

import {initData} from "../common/initChartData";



const Flex = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-bottom:1px solid;
  padding:5px 0;
  >div:first-child{
    width:100px;
    text-align: left;
  }
  >div:nth-child(2){
    width:240px;
    text-align: left;
  }
  >div{
    padding:0 10px;
  }
`;
function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const AddExpenseContainer = ({addPayment,categoryPayments,updateChartData,profile,...props}) => {
  const forceUpdate = useForceUpdate();
  const [startDate,setStartDate] = useState(new Date());

  const conditionGeneralCost = categoryPayments && categoryPayments.length > 0;

  let generalCost = conditionGeneralCost && categoryPayments.reduce((sum,elem)=>{return sum + parseFloat(elem.price)},0);
  generalCost = generalCost && (generalCost).toFixed(2)

  const payments = categoryPayments && categoryPayments.map((expense, key) => (
      <Flex key={key}>
        <div>{expense.price+" грн"} </div>
        <div>{expense.name}</div>
        <div>{new Date(expense.date).toDateString()}</div>
      </Flex>
    ));

  const validate = values => {
    const errors = {};
    if (!values.price) {
      errors.price = "Обязательно";
    } else if (!values.description) {
      errors.description = "Обязательно";
    }
    return errors;
  };

  

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    addPayment({
      price: parseFloat(values.price),
      name: values.description,
      date: startDate
    });

    updateChartData(initData(profile));
    forceUpdate();
  };

  return (
    <AddExpense
    generalCost={generalCost}
      startDate={startDate}
      setStartDate={setStartDate}
      payments={payments}
      onSubmit={onSubmit}
      validate={validate}
      {...props}
    />
  );
};

// AddExpenseContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    categoryPayments: filterPayments(state.profile),
    profile:state.profile
  };
};

export default connect(mapStateToProps, { addPayment, updateChartData })(
  AddExpenseContainer
);
