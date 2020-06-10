const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = { 
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


/*Exercício 1*/
const criarProperty = (objeto, prop, valor) => objeto[prop] = valor

criarProperty(lesson2, "turno", "manhã");

/*Exercício 2*/
const listkeys = (objeto) => Object.keys(objeto);

listkeys(lesson2);

/*Exercício 3*/
const objSize = (objeto) => Object.keys(objeto).length;

objSize(lesson2);

/*Exercício 4*/
const listvalues = (objeto) => Object.values(objeto);

listvalues(lesson2);

/* const allLesson = Object.assign({}, {lesson1}, {lesson2}, {lesson3}); */

/*Exercício 5*/
const allLesson = (lessons) => Object.assign({}, lessons);

console.log(allLesson({lesson1, lesson2, lesson3}))




/*Exercício 6*/
function totalStudents (obj) {
let soma = 0;
let key = Object.keys(obj);
  for (let i = 0; i < key.length ; i += 1) {
    soma += allLesson[key[i]]["numeroEstudantes"]
  }
return soma
}
/* 
console.log(totalStudents(allLesson))
 */
/*Exercício 7*/
function findValue (objeto, valor) {
  let finder = Object.entries(objeto);
  return finder[valor][1]
}
/* 
console.log(findValue(lesson1, 0))
 */

/*Exercício 8*/
function verifyExistence (objeto, key, value) {
let checker = "Ve denovo esse trem";
var keyCheck = Object.keys(objeto).includes(key);
var valueCheck = Object.values(objeto).includes(value);

 if (keyCheck === true && valueCheck === true) {
   checker = "Tudo ok, meu jovem"
 }

 return checker
}

/* console.log(verifyExistence(lesson1, "materia", 'Matemátic')) */

