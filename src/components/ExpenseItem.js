import React, { Component } from 'react'
import './ExpenseItem.css';
import { MdEdit,MdDelete } from "react-icons/md";

export default class ExpenseItem extends Component {
  render() {
    return (
        <li className='item'>
          <div className='info'>
            <span className='expense'> {this.props.expense.charge}</span>
            <span className='amount'> {this.props.expense.amount}</span>
          </div>
          <div>
          <button 
            className='edit-btn'
          >
            {/* 수정 */}
            <MdEdit />
          </button>
          <button
            // onClick={() => 지우는 함수 호출(`${this.props.expense.id} clicked`)}
            // onClick={() => console.log(`${this.props.expense.id} clicked`)}
            onClick={() => this.props.handleDelete(this.props.expense.id)}
              className='clear-btn'
          >
            {/* 삭제 */}
            <MdDelete />
          </button>
        </div>
        </li>
    )
  }
}
