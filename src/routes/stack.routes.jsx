import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Apresentacao from "../screens/Apresentacao";
import Filme01 from "../screens/Filme01";
import Filme02 from "../screens/Filme02"

const Stack = createNativeStackNavigator();

const StackRoutes = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="Apresentacao" component={Apresentacao} />
            <Stack.Screen name="Filme01" component={Filme01} />
            <Stack.Screen name="Filme02" component={Filme02} />
        </Stack.Navigator>
    );
};

export default StackRoutes;