import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import CreateEventHeaderimg from './CreateEventHeaderimg';
import CreateEventText from './CreateEventText';
import {COLORS, SIZES} from '../../../../../../constants';
import CreatedEventCollapsible from './CreatedEventCollapsible';
import CreatedDelegatesFile from './CreatedDelegatesFile';
import {Tasksfile} from '../../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent';
import TaskCollapsibleCreated from './TaskCollapsibleCreated';
import FinancialPlus from '../../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/InputFinancialOverView/FinancialPlus';
import FinancialPlusCollapsible from './FinancialPlusCollapsible';

const heightDimensions = Dimensions.get('screen').height;
const MainCreateComponent = ({navigation, delegatesPress}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={{height: '45%', flex: 1}}>
        <CreateEventHeaderimg onbackCross={() => navigation.goBack()} />
      </View>
      <CreateEventText />
      <CreatedEventCollapsible
        delegatesPresAction={() => navigation.navigate('DelegatesSupplies')}
        addTaskOnPress={() => navigation.navigate('AddTaskFileAction')}
      />
      <CreatedDelegatesFile
        delegatesPress={() => navigation.navigate('DelegatesSupplies')}
      />
      <Tasksfile
        tintColor={{tintColor: COLORS.gray}}
        style={styles.textColor}
        backgroundColor={{backgroundColor: COLORS.secondary}}
      />
      <TaskCollapsibleCreated />
      <FinancialPlus />

      <FinancialPlusCollapsible />
    </ScrollView>
  );
};

export default MainCreateComponent;

const styles = StyleSheet.create({
  textColor: {
    color: COLORS.gray,
    fontSize: SIZES.font,
    fontWeight: '500',
  },
});
