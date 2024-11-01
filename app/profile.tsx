import { StyleSheet, Text, View } from "react-native";

export default function Screen(){    

    return(
        <View style={styles.container}>
            <Text>Tela Profile</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
})