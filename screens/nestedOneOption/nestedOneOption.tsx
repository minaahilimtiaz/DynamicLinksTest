import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const NestedOneOption: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Using FRESCO support'}</Text>
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri:
            'https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=750&name=plan%20gif%20marketing%20strategy.gif',
        }}
      />
    </View>
  );
};

export default NestedOneOption;
