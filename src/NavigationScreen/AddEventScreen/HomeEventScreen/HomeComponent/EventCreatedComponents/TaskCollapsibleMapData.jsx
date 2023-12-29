import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { images } from '../../../../../../constants';

const TaskCollapsibleMapData = () => {
  const data = [
    { title: 'Task 1', img: images.Sean, img2: images.Adam, name: 'Gabe, Sean', Pending: 'Pending' },
    { title: 'Task 2', img: images.Adam, name: 'Sean', Pending: 'Completed' }
  ];

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.title}</Text>
          <View>
            <View>
                <Image source={item.img} />
                {
                    item.title === "Task 1"?  <Image source={ item.img2} /> : null
                }
               
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TaskCollapsibleMapData;

const styles = StyleSheet.create({});
