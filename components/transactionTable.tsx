import React from "react";
import useSWR from "swr";
import axios from "axios";
import {Montserrat} from "next/font/google";
const montserrat=Montserrat({subsets: ['latin']});
const fetcher=async (url:string)=>{
    const response=await fetch(url);
    return await response.json();
}
export default function TransactionTable(){
    let transactionsAmount:number[]=[]
    for( let i = 0 ; i < 10 ; i++ ){
        transactionsAmount[i]=Math.floor(Math.random()*(10000-2000+1)+2000);
    }
    const {data:result}=useSWR('https://random-data-api.com/api/v2/credit_cards?size=10',fetcher);
    let key=0;
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className={"w-full text-sm text-left text-black "+montserrat.className}>
                    <thead
                        className="text-xs uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            {/*<div className="flex items-center">*/}
                            {/*    <input id="checkbox-all" type="checkbox"*/}
                            {/*           className="w-4 h-4 text-black border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />*/}
                            {/*    <label htmlFor="checkbox-all"*/}
                            {/*           className="sr-only">checkbox</label>*/}
                            {/*</div>*/}
                            Sr
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Credit Card Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Credit Card Type
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        result?.map((transaction:any)=>{
                            return (
                                <tr key={transaction.id} className="bg-white border-black text-black">
                                    <td className="w-4 p-4">
                                        {key+1}
                                    </td>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                        {'$'+transactionsAmount[key++]}
                                    </th>
                                    <td className="px-6 py-4">
                                        {transaction.credit_card_number}
                                    </td>
                                    <td className="px-6 py-4">
                                        {transaction.credit_card_type}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}