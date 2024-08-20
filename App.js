import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>All work and no play makes Alie a dull girl.</Text>
            <Text>All work and no play makes Alie a dull girl.</Text>
            <Text>All work and no play makes Alie a dull girl.</Text>
            <Text>All work and no play makes Alie a dull girl.</Text>
            <Text>All work and no play makes Alie a dull girl.</Text>
            <Text>All work and no play makes Alie a dull girl.</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
