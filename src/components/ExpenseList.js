import React, { Component } from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
// rcc
export default class ExpenseList extends Component {
  render() {
    //console.log('@@@',this.props.initialExpenses) //props 배열데이터 확인 
    return (
     // div 대신 react.Fragment사용하여 감싸줄수있다. <></>로 사용해도 됨
      <> 
          <ul className='list'>
              {this.props.initialExpenses.map(expense => {
                return(
                  //  key={expense.id} 넣어주면 에러 사라짐
                  <ExpenseItem key={expense.id} expense={expense}/>
                )
              })}
          </ul>
          <button className='btn'>
                    목록 지우기
          </button>
      </>
    )
  }
}
