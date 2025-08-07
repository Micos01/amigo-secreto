Projeto Amigo Secreto
Uma aplicação web simples e interativa para realizar sorteios de amigo secreto. A interface é limpa e intuitiva, permitindo que os utilizadores adicionem participantes, realizem o sorteio e reiniciem o processo com facilidade.

✨ Funcionalidades
Este projeto foi construído com HTML, CSS e JavaScript puro, focando numa lógica robusta para garantir um sorteio justo e uma boa experiência de utilizador.

Adicionar Participantes:

Campo de texto para inserir os nomes dos amigos.

A lista de participantes é atualizada visualmente em tempo real.

Validação Inteligente:

Impede a adição de nomes em branco.

Verifica se um nome já foi adicionado (ignorando maiúsculas e minúsculas) para evitar duplicados.

Sorteio Justo:

Exige um mínimo de 4 participantes para garantir um sorteio válido.

Utiliza o algoritmo de embaralhamento Fisher-Yates para garantir a aleatoriedade.

Cria um ciclo fechado onde cada participante sorteia outro, e o último sorteia o primeiro, garantindo que ninguém se sorteia a si mesmo.

Feedback Visual:

Após o sorteio, os pares (ex: Pessoa A → Pessoa B) são exibidos.

A lista original de participantes é visualmente riscada para indicar que o sorteio foi concluído.

Reiniciar:

Um botão "Reiniciar" limpa todas as listas (participantes e sorteio), permitindo que um novo sorteio seja iniciado do zero.

🚀 Como Executar
Este projeto não requer nenhuma instalação ou servidor. Basta seguir os passos:

Clone ou descarregue os ficheiros do projeto.

Certifique-se de que os ficheiros index.html, style.css e app.js estão na mesma pasta.

Abra o ficheiro index.html em qualquer navegador de internet moderno (como Chrome, Firefox, Edge, etc.).