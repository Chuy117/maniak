import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveUser(usuario) {

    try {
        await AsyncStorage.setItem('data', usuario);
        console.log("Guardado")
    } catch (error) {
        console.log("Error al guardar ", error);
    }
}

async function removeUser() {
    try {
        await AsyncStorage.removeItem('data');
        console.log("Borrado");
    } catch (error) {
        console.log("Error al borrar ", error);
    }
}

export { saveUser, removeUser }