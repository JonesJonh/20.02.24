const variavel1 = "valor somente leitura"; //declaração de variavel, somente leitura
var variavel2 = "valor editável"; // declaração de variavel denominada variavel2, com valor editável

try { // tramsformar a variavel em um valor nao permitido
    variavel1 = "valor não permitido"; 
    console.log("A variavel1 foi alterada para: ", variavel1); // ações do algoritmo try
} catch (e ) { // e = variavel de erro
    console.error("Ops! Ocorreu um erro: ", e); 
}

try {
    variavel2 = "valor permitido";
    console.log("A variavel2 foi alterada para: ", variavel2);
} catch (e) {
    console.error("Ops! Ocorreu um erro: ", e);
}