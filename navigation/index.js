import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles/indexStyles';

import HomeScreen from '../screens/home/HomeScreen';
import PrincipalScreen from '../screens/principal/PrincipalScreen';
import ContactoScreen from '../screens/contacto/ContactoScreen';
import OpcionesScreen from '../screens/opciones/OpcionesScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Opciones" component={OpcionesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Principal" component={PrincipalScreen}

                    options={({ route, navigation }) => ({
                        title: 'Contenido',
                        headerStyle: {
                            backgroundColor: '#777d8d',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Opciones')}>
                                <Image style={styles.imageLogo} source={require('../resources/user.png')} />
                            </TouchableOpacity>
                        )
                    })}

                />
                <Stack.Screen name="Contacto" component={ContactoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;