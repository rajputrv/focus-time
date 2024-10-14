import { useState } from 'react';
import { View, StyleSheet ,Text, Vibration} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/countDown';
import { RoundedButton } from '../components/roundedButton';
import {spacing} from '../utils/size';
import {colors } from '../utils/color';
import {Timing} from './Timing'

const PATTERN = [
    1 *  1000,
     //*1000 to convert into seconde so it is 1000ms or 1sec
    1*1000, 
    // vibrate 1000ms after first vibration ie at 2nd second
    1*1000,
    1*1000,
    1*1000,
]
//vibratuon component take an array of pattern as input

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes= {minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{paddingTop: spacing.xxl }}>
        <Text style={styles.title}> Focusing On </Text>
        <Text style= {styles.task}> {focusSubject}</Text>
         </View>
      </View>
      <View style={{paddingTop: spacing.sm}}>
      <ProgressBar 
      progress={progress}
      color={colors.progressBar}
      style={{height: 10 }}

      />
      </View>
       <View style={styles.timingWrapper}>
      <Timing onChangeTime= {setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause"  onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper} >
      <RoundedButton size={50} title={"Clear"} onPress = { clearSubject} />
      </View>
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',

  },

  title:{
    color: colors.white,
    fontWeight: 'bold' ,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems:'center' ,
    justifyContent: 'center',

  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,

  }
});




















