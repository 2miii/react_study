import React, { Component } from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
// rcc
export default class ExpenseList extends Component {
  render() {
    return (
     // div 대신 react.Fragment사용하여 감싸줄수있다. <></>로 사용해도 됨
      <React.Fragment> 
          <ul className='list'>
               <ExpenseItem/>
               {/* <ExpenseItem/> */}
          </ul>
          <button className='btn'>
                    목록 지우기
          </button>
      </React.Fragment>
    )
  }
}
