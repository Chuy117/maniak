# maniak

## Versión en Español.

Desafío de React Native

Ésta aplicación está diseñada para consumir un API y mostrar el resultado.

¿En qué consiste ésta aplicación?

La aplicación cuenta con 4 ventanas en las que puede interartuar el usuario.

La primera es la página de Bienvenida o el Home:

    1 Es un diseño en el que se muestran diferentes opciones de Logueo (de momento solo funciona el tradicional, correo y contraseña).

    2 Para poder loguearse se consume un API, la cual fue proporcionada.

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

*Cambié la imagen del API ya que al parecer el enlace no es el correo (esto es a mi percepción).

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
        c) LinkedIn, si el usurio presiona este botón se abrirá la aplicación de LinkedIn en mi perfil.

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

Para iOS es algo similar solo que necesitas un equipo Mac y el IDE XCode.

1 Te rediriges a la carpeta ios -> ProjectName.xcodeproj y seleccionas el archivo que se encuntra ahí.

2 Esperamos a que XCode termine de cargar el proyecto, similar a Android.

3 En caso de haber algún error, el IDE nos indicará cual es.

4 Dar click en Run y repetir pasos del 14-24 omitiendo levantar el servidor ya que XCode lo hace por nosotros.

Por cuestiones de equipo, solo se realizaron pruebas en un dispositivo físico Android pero en iOS debería funcionar igual salvo la configuración de ciertas librerías externas al core de React Native.

Todos estos pasos son necesarios ya que se desarrolló con el cli de React Native y no con la opción de Expo.

Te puedes ahorrar unos pasos si te diriges dentro de tu ubicación a android\app\build\outputs\apk\debug y hacer solo los pasos del 14-24 para el caso de Android.

*Nota, puede ser poco probable pero en mi caso es necesario desactivar el Firewall para poder conectar el dispositivo con el servidor.

## English version

React Native Challenge

This application is designed to consume an API and display the result.

What is this application about?

The application has 4 windows in which the user can interact.

The first is the Welcome or Home page:

    1 It is a design that shows different Login options (at the moment only email and password work).

    2 In order to log in, an API is consumed, which was provided.

    a) The user can log in (username and password).
        1a) The Login button is disabled until the email and password are empty.
        2a) Although the action of logging in with Facebook and Google are not active, it has an action that is an alert.
        3a) If the user makes the back gesture or presses the back button, the application asks if you are sure to exit it.
        4a) While waiting for a response we can see a loader.

The second screen shows a list of images and text:

    1 This screen only displays images and text provided by another API.

    2 On the upper left side there is an icon that, when pressed, will direct us to a menu of options (View content, Contact Page and Logout).

    a) The user can touch the images to see their details (description and url of the image*).
        1a) For the details, an alert is opened showing them.
    b) If the user performs the back gesture or presses the back button, the application will update the data.

*I changed the API image since apparently the link is not the email (this is my perception).

The third screen is the user options menu:

    1 The user has the possibility to return to the content screen (mentioned above).

    2 The user has the possibility to see my contact page.

        a) On this page the user can see my basic contact information.
        b) There are three options to contact me: Send email, phone call, view profile on LinkeIn

    3 Logout, if the user chooses this option, the application will ask if they are sure, if they cancel, the session remains open, otherwise the session will be closed and they will be redirected to the Home screen.

The fourth screen is the developer contact page:

    1 You can see my basic contact information.
            
        a) Phone call, if the user presses the button the Phone application with my number will open and the user will only have to confirm the action.
        b) Sending email, if the user presses the button, the email application will open where my email address will already be loaded and the user will have to complete said email and send it.
        c) LinkedIn, if the user presses this button the LinkedIn application will open in my profile.

Note: An apologise for using your icon and logo, it was so that it was more in line with the challenge.

Once we have explained what the application consists of, we will move on to see how to run it.

It was made on version 0.63.4 of React Native so the Node npm package must be updated.

1 The project must be cloned or downloaded.

2 Open the command line, CMD, or our favorite IDE and open a terminal.

3 In the terminal be at the root of the project.

4 Run the npm install command to install the libraries used in the project.

4.5 This step should not be carried out for the version of React Native but if necessary, execute the npx react-native link command to link the libraries in both operating systems (Android and iOS) and we can take advantage of them and not have to do it manually, but I repeat that due to the version of React Native, it would have to do it automatically.

5 If you have your Android emulator configured, you can run the npx react-native run-android command, in case you don't see the following steps.

6 If you don't have step 5, what you need to do is have Android Studio installed.

7 Once opened, click Open an existing project.

8 Navigate to the project location and you will see a characteristic Android icon with the same phrase 'android'

9 Click and let AS finish loading the project.

*The following steps do not seem mandatory to me but I do them to make sure there is no problem.

10 Click File -> Sync Project with Grade Files.

11 Click on Build -> Clean Project.

12 Click on Build -> Rebuild Project

** I do this to make sure there are no problems, if there are any each step will tell us.

13 Click on Run

14 We wait for the application to install and once installed a red screen will appear.

15 Shake the device to see the menu.

16 Select Settings.

17 Select Debug server host & port for device

18 In your cmd run the command ipconfig on Windows or ifconfig on Mac, see your IP address.

19 In the Debug server window, copy your IP, example 192.x.x.x followed by : and the port, in this case 8081, so that in the end it looks like 192.x.x.x:8081

20 In the CMD window located at the root of the project, run the npm start command to start the server.

21 Shake the device again and this time in the menu choose Reload

22 Wait for the application to load

23 Once loaded the first time, it is necessary to completely close the application and reopen it.

24 Wait for it to load and that's it.

For iOS it is something similar, only you need a Mac computer and the XCode IDE.

1 You are redirected to the ios -> ProjectName.xcodeproj folder and select the file found there.

2 We wait for XCode to finish loading the project, similar to Android.

3 If there is an error, the IDE will tell us what it is.

4 Click Run and repeat steps 14-24, omitting to raise the server since XCode does it for us.

For equipment reasons, tests were only carried out on a physical Android device but on iOS it should work the same except for the configuration of certain libraries external to the React Native core.

All these steps are necessary since it was developed with the React Native cli and not with the Expo option.

You can save a few steps if you go within your location to android\app\build\outputs\apk\debug and only do steps 14-24 for Android.

*Note, it may be unlikely but in my case it is necessary to disable the Firewall to be able to connect the device to the server.