// Lista de alunos com nome e nota
const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 9 },
    { nome: "Pedro", nota: 4 },
    { nome: "Lucas", nota: 6 }
  ];
  
  // Função que retorna os alunos aprovados (nota >= 6)
  function filtrarAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
  }
  
  // Função que retorna os alunos reprovados (nota < 6)
  function filtrarReprovados(lista) {
    return lista.filter(aluno => aluno.nota < 6);
  }
  
  // Pegar listas de aprovados e reprovados
  const aprovados = filtrarAprovados(alunos);
  const reprovados = filtrarReprovados(alunos);
  
  // Mostrar no console
  console.log("✅ Alunos Aprovados:");
  aprovados.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
  });
  
  console.log("\n❌ Alunos Reprovados:");
  reprovados.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
  });
  