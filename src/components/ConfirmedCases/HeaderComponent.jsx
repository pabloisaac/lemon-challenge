import React from "react";
import { View } from "react-native";
import { Divider } from 'react-native-elements';
import _ from 'lodash';
import ToolbarOrder from "./ToolbarOrder";
import TitleComponent from "./TitleComponent";

const HeaderComponent = () => {

    return (
        <View>
            <TitleComponent />
            <Divider orientation="horizontal" />
            <ToolbarOrder />
        </View>
    );
};

export default HeaderComponent;