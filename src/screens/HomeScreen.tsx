import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard';
import events from '../data/events';



const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} onPress={() => navigation.navigate('EventDetails', { event: item })} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10,
},
});

export default HomeScreen;
