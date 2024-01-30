import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {images} from '../../../../../constants';
import RenderItemMessage from './RenderItemMessage';

const FlatListMianFile = ({handlePress}) => {
  const data = [
    {
      id: 1,
      img: images.Adam,
      name: 'Adam Hollingworth',
      msg: 'Send a message',
      time: '4:25',
    },
    {
      id: 2,
      img: images.JoyceSueko,
      name: 'Joyce Sueko',
      msg: 'Hey how’s everything going?',
      time: '4:25',
      sent: 'Sent',
    },
    {
      id: 3,
      img: images.GabeDingemans,
      name: 'Gabe Dingemans',
      msg: 'Should I get an extra pack of paper...',
      time: '4:25',
      read: 'Read',
    },
    {
      id: 4,
      img: images.hatman,
      name: 'Gabe Dingemans',
      msg: 'Should I get an extra pack of paper...',
      time: '4:25',
    },
    {
      id: 5,
      img: images.SeanWiesner,
      name: 'Sean Wiesner',
      msg: 'We running a little late but should...',
      time: '4:25',
      read: 'Read',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RenderItemMessage
            handlepress={()=>handlePress(item)}
            item={item}
          />
        )}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={true}
      />
    </View>
  );
};

export default FlatListMianFile;

const styles = StyleSheet.create({});
