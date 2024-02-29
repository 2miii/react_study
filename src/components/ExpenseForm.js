import React, { Component } from 'react'
import './ExpenseForm.css';

export default class ExpenseForm extends Component {
  render() {
    return (
     <form>
          <div className='form-center'>
               <div className='form-group'>
                    <label htmlFor='charge'>상품</label>
                    {/* 인풋은 라벨을 위한 것이라 인풋의 아이디 라벨에 넣어주기 */}
                    <input
                         type='text'
                         className='form-control'
                         id='charge'
                         name='charge'
                         placeholder='예) 콜라'
                    />
               </div>
               <div className='form-group'>
                    <label htmlFor='amount'>비용</label>
                    {/* 인풋은 라벨을 위한 것이라 인풋의 아이디 라벨에 넣어주기 */}
                    <input
                         type='number'
                         className='form-control'
                         id='amount'
                         name='amount'
                         placeholder='예) 100'
                    />
               </div>
          </div>
          <button type='submit' className='btn'>
               제출
          </button>
     </form>
    )
  }
}
