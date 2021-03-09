import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
interface Props {
  text: string,
  onPress: () => void;
}
const Button: React.FC<Props> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
