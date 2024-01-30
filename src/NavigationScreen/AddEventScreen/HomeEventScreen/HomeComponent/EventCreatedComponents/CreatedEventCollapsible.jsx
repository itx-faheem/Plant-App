import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import AppICon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../../constants';
import CreatedCollapsibleComponent from './CreatedCollapsibleComponent';

const CreatedEventCollapsible = ({delegatesPresAction,addTaskOnPress}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <Text style={styles.actionText}>Quick Actions</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
          <AppICon
            name={isCollapsed ? 'down' : 'up'}
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>
      <Collapsible collapsed={isCollapsed}>
        <CreatedCollapsibleComponent
        addTaskOnPress={addTaskOnPress}
          delegatesPresAction={delegatesPresAction}
        />
      </Collapsible>
    </View>
  );
};

export default CreatedEventCollapsible;

const styles = StyleSheet.create({
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.white,
  },
  actionText: {
    fontFamily: '600',
    fontSize: SIZES.font,
    color: COLORS.black,
  },
});
