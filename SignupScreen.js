import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Hiển thị thông báo đăng ký thành công
            alert('Đăng ký thành công!');
        } catch (error) {
            alert(error.message); // Hiển thị lỗi nếu có
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng Ký</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Mật Khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                mode="outlined"
            />
            <Button mode="contained" onPress={handleSignup} style={styles.button}>
                Đăng Ký
            </Button>
            <Button onPress={() => navigation.navigate('Login')} style={styles.link}>
                Đã có tài khoản? Đăng Nhập
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 12,
    },
    link: {
        marginTop: 12,
    },
});

export default SignupScreen;
