import { StyleSheet, Text, TouchableOpacity , View} from "react-native";
import { router } from "expo-router";

export default function Home() {

    const go = () => {
    router.push("/(tabs)")
  }
    

    return(
        
        <View>
            <Text> Inicial </Text>
            <TouchableOpacity onPress={go}>
                <Text> Ir para as tabs</Text>
            </TouchableOpacity>
        </View>
        
    )

}

const s = StyleSheet.create({
    title:{
        color: '#090909',
    }
    
})
