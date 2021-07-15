import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateCases } from "../../store/actions";
import { AppContext } from '../../store/reducer';
import _ from 'lodash';

const ToolbarOrder = () => {
    const { state, dispatch } = useContext(AppContext);
    const [sortDate, setSortDate] = useState('desc')
    const [sortCases, setSortCases] = useState('desc')

    const sortList = (mode) => {
        if (mode === 'Date') {
            setSortDate(sortDate === 'asc' ? 'desc' : 'asc')
        }
        if (mode === 'Cases') {
            setSortCases(sortCases === 'asc' ? 'desc' : 'asc')
        }
        let arrSort = _.orderBy(state.listCases, [mode], [mode === 'Date' ? sortDate : sortCases]);
        dispatch(updateCases(arrSort))
    }
    return (
            <View style={styles.contentBtn}>
                <Button
                    style={styles.btn}
                    icon={
                        <Icon
                            name={sortDate === "asc" ? 'arrow-up' : 'arrow-down'}
                            size={20}
                            color="white"
                        />
                    }
                    disabled={state.listCases.length === 0}
                    title="Ordenar por Fecha"
                    onPress={() => sortList('Date')}
                />
                <Button
                    style={styles.btn}
                    icon={
                        <Icon
                            name={sortCases === "asc" ? 'arrow-up' : 'arrow-down'}
                            size={20}
                            color="white"
                        />
                    }
                    disabled={state.listCases.length === 0}
                    title="Ordenar por Casos"
                    onPress={() => sortList('Cases')}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    contentBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        flexDirection: 'row',
        margin: 15,
    }
});

export default ToolbarOrder;