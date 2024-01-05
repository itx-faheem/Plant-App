import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState, useMemo, useRef} from 'react';
import TaskCollasipbleArrowHeader from './TaskCollasipbleArrowHeader';
import Collapsible from 'react-native-collapsible';
import {COLORS, SIZES} from '../../../../../constants';
import GabeSean from './GabeSean';
import TaskCheckBoxComponent from './TaskCheckBoxComponent';
import AppBottomSheet from '../../../../../component/appcomponent/AppBottomSheet';

const BuysuppliesColl = ({threeDotsPress,addTaskComponentPress}) => {
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
          <TouchableOpacity
          onPress={addTaskComponentPress}
          activeOpacity={0.5} 
           style={styles.TouchableOpacityStyle} >
            <Text style={styles.textStyle} >Add Items</Text>
          </TouchableOpacity>
        </Collapsible>
      </View>
    </>
  );
};

export default BuysuppliesColl;

const styles = StyleSheet.create({
  textStyle:{
    fontSize:SIZES.font,
    color:COLORS.gray,
    fontWeight:"500",
  },
  TouchableOpacityStyle:{
    paddingHorizontal:32,
    paddingVertical:12
  }
});
