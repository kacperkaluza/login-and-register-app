import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Password:</Text>
                <TextInput style={styles.input} />
                <Button style={styles.submit} title='Log In' />
            </View>

            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        color: "#fff",
    },
    input: {
        backgroundColor: "#fff",
    },
});
