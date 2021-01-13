import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { styles } from './styles/OpcionesStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeUser } from '../../storage/UsuarioDataStorage';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    async componentDidMount() {

        const token = await AsyncStorage.getItem('data');

        this.setState({
            data: token
        })

    }

    render() {

        return (

            <View style={styles.PanelUser}>

                {
                    this.state.data != null ?
                        <View style={styles.PanelUser}>
                            <Image source={require('../../resources/user.png')} style={styles.photoUser} />
                            <TouchableOpacity style={styles.OptionPart} onPress={() => this.props.navigation.navigate('Principal')}>
                                <Icon
                                    style={styles.icon}
                                    name="book"
                                    size={Dimensions.get('window').width * .06}
                                    color={'#777d8d'}
                                />
                                <Text style={styles.textOption}>Contenido</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.OptionPart} onPress={() => this.props.navigation.navigate('Contacto')}>
                                <Icon
                                    style={styles.icon}
                                    name="user"
                                    size={Dimensions.get('window').width * .06}
                                    color={'#777d8d'}
                                />
                                <Text style={styles.textOption}>Contacto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.OptionPart} onPress={() => {
                                    Alert.alert(
                                        "Cerrar Sesión",
                                        "¿Estás seguro?",
                                        [
                                            {
                                                text: "No",
                                                onPress: () => { },
                                                style: "cancel"
                                            },
                                            {
                                                text: "Sí", onPress: () => {
                                                    removeUser('data').then(
                                                        this.props.navigation.navigate("Home")
                                                    )
                                                }
                                            }
                                        ],
                                        { cancelable: false }
                                    );

                                }
                            }>
                                <Icon
                                    style={styles.icon}
                                    name="sign-out"
                                    size={Dimensions.get('window').width * .06}
                                    color={'#777d8d'}
                                />
                                <Text style={styles.textOption}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                        : 
                        null
                }

            </View>

        );

    }

}