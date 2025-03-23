import React from 'react';
import {Text, Alert, StyleSheet, ScrollView, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import Strings from '../constants/strings';
import Colors from '../constants/colors';

const BookingSchema = Yup.object().shape({
  name: Yup.string().required(Strings.validation.name),
  email: Yup.string()
    .email(Strings.validation.emailInvalid)
    .required(Strings.validation.email),
  phone: Yup.string()
    .matches(/^\d+$/, Strings.validation.phoneInvalid)
    .required(Strings.validation.phone),
});

const BookingScreen: React.FC<{route: any; navigation: any}> = ({
  route,
  navigation,
}) => {
  const {event} = route.params;

  const onOkClick=()=>{
    navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      })
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Register for {event.title}</Text>
      <Image source={{uri: event.image}} style={styles.image} />
      <Formik
        initialValues={{name: '', email: '', phone: ''}}
        validationSchema={BookingSchema}
        onSubmit={values => {
          Alert.alert(
            Strings.bookingSuccessTitle,
            Strings.bookingSuccessMessage(values.name, values.email),
            [
              {
                text: 'OK',
                onPress: () =>onOkClick()
              },
            ],
          );
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <InputField
              placeholder={Strings.namePlaceholder}
              keyboardType="default"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
            <InputField
              placeholder={Strings.emailPlaceholder}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <InputField
              placeholder={Strings.phonePlaceholder}
              keyboardType="phone-pad"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}
            <CustomButton
              title={Strings.bookEvent}
              buttonStyle={styles.btnStyle}
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'baseline',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  error: {
    color: Colors.red,
    fontSize: 12,
    marginBottom: 10,
  },
  btnStyle: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default BookingScreen;
