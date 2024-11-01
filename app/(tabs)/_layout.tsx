import { Stack, Tabs } from "expo-router";
import Fontawesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout(){

    return(
        <Tabs screenOptions={{ headerShown:false, tabBarActiveTintColor:'#661b1b' }} >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title:'Home',
                    tabBarIcon: ({color}) => <Fontawesome size={28} name="home" color={color} /> 
                }}
            />


            <Tabs.Screen 
                name="about" 
                options={{ 
                    title:'About',
                    tabBarIcon: ({color}) => <Fontawesome size={28} name="user" color={color} /> 
                }}
            />

            <Tabs.Screen 
                name="termos" 
                options={{ 
                    title:'Termos de uso',
                    tabBarIcon: ({color}) => <Fontawesome size={28} name="user" color={color} /> 
                }}
            />

            <Tabs.Screen 
                name="auth/login" 
                options={{ 
                    title:'Termos de uso',
                    tabBarIcon: ({color}) => <Fontawesome size={28} name="keyboard-o" color={color} /> 
                }}
            />

        </Tabs>
    )
}