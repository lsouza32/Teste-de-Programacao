import { Header } from "../../components/Header";
import { InputClients } from "../../components/InputClients";
import { InputProducts } from "../../components/InputProducts";
import { Body, Card } from "./styles";

export function Home(){
    return(
        <>
        <Header/>
        <Body>            
            <Card>
                <InputClients/>
            </Card>

            <Card>
                <InputProducts/>
            </Card>
        </Body>
        </>
    )
}