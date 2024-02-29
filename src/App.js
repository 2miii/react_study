import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component{

  initialExpenses = [
    {id: 1, charge: '콜라', amount: 2000},
    {id: 2, charge: '빵', amount: 1000},
    {id: 3, charge: '맥북', amount: 20000}
  ]
  
  handleDelete = (id) => {
    // initialExpenses가 하나씩 필터(순회)하면서  expense id가 다른 것만 통과하여 새로운 배열로 반환한다.
    const newExpense= this.initialExpenses.filter(expense => expense.id !== id)

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
            <ExpenseList initialExpenses={this.initialExpenses} handleDelete={this.handleDelete}/>
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