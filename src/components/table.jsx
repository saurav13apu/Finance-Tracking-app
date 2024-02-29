import React from "react";
import Body from "./body";
export default function Table({expenseItemList,expenseAmountList,timeList}){
    const itemList = []
    for(let i=0; i<expenseItemList.length; i++){
        itemList.push({
            item: expenseItemList[i],
            amount: expenseAmountList[i],
            time: timeList[i]
        })
    }
    console.log(itemList)
    return(

        <div className="table1">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Expense Amount</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
            <tbody>
                    {itemList.map((val, index) => {
                        return(
                            <tr>
                                <td data-label="Item">{val.item}</td>
                                <td data-label="Amount"><span className="expenseminus">-${val.amount}</span></td>
                                <td data-label="Due Date">{val.time}</td>
                            </tr>
                        )
                    })}
            </tbody>
            </table>
        </div>
    )
}