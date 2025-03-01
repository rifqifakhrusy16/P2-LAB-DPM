import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tugas PRAK DPM</Text>
      <Text style={styles.text}>RIFQI FAKHRUSY</Text>
      <Text style={styles.text}>223510477</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>\
        <View style={styles.box3}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
    color: 'blue',
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '80%', 
  },
  box1: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'red', 
    width: 100,
    height: 100,
  },
  box3: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
});