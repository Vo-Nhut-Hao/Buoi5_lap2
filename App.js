import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './AuthContext';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    const [initialRoute, setInitialRoute] = useState('Login');

    useEffect(() => {
        // Logic kiểm tra token ở đây nếu cần
        setInitialRoute('Login'); // Hoặc 'Home' nếu đã đăng nhập
    }, []);

    return (
        <AuthProvider>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={initialRoute}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Signup" component={SignupScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </AuthProvider>
    );
};

export default App;
