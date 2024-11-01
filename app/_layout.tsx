import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout(){

    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{drawerLabel:'Home', headerTitle:'Home'}}
                />

                <Drawer.Screen 
                    name="(tabs)"
                    options={{drawerLabel:'Drawer Tabs', headerTitle:'Tabs'}}
                />
            </Drawer>
            
        </GestureHandlerRootView>
    )
}