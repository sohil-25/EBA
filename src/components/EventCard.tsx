import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { EventType } from '../types/event';
import Colors from '../constants/colors';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  event: EventType;
  onPress: () => void;
};

const EventCard: React.FC<Props> = ({ event, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text>{event.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { 
    backgroundColor: Colors.white, 
    padding: 10, 
    marginVertical: 5, 
    borderRadius: 10,
    borderWidth:1,
    borderColor:Colors.primary,
    elevation:10,
    zIndex:20
  },
  image: { 
    width: '100%', 
    height: hp("20%"), 
    borderRadius: 10,
    resizeMode:"stretch"
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default EventCard;
