
import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Text style={s.title}>
        Pagina Index
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});
