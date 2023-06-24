/* Criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

- lista: array 
*/



const students = [
    {
        name: "joao",
        testOne: 8,
        testTwo: 9,
    },
    {
        name: "Maria",
        testOne: 5,
        testTwo: 9,
    },
    {
        name: "Feijao",
        testOne: 7,
        testTwo: 3,
    },
    ]
    
    function calculateAverage(student) {
     return (student.testOne + student.testTwo) / 2; 
    }
    
    const successfulGrade = 7;
    
    for (const aluno of students) {
        const averageGrade = calculateAverage(aluno);
        if (averageGrade >= successfulGrade) {
            alert(`A media do aluno ${aluno.name} foi: ${averageGrade} \n Parabens ${aluno.name}! Voce foi aprovado no concurso!`)
        } else {
            alert(`A media do aluno ${aluno.name} foi: ${averageGrade} \n Nao foi dessa vez ${aluno.name}! Tente novamente!`)
        }
    }