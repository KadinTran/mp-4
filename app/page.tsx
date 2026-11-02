import getRates from "@/lib/getRates";
import RateDisplay from "@/components/RateDisplay";
import {TitleDiv, ParentDiv} from "@/styles/styles";
import Nav from "@/components/Nav";

export default async function Home(){
  const data = await getRates("USD")
  return(
      <ParentDiv>
          <Nav/>
          <TitleDiv> USD Conversions</TitleDiv>
          <RateDisplay data={data}/>
      </ParentDiv>

  )
}

