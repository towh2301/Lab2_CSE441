import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";


type NumberProps = {
    num1: number,
    num2: number,
}

export default function CalculatorQ4Screen() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');


    const handleClearBtn = () => {
        setInput('');
        setResult('');
        setOperator('');
    }

    const handleOperatorInput = (operator: string) => {
        setOperator(operator);
        setResult(input);
        setInput('')
    }

    const handleEqualBtn = () => {
        const number1 = parseFloat(result);
        const number2 = parseFloat(input);

        if (isNaN(number1) || isNaN(number2)) {
            return;
        }

        if (operator === '-') {
            setResult(subtract({ num1: number1, num2: number2 }).toString());
        }

        if (operator === '+') {
            setResult(add({ num1: number1, num2: number2 }).toString());
        }

        if (operator === '*') {
            setResult(multiply({ num1: number1, num2: number2 }).toString());
        }

        if (operator === '/') {
            setResult(divide({ num1: number1, num2: number2 }).toString());
        }

        setInput(result);
        setOperator('');
    }


    const handleButtonPress = (num: string) => {
        if (parseFloat(input) == 0) {
            setInput(num);
        } else {
            setInput(input + num);
        }
    }

    const subtract = ({ num1, num2 }: NumberProps): number => {
        return num1 - num2;
    };

    const multiply = ({ num1, num2 }: NumberProps): number => {
        return num1 * num2;
    };

    const divide = ({ num1, num2 }: NumberProps): number => {
        return num1 / num2;
    };

    const add = ({ num1, num2 }: NumberProps): number => {
        return num1 + num2;
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={input}
                onChangeText={setInput}
                placeholder="Enter numbers and operators"
            />
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('/')}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('*')}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={() => handleClearBtn()}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleEqualBtn()}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}