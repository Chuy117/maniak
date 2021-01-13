import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ImageBackground, Dimensions } from 'react-native';
import { styles } from './styles/ContactoStyles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class App extends React.Component {

    verCV() {
        Linking.openURL('https://drive.google.com/file/d/1XhgZjchmuK97h_WVJfA8U6GWbtwbAquV/view?usp=sharing')
    }

    email() {
        Linking.openURL('mailto:cruzgz.jesus@gmail.com')
    }

    linkedin() {
        Linking.openURL('https://www.linkedin.com/in/jesús-enrique-cruz-gómez-628363195')
    }

    phone() {
        Linking.openURL('tel:${5516502686}')
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                <ImageBackground source={require('../../resources/Perfil.jpg')} style={styles.fondo}>
                    <LinearGradient colors={["rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0.65)"]} style={styles.linearGradient}>
                        <View style={styles.imagePosition}>
                            <Text style={styles.nombre}>Jesús Enrique Cruz Gómez</Text>
                            <Image source={require('../../resources/Perfil.jpg')} style={styles.photoUser} />
                            <View style={styles.alineacion}>
                                <View style={styles.mitad}>
                                    <Text style={styles.position}>Full Stack Mobile</Text>
                                    <Text style={styles.position}>App Developer</Text>
                                </View>
                                <View style={styles.mitad}>
                                    <Text onPress={() => this.verCV()} style={styles.cv}>Ver CV</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>

                <View style={styles.second}>

                    <Text style={styles.titulo}>Educación</Text>
                    <Text style={styles.text}>Escuela Superior de Cómputo - IPN</Text>
                    <Text style={styles.titulo}>Ubicación</Text>
                    <Text style={styles.text}>Ciudad de México, Gustavo A. Madero</Text>
                    <Text style={styles.titulo}>Idiomas</Text>
                    <Text style={styles.text}>Italiano A1</Text>
                    <Text style={styles.text}>Inglés B2</Text>

                </View>

                <View style={styles.third}>

                    <View style={styles.alineacion}>
                        <TouchableOpacity style={styles.button} onPress={() => this.phone()}>
                            <Icon
                                style={styles.iconBar}
                                name="phone"
                                size={Dimensions.get('window').width * .07} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.email()}>
                            <Icon
                                style={styles.iconBar}
                                name="envelope"
                                size={Dimensions.get('window').width * .07} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.linkedin()}>
                            <Icon
                                style={styles.iconBar}
                                name="linkedin"
                                size={Dimensions.get('window').width * .07} />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        );

    }

}