import { Component, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

// 
const App = () => {

  // 목록들 usestateSnippet~
  const [expenses, setExpenses] = useState([
    {id: 1, charge: '콜라', amount: 2000},
    {id: 2, charge: '빵', amount: 1000}
    ]);

  //form에서 onchage값 받아오기
    const [charge, setCharge] = useState(""); //초기값 ""
    const [amount, setAmount] = useState(0); //초기값 0

    const handleCharge = (e) => {
      setCharge(e.target.value)
    };
    const handleAmount = (e) => {
      setAmount(e.target.value)
    };


  const handleDelete = (id) => {
    // *함수형*에서는 this.state.expenses를 사용하지 않고 바로 expensesf를 가져온다.
    // const newExpense= this.state.expenses.filter(expense => expense.id !== id)
    const newExpense = expenses.filter(expense => expense.id !== id)
  
    //지출 목록 삭제
    setExpenses(newExpense)
    //  this.setState({ expenses: newExpense}) //state실행을 시켜주는데 expenses의 값을 지우고 newExpense를 빈공간에 넣어준다...
    //console.log('newExpense',newExpense)
  };

//submit 버튼을 눌렀을 때 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      const newExpense = {id: crypto.randomUUID(), charge, amount};
      const newExpenses = [...expenses,newExpense]

      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);

    }else{
      console.error('error');
    }

  };

    return(
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>
          <div style = {{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/*Expense Form*/}
            <ExpenseForm  charge={charge} handleCharge ={handleCharge} 
                          amount={amount}  handleAmount={handleAmount}
                          handleSubmit={handleSubmit}
            /> 
          </div>

          <div style = {{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/* Expense List */}
            <ExpenseList initialExpenses={expenses} handleDelete={handleDelete}/>
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
export default App;