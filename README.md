## Para iniciar o projeto:
- yarn version: 1.22.19 || npm version: 9.8.0
- node version: 18.16.1
- Clone o projeto
- cd coin-synch
- yarn || npm i
- yarn dev || npm run dev
- Para iniciar fake backend: json-server --watch db.json, certifique-se de ter installado.
# CoinSynch

Entrega do desafio: 

Nessa aplicação foi consumido a coinApi, uma api para CryptoMoedas, básicamente eu consumi a rota api/assets e /assets/icons/${assetId}. 

Juntei os dois arrays de objetos que a api me retorna filtrei por um array de assets_id me trazendo apenas as moedas  'BTC',
    'ETH',
    'XRP',
    'ADA',
    'BCH',
    'USDT',
    'BIT',
    'DOGE',
    'XLM',
    'LTC' depois juntei tudo em um único array de objetos, assim eu poderia ter as informações da cripto e seus icones correspondentes em um único objeto.
    Existe um arquivo db.json- json-server, eu salvei objeto usando o json-server então é possivel usar a aplicação consumindo a api publica ou json-server basta fazer ajuste no código.
    
## Demonstração
![image](https://github.com/Adonaikjr/coin-synch/assets/90911791/ec00957d-356a-442b-98f4-93b9425d705b)
![image](https://github.com/Adonaikjr/coin-synch/assets/90911791/4278d7a5-9dbc-4195-9e3e-696bc4b4e28c)

## Technologias

- Vite
- Json-Server
- React-awesome-slider
- Axios
- Dotenv
- Eslint
- Typescript
- Framer-motion
- Hamburger-react
- Styled-components



## Referência

 - [coinApi](https://www.coinapi.io/)


