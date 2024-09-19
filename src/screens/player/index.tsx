import React from 'react';
import WebView from 'react-native-webview';
import {styles} from './styles';
import {PlayerRouteProp} from '../../routes/types';
import {useRoute} from '@react-navigation/native';
import {ENV} from '../../config';

export const PlayerScreen = () => {
  const route = useRoute<PlayerRouteProp>();

  const {videoID} = route.params;

  return (
    <WebView
      source={{uri: `${ENV.URLS.EMBED_VIDEO}/${videoID}`}}
      style={styles.fullScreen}
    />
  );
};
