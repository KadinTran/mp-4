import getRates from "@/lib/getRates";
import RateDisplay from "@/components/RateDisplay";
import {TitleDiv, ParentDiv} from "@/styles/styles";

export default async function Home(){
  const data = await getRates("USD")
  return(
      <ParentDiv>
        <TitleDiv> USD Conversions</TitleDiv>
        <RateDisplay data={data}/>
      </ParentDiv>

  )
}

