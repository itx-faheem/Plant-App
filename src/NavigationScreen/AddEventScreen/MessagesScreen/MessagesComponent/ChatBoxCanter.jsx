import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useRef} from 'react';
import {COLORS, SIZES, images} from '../../../../../constants';
import AppIconCheck from 'react-native-vector-icons/FontAwesome6';

const ChatBoxCanter = ({item, chatRef}) => {
  console.log(item.img);
  const data = [
    {read: 'Read', time: '1 min ago ', user: 'me', text: 'Hello!'},
    {img: item.img, time: '1 min ago ', user: 'you', text: 'Hi there!'},
    {time: '1 min ago ', user: 'me', text: 'How are you?', read: 'Read'},
    {img: item.img, time: '1 min ago ', user: 'you', text: "I'm good, thanks!"},
    {time: '1 min ago ', user: 'me', text: 'What are you up to?', read: 'Read'},
    {
      img: item.img,
      time: '1 min ago ',
      user: 'you',
      text: 'Just working on some coding projects. How about you?',
    },
    {
      time: '1 min ago ',
      user: 'me',
      text: 'That sounds interesting. I am working on a new app.',
      read: 'Read',
    },
    {
      img: item.img,
      time: '1 min ago ',
      user: 'you',
      text: 'Nice! What kind of app are you building?',
    },
    {
      time: '1 min ago ',
      user: 'me',
      text: "It's a social networking app for developers.",
      read: 'Read',
    },
    {
      img: item.img,
      time: '1 min ago ',
      user: 'you',
      text: 'Cool!  love to hear more about it.',
    },
  ];
  const ChatInnerHeader = () => {
    return (
      <View style={styles.ChatInnerHeaderStyle}>
        <Image style={styles.headerStyle} source={item.img} />
        <Text style={styles.nameStyle}>{item.name}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <View style={styles.mapContainer}>
      <View
        style={{
          flexDirection: item.user === 'you' ? 'row' : null,
          alignItems: 'center',
          gap: 8,
        }}>
        {item.user === 'you' && (
          <Image style={styles.imgStyle} source={item.img} />
        )}
        <Text
          style={{
            alignSelf: item.user === 'me' ? 'flex-end' : 'flex-start',
            backgroundColor:
              item.user === 'me' ? COLORS.primary : COLORS.secondary,
            maxWidth: '80%',
            paddingVertical: 8,
            paddingHorizontal: 16,
            color: item.user === 'me' ? COLORS.white : COLORS.black,
            fontSize: SIZES.font,
            fontWeight: '500',
            borderRadius: 16,
            borderBottomLeftRadius: item.user === 'you' ? 0 : null,
            borderBottomRightRadius: item.user === 'me' ? 0 : null,
          }}>
          {item.text}
        </Text>
      </View>
      {item.user === 'you' && (
        <Text style={{marginTop: '2%', ...styles.textTimeStyle}}>
          {item.time}
        </Text>
      )}
      {item.user === 'me' && (
        <View style={styles.meTimeWrapper}>
          <Text style={styles.textTimeStyle}>{item.time}</Text>
          <View style={styles.dotStyle}></View>
          <Text style={styles.textTimeStyle}>{item.read}</Text>
          <AppIconCheck color={COLORS.black} size={10} name="check-double" />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ChatInnerHeader />
      <FlatList
        ref={chatRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ChatBoxCanter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 14,
    gap: 12,
  },
  ChatInnerHeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  headerStyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 40,
  },
  nameStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '600',
  },
  mapContainer: {
    paddingVertical: 3,
  },
  imgStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    top: '4%',
  },
  dotStyle: {
    backgroundColor: COLORS.gray,
    height: 6,
    width: 6,
    borderRadius: 3,
    alignSelf: 'center',
    top: '0.4%',
  },
  meTimeWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  textTimeStyle: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
