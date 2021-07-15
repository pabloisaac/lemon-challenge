import React, { useContext } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { SocialIcon } from 'react-native-elements';
import { setLogin, setUserInfo } from "../store/actions";
import { getCountries } from "../services/api";
import * as StatusConstants from '../constants/status';
import * as MessagesConstants from '../constants/messages';
import * as Google from "expo-google-app-auth";
import { AppContext } from '../store/reducer';
import HeaderApp from "../components/HeaderApp";
import { config } from '../utils/configs';
import { showMessage } from "react-native-flash-message";

const LoginScreen = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);

  const signInAsync = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync(config);

      if (type === "success") {
        dispatch(setLogin(true))
        dispatch(setUserInfo({ user, 'accessToken': accessToken }))
        const list = await getListCountries()
        navigation.navigate('Lemon', { screen: 'Paises', params: { list } });
      }
    } catch (error) {
      showMessage({
        message: MessagesConstants.FAILURE,
        description: `Error with login || ${error}`,
        type: "danger",
        icon: { icon: "danger", position: "left" }
      });
    }
  };

  const getListCountries = async () => {
    let response = await getCountries()
    if (response.status === StatusConstants.STATUS_OK) {
      return response.data
    } else {
      showMessage({
        message: MessagesConstants.FAILURE,
        description: response.message,
        type: "danger",
        icon: { icon: "danger", position: "left" }
      });
    }
  }

  return (
    <View style={styles.container}>
      <HeaderApp navigation={navigation} />
      <View style={styles.container}>
        <ImageBackground
          source={require('../image/lemon.png')}
          resizeMode="stretch"
          style={styles.container} />
      </View>
      <View style={styles.center}>
        <SocialIcon
          title='Sign In With Google'
          button
          onPress={signInAsync}
          type='google'
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 1
  }
});

export default LoginScreen;