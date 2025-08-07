let participantes = [];

        function adicionarAmigo() {
            //Obtendo elemento html e o valor de entrada 'nome'
            const inputAmigo = document.getElementById("nome-amigo");
            const nome = inputAmigo.value.trim();

            //Verificando se o nome foi digitado
            if (nome === "") {
                alert("Por favor, digite um nome antes de adicionar.");
                return;// Encerra a função
            }
            //verificando se o nome já existe ignorando letras maiuculas e minusculas, utilizando some()
            const nomeJaExiste = participantes.some(p => p.toUpperCase() === nome.toUpperCase());

            //Se o nome já existe emite um alert 
            if (nomeJaExiste) {
                alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
                inputAmigo.value = ""; // limpa campo de entrada 
                return; //encerra função 
            }


            
            participantes.push(nome); //Caso passe pelas validações adiciona o nome ao array
            inputAmigo.value = ""; // limpa o campo após adicionar o nome da lista
            inputAmigo.focus();// evidencia 
            atualizarListaAmigos(); 
        }

        function atualizarListaAmigos() {
            // Pega o elemento html que é uma div
            const containerLista = document.getElementById("lista-amigos");
            containerLista.innerHTML = ""; //Limpa a lista exibida na tela para ter nomes duplicados


            // faz um laço for na lista para inserir os nomes dos
            for (let amigo of participantes) {
                let p = document.createElement("p"); // adiciona em parágrafos
                p.textContent = amigo;
                containerLista.appendChild(p);
            }
        }

        function realizarSorteio() {
            // Verifica se há pelo menos 2 participantes
            if (participantes.length < 2) {
                alert("É necessário ter pelo menos 2 participantes para realizar o sorteio.");
                return;
            }

            //Embaralha a lista para garantir aleatoriedade com algoritmo de Fisher-Yates
            embaralhar(participantes);

            // Obtem o elemento html que exibe o resultado

            const containerSorteio = document.getElementById("lista-sorteio");
            containerSorteio.innerHTML = "";// Limpa exibição para ter duplicações
                
                //Insere o item do array em paragráfo dentro da div sorteio 
                let p = document.createElement("p");
                p.textContent = participantes[0];
                containerSorteio.appendChild(p);
                let removido = participantes.shift(); //Remove o nome da lista para não ser repetido
                console.log(participantes, removido);
                const listaParaRiscar = document.getElementById("lista-amigos").querySelectorAll("p");
                listaParaRiscar.forEach(p => {
                    if(p.textContent === removido )
                    p.classList.add("riscado");
                });


            }
        

        // Algoritmo de Fisher-Yates para embaralhar o array
        function embaralhar(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
            }
        }

        function reiniciar() {

            //Como o nome diz reinicia limpando todos os itens que armazenam informações
            participantes = [];
            document.getElementById("lista-amigos").innerHTML = "";
            document.getElementById("lista-sorteio").innerHTML = "";
            document.getElementById("nome-amigo").focus();
        }