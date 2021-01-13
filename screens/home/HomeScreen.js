import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Alert, TextInput, ActivityIndicator, BackHandler } from 'react-native';
import { styles } from './styles/HomeStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { saveUser } from '../../storage/UsuarioDataStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../loader/loader';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usuario: {
                username: null,
                password: null,
            },
            showPass: true,
            loading: true,
            data: '',
            load: false,
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    componentDidMount() {

        this.consultaUsuario()

        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
    }

    onBackButtonPressed() {
        Alert.alert(
            "¿Ya te vas?",
            "¿Estás seguro de que quieres salir?", [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            { text: "Sí", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    }

    async consultaUsuario() {
        try {
            const token = await AsyncStorage.getItem('data');
            console.log("Encontrado", token);
            this.setState({
                data: token,
                loading: false
            })
        } catch (error) {
            console.log('Error al obtener usuario ', error);
        }
    }

    login(user) {

        this.setState({
            load: true,
        })

        this.textInput.clear()
        this.textInput2.clear()

        fetch('https://challenge.maniak.co/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(response => response.json())
            .then(responseJson => {

                saveUser(responseJson.token)
                const { navigate } = this.props.navigation
                navigate('Principal')
                this.setState({
                    load: false,
                })

            })
            .catch(error => {

                this.setState({
                    load: false,
                })

                Alert.alert(
                    "Ups",
                    "Lo sentimos pero el usuario no fue encontrado",
                    [
                        {
                            text: "Ok",
                            onPress: () => { },
                            style: "cancel"
                        },
                    ],
                    { cancelable: false }
                );

            })

    }

    render() {

        if (!this.state.loading) {

            if (this.state.data == '' || this.state.data == null) {

                return (

                    <View style={styles.first}>
                        <View style={styles.second}>
                            <Text style={styles.welcome}>¡Nos alegra volverte a ver!</Text>
                            <Image style={styles.imageLogo} source={require('../../resources/logo.jpg')} />
                            <View style={styles.espacio}>
                                <View style={styles.orientacion}>
                                    <Icon
                                        style={styles.iconBar}
                                        name="envelope"
                                        size={Dimensions.get('window').width * .07} />
                                    <TextInput
                                        style={styles.place}
                                        placeholder={'Email'}
                                        placeholderTextColor={'#777d8d'}
                                        onChangeText={(username) => { this.setState({ usuario: { username: username, password: this.state.usuario.password } }) }}
                                        ref={input => { this.textInput = input }}
                                        returnKeyType='next'
                                        keyboardType={'email-address'}
                                        autoCapitalize={'none'}
                                    />
                                </View>
                                <View style={styles.orientacion}>
                                    <Icon
                                        style={styles.iconBar}
                                        name="user"
                                        size={Dimensions.get('window').width * .07} />
                                    <TextInput
                                        style={styles.place}
                                        placeholder={'Contraseña'}
                                        secureTextEntry={this.state.showPass}
                                        placeholderTextColor={'#777d8d'}
                                        onChangeText={(password) => { this.setState({ usuario: { username: this.state.usuario.username, password: password } }) }}
                                        ref={input2 => { this.textInput2 = input2 }}
                                        returnKeyType='next'
                                    />
                                    <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                                        <Icon
                                            style={styles.iconBar}
                                            name={this.state.press == true ? 'eye' : 'eye-slash'}
                                            size={Dimensions.get('window').width * .07} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.espacio2}>
                                    <TouchableOpacity disabled={!this.state.usuario.username || !this.state.usuario.password ? true : false} style={styles.buttonLogin} onPress={() => {
                                        this.login(this.state.usuario)
                                    }}>
                                        <Text style={styles.loginText}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.textRegister}>O inicia sesión con:</Text>
                            <View style={styles.alineacion}>
                                <TouchableOpacity style={styles.button} onPress={() =>
                                    Alert.alert(
                                        "Próximamente",
                                        "Lo sentimos, estamos trabajando para tener esta opción disponible.",
                                        [
                                            { text: "OK" }
                                        ],
                                        { cancelable: false }
                                    )
                                }>
                                    <Icon
                                        style={styles.iconBar}
                                        name="facebook"
                                        size={Dimensions.get('window').width * .07} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() =>
                                    Alert.alert(
                                        "Próximamente",
                                        "Lo sentimos, estamos trabajando para tener esta opción disponible.",
                                        [
                                            { text: "OK" }
                                        ],
                                        { cancelable: false }
                                    )
                                }>
                                    <Icon
                                        style={styles.iconBar}
                                        name="google"
                                        size={Dimensions.get('window').width * .07} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.third}>
                            <Text style={styles.textRegister}> ¿Aún no tienes cuenta?
                                    <Text style={styles.textRegister2}> Regístrate aquí</Text>
                            </Text>
                        </View>

                        <Loader loading={this.state.load} />

                    </View>

                );
            } else {
                const { navigate } = this.props.navigation
                navigate('Principal')
                return null
            }

        } else {
            return (
                <LinearGradient colors={["rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0.65)"]} style={styles.linearGradient}>
                    {
                        Platform.OS === 'ios' ?
                            <View>
                                <ActivityIndicator size={1} color='#FFF' />
                            </View>
                            :
                            <View>
                                <ActivityIndicator size={80} color='#FFF' />
                            </View>
                    }
                </LinearGradient>
            )
        }

    }

}