import React, {useEffect} from 'react';
import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Strings from '../constants/strings';

const EventDetailsScreen: React.FC<{route: any; navigation: any}> = ({
  route,
  navigation,
}) => {
  const {event} = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{uri: event.image}} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Text style={styles.detailsTxt}>{event.details}</Text>
      <CustomButton
        title={Strings.bookNow}
        buttonStyle={styles.btnStyle}
        onPress={() => navigation.navigate('Booking', {event})}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 22,
    fontWeight: '900',
  },
  detailsTxt: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  btnStyle: {
    width: wp('80%'),
  },
});

export default EventDetailsScreen;
