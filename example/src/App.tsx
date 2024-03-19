import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Badge from 'bz-rn-badge';

export default function App() {
  return (
    <View style={styles.container}>
      <Badge
        text="Label"
        bgColor="#007AFF"
        textColor="white"
        height={30}
        icon="accessibility"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
