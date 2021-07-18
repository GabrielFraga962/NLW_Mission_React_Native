# NWL_Mission_React_Native ⚛️

- Projeto desenvolvido na missão React Native no NLW #06
 > Status do Projeto: Em desenvolvimento :warning:

![AppGames](https://i.imgur.com/loRN0Jk.png)

# Projeto 💻
Aplicativo para lhe ajudar a conectar-se e organiza o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.

# Features 🛠️

 - [ ] Autenticação Social OAuth2 com servidor do Discord.
 - [ ] Obtém perfil do usuário cadastro no Discord (username e avatar);
 - [ ] Lista os servidores do Discord que o usuário faz parte;
 - [ ] Permite realizar o agendamento de partidas;
 - [ ] Permite filtrar as partidas por categoria;
 - [ ] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
 - [ ] Compartilha o convite para ingressar no servidor do usuário;
 - [ ] Permite redirecionar o usuário para o seu próprio servidor;
 - [ ] Disponibiliza a função de Logout.

# Tecnologias 📱

 - [React Native](https://reactnative.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Expo](https://expo.io/)
 - [Context API](https://pt-br.reactjs.org/docs/context.html)
 - [Async Storage](https://reactnative.dev/docs/asyncstorage)
 - Vector Icons
 - [React Native Svg e Svg Transform](https://github.com/kristerkari/react-native-svg-transformer)
 - [Axios](https://www.npmjs.com/package/axios)
 - Gradient colors
 - OAuth2 Discord
 - [Expo Google Fonts](https://docs.expo.io/guides/using-custom-fonts/#using-a-google-font)
 - [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator/)
 - [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
 - [Expo Authentication](https://docs.expo.io/guides/authentication/)
 - [React Native Share](https://github.com/react-native-share/react-native-share)
 - Deep Link

# Execultando o projeto

Utilize o <b>yarn</b> ou o <b>npm install</b> para instalar as dependências do projeto. Em seguida, inicie o projeto.

```
expo start
```
Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).

```
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```
# Layout 🖼️

O projeto foi desenhado no [figma](https://www.figma.com/). O layout do projeto pode ser acessado através deste [link](https://www.figma.com/file/qc229XquTq6gFaLxeZ22d4/GamePlay-(Copy)?node-id=0%3A1)

# Licença 📑

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.

