import react from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';

const FirstScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcomoe to the FirstScreen</Text>
            <Button title='Go to Second Screen' onPress={() =>{props.navigation.navigate("pamja2")}}/>
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

export default FirstScreen;