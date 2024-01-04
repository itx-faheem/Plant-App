import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useMemo, useRef} from 'react';
import TaskCollasipbleArrowHeader from './TaskCollasipbleArrowHeader';
import Collapsible from 'react-native-collapsible';
import {COLORS, SIZES} from '../../../../../constants';
import GabeSean from './GabeSean';
import TaskCheckBoxComponent from './TaskCheckBoxComponent';
import AppBottomSheet from '../../../../../component/appcomponent/AppBottomSheet';

const BuysuppliesColl = ({threeDotsPress}) => {
  const [handleCollapsibleBuy, sethandleCollapsibleBuy] = useState(false);
  const handleupdown = () => {
    sethandleCollapsibleBuy(!handleCollapsibleBuy);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.tertiary,
        }}>
        <TaskCollasipbleArrowHeader
          collapsibletitle="Buy supplies"
          sethandleCollapsibleBuy={sethandleCollapsibleBuy}
          threeDotsPress={threeDotsPress}
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
    </>
  );
};

export default BuysuppliesColl;

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 32,
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
