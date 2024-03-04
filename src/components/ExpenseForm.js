import React from 'react'
import './ExpenseForm.css';

// export default class ExpenseForm extends Component
// 함수형 컴포넌트로 바꾸기! class 삭제 후  const로 정의 /render는 사용x
const EpenseForm = () => {
//   render() {
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

export default EpenseForm;
//다른 컴포넌트에서 사용할수있게 
