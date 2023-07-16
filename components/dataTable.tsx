"use client"
import useSWR from "swr";
import React from "react";
import axios from "axios";
import {Montserrat} from "next/font/google";
import {UsersLocationData} from "@/components/UsersData";
const montserrat=Montserrat({subsets: ['latin']})
const fetcher=async (url:string)=>{
    const response=await fetch(url);
    return await response.json();
    // return await axios.get(url).then(res=>res.data);
}
export default function SchedulesTable(){
    const {data:result}=useSWR('https://dummyjson.com/todos?limit=10',fetcher);
    let index=0;
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
                    Done
                </th>
                <th scope="col" className="px-6 py-3">
                    Schedule
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Place
                </th>
            </tr>
            </thead>
            <tbody>
            {
                result?.todos.map((todo:any)=>{
                    return (
                        <tr key={todo.id} className="bg-white border-black text-black">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox"
                                           className="w-4 h-4 text-black border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-1"
                                           className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                {todo.todo}
                            </th>
                            <td className="px-6 py-4">
                                {new Date().getHours().toString()+" : "+new Date().getMinutes().toString()}
                            </td>
                            <td className="px-6 py-4">
                                {UsersLocationData[index++]}
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