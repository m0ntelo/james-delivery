<p align="center">
  <a href="https://jamesdelivery.com.br">
    <img width="250" src="https://raw.githubusercontent.com/james-delivery/frontend-challenge/master/assets/logo.svg">
  </a>
</p>

---

### Pré-requisitos

Para começar a utilizar é pré-requisito ter o Node.js instalado 
(versão 10.x ou acima) e o seu gerenciador de pacote favorito na versão 
mais atual. Caso você ainda não tenha instalado o pacote @angular/cli, 
instale-o via npm ou yarn.

```cs
# Instalando com npm:
npm i -g @angular/cli@latest
```
```cs
# Caso prefira instalar com o yarn:
yarn global add @angular/cli@latest
```
    
### Passo 1 - Instalando as dependências

Acesse a pasta raiz do seu projeto e execute o comando abaixo:

```cs
# Instalando com npm:
npm install
```
```cs
# Caso prefira instalar com o yarn:
yarn install
```  
    
### Passo 2 - Rode o seu projeto

Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no browser ;).

```cs
ng serve
```

Abra o browser e acesse a url [http://localhost:4200](http://localhost:4200/). Pronto!
    
### Passo 3 - Gerando build produção
    
Agora é só executar o comando para gerar os artefatos minificados. Ao terminar o processo
os artefatos estarão na raiz do projeto base, dentro da pasta **dist**. 

```cs
ng build --prod
```



