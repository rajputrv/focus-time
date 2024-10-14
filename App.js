import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import { colors } from './src/utils/color';
import { Focus } from './src/featues/focus';
import {FocusHistory} from "./src/featues/focusHistory";
import { Timer } from './src/featues/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
    <>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
             setHistory([...history, subject])}}
          clearSubject={() => {setCurrentSubject(null)}}
        />
      )}
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBLue,
  },
});
