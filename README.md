# Cifra de César

## Definição do produto

Um coletivo feminista, nesses tempo difíceis de repressão às manifestações públicas de descontentamento, se viu diante de um problema após a notícia de que a polícia infiltrou agentes entre os manifestantes.

O medo de pessoas infiltradas nas reuniões preparativas que poderiam criminalizar as ações do grupo e ameaçar a segurança das participantes, mostrou a necessidade de restringir a divulgação aberta das informações sobre ponto de encontro, horários e outros dados.

A solução encontrada foi o desenvolvimento de um meio de troca de mensagens usando criptografia, que utiliza um método simples e pode ser operado por usuárias com níveis diversos de experiência em computação. 

A chave para decifrar as mensagens é dada pessoalmente a cada reunião e somente as participantes do coletivo podem cifrar e decifrar as mensagens tendo acesso ao conteúdo.



## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

Usando conhecimentos de **User Experience Design** e de **JavaScript** o objetivo foi: 
 - desenhar um produto pensando nos usuários, 
 - construir uma interface,
 - executar eventos básicos do DOM, 
 - escrever a lógica que cifra e descifra mensagens, 
 - realizar testes básicos que comprovem (e documentem) esta lógica,
 - e finalmente manipular o DOM para que ele mostre e imprima os resultados.


## Fluxograma de blocos


![Fluxograma](/src/images/cc.png)


```text
./
├── .gitignore
├── README.md
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── tests.js
│   └── style.css
```




### Passos 

* [ ] `README.md` com explicações e desenho do projeto
* [ ] Usar VanillaJS.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ ] Mostrar o resultado da cifra corretamente.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ ] Mostrar o resultado descifrado corretamente.
* [ ] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Criar testes unitários.
 
 ###Resultados Obtidos


 - vou colocar um printscreen do projeto 
 - descrever o que o meu site faz