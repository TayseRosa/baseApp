import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{
                        title:"Page 1"
                    }}
                />

                <Drawer.Screen 
                    name="eur"
                    options={{
                        title:"Page 2"
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}