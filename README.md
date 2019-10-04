# Semana_Oministack9
 Projeto desenvolvido durante a semana Omnistack 9 .
 
 ### O Projeeto
 
 A ideia do projeto foi desenvolver uma aplicacao simples que tivesse a funcao parecida do AirBnB de fazer reservas, porem o usuario iria procurar um lugar para programar . Entao foi dividido e definido que as empresas que iriam ter lugares para alugar iriam utilizar  via Web e os usuarios que iriam alugar os espacos iriam utilizar a versao Mobile.
 
 Quando o Usuario usa o Aplicativo Mobile ele cai de inicio em uma tela de login onde ele coloca seu email e quais tecnologias ele utiliza, em seguida ele e redirecionado para uma outra pagina onde mostra os lugares que possuem pessoas que trabalham com essa tecnologia , o nome do lugar e o valor cobrado por dia, quando ele seleciona um lugar ele vai para uma pagina de solicitacao onde ele soliciata qual data ele quer usar o logal para trabalhar . Essa solicitacao e enviada para a empresa que esta colocando o lugar a disposicao para que ele Aceite ou Recuse a reserva.
 
 Na parte Web de inicio a empresa colcoa somente o email, quando ele acessa ele encontra a pagina de Spots( espaco que ele coloca os lugares que ele tem a disposicao), ali ele consegue adicionar um lugar, colocando imagem, nome do lugar, e o valor da diaria. Quando o usuario do app mobile faz uma reserva aparece uma mensagem automaticamente no painel da empresa informando quem e o usuario , qual espaco ele quer reservar e qual a data e a empresa pode Aceitar ou Recusar a reserva.
 
 # Dependencias

 ### BackEnd - NodeJS

- express: ^4.17.1,
- mongoose: ^5.7.3,
- multer: ^1.4.2,
- socket.io: ^2.3.0

###### Dependencia de Desenvolvimento
- nodemon: ^1.19.3

### FrontEnd - ReactJS

- axios: ^0.19.0,
- react: ^16.10.1,
- react-dom: ^16.10.1,
- react-router-dom: ^5.1.2,
- react-scripts: 3.1.2,
- socket.io-client: ^2.3.0

### Mobile - React Native

- axios: ^0.19.0,
- expo: ^35.0.0,
- react: 16.8.3,
- react-dom: 16.8.3,
- react-native: https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz,
- react-native-gesture-handler: ~1.3.0,
- react-native-reanimated: ~1.2.0,
- react-native-web: ^0.11.7,
- react-navigation: ^4.0.10,
- socket.io-client: ^2.3.0

###### Dependencia de Desenvolvimento
- babel-preset-expo: ^7.0.0

### Banco de Dados

- MongoDB

### Instalacao das dependencias

As dependencias foram todas instaladas utilizando o comando yarn
```
yarn add <dependencia>
```
