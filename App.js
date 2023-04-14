
import { StyleSheet, View } from 'react-native';
import Main from './src/screens/Main'

export default function App() {
  return (
    <View style={styles.container}>
<Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
