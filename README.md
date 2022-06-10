# Alura Event Tracker


## 🔨 Funcionalidades do projeto

O Alura Event Tracker é um projeto onde o usuário pode cadastrar um evento e visualizá-lo no calendário e na lista em baixo da parte de filtros, ele pode também filtrar os eventos por data e por estado que seriam os concluídos ou não, inicialmente o projeto não utilizava estado global sendo necessário passar varias props para componentes filhos e esses componentes filhos passariam para os filhos causando o efeito de prop drilling e para resolver foi utilizado a biblioteca RecoilJS para criar um estado global onde todos os componentes poderiam ter acesso a esses dados.

## ✔️ Técnicas e tecnologias utilizadas

- `React`
- `React Hooks`
- `TypeScript`
- `Biblioteca Kalendar`
- `RecoilJS`

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute npm i para instalar as dependências e npm start para inicar o projeto.
Será necessário rodar o comando `json-server --watch db.json -p 8080` no terminal para utilizar uma ferramenta que simula uma API REST de inicio para conseguir rodar a aplicação.