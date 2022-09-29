import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

console.log("javascript betöltve!");


//törlés

function egy(){
    document.getElementById('display').innerHTML += 1;
}

document.getElementById('egy').addEventListener('click', egy);