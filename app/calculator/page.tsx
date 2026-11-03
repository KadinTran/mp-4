import getRates from "@/lib/getRates";
import {TitleDiv, ParentDiv} from "@/styles/styles";
import Nav from "@/components/Nav";
import Calculator from "@/components/Calculator";

export const instant = false;

export default async function Converter(){

    return(
        <ParentDiv>
            <Nav/>
            <TitleDiv> Convert USD</TitleDiv>
            <Calculator/>
        </ParentDiv>

    )
}
