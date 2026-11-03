import {TitleDiv, ParentDiv} from "@/styles/styles";
import Nav from "@/components/Nav";
import SearchBox from "@/components/SearchBox";

export default async function Home(){
    return(
        <ParentDiv>
            <Nav/>
            <TitleDiv> Conversion Rates</TitleDiv>
            <SearchBox/>
        </ParentDiv>

    )
}
