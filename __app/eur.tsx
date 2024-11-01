import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "./components/button";
import { getEUR } from "../services/api";

export default function Screen(){
    const [ loading, setLoading ] = useState(true)
    const [ currentValue, setCurrentValue ] = useState<number>(0)

    const updateCurrency = async() => {
        setLoading(true)
        const euro = await getEUR()
        setLoading(false)
        setCurrentValue(euro)
    }

    useEffect(()=>{
        updateCurrency();
    },[])

    return(
        <View>
            <Image 
                source={require('../assets/euro.png')} 
                resizeMode="contain"
                style={{width:200, justifyContent:'center', alignItems:'center'}}
            />

            {loading &&
                <Text> Carregando... </Text>
            }

            {!loading &&
            <>
                <Text>Value API R${currentValue.toFixed(2)}</Text>
                <Button 
                    label="Refresh" 
                    onPress={ updateCurrency } 
                />
            </>
            }
        </View>
    )
}