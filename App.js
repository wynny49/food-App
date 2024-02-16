
import Duolingo from "./components/Duolingo";
import Location from "./components/Location";
import Onboarding1 from "./components/Onboarding1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack= createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Duolingo' component={Duolingo} options={{headerShown: false}}/> 
      <Stack.Screen name="Location" component={Location} options={{headerShown: false}}/>
      <Stack.Screen name="Onboarding1" component={Onboarding1} options={{headerShown: false}}/>


    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;