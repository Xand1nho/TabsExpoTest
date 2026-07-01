
import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Text style={s.List}>
        Pagina Lista
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  List: {
    fontSize: 32,
  },
});
