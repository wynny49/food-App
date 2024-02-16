import { Text, Image, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Onboarding2 = () => {
    const Navigation= useNavigation()

    return (<View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", height: '100%' }}>

        <Image source={require('../assets/Frame2.png')} style={{ height: 300, width: 300, marginTop: '40%' }} />

        <Text style={{ marginTop: 30, fontSize: 30, fontWeight: "bold", color: "black", }}> Discover new cuisines</Text>

        <Text style={{ marginTop: 10, color: 'black', fontSize: 14, textAlign: "center" }} > From local favourite to global delights, find the </Text>

        <Text style={{ marginTop: 10, color: 'black', fontSize: 14, textAlign: "center" }} > perfect dish for every taste </Text>

        {/* Button Next */}
        <TouchableOpacity style={{ marginTop: 20, borderRadius: 16, backgroundColor: '#EC1C23', padding: 24, width: 312, }}>

            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white', textAlign: "center", }}>Next</Text>
        </TouchableOpacity >


    </View>)
}

export default Onboarding2