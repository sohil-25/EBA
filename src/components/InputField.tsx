import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import Colors from '../constants/colors';

type Props = TextInputProps;

const InputField: React.FC<Props> = props => {
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholderTextColor={Colors.placeholder}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    width: '100%',
  },
});

export default InputField;
