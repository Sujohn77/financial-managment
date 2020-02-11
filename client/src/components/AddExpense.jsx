import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from '@material-ui/core/Container';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/datepicker.css"

const StyledForm = styled(Form)`
    width: 100%;
    padding:10px 0;
`;

const Flex = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items:center;
      }
`;

const Submit = styled.button`
    border: 1px solid rgba(10, 180, 180, 1);
    background: rgba(20, 20, 20, .6);
    font-size: 18px;
    color: white;
    margin-top: 20px;
    padding: 10px 50px;
    cursor: pointer;
    width:100%;
    border-radius: 28px;
    max-width:200px;
    margin:15px 10px;
    height: 40px;
    transition: .4s;
    &:hover {
    background: rgba(20, 20, 20, .8);
    padding: 10px 80px;
    }
`;

const StyledField = styled(Field)`
    margin: 15px 0;
    font-size: 16px;
    width:220px;
    padding: 10px;
    border: 1px solid rgba(10, 180, 180, 1);
    border-top: none;
    border-left: none;
    border-right: none;
    background: rgba(20, 20, 20, .2);
    color: white;
    outline: none;
`;

const Background = styled.div`
    background: url(https://source.unsplash.com/TV2gg2kZD1o/1600x800);
    background-size:cover;
    height:100vh;
    >div{
        padding-top:1rem;
    }
`

const StyledContainer = styled(Container)`
    // background: url(https://source.unsplash.com/TV2gg2kZD1o/1600x800);
    // background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    background-size: cover;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
    >div{
        margin: 10px 0px;
    }
`;



export const AddExpense = ({ payments, onSubmit, validate,startDate,setStartDate,generalCost }) => {
    return (
        <Background>
        <StyledContainer>
            {payments}
            {generalCost && <h3><b>Всего: </b>{generalCost} грн</h3>}
            <Formik
                initialValues={{ price: '', description: '' }}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <StyledForm>
                        <Flex>
                            <div>
                                <StyledField type="price" name="price" placeholder="Цена"/>
                                <ErrorMessage name="price" component="div" />
                            </div>
                            <div>
                                <StyledField type="description" name="description" placeholder="Название"/>
                                <ErrorMessage name="description" component="div" />
                            </div>
                            <div id="datepicker">
                                <DatePicker
                                    selected={startDate}
                                    onChange={setStartDate}
                                />
                            </div>
                            <Submit type="submit" disabled={isSubmitting}>
                                Запись
                            </Submit>
                        </Flex>
                    </StyledForm>
                )}
            </Formik>
        </StyledContainer>
        </Background>
    );
};

AddExpense.propTypes = {
    onSubmit: PropTypes.func,
    validate: PropTypes.func,
    payments: PropTypes.array
};
