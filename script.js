/* ==================================
   ECOSOLO - SCRIPT.JS
================================== */


/* ==========================
   TESTE DE CONHECIMENTO
========================== */


function corrigirQuiz() {


let pontos = 0;


for(let i = 1; i <= 10; i++){


const resposta =
document.querySelector(
`input[name="q${i}"]:checked`
);


if(!resposta){


alert(
"Responda todas as 10 questões antes de finalizar o teste."
);


return;
}


pontos += Number(resposta.value);


}


/* ISS */


let ISS = pontos * 10;


/* CLASSIFICAÇÃO */


let classificacao = "";


if(ISS <= 40){


classificacao =
"Compreensão inicial dos princípios de conservação do solo.";


}


else if(ISS <= 70){


classificacao =
"Boa compreensão dos conceitos de sustentabilidade agrícola.";


}


else{


classificacao =
"Boa compreensão dos princípios de manejo conservacionista.";


}


/* INDICADORES */


let conservacao =
Math.min(
100,
Math.round((ISS * 0.90))
);


let materia =
Math.min(
100,
Math.round((ISS * 0.75))
);


let biodiversidade =
Math.min(
100,
Math.round((ISS * 0.80))
);


let recuperacao =
Math.min(
100,
Math.round((ISS * 0.85))
);


/* RESULTADO */


document.getElementById(
"resultadoQuiz"
).innerHTML = `


<h2>ISS: ${ISS}/100</h2>


<br>


<h3>${classificacao}</h3>


<br>


<p>
<strong>Conservação física do solo:</strong>
${conservacao}%
</p>


<p>
<strong>Matéria orgânica:</strong>
${materia}%
</p>


<p>
<strong>Biodiversidade do solo:</strong>
${biodiversidade}%
</p>


<p>
<strong>Recuperação ambiental:</strong>
${recuperacao}%
</p>


<br>


<p>
Seu desempenho demonstra seu nível de conhecimento sobre sustentabilidade agrícola, conservação do solo e produção responsável.
</p>


`;


window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});


}


/* ==========================
   CALCULADORA SUSTENTÁVEL
========================== */


function calcularImpacto(){


let total = 0;


total += Number(
document.getElementById("c1").value
);


total += Number(
document.getElementById("c2").value
);


total += Number(
document.getElementById("c3").value
);


total += Number(
document.getElementById("c4").value
);


total += Number(
document.getElementById("c5").value
);


/* CLASSIFICAÇÃO */


let nivel = "";


if(total <= 40){


nivel = "Sustentabilidade Baixa";


}


else if(total <= 70){


nivel = "Sustentabilidade Média";


}


else{


nivel = "Sustentabilidade Alta";


}


/* RESULTADO */


document.getElementById(
"resultadoCalculadora"
).innerHTML = `


<div class="card">


<h2>Pontuação: ${total}/100</h2>


<h3>${nivel}</h3>


<p>
Sua propriedade apresenta um bom potencial sustentável.
A adoção da rotação de culturas e da agricultura de precisão contribui para a conservação do solo, redução do desperdício de água e aumento da produtividade.
</p>


<br>


<p>🌱 Plantio Direto:
${document.getElementById("c1").value == 20 ? "Sim" : "Não"}
</p>


<p>💧 Irrigação Eficiente:
${document.getElementById("c2").value == 20 ? "Sim" : "Não"}
</p>


<p>🌾 Rotação de Culturas:
${document.getElementById("c3").value == 20 ? "Sim" : "Não"}
</p>


<p>🌳 Preservação Ambiental:
${document.getElementById("c4").value == 20 ? "Sim" : "Não"}
</p>


<p>🚜 Agricultura de Precisão:
${document.getElementById("c5").value == 20 ? "Sim" : "Não"}
</p>


</div>


`;


window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});


}


/* ==========================
   COMUNIDADE ECOSOLO
========================== */


function publicarPostagem(){


const mensagem =
document.getElementById("mensagem")
.value
.trim();


if(mensagem === ""){


alert(
"Digite uma mensagem antes de publicar."
);


return;


}


const publicacoes =
document.getElementById(
"publicacoes"
);


const postagem =
document.createElement("div");


postagem.classList.add(
"postagem"
);


const agora = new Date();


const data =
agora.toLocaleDateString("pt-BR");


const hora =
agora.toLocaleTimeString("pt-BR");


postagem.innerHTML = `


<h3>🌱 Usuário EcoSolo</h3>


<small>
${data} - ${hora}
</small>


<p style="margin-top:10px;">
${mensagem}
</p>


`;


publicacoes.prepend(postagem);


document.getElementById(
"mensagem"
).value = "";


}


/* ==========================
   MENSAGEM DE BOAS-VINDAS
========================== */


window.onload = function(){


console.log(
"EcoSolo carregado com sucesso."
);


};
