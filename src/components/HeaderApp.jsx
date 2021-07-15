import React, { useContext } from "react";
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';
import { AppContext } from '../store/reducer';
import { setLogin, updateCases, setSlug, setUserInfo } from "../store/actions";
import * as Google from "expo-google-app-auth";
import { config } from '../utils/configs';

const HeaderApp = ({ navigation }) => {
    const { state, dispatch } = useContext(AppContext);

    const Test = () => {
        return <Icon
            name='logout'
            type='icon'
            color='#fff'
            onPress={logoutInAsync} />
    }

    const logoutInAsync = async () => {
        let accessToken = state.userInfo.accessToken
        await Google.logOutAsync({ accessToken, ...config });
        dispatch(setLogin(false))
        dispatch(updateCases([]))
        dispatch(setSlug(undefined))
        dispatch(setUserInfo([]))
        navigation.navigate('Login');
      };

    return (
        <Header
            centerComponent={{ text: 'Lemon', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
            rightComponent={state.isLogged && <Test/>}
        />
    );
};


export default HeaderApp;