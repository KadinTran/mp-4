import getRates from "@/lib/getRates";
import {TitleDiv, ParentDiv} from "@/styles/styles";
import Nav from "@/components/Nav";
import Calculator from "@/components/Calculator";


export default async function Search(){
    const data = await getRates("USD")
    return(
        <ParentDiv>
            <Nav/>
            <TitleDiv> Convert USD</TitleDiv>
            <Calculator/>
        </ParentDiv>

    )
}
