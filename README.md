# Simple FB Button Login

_Este proyecto ofrece el código más eficiente, mínimo y práctico para integrar el botón de login de Facebook en un proyecto VueJS, mucho más si se usa un framework encima como Vuetify._

## Comenzando 🚀

_Para usar este complemento necesitas tener un proyecto VueJS funcionando._

### Pre-requisitos 📋

_Solo necesitas VueJS instalado para poder usar el componente por consiguiente NodeJS, se contruyó con las últimas versiones de esta librería a la fecha 9 de mayo de 2020, exactamente hoy, el día de mi cumpleaños._

### Instalación 🔧

_Al ser una librería optimizada, su utilización es sencilla:_

_Tu proyecto ya debe tener un package.json y ahí se añadirá:_

```
npm i -S vue-simple-fb-button-login
```

## Integración
_Podemos importarlo de dos formas._

### Local
_Esta forma quizá es la más común y práctica ya que se importa solo en el lugar donde se ocupa (por lo general una sola vez)._

_En tu vista/componente de VueJS donde das las formas de autenticación en tu aplicación añade:_

```javascript
import SimpleFBButtonLogin from 'vue-simple-fb-button-login'

export default {
  components: {
    SimpleFBButtonLogin
  }
}
```

### Global

_Esta forma importaría para su uso en múltiples lugares/vistas de nuestra aplicación:_

_En nuestro archivo main.js (entry point de nuestra applicación) añadir lo siguiente_

```javascript
import SimpleFBButtonLogin from 'vue-simple-fb-button-login'

Vue.component('simple-fb-button-login', SimpleFBButtonLogin)

new Vue({
  ....
```

## Uso 📦

_Este componente require obligatoriamente solo un atributo, que es el appId de Facebook, sin embargo ofrece la posibilidad de slots para personalización._

### Template

_Uso mas básico:_
```html
<SimpleFBButtonLogin appId='xxxxxxxxxxxxx'/>
```

_Ejemplo usando diseño propio con Vuetify:_
```html
<SimpleFBButtonLogin
  appId='xxxxxxxxxxxxx'
  v-slot:default="{ login }"
>
  <v-btn
    depressed
    color="info"
    style="text-transform:none"
    class="my-3"
    block
    @click="login"
  >
    <v-icon left>
      fab fa-facebook-square
    </v-icon>
    Entrar con Facebook
  </v-btn>
</SimpleFBButtonLogin>
```

### Props

_A continuación te detallo todos los props posibles para su mayor provecho:_

```json
props: {
  scopePermissions: {
    type: String,
    required: false,
    default: 'public_profile,email,user_birthday,user_location'
  },
  fieldsGet: {
    type: String,
    required: false,
    default: 'id,name,birthday,email,location,picture,first_name,last_name,middle_name,name_format,short_name'
  },
  responseType: {
    type: String,
    required: false,
    default: 'granted_scopes'
  },
  redirectURI: {
    type: String,
    required: false
  },
  textButton: {
    type: String,
    required: false,
    default: 'Sign in with Facebook'
  }
}
```

Para entender mejor el proósito de cada uno te recomiendo leer la documentación oficial:

https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#login

### Eventos
_Es importante que use los eventos del componente, estos le darán la información que recolecte su inicio de sesión con FB._

_El componente cuenta con 3 eventos:_

1. termina-inicializacion: Se ejecuta cuando todos los scripts del SDK de Facebook necesarios se han cargado. Respuesta vacía.
2. conectado: Se ejecuta cuando se ha comporbado que el usuario se conectó con Facebook y que ha recibido un token de acceso a sus datos. Recibe un objeto objeto response del método getLoginStatus del API de Facebook
3. data-profile: Este evento nos da la información del perfil de Facebook del usuario autenticado. Hace un get('/me') al API Graph de Facebook, devuelve conforma hayamos seteado el prop fieldsGet.

## Construido con 🛠️

_Fue contruido con VueJS y con mucho amor para aportar a la comunidad._

## Contribuyendo 🖇️

Por favor se acepta con gusto cualquier comentario, sugerencia y aporte. Mi usuario en Twitter es [@superrrandres](https://twitter.com/superrandres)

_El código fuente está dentro del mismo paquete NPM por si desean revisarlo para sugerir algo._

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invítame una cerveza 🍺 o un café ☕ 
* Agradezco a Dios por el tiempo y la oportunidad.

---
⌨️ con ❤️ por [@superrandres](https://twitter.com/superrandres) 😊
