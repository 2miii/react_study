import React, { Component } from 'react'
import './ExpenseItem.css';
import { MdEdit,MdDelete } from "react-icons/md";


const ExpenseItem = ({expense, handleEdit, handleDelete }) => {


    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'> {expense.charge}</span>
          <span className='amount'> {expense.amount}</span>
        </div>
        <div>
        <button 
          className='edit-btn'
          onClick={() => handleEdit(expense.id)}
        >
          {/* 수정 */}
          <MdEdit />
        </button>
        <button
          // onClick={() => 지우는 함수 호출(`${this.props.expense.id} clicked`)}
          // onClick={() => console.log(`${this.props.expense.id} clicked`)}
          onClick={() => handleDelete(expense.id)}
            className='clear-btn'
        >
          {/* 삭제 */}
          <MdDelete />
        </button>
      </div>
    </li>
  )
  
}
export default ExpenseItem;
