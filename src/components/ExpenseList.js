import React, { Component } from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
// rcc >클래스 자동완성

//rafce > 함수형 자동완성
const ExpenseList = ({ initialExpenses, handleDelete }) => {
  return (
    <> 
    <ul className='list'>
        {initialExpenses.map(expense => {
          return(
            //  key={expense.id} 넣어주면 에러 사라짐
            <ExpenseItem key={expense.id} expense={expense}
               handleDelete={handleDelete}
            />
          )
        })}
    </ul>
    <button className='btn'>
      목록 지우기
    </button>
</>
  )
}

export default ExpenseList;
