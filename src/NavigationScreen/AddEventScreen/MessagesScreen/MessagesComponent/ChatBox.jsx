import React, {useRef, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBottom from './ChatBottom';
import {COLORS} from '../../../../../constants';
import ChatBoxCanter from './ChatBoxCanter';

const ChatBox = ({navigation, route}) => {
  const {item} = route?.params;
  const chatRef = useRef(null);
  const textInputRef = useRef(null);

  const handleUseRef = () => {
    if (!textInputRef?.current?.isFocused()) {
      chatRef?.current?.scrollToEnd();
    }
  };

  return (
    <View style={styles.container}>
      <ChatBoxHeader item={item} leftOnPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false} ref={chatRef}>
        <View>
          <ChatBoxCanter chatRef={chatRef} item={item} />
        </View>
      </ScrollView>
      <ChatBottom textInputRef={handleUseRef} />
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: COLORS.white,
  },
});
