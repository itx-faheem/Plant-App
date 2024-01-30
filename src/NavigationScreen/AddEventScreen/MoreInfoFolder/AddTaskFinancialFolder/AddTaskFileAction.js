import React, { useRef, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Pressable, Alert } from 'react-native';
import {
    FinancialHeader,
    Collapfile,
    Tasksfile,
} from './AddTaskFinancialFolderComponent';
import {
    FinancialInput,
    FinancialPlus,
} from './AddTaskFinancialFolderComponent/InputFinancialOverView';
import MainBottomOverView from './AddTaskFinancialFolderComponent/BottomComponentOverView/MainBottomOverView';
import AppBottomSheet from '../../../../../component/appcomponent/AppBottomSheet';
import AssignBottomComponent from './AddTaskFinancialFolderComponent/BottomComponentOverView/AssignBottomComponent';

const heightDimensions = Dimensions.get('window').height;
const AddTaskFileAction = ({ navigation }) => {
    const [showSheet, setshowSheet] = useState(false);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['34%', '34%'], []);

    const handlePress = () => {
        setshowSheet(true);
        bottomSheetRef?.current?.expand();

    };

    const onCloseFunction = () => {
        setshowSheet(false);
        bottomSheetRef.current?.close();
    };
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={true}>
                <FinancialHeader onbackCross={() => navigation.goBack()} />
                <View>
                    <Tasksfile />
                    <Collapfile />
                    <FinancialInput />
                    <FinancialPlus />
                    <MainBottomOverView handlePress={handlePress} bref={bottomSheetRef} />
                </View>
            </ScrollView>
            {showSheet && (
                <AppBottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    cancleBtn={onCloseFunction}
                    backDropBottomProp={onCloseFunction}
                    onTouchStart={onCloseFunction}
                    save="Save" cancelprops="Cancel" titleProps="Assign to"
                >
                    <AssignBottomComponent />
                </AppBottomSheet>
            )}
        </>
    );
};

export default AddTaskFileAction;

const styles = StyleSheet.create({
    PressableInner: {
        width: '100%',
        height: heightDimensions,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
    },
});
