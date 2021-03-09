/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  const DOMAIN_URL = 'https://kinspiretesting.page.link';

  async function buildLink(): Promise<string> {
    const link = DOMAIN_URL + '/?mail=' + 'minaahilimtiaz@gmail.com';
    const dynamicLink = await dynamicLinks().buildShortLink({
      link: link,
      domainUriPrefix: DOMAIN_URL,
      android: {packageName: 'com.dynamiclinkstest'},
    });
    console.log(dynamicLink);
    return dynamicLink;
  }

  const handleDynamicLink = (link: any) => {
    if (link?.url.includes(DOMAIN_URL)) {
      console.log('in handle dynamic link');
      console.log(link);
      const email = parseDynamicLinkUrl(link.url);
      console.log(email);
    }
  };

  function parseDynamicLinkUrl(url: string): string | null {
    const splitArray = url.split('?mail=');
    return splitArray.length > 1 ? splitArray[1] : null;
  }

  useEffect(() => {
    console.log('foreground');
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log('background');
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        handleDynamicLink(link);
      })
      .catch((err) => console.log(err.toString()));
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={buildLink}>
        <Text>{'Click to generate dynamic link'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
