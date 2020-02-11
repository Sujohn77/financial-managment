import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import styled from "styled-components";

import maxresdefault from "./../assets/imgs/maxresdefault.jpg";

const Background = styled.div`
    background:url(${maxresdefault});
    background-size:cover;
    height:100vh;
    >div{
        padding-top:1rem;
    }
`

const StyledTable = styled.table`
    margin-left: auto;
    margin-right: auto;
    font-size:20px;
    th{
        border-top:5px solid #2196f3;
        border-bottom:5px solid #2196f3;
        font-weight: bold;
        padding:5px 20px;
        font-size:22px;
    }
    td{
        text-align:center;
    }
    tbody > tr{
        line-height: 3rem;
    }
    th:first-child{
        border-left:5px solid #2196f3;
    }
    th:last-child{
        border-right:5px solid #2196f3;
    }
    td:first-child, th:first-child{
        width:300px;
        border-left:5px solid #2196f3;
    }
    td:last-child, th:last-child{
        width:100px;
        padding:0 20px;
        border-right:5px solid #2196f3;
    }
    tbody > tr:last-child{
        border-bottom:5px solid #2196f3;
    }
`
const Costs = ({ todayExpenses, yesterdayExpenses, dayBeforeYesterdayExpenses, othersExpenses }) => {
    
    return (
        <Background>
        <Container>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Название</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {todayExpenses.length > 0 && <>
                        <tr><h4>Сегодня</h4></tr>
                        {todayExpenses}
                    </>
                    }
                    {yesterdayExpenses.length > 0 && <>
                        <tr><h4>Вчера</h4></tr>
                        {yesterdayExpenses}
                    </>}
                    {dayBeforeYesterdayExpenses.length > 0 && <>
                       <tr><h4>Позавчера</h4></tr>
                        {dayBeforeYesterdayExpenses}
                    </>}
                    {othersExpenses.length > 0 && <>
                        {othersExpenses}
                    </>}
                </tbody>
            </StyledTable>
            
        </Container>
        </Background>
    );
};

Costs.propTypes = {

};

export default Costs;