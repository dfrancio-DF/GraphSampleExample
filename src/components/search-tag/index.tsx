import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SearchTagPropsType} from './types';
import {styles} from './styles';

export const SearchTag = (props: SearchTagPropsType) => {
  const {onPress, tag} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.tagText}>{`#${tag}`}</Text>
    </TouchableOpacity>
  );
};
