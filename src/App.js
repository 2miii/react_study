import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      expenses:[
        {id: 1, charge: '콜라', amount: 2000},
        {id: 2, charge: '빵', amount: 1000},
        {id: 3, charge: '케이크', amount: 20000}
      ]
    }
  }
  // 아래 배열을 state를 사용하면서 위의 구문을 사용하고, 호출명도 수정해줌.
  // initialExpenses = [
  //   {id: 1, charge: '콜라', amount: 2000},
  //   {id: 2, charge: '빵', amount: 1000},
  //   {id: 3, charge: '맥북', amount: 20000}
  // ]
  
  handleDelete = (id) => {
    // initialExpenses가 하나씩 필터(순회)하면서  expense id가 다른 것만 통과하여 새로운 배열로 반환한다.
    // const newExpense= this.initialExpenses.filter(expense => expense.id !== id)
    // state 사용하면서 아래와 같이 사용한다
    const newExpense= this.state.expenses.filter(expense => expense.id !== id)
    //지출 목록 삭제
      this.setState({ expenses: newExpense}) //state실행을 시켜주는데 expenses의 값을 지우면ㅅ서 newExpense를 빈공간에 넣어준다...
      console.log('newExpense',newExpense)
  }

  render(){
    return(
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>
          <div style = {{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/*Expense Form 영역  </>사용시 상단 import~~로 해당 경로가 자동으로 생성된다. */ }
            <ExpenseForm/> 
          </div>

          <div style = {{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/*Expense list 영역*/}
            <ExpenseList initialExpenses={this.state.expenses} handleDelete={this.handleDelete}/>
          </div>
            <div style = {{ display:'flex', justifyContent:'start', marginTop:'1rem'}}>
              <p style = {{ fontSize:'2rem'}}>
                  총합계:
              </p>
            </div>
          
        </div>
      </main>
    )
  }
}