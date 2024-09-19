import {VideoFactoryType} from '../../factories/types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {PlayerNavigationProp, RootRoutes} from '../../routes/types';

export const VideoItem = (props: VideoFactoryType) => {
  const {channelTitle, thumbnail, title, id} = props;

  const navigation = useNavigation<PlayerNavigationProp>();

  function navigateToPlayerScreen() {
    navigation.navigate(RootRoutes.PLAYER, {videoID: id});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToPlayerScreen}>
      <Image style={styles.image} source={{uri: thumbnail}} />
      <View style={styles.descriptionArea}>
        <Text style={styles.titleText} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.channelText} numberOfLines={1}>
          {channelTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
