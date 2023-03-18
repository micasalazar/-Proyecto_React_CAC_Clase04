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

        myApp.innerHTML = ""; //Vamos a escribir el html para que se dibuje un boton con el texto de this.text
    }
}

//Construir el objeto boton y llamar al metodo render de ese objeto
//let myButton = new...
// myButton.metodoQueSea()
