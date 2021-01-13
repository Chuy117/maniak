import * as React from 'react';
import { View, Text, ActivityIndicator, Platform, Image, ScrollView, TouchableOpacity, RefreshControl, Alert, Linking, BackHandler } from 'react-native';
import { styles } from './styles/PrincipalStyles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lstImages: '',
            loading: true,
            refreshing: false,
        }
    }

    async componentDidMount() {

        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.cargar
        );

        try {

            const token = await AsyncStorage.getItem('data');

            fetch('https://challenge.maniak.co/api/images', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            })
                .then(dataResponse => dataResponse.json())
                .then(dataJson => {
                    this.setState({
                        lstImages: dataJson,
                        loading: false,
                        data: token,
                        refreshing: false,
                    })
                }).catch((error) => {
                    console.log(error)
                })

        } catch (error) {
            console.log('Error al obtener usuario ', error);
        }

    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    onBackButtonPressed() {
        return true;
    }

    cargar = () => {
        this.setState({
            refreshing: true,
        }, () => {
            this.componentDidMount();
        })
        return true;

    }

    detail(des, url) {
        Alert.alert(
            "Detalles",
            des,
            [
                {
                    text: "Ir a imagen original", onPress: () => {
                        Linking.openURL(url)
                    }
                },
                {
                    text: "Ok", onPress: () => { }
                }
            ],
            { cancelable: false }
        );
    }

    render() {

        if (!this.state.loading) {

            if (this.state.data != null) {

                return (

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.cargar}
                            />
                        }>

                        <View>
                            <Text style={styles.instru}>Toca una imagen para ver los detalles</Text>
                        </View>

                        <View style={styles.panelContainer}>

                            {
                                this.state.lstImages.map(item => {
                                    return (

                                        <TouchableOpacity activeOpacity={0.9} key={item.id} onPress={() => this.detail(item.description, item.image)}>

                                            <View style={styles.panelFace}>

                                                <Text style={styles.instru2}>{item.title}</Text>
                                                {/*  <Image style={styles.panelImage} source={{uri: item.image}} /> */}
                                                <Image style={styles.panelImage} source={{ uri: 'http://lorempixel.com/200/200/people/' }} />
                                            </View>

                                        </TouchableOpacity>

                                    )
                                })
                            }

                        </View >

                        <View>
                            <Text style={styles.instru2}>Nota: Disculpen si me equivoco pero la ruta de la imagen no carga, me parece que es incorrecta, puse una por default</Text>
                            <Text style={styles.instru2}>Pueden corroborar esto en los detalles.</Text>
                        </View>


                    </ScrollView >

                );

            } else {

                return (

                    <ScrollView contentContainerStyle={styles.scrollContent}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.cargar}
                            />
                        }>

                        <View style={styles.linearGradient}>
                            <Text style={styles.instru}>El contenido será visible una vez logueado</Text>
                        </View>

                    </ScrollView >

                );

            }

        } else {
            return (
                <LinearGradient colors={["rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0.65)"]} style={styles.linearGradient}>
                    {
                        Platform.OS === 'ios' ?
                            <View>
                                <ActivityIndicator size={1} color='#FFF' />
                                <Text style={styles.cargando}>Espere por favor...</Text>
                            </View>
                            :
                            <View>
                                <ActivityIndicator size={80} color='#FFF' />
                                <Text style={styles.cargando}>Espere por favor...</Text>
                            </View>
                    }
                </LinearGradient>
            )
        }

    }

}