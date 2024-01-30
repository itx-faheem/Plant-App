import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BudgetingCollapsibleHeader from './BudgetingCollapsibleHeader';
import Collapsible from 'react-native-collapsible';
import CollapsibleData from './CollapsibleData';

const BudgetingCollapsible = ({CollapsibleDataPress}) => {
  const [handleCollapsible, sethandleCollapsible] = useState(false);

  const handlePress = () => {
    sethandleCollapsible(!handleCollapsible);
  };
  return (
    <View>
      <BudgetingCollapsibleHeader
        name={handleCollapsible ? 'down' : 'up'}
        downCollapsiblePress={handlePress}
      />

      <Collapsible collapsed={handleCollapsible}>
        <CollapsibleData CollapsibleDataPress={CollapsibleDataPress} />
      </Collapsible>
    </View>
  );
};

export default BudgetingCollapsible;

const styles = StyleSheet.create({});
