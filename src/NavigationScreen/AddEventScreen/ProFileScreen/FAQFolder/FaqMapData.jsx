import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants';

const FaqMapData = () => {
  const data = [
    {
      question: 'How do I add delegates to an event?',
      ans: 'Click the add button on the “Events” tab',
      q: 'Q :',
      a: 'A :',
    },
    {question: 'Is this app cool?', ans: 'Yessir', q: 'Q :', a: 'A :'},
    {
      question: 'How do I upgrade my subscription?',
      ans: 'Click profile > subscriptions > upgrade features',
      q: 'Q :',
      a: 'A :',
    },
    {
      question: 'How do I sync an e-vite?',
      ans: 'Not sure yet will let you know soon though',
      q: 'Q :',
      a: 'A :',
    },
  ];
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
      }}>
      {data.map((item, index) => {
        return (
          <View  
          style={{
            paddingVertical:10,
            paddingHorizontal:14,
            borderWidth:1,
            borderColor:COLORS.secondary,
            gap:3
          }} key={index}>
            <View style={styles.questionWrapper}>
              <Text style={styles.aAndQStyle}>{item.q}</Text>
              <Text style={styles.qusetionStyle}>{item.question}</Text>
            </View>
            <View style={styles.questionWrapper}>
              <Text style={styles.aAndQStyle}>{item.a}</Text>
              <Text style={styles.ansStyle}>{item.ans}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FaqMapData;

const styles = StyleSheet.create({
  questionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  qusetionStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  aAndQStyle: {
    fontSize: SIZES.font,
    color: COLORS.gray,
  },
  ansStyle: {
    fontSize: SIZES.medium,
    color:COLORS.gray,
    fontWeight:"500"
  },
});
