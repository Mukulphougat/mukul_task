import {PropsWithChildren} from "react";

export default function Layout({children}:PropsWithChildren){
    return (
        <div className={"w-full max-h-screen"}>
            {children}
        </div>
    )
}