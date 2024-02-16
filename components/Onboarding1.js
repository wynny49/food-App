import { Text, Image, View, Button, TouchableOpacity } from "react-native";

const Onboarding1=() =>{
    return (<View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", height: '100%' }}>

    <Image source={require('../assets/Frame79.png')} style={{ height: 300, width:300, marginTop:'40%'}} />
    <Text style={{ marginTop:30, fontSize: 30, fontWeight:"bold", color: "black",  }}> Quench your cravings</Text>
    <Text style={{ marginTop:10, color: 'black', fontSize: 16, textAlign: "center"}} > Find your favourite meal for your favourite </Text>
    <Text style={{ color: 'black', fontSize: 16, textAlign: "center"}} > restaurants and we will deliver it to your dooor </Text>
    <Text style={{ color: 'black', fontSize: 16, textAlign: "center"}} > step </Text>

     {/* Button for Get started */}
     <TouchableOpacity style={{ marginTop: 20, borderRadius: 16, backgroundColor: '#EC1C23', padding: 24, width: 312, }}>

<Text style={{ fontSize: 17, fontWeight: '600', color: 'white', textAlign: "center", }}>Next</Text>
</TouchableOpacity >

    </View>
    )
}
export default Onboarding1