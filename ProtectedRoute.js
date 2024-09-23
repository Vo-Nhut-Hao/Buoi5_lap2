// ProtectedRoute.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from './AuthContext';
import { NavigationContainer } from '@react-navigation/native';

const ProtectedRoute = ({ children, navigation }) => {
    const { user } = useAuth();

    if (user === null) {
        // Nếu trạng thái người dùng chưa được xác định, hiển thị loading indicator
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!user) {
        // Nếu người dùng chưa đăng nhập, chuyển hướng đến màn hình đăng nhập
        navigation.navigate('Login');
        return null;
    }

    return children; // Nếu đã đăng nhập, hiển thị các children
};

export default ProtectedRoute;
