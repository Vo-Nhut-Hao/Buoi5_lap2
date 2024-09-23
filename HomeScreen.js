import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { AuthContext } from './AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const HomeScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.navigate('Login');
        } catch (error) {
            alert(error.message); // Hiển thị lỗi nếu có
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chào Mừng, {user?.email}!</Text>
            <Button mode="contained" onPress={handleLogout}>
                Đăng Xuất
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
});

export default HomeScreen;
