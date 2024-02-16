import { Text, Image, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding1 from "./Onboarding1";

const Location = () => {

    const Navigation= useNavigation()
    return (<View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", height: '100%' }}>

        <Text style={{ height: '10%', marginTop: "10%" }}>Explore restaurant nearby</Text>


        <View style={{ alignItems: 'center', justifyContent: 'center', height: '80%' }}>
            <Image source={require('../assets/pana.png')} style={{ marginTop: '80%', width: 150, height: 150 }} />

            <Text style={{ marginTop: 20 }}>By granting permission, you can search for restaurants </Text>
            <Text> around you and receive more accurate delivery </Text>

            {/* Button for Grant Permission */}
            <TouchableOpacity style={{ borderRadius: 16, backgroundColor: '#EC1C23', padding: 24, width: 312, marginTop: '10%' }}
            onPress={()=>Navigation.navigate(Onboarding1)}>

                <Text style={{ fontSize: 17, fontWeight: '600', color: 'white', textAlign: "center", }}>Grant Permission</Text>
            </TouchableOpacity >

        </View>
    </View>
    )
}

export default Location 