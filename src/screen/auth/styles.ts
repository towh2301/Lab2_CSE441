import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#EF506B"
    }
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 48
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: AppTheme.colors.primary,
        marginBottom: 24,
        marginTop: 72
    },
    input: {
        width: '100%',
        borderColor: AppTheme.colors.border,
        borderWidth: 1,
        marginTop: 12,
        borderRadius: 10,
        paddingLeft: 12
    },
    button: {
        backgroundColor: AppTheme.colors.primary,
        width: '100%',
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 24,
        justifyContent: "center",
        alignContent: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    }
})