import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import TaskCollasipbleArrowHeader from './TaskCollasipbleArrowHeader';
import Collapsible from 'react-native-collapsible';
import {COLORS, SIZES} from '../../../../../constants';
import GabeSean from './GabeSean';
import TaskCheckBoxComponent from './TaskCheckBoxComponent';

const SetupCollasipble = () => {
  const [handleCollapsibleBuy, sethandleCollapsibleBuy] = useState(false);
  const handleupdown = () => {
    sethandleCollapsibleBuy(!handleCollapsibleBuy);
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
      }}>
      <TaskCollasipbleArrowHeader
        collapsibletitle="Set up"
        sethandleCollapsibleBuy={sethandleCollapsibleBuy}
        handleupdown={handleupdown}
        name={handleCollapsibleBuy ? 'down' : 'up'}
      />
      <GabeSean />
      <Collapsible collapsed={handleCollapsibleBuy}>
        <View>
          <TaskCheckBoxComponent />
        </View>
        <View>
          <TextInput
            placeholder="Add Items"
            placeholderTextColor={COLORS.gray}
            style={styles.inputStyle}
          />
        </View>
      </Collapsible>
    </View>
  );
};

export default SetupCollasipble;

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 32,
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
