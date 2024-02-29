import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title'
import Body from "./components/body.jsx"
import Table from "./components/table"
export default function App(){
  const [expenseItemList,setExpenseItemList]=useState([]);
  const [expenseAmountList,setExpenseAmountList]=useState([]);
  const [timeList, setTimeList] = useState([]);
    return (
      <div className ="bg">
        <div className="app">
            <div className="titleh"><Title /></div>
            <div className="balanceh">
              <Body
                expenseItemList ={expenseItemList}
                setExpenseItemList ={setExpenseItemList}
                expenseAmountList={expenseAmountList}
                setExpenseAmountList ={setExpenseAmountList}
                timeList={timeList}
                setTimeList ={setTimeList}
              />
            </div>
            <div className="listh">
              <Table 
              expenseItemList ={expenseItemList}
              expenseAmountList={expenseAmountList}
              timeList={timeList}
              />
            </div>
            <div className="author"><h3>@Saurav</h3></div>
        </div>
        
      </div>
    )
}
