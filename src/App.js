import { Component, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

    // 목록들 usestateSnippet~
    const [expenses, setExpenses] = useState([
      {id: 1, charge: '콜라', amount: 2000},
      {id: 2, charge: '빵', amount: 1000}
    ]);

    //form에서 onchage값 받아오기
    const [charge, setCharge] = useState(""); //초기값 ""
    const [amount, setAmount] = useState(0); //초기값 0
    const [id, setId] = useState("");

    // 수정
    const [edit, setEdit] = useState(false);

    //팝업배너
    const [alert, setAlert] = useState({show: false});

    //
    const handleEdit = id =>{
      const expense = expenses.find(item => item.id === id);
      const{charge, amount} = expense ;
      setCharge(charge);
      setAmount(amount);
      setId(id);
      setEdit(true);
    }
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

    handleAlert({type:"danger", text:"아이템이 삭제되었습니다."})
  };

//submit 버튼을 눌렀을 때 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0){

      // edit을 수정했을때
      if(edit){
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount}: item ;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type:"success", text:"아이템이 수정되었습니다."});

      }else{
        const newExpense = {id: crypto.randomUUID(), charge, amount};
        const newExpenses = [...expenses,newExpense]
  
        setExpenses(newExpenses);
        
        handleAlert({type:"success", text:"아이템이 생성되었습니다."})
      }
      setCharge("");
      setAmount(0);

    }else{
      handleAlert({type:"danger", text:"charge는 빈 값일 수 없으며 amount 값은 0보다 커야합니다."})
      // console.error('error');
    }

  };
  // snackbar 생성
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show:false})
    }, 7000);
  }


    return(
      <main className="main-container">
        <div className="sub-container">
        {alert.show ? <Alert type={alert.type} text={alert.text}/>: null}
          {/* snackbar 생성 ^ */}
          <h1>장바구니</h1>
          <div style = {{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/*Expense Form*/}
            <ExpenseForm  edit={edit} charge={charge} handleCharge ={handleCharge} 
                          amount={amount}  handleAmount={handleAmount}
                          handleSubmit={handleSubmit}
            /> 
          </div>

          <div style = {{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/* Expense List */}
            <ExpenseList handleEdit={handleEdit} initialExpenses={expenses} handleDelete={handleDelete}/>
          </div>
            <div style = {{ display:'flex', justifyContent:'start', marginTop:'1rem'}}>
              <p style = {{ fontSize:'2rem'}}>
                  총합계: 
                  <span>
                    {/* {expenses.reduce((acc, curr) => {
                      console.log(acc, curr);
                      return (acc += curr.amount);
                      }, 0)}원 >>> 코드사용 시 += 연산자는 문자열로 수행하므로 아래 코스로 변환하여 사용*/}
                  {expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0)}원
                  </span>
              </p>
            </div>
          
        </div>
      </main>
    )
 
}
export default App;