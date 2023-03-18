// Creo un Boton
class Button {
    constructor(parentId, text){
        this.parentId = parentId;
        this.text = text;
    }
    render(){   
        let myApp = document.getElementById(this.parentId);
        const myButton = myApp.innerHTML + "<button>"+ this.text+"</button>";
        myApp.innerHTML = myButton;
    }
}
// Creo el Input
class Input {
    constructor(parentId, text){
        this.parentId = parentId;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentId);
        const myInput = myApp.innerHTML + "<input type='text' value="+this.text+ ">"
        myApp.innerHTML=myInput;
    }
}
// Se renderiza el boton luego de llamar al html
let myButton = new Button ("campoVacio", "Esto es un boton");
myButton.render();
//Se renderiza el input luego de llamar al html
let myInput = new Input ("campoVacio", "Escriba aqui")
myInput.render()

 