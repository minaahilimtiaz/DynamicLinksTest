import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/button';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

const FirstOption: React.FC = () => {
  const navigation = useNavigation();
  function navigateToNestedOneOptions() {
    navigation.navigate('FirstNested');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Using FAST IMAGE'}</Text>
      <Button
        text={'Move to next screen'}
        onPress={navigateToNestedOneOptions}
      />
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri:
            'https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=750&name=plan%20gif%20marketing%20strategy.gif',
          priority: FastImage.priority.normal,
        }}
      />
    </View>
  );
};

export default FirstOption;
