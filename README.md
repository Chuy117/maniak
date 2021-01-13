# maniak
Desafío de React Native

Ésta aplicación está diseñada para consumir un Api y mostrar el resultado.

¿En qué consiste ésta aplicación?

La aplicación cuenta con 4 ventanas en las que puede interartuar el usuario.

La primera es la página de Bienvenida o el Home:

    1 Es un diseño en el que se muestran diferentes opciones de Logueo (de momento solo funciona el tradicional, correo y contraseña).

    2 Para poder loguearse se consume un Api, la cual fue proporcionada.

    a) El usuario puede loguearse (usuario y contraseña).
        1a) El botón de Login se encuentra deshabilitado hasta que el email y el password no estén vacíos.
        2a) Aunque la acción de loguearse con Facebook y Google no se encuentran activas, cuenta con una acción que es un alert.
        3a) Si el usuario realiza el gesto de retroceder o pulsa el botón hacia atrás, la aplicación te pregunta si estas seguro de salir de ella.
        4a) Mientras espera una respuesta podemos ver un loader.

La segunda pantalla se muestra un listado de imágenes y texto:

    1 En esta pantalla solo se muestran imágenes y texto proporcionado por otra Api.

    2 Del lado superior izquierdo se encuentra un ícono que al dar presionarlo, nos dirigirá a un menú de opciones (Ver contenido, Página de Contacto y Logout).

    a) El usuario puede tocar las imágenes para ver los detalles de la misma (descripción y url de la imagen*).
        1a) Para los detalles se abre un alert mostrándolos.
    b)  Si el usuario realiza el gesto de retroceder o pulsa el botón hacia atrás, la aplicación actualizará los datos.

*Cambié la imagen del Api ya que al parecer el enlace no es el correo (esto es a mi percepción).

La tercera pantalla es el menú de opciones del usuario:

    1 El usuario tiene la posibilidad de regresar a la pantalla de contenido (antes mencionada).

    2 El usuario tiene la posibilidad de ver mi página de contacto.

        a) En ésta página el usuario puede ver mis datos básicos de contacto.
        b) Hay tres opciones para contactarme: Envío de email, llamada telefónica, ver perfil en LinkeIn

    3 Cerrar sesión, si el usuario escoge esta opción, la aplicación preguntará si se esta seguro, en caso de dar cancelar la sesión se mantiene abierta, de lo contrario se cerrará la sesión y será redirigido a la pantalla de Home.

La cuarta pantalla es la página de contacto del desarrollador:

    1 Se pueden ver mis datos básicos de contacto.    
            
        a) Llamada telefónica, si el usuario presiona el botón se abrirá la aplicación de Télefono del dispositivo con mi número y el usuario solo tendrá que confirmar la acción.
        b) Envío de email, si el usuario presiona el botón se abrirá la aplicación de correo electrónico donde ya estará cargada mi dirección de correo y el usuario tendrá que completar dicho correo y enviarlo.
        c) LinkeIn, si el usurio presiona este botón se abrirá la aplicación de LinkeIn en mi perfil.

Nota: Una disculpa por ocupar su ícono y logo, era para que estuviera más acorde al reto.

Una vez explicado en que consiste la aplicación pasaremos a ver cómo correrla.

Se realizó sobre la versión 0.63.4 de React Native por lo que el paquete npm de Node deberá estar actualizado.

1 Debe clonarse o descargarse el proyecto.

2 Abrir la línea de comandos, CMD, o nuestro IDE favorito y abrir una terminal.

3 En la terminal estar en la raíz del proyecto.

4 Ejecutar el comando npm install, para instalar las librerías utilizadas en el proyecto.

4.5 Este paso es no debería de realizarse por la versión de React Native pero en caso de necesitarla ejecutar el comando npx react-native link para linkear las librerías en ambos sistemas operativos (Android y iOS) y podamos sacarle provecho a las mismas y no tener que hacerlo de manera manual, pero repito que por la versión de React Native, éste tendría que hacerlo en automático.

5 Si tienes configurado tu emulador de Android puedes ejecutar el comando npx react-native run-android, en caso de que no ve los siguientes pasos.

6 Si no tienes el paso 5, lo que debes hacer es tener instalado Android Studio.

7 Una vez abierto dar click en Open an Existing Project.

8 Navegar hasta la ubicación del proyecto y verás un ícono característico de Android con la misma frase 'android'

9 Dar click y dejar que AS termine de cargar el proyecto.

*Los siguientes pasos me parece que no son obligatorios pero lo realizo para asegurarme de que no haya problema alguno.

10 Dar click en File -> Sync Project with Grade Files.

11 Dar click en Build -> Clean Project.

12 Dar click en Build -> Rebuild Project

** Esto lo hago para asegurarme que no haya problemas, si existe alguno cada paso nos lo dirá.

13 Dar click en Run

14 Esperamos a que se instale la aplicación y una vez instalada se mostrará una pantalla en rojo.

15 Agitar el dispositivo para ver el menú.

16 Seleccionar Settings.

17 Seleccionar Debug server host & port for device

18 En tu cmd ejecutar el comando ipconfig en Windows o ifconfig en Mac, ver tu dirección IP.

19 En la ventada de Debug server copiar tu IP, ejemplo 192.x.x.x seguido de : y el puerto, en este caso el 8081, para que al final quede como 192.x.x.x:8081

20 En la ventana de CMD ubicado en la raíz del proyecto ejecutar el comando npm start para levantar el servidor.

21 Volver a agitar el dispositivo y esta vez en el menú elegir Reload

22 Esperar a que cargue la aplicación

23 Una vez cargada la primera vez, es necesario cerrar por completo la aplicación y volverla a abrir.

24 Esperar a que cargue y listo.

Para ios es algo similar solo que necesitas un equipo Mac y el IDE XCode.

1 Te rediriges a la carpeta ios -> ProjectName.xcodeproj y seleccionas el archivo que se encuntra ahí.

2 Esperamos a que XCode termine de cargar el proyecto, similar a Android.

3 En caso de haber algún error, el IDE nos indicará cual es.

4 Dar click en Run y repetir pasos del 14-24 omitiendo levantar el servidor ya que XCode lo hace por nosotros.

Por cuestiones de equipo, solo se realizaron pruebas en un dispositivo físico Android pero en iOS debería funcionar igual salvo la configuración de ciertas librerías externas al core de React Native.

Todos estos pasos son necesarios ya que se desarrolló con el cli de React Native y no con la opción de Expo.

Te puedes ahorrar unos pasos si te diriges dentro de tu ubicación a android\app\build\outputs\apk\debug y hacer solo los pasos del 14-24 para el caso de Android.

*Nota, puede ser poco probable pero en mi caso es necesario desactivar el Firewall para poder conectar el dispositivo con el servidor.