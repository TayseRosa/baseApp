import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){
    const handleClick = () => {
        router.navigate('/about')
    }

    return(
        <View style={styles.container}>
            <Text>Tela Login</Text>

            <Link href='/' asChild>
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>
                        Ir para Home
                    </Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00ff00',
        borderRadius:6
    }
})