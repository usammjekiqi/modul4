import react from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const pamja = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcomoe to the pamja3</Text>
            <Button title='Go to pamja4' onPress={() =>{props.navigation.navigate("pamja4")}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
    },
});

export default pamja;