import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component{
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
            <ExpenseList/>
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