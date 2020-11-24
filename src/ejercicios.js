// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
import { imprimir } from './utils.js';

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();

// =====================================================
// 1. Crea una Clase para definir a un Usuario genérica.
// Definir la clase "User".
//
// Debe tener las siguientes características:
//   - "username": Nombre de usuario.
//     Propiedad texto (String).
//     Default: null.
//   - "age": Edad.
//     Propiedad numérica (Number).
//     Default: null.
//   - "password": Contraseña.
//     Propiedad texto (String).
//     Default: null.
//   - "loggedIn": Usuario logueado?
//     Propiedad Booleano (Boolean).
//     Default: false (Falso).
//   - "login(): Debe definirse un método que
//     establezca la propiedad "loggedin" en
//     `true` cuando el valor que se pasa por
//     parámetro es igual al 'password' de la
//     instancia actual.
//     Al llamar al método "login()", debe imprimirse el
//     texto 'Usuario [username] ha iniciado sesión' si
//     el 'password' ingresado es correcto, o el texto
//     'Contraseña incorrecta' si la misma es
//     incorrecta.

class User {

  username = null;
  age = null;
  password = null;
  loggedIn = false;

  login(password){
     this.password === password ? this.loggedin = true : this.loggedIn;

     if (this.loggedin) {
      imprimir(`Usuario [${this.username}] ha iniciado sesión`)
     }
     else{
      imprimir('Contraseña incorrecta');
     }
    
  }

}

const userUno= new User();
userUno.username = "Juan Pablo";
userUno.password = "123456";

userUno.login("123456") ;



// =====================================================
// 2. Crear la clase "Vendedor" a partir de la clase
// "User".
//
// Ahora, el Vendedor debe poder generar una venta.
// Para ello, se debe agregar un método "vender" al cuál
// se le indique una descripción del producto vendido
// por parámetro. Las ventas deben guardarse en un array
// de ventas interno de la instancia.
//
// Para poder realizar la acción de "vender", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Documentación recomendada:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push

class Vendedor extends User {

    ventas = [];

  vender(descripcion){
        
    if (this.loggedin) {
      this.ventas.push(descripcion); 
    }
      
  }

}

const userVendedor = new Vendedor();
userVendedor.username = "Pedro";
userVendedor.password = "1234";
userVendedor.login("1234"); 
userVendedor.vender("Producto de cocina");
//console.log(userVendedor.ventas);



// =====================================================
// 3. Crear la clase "Comprador" a partir de la clase
// "User".
// Ahora, el Comprador debe poder generar una compra.
// Para ello, se debe agregar un método "comprar",
// al cuál se le indique una instancia de Vendedor
// que será quien le ha vendido el producto, y una
// descripción del producto vendido.
//
// Para poder realizar la acción de "comprar", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Desde el metodo "comprar" se debe agregar el
// producto vendido al vendedor, e imprimir el siguiente
// texto de ejemplo:



class Comprador extends User {

  
  comprar(vendedor,descripcion){
      
    if (this.loggedin) {
      
      vendedor.vender(descripcion);
        
        imprimir([
          `El vendedor ${userVendedor.username}`,
          `ha vendido ${descripcion}`,
          ` a ${compradorUno.username}`,
        ]);
      }
      
  }

}

const compradorUno = new Comprador();
compradorUno.username = "Jose";
compradorUno.password = "12345";

compradorUno.login("12345");
compradorUno.comprar(userVendedor,"Producto de limpieza");


// =====================================================
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".


/*===========================================================
  Codigo comentado para que no me genere conflicto con el nombre
  de las clases en los anteriores ejercicios
=============================================================*/

/*


class User {

  username = null;
  age = null;
  password = null;
  loggedIn = false;

  constructor(username,age,password){
    this.username = username;
    this.age = age;
    this.password =password;
  }

  login(password){
     this.password === password ? this.loggedin = true : this.loggedIn;

     if (this.loggedin) {
      imprimir(`Usuario [${this.username}] ha iniciado sesión`)
     }
     else{
      imprimir('Contraseña incorrecta');
     }
    
  }
  

}

class Vendedor extends User {

  constructor(username,age,password){
    super(username,age,password);
  }

  ventas = [];

  vender(descripcion){
    
    if (this.loggedin) {
      this.ventas.push(descripcion); 
    }
      
  }

}



class Comprador extends User {

  constructor(username,age,password){
    super(username,age,password);
  }  

  comprar(vendedor,descripcion){
      
    if (this.loggedin) {
      
      vendedor.vender(descripcion);
        
        imprimir([
          `El vendedor ${userVendedor.username}`,
          `ha vendido ${descripcion}`,
          ` a ${compradorUno.username}`,
        ]);
      }
      
  }

}



*/



// =====================================================
// 5. Modificar las clases anteriores y agregar un
// método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

/*===========================================================
  Codigo comentado para que no me genere conflicto con el nombre
  de las clases en los anteriores ejercicios
=============================================================*/

/*
class User {

  username = null;
  age = null;
  password = null;
  loggedIn = false;

  constructor(username,age,password){
    this.username = username;
    this.age = age;
    this.password =password;
  }

  login(password){
     this.password === password ? this.loggedin = true : this.loggedIn;

     if (this.loggedin) {
      imprimir(`Usuario [${this.username}] ha iniciado sesión`)
     }
     else{
      imprimir('Contraseña incorrecta');
     }
    
  }

  esMayor(){
    return this.age >= 18 ? true : false;
  }
  

}

class Vendedor extends User {

  constructor(username,age,password){
    super(username,age,password);
  }

  ventas = [];

  vender(descripcion){
    
    if (this.loggedin) {
      this.ventas.push(descripcion); 
    }
      
  }

}



class Comprador extends User {

  constructor(username,age,password){
    super(username,age,password);
  }  

  comprar(vendedor,descripcion){
      
    if (this.loggedin) {
      
      vendedor.vender(descripcion);
        
        imprimir([
          `El vendedor ${userVendedor.username}`,
          `ha vendido ${descripcion}`,
          ` a ${compradorUno.username}`,
        ]);
      }
      
  }

}


*/




// =====================================================
// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".



