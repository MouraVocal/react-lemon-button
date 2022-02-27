<h1 align='center'>React Lemon Button 🍋<h1/>

  <p>
    <img src='https://img.shields.io/badge/release-02%2F2022-brightgreen' alt='release badge'>  
    <img src='https://img.shields.io/github/stars/mouravocal/react-lemon-button?style=social' alt='repo stars badge'>
    <img src="https://img.shields.io/static/v1?label=react&message=lib&color=blue&style=plastic&logo=REACT"/>
  </p>

  ## Introdução 🙆
  
  <p align='center'>
    <a href='https://www.energialemon.com.br/'>
      <img align='center' width="58" alt="lemon-energy" src="https://user-images.githubusercontent.com/68398859/155885807-25abf20e-9bf9-4006-97a9-de95a9591895.png">
    </a>
    <p align='center'>Botão estilizado com atributos da tag HTML "button" e opções adicionais para usar em projetos ReactJs</p>
  </p>
 
 ... 
  
  ## Exemplo visual de componente utilizável 🌼
  
  <img align='center' src='https://user-images.githubusercontent.com/68398859/155889778-9107cd6a-4828-4d30-9e59-3b47855c32d4.png' alt='Lemon Button'>
... 
  
 ## Índice 👓
 
 * **[Instalação](#instalação)**
 * **[Dicas](#dicas)**
 * **[Props](#props)**
  
   *[color](#color)*
   
   *[icon](#icon)*
   
   *[disabled](#disabled)*
   
   *[children](#children)*
   
   *[HTML *button* Props](#html-button-props)*
   
 * **[Resolvendo Problemas](#resolvendo-problemas)**
 * **[Autores](#autores)**

... 

## Instalação

No terminal, rode o comando: 
<br>
* se preferir usar `npm`

```
npm install react-lemon-button
```
<hr>

* se preferir usar `yarn`

```
yarn add react-lemon-button
```
<hr>

Importe o componente na página onde deseja utilizá-lo da seguinte forma:

```
import { LemonButton } from 'react-lemon-button'
```

... 

## Dicas

* O componente é utilizado principalmente para as ações de clique do usuário, tem um `width` mínimo de 311px, porém ele preencherá 100% da largura disponível do `container` onde está inserido.
* Ao importar aproveite a ajuda do Intellisense do VsCode com o comando `ctrl + espaço` para que o próprio editor mostre as [Props](#props) disponíveis para utilizar, ajudando na produtividade:
 
![Captura de tela de 2022-02-27 13-49-35](https://user-images.githubusercontent.com/68398859/155891543-43c7dbed-b3d4-417c-833f-43e425917838.png)


... 

## Props

### color

Altera o esquema de cores do componente, as cores do `LemonButton` depende da propriedade `color`, do estado `disabled` e demais props aplicadas.

>color?: 'primary' | 'secondary'
>
>default: 'primary'

`primary`

```
 <LemonButton color='primary'>Text</LemonButton>
 
 // ou
 
 <LemonButton>Text</LemonButton>
```

![primary-colors-button](https://user-images.githubusercontent.com/68398859/155892191-887f2f44-5192-42c4-b580-f4768d5b689a.png)

<hr>

`secondary`

```
 <LemonButton color='secondary'>Text</LemonButton>
```

![secondary-colors-button](https://user-images.githubusercontent.com/68398859/155892537-1945665a-01e4-44cc-9e38-b288d64b416c.png)


### icon

Adiciona um ícone entre `arrow-right`, `check` e `refresh` ao botão onde é espaçado com `justify-content: space-between` automaticamente.

***Obs: Não é possível criar um botão apenas com ícone, mas é possível criar um button sem ícone, ao escolher um ícone obrigatoriamente ele dever ter um `children` que no caso pode ser uma `string` como os exemplos a seguir.***

>icon?: 'arrow-right' | 'check' | 'refresh'

`arrow-right`

```
<LemonButton icon='arrow-right'>Text</LemonButton>
```

![arrow-right-button](https://user-images.githubusercontent.com/68398859/155893108-2f2fc009-1297-40b5-a53f-11b8d7246e4b.png)

<hr>

`check`

```
<LemonButton icon='check'>Text</LemonButton>
```

![check-button](https://user-images.githubusercontent.com/68398859/155893392-62b6c8e6-78a2-42a6-b6b3-ad92e2feb6b1.png)

<hr>

`refresh`

```
<LemonButton icon='refresh'>Text</LemonButton>
```

![refresh-button](https://user-images.githubusercontent.com/68398859/155893461-22ddd7d2-0fe3-4668-be28-8b045d37dfd8.png)

<hr>

### disabled

Caso seja true é alterado para o padrão de cores `disabled` dentro da paleta de cores escolhida `primary` ou `secondary`. também ativa a propriedade `disabled` herdada do compoente [*button* do HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button) onde as ações de click ficam desabilitadas.

> disabled?: true | false
> default: false

```
<LemonButton disabled>Text</LemonButton>
// ou
<LemonButton disabled='true'>Text</LemonButton>
// ou
<LemonButton disabled={true}>Text</LemonButton>
```

![disabled-button](https://user-images.githubusercontent.com/68398859/155893891-8e056e81-1ead-4934-8b9d-110128039f60.png)

### children

Conteúdo do botão, não é obrigatório.

>React.ReactNode?

...

### HTML *button* Props

É possível utilizar todas as demais propriedades de um componente *button* utilizado no HTML, neste [link](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button) você pode ver as demais propriedades que podem ser utilizadas.
          
## Resolvendo Problemas

Em [issues](https://github.com/MouraVocal/react-lemon-button/issues) poderá reportar algum bug, funcionalidade desejada e conferir sobre alguns problemas gerados durante o desenvolvimento desse projeto e como foram resolvidos. Estamos à disposição! 🤓

... 

## Autores

| [<img src='https://github.com/mouravocal.png' width=100><br><sub>Diego Moura</sub>](https://github.com/mouravocal) |
| :---: |

... 

Feito com :heart: por [MouraVocal](https://github.com/mouravocal)
