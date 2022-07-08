# Jogo da Memória do Persona 5

Este jogo da memória é um projeto feito com HTML, CSS e JavaScript.  

Usei como tema um dos jogos que mais gosto que é o Persona 5. 
- Para fazer os pares das cartas usei ilustrações dos personagens e da logo que representa o grupo dos personagens principais (Phantom Thieves). 
- Fiz o jogo com pares diferentes (exceto para a ilustração da logo), sendo uma carta o personagem na versão do seu dia a dia e o par da carta é esse mesmo personagem, mas na sua versão de quando está no metaverso (para quem não conhece o Persona 5 deve ser um pouco mais difícil finalizar o jogo da memória).
- A parte de trás das cartas usei a imagem do ícone do app que leva os personagens para o metaverso.
- A imagem de plano de fundo da página também é uma ilustração usada no Persona 5.

## HTML

No HTML adicionei:
- As imagens usadas para fazer as cartas.
- Os elementos para marcar o tempo e o número de cliques até finalizar o jogo.
- Um elemento para adicionar uma mensagem ao fim do jogo.
- A frase **_Let us start the game_** que aparece no jogo do Persona 5 (achei que ficaria legal na página) e adicionei um botão na palavra **start** para começar a marcar o tempo.

## CSS

No CSS fiz toda a estilização da página.
- Usei flexbox para posicionar e alinhar os elementos.
- Usei pseudoclasse na palavra **start** para indicar que é um botão.
- Transform e Transition para os efeitos ao clicar nas cartas e para a mensagem de vitória ao fim do jogo.
- A propriedade `backface-visibility` para não deixar visível a imagem espelhada ao rotacioná-la 180°.

## JavaScript

No javaScript adicionei:
- Uma função autoinvocável para mudar a posição das cartas usando `Math.Random` e CSS para aplicar a ordenação.
- `Event Listener` para chamar as funções: 
    - `startGame` que é chamada ao clicar na palavra **start** para começar a contar o tempo.
    - `flipCard` que é chamada ao clicar nas cartas.
        - Chama a função `startGame` caso não tenha clicado na palavra **start**.
        - Nessa função é adicionado a contagem de cliques.
        - Não permite que mais duas cartas estejam viradas ao mesmo tempo.
        - Chama a função que verifica se as cartas são iguais.
        - Quando o jogo termina adiciona a mesagem de vitória, que mostra em quanto tempo e com quantos cliques levou para finalizar o jogo.
- A verificação se o par de cartas são iguais, que é feita comparando o nome dado as imagens no HTML. Se forem iguais elas recebem uma classe chamada `.flipped` e o `Event Listener` é removido delas. Caso não sejam iguais as cartas são desviradas para ficarem ocultas novemente.

### Fontes

Para o projeto usei como guia:
- O desafio de projeto "Desenvolvendo um jogo da memória" da plataforma DIO, apresentado pela Gabriela Pinheiro.
- O tutorial do site ["How to create a memory game in JavaScript"](https://www.webtips.dev/memory-game-in-javascript).
- O site W3schools.

*Todas as imagens foram retiradas da internet.*
