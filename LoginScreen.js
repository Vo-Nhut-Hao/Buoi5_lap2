import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Chuyển hướng đến Home sau khi đăng nhập thành công
            navigation.navigate('Home');
        } catch (error) {
            alert(error.message); // Hiển thị lỗi nếu có
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng Nhập</Text>
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
            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Đăng Nhập
            </Button>
            <Button onPress={() => navigation.navigate('Signup')} style={styles.link}>
                Chưa có tài khoản? Đăng Ký
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

export default LoginScreen;
