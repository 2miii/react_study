import React from 'react'
import './ExpenseForm.css';
import { MdSend } from 'react-icons/md';

// export default class ExpenseForm extends Component
// 함수형 컴포넌트로 바꾸기! class 삭제 후  const로 정의 /render는 사용x
const ExpenseForm = ({ charge, handleCharge, amount, handleAmount, handleSubmit, edit}) => {
//   render() {
    return (
     <form onSubmit={handleSubmit}> 
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
                         value={charge}
                         onChange={handleCharge}//handleCharge의 변화값 가져오기                         
                        // onChange={(e) => console.log(e.target.value)}//value의 변화값 확인
                    />
               </div>
               <div className='form-group'>
                    <label htmlFor='amount'>비용</label>
                    <input
                         type='number'
                         className='form-control'
                         id='amount'
                         name='amount'
                         placeholder='예) 100'
                         value={amount}
                         onChange={handleAmount}
                    />
               </div>
          </div>
          <button type='submit' className='btn'>
               {/* 수정버튼 */}
               {edit ? '수정':'제출'}
               <MdSend className='btn-icon'/>
          </button>
     </form>
    )

}

export default ExpenseForm;
//다른 컴포넌트에서 사용할수있게 
