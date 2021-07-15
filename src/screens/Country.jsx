import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { getConfirmedCases } from "../services/api";
import * as StatusConstants from '../constants/status'
import * as MessagesConstants from '../constants/messages'
import FlatComponent from "../components/FlatComponent";
import HeaderApp from "../components/HeaderApp";
import { AppContext } from '../store/reducer';
import { setSlug, updateCases } from "../store/actions";
import { showMessage } from "react-native-flash-message";

const Country = ({ navigation, route }) => {
  const { dispatch } = useContext(AppContext);
  const list = route.params.list;

  const onPress = async (item) => {
    let slug = item.Slug
    let response = await getConfirmedCasesBySlug(slug)
    dispatch(updateCases(response))
    dispatch(setSlug(slug))
    navigation.navigate('Lemon', { screen: 'Casos Confirmados' });
  }

  const getConfirmedCasesBySlug = async (slug) => {
    let response = await getConfirmedCases(slug)
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
      <HeaderApp navigation={ navigation } />
      <FlatComponent info={list} fncEvn={onPress} mode='country' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Country;