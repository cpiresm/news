class Materia {
    constructor(nombre, icono, estilo) {
        this.nombre = nombre;
        this.icono = icono;
        this.estilo = estilo;
    }
}
let listaMaterias = [];
const materiaA = new Materia("quimica", "fa-flask-vial", "1");
const materiaB = new Materia("fisica", "fa-ruler", "3");
const materiaC = new Materia("derecho", "fa-building-columns", "2");
const materiaD = new Materia("geografia", "fa-earth-americas", "1");
const materiaE = new Materia("comunicacionAudiovisual", "fa-headset", "4");
const materiaF = new Materia("matematica", "fa-calculator", "3");
const materiaG = new Materia("edFisica", "fa-volleyball", "2");
const materiaH = new Materia("lengua", "fa-book", "2");
const materiaI = new Materia("administracion", "fa-briefcase", "3");
const materiaJ = new Materia("biologia", "fa-seedling", "3");
const materiaK = new Materia("economia", "fa-sack-dollar", "2");
const materiaL = new Materia("artesVisuales", "fa-palette", "3");
listaMaterias.push(materiaA);
listaMaterias.push(materiaB);
listaMaterias.push(materiaC);
listaMaterias.push(materiaD);
listaMaterias.push(materiaE);
listaMaterias.push(materiaF);
listaMaterias.push(materiaG);
listaMaterias.push(materiaH);
listaMaterias.push(materiaI);
listaMaterias.push(materiaJ);
listaMaterias.push(materiaK);
listaMaterias.push(materiaL);

const materias = document.querySelector("#materias");
for (const materia of listaMaterias) {
    materias.innerHTML += `<div class="col" id="${materia.nombre}"><i class="fa-solid ${materia.icono} icon style style${materia.estilo}"></i></div>`;
}

const materiaUso = document.querySelector("h2");

const quimica = document.querySelector("#quimica");
quimica.addEventListener("click", () => {
    materiaUso.textContent = "Química";
});
const fisica = document.querySelector("#fisica");
fisica.addEventListener("click", () => {
    materiaUso.textContent = "Física";
});
const derecho = document.querySelector("#derecho");
derecho.addEventListener("click", () => {
    materiaUso.textContent = "Derecho";
});
const geografia = document.querySelector("#geografia");
geografia.addEventListener("click", () => {
    materiaUso.textContent = "Geografía";
});
const comunicacionAudiovisual = document.querySelector("#comunicacionAudiovisual");
comunicacionAudiovisual.addEventListener("click", () => {
    materiaUso.textContent = "Comunicación audiovisual";
});
const matematica = document.querySelector("#matematica");
matematica.addEventListener("click", () => {
    materiaUso.textContent = "Matemática";
});
const edFisica = document.querySelector("#edFisica");
edFisica.addEventListener("click", () => {
    materiaUso.textContent = "Educación física";
});
const lengua = document.querySelector("#lengua");
lengua.addEventListener("click", () => {
    materiaUso.textContent = "Lengua";
});
const administracion = document.querySelector("#administracion");
administracion.addEventListener("click", () => {
    materiaUso.textContent = "Administración";
});
const biologia = document.querySelector("#biologia");
biologia.addEventListener("click", () => {
    materiaUso.textContent = "Biología";
});
const economia = document.querySelector("#economia");
economia.addEventListener("click", () => {
    materiaUso.textContent = "Economía";
});
const artesVisuales = document.querySelector("#artesVisuales");
artesVisuales.addEventListener("click", () => {
    materiaUso.textContent = "Artes visuales";
});