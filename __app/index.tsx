import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "./components/button";
import { getUSD } from "../services/api";

export default function Screen(){
    const [ loading, setLoading ] = useState(true)
    const [ currentValue, setCurrentValue ] = useState<number>(0)

    const updateCurrency = async() => {
        setLoading(true)
        const dolar = await getUSD()
        setLoading(false)
        setCurrentValue(dolar)
    }

    useEffect(()=>{
        updateCurrency();
    },[])

    return(
        <View>
            <Image 
                source={require('../assets/dolar.png')} 
                resizeMode="contain"
                style={{width:100}}
            />

            {loading &&
                <Text> Carregando... </Text>
            }

            <>
                
                <Text>Valor R${currentValue.toFixed(2)}</Text>
                <Button 
                    label="Refresh" 
                    onPress={ updateCurrency } 
                />
            </>
        </View>
    )
}
