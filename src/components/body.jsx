import React,{useState} from "react";

export default function Body({setTimeList, setExpenseItemList, setExpenseAmountList}){
    const [expenseItem, setExpenseItem] = useState("")
    const [expenseAmount, setExpenseAmount] = useState("")
    const [balanceAmount, setbalanceAmount] = useState(0)
    const [budgetInput, setbudgetInput] = useState(0)

    const handleClick=()=>{
        setExpenseItemList(prevState => [...prevState, expenseItem])
        setExpenseAmountList(prevState => [...prevState, expenseAmount])
        setTimeList(current =>[...current,new Date().toLocaleString()]);
        console.log(new Date().toLocaleString());
        expensefunction();
    }
    const expensefunction=()=>{
        console.log(expenseAmount)
        setbalanceAmount(parseInt(balanceAmount)-parseInt(expenseAmount))
    }
    return(
        <div>
            <h1 className="balance">Current Balance --{(balanceAmount>=0)?<span className="balance1"> $ {parseInt(balanceAmount)}</span> : <span className="expenseminus"> $ {parseInt(balanceAmount)}</span>} </h1>
            <div className="boxes">
                <div className="budget">
                    <h2>Enter your Budget :</h2>
                    <input 
                        type="number"
                        value={budgetInput}
                        onChange={(e) => setbudgetInput(e.target.value)}
                        ></input>
                    
                    <div>
                        <button onClick={()=>{
                            console.log(budgetInput)
                            setbalanceAmount(parseInt(balanceAmount)+parseInt(budgetInput))
                        }}> Add</button>
                    </div>
                </div>
                <div className="expense">
                    <h2>Enter your Expense: </h2>
                    <input type="text"
                    value={expenseItem}
                    onChange ={(e)=>setExpenseItem(e.target.value)}></input>

                    <h2>Enter your Expense Amount: </h2>
                    <input 
                    type="number"
                    value={expenseAmount}
                    onChange={(e)=>setExpenseAmount(e.target.value)
                    }
                    ></input>
                    <div>
                        <button onClick ={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};