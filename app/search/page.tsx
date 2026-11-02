import {TitleDiv, ParentDiv} from "@/styles/styles";
import Nav from "@/components/Nav";
import SearchBox from "@/components/SearchBox";

export default async function Search(){
    return(
        <ParentDiv>
            <Nav />
            <TitleDiv>Search Currency</TitleDiv>
            <SearchBox />
        </ParentDiv>

    )
}

