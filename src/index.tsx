import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type BadgeProps = {
  text: string;
  bgColor: string;
  textColor: string;
  width?: number;
  height?: number;
  icon?: string;
};

const Badge = ({
  text,
  bgColor = '#007AFF',
  textColor = 'white',
  width,
  height = 30,
  icon,
}: BadgeProps) => {
  const containerStyle = {
    backgroundColor: bgColor,
    minHeight: height,
    ...(width && { width }),
  };

  return (
    <View style={[styles.badgeContainer, containerStyle]}>
      {icon && (
        <Ionicons
          name={icon as any}
          size={20}
          color={textColor}
          style={styles.iconStyle}
        />
      )}
      <Text style={[styles.badgeText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    minWidth: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '500',
  },
  iconStyle: {
    marginRight: 5,
  },
});

export default Badge;
