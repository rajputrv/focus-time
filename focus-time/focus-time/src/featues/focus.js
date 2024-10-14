import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/color';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';
import { spacing } from '../utils/size';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  // subject <- setSubject(val) when  we added onchangeText = {setsubject} +> the val of inp;ut is stored into subject

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={60}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 'auto',
  },
  // text: {
  //   color: colors.white,
  // },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
