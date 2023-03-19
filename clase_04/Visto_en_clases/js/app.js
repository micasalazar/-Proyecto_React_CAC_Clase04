let myDOM = document;// document es un objrto global con mucha informacion y nos permite manipula el DOM

//Un OBJETO se define por sus atributos
let name = "Firulais";

const myDog = {
    name: "Firulais",

};

const myCat = {
    name: "Kitty",
};

console.log(myDog.name);
console.log(myCat.name);

// class Mouse {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

function Mouse(name, age){
    this.name = name;
    this.age = age;

}

const myMouse = new Mouse ("Perez", 36);


class Button {
    constructor(parentID, text){
        this.parentID = parentID;
        this.text = text
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButtonHTML; //Vamos a escribir el html para que se dibuje un boton con el texto de this.text
    }
}

//Construir el objeto boton y llamar al metodo render de ese objeto
let myButton = new Button ("app", "Login magico..")
myButton.render();

let myButton2 = new Button ("app", "SingUp");
myButton2.render();

// Vamos a crear la Class Input

class Input {
    constructor(parentID,type){
        this.parentID = parentID;
        this.type = type;
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input  type=" + this.type + ">"  ;

        myApp.innerHTML = myInputHTML; 

    }
}

let myInput = new Input ("app", "checkbox");
myInput.render();

let myInput2 = new Input ("app", "date");
myInput2.render();
