import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from "react-icons/md";


//rafce > 함수형 자동완성
const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <> 
    <ul className='list'>
        {initialExpenses.map(expense => {
          return(
            //  key={expense.id} 넣어주면 에러 사라짐
            <ExpenseItem key={expense.id} expense={expense}
               handleDelete={handleDelete} handleEdit={handleEdit}
            />
          )
        })}
    </ul>
    {expenses.length > 0 ? 
      <button className='btn' onClick={clearItems}>
         목록 지우기
         <MdDelete className="btn-icon"/>
      </button>
      : null  
    }
   
  </>
  )
}

export default ExpenseList;