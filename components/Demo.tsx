import React from 'react';
import {Text, View} from 'react-native';

export interface DemoProps {
  loading?: boolean;
}

export const Demo: React.FC<DemoProps> = ({loading}) => {
  return (
    <View>
      <Text>{loading ? '...' : 'done'}</Text>
    </View>
  );
};
