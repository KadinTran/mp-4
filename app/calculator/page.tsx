
import {TitleDiv, ParentDiv, ErrorScreen} from "@/styles/styles";
import Nav from "@/components/Nav";
import Calculator from "@/components/Calculator";
import {Suspense} from "react";


export default async function Converter(){

    return(
        <ParentDiv>
            <Nav/>
            <TitleDiv> Convert USD</TitleDiv>
            <Suspense fallback={<ErrorScreen>Loading calculator...</ErrorScreen>}>
                <Calculator />
            </Suspense>
        </ParentDiv>

    )
}
