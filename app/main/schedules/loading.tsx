"use client"
import {Skeleton} from "antd";

export default function Loading(){
    return (
        <div className={"w-5/6 mx-14"}>
            <Skeleton active={true} />
        </div>
    )
}
// import React from 'react';
// import { Skeleton } from 'antd';
//
// const App: React.FC = () => <Skeleton active />;
//
// export default App;
