import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SecondOption: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Second Option'}</Text>
    </View>
  );
};

export default SecondOption;
