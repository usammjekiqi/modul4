import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcomoe to the FirstScreen</Text>
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