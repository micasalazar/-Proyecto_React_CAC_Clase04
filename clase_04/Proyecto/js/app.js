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
    constructor(parentId, type){
        this.parentId = parentId;
        this.type = type;
    }
    render(){
        let myApp = document.getElementById(this.parentId);
        const myInput = myApp.innerHTML + "<input type="+ this.type + ">"
        myApp.innerHTML=myInput;
    }
}
// Se renderiza el boton luego de llamar al html
                           //completo mi parentID con el id que coloque en mi placeholder 
let myButton = new Button ("campoVacio", "EL BOTON");
myButton.render();
//Se renderiza el input luego de llamar al html
let myInput = new Input ("campoVacio","date");
myInput.render();

 