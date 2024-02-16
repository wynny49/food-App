import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Duolingo=() =>{
const Navigation= useNavigation()


    return(<View style={{ backgroundColor: "black", height: "100%", alignItems: 'center', justifyContent: 'center' }}>

    <Image source={require('./../assets/duolingo-logo.png')} />

    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#2bd800', marginTop: 20 }}>duolingo</Text>

    <Text style={{ color: "white", width: 255, fontSize: 18, textAlign: "center" }}>The free, fun and effective to learn a language!</Text>

    <View style={{marginTop:120}}>

      {/* Button for Get started */}
      <TouchableOpacity style={{ borderRadius: 16, backgroundColor: '#2BD800', padding: 24, width: 312, }}
      onPress={()=>Navigation.navigate('Location')}>

        

        <Text style={{ fontSize: 17, fontWeight: '600', color: '#191920', textAlign: "center", }}>GET STARTED</Text>
      </TouchableOpacity >

      {/* Button for I have an account */}
      <TouchableOpacity style={{ borderRadius: 16, backgroundColor: '#191920', padding: 24, width: 312, borderWidth: 2, borderColor:"#525D7870", marginTop: 20, }}>

        <Text style={{ fontSize: 17, fontWeight: '600', color: '#2BD800', textAlign: "center", }}> I HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>

  </View>
)
}


export default Duolingo;