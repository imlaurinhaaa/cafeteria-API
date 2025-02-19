# Start Café ☕

Atividade proposta para criação de uma API que deve permitir que clientes façam pedidos e que a administração gerencie o estoque de produtos.

## Endpoints da API

 -**1️⃣ GET /menu** → Retorna o cardápio da cafeteria.
 -**2️⃣ POST /order** → Permite que um cliente faça um pedido.
 -**3️⃣ GET /order** → Consulta o todos os pedidos.
 -**4️⃣ GET /order/:id** → Consulta o status de um pedido.
 -**5️⃣ DELETE /order/:id** → Cancela um pedido (caso ainda não tenha sido preparado).

## Aplicativos Utilizados 📲

- Postman
- VS Code

## Dependências Usadas 📚

- Express
- Dotenv
- Cors
- Uuid
- Nodemon

### Significados de Cabeçalhos HTTP 

- **Content-type: application/json** - Especifica o tipo de mídia da requisição ou resposta. Neste caso, JSON.
- **User-Agent: PostmanRuntime/7.43.0** - Identifica o cliente que está fazendo a requisição (Postman).
- **Accept: */*** - Indica que o cliente aceita qualquer tipo de mídia.
- **Cache-Control: no-cache** - Instrução para obter uma cópia fresca do servidor.
- **Postman-Token** - Cabeçalho específico do Postman para identificar a requisição.
- **Host: localhost:3000** - Especifica o host e a porta do servidor de destino.
- **Accept-Encoding: gzip, deflate, br** - Esquemas de codificação de conteúdo suportados pelo cliente.
- **Connection: keep-alive** - Mantém a conexão aberta para requisições subsequentes.
- **Content-Length** - Indica o tamanho do corpo da requisição em bytes.
- **X-Powered-By: Express** - Indica que o servidor está usando o framework Express.
- **Access-Control-Allow-Origin: *** - Permite que qualquer origem acesse o recurso (CORS).
- **ETag** - Identificador único para uma versão específica de um recurso.
- **Date** - Data e hora em que a resposta foi gerada pelo servidor.
- **Keep-Alive: timeout=5** - Tempo em segundos que a conexão deve ser mantida viva após a resposta inicial.

## Rotas Criadas

### 1️⃣ GET /menu
- Rota criada para retornar o menu da cafeteria

#### Cabeçalho HTTP de Requisição

- **User-Agent:** PostmanRuntime/7.43.0
- **Accept:** */*
- **Postman-Token:** 68b3de93-4344-4974-8544-34f137a0a33c
- **Host:** localhost:3000
- **Accept-Encoding:** gzip, deflate, br
- **Connection:** keep-alive

#### Cabeçalho HTTP de Resposta

- **X-Powered-By:** Express
- **Acess-Control-Allow-Origin:** *
- **Content-Type:** application/json; charset=utf-8
- **Content-Length:** 541
- **ETag:** W/"21d-F+tEq3YbOTrf6CU8mk/blop/IrY"
- **Date:** Wed, 19 Feb 2025 00:07:21 GMT
- **Connection:** keep-alive
- **Keep-Alive:** timeout=5

#### Corpo da resposta (JSON) 📑

![GET /menu](./img/GET%20menu.png)

#### Código Status 📣

-- **✅ 200 OK:** Sucesso: client fez uma requisição GET para rota /menu
-- **❌ 404 NOT FOUND:** Erro: cliente fez uma requisição GET para uma rota errada


### 2️⃣ POST /order
- Rota para criação de um pedido

#### Cabeçalho HTTP de Requisição

- **Content-Type:** application/json
- **User-Agent:** PostmanRuntime/7.43.0
- **Accept:** */*
- **Postman-Token:** ae790ba0-b416-4aa3-bb13-4867be388ca7
- **Host:** localhost:3000
- **Accept-Encoding:** gzip, deflate, br
- **Connection:** keep-alive
- **Content-Length:** 136

#### Corpo da requisição (JSON) 📑

```json
{
    "client": "Laura",
    "type": "Doce",
    "foodDescription": "Bolo de Pote",
    "price": 10.00,
    "status": "pendente"
}
```

#### Cabeçalho HTTP de Resposta

- **X-Powered-By:** Express
- **Acess-Control-Allow-Origin:** *
- **Content-Type:** application/json; charset=utf-8
- **Content-Length:** 182
- **ETag:** W/"b6-HwFLdgRQrnkUL3Km1HmorC2g31Y"
- **Date:** Wed, 19 Feb 2025 00:32:35 GMT
- **Connection:** keep-alive
- **Keep-Alive:** timeout=5

#### Corpo da resposta (JSON) 📑

```json
{
    "message": "Pedidio finalizado!",
    "order": {
        "id": "639487e1-36b0-4424-992b-8a632280ccbc",
        "client": "Laura",
        "type": "Doce",
        "foodDescription": "Bolo de Pote",
        "price": 10,
        "status": "pendente"
    }
}
```

#### Código Status 📣

-- **✅ 200 OK:** Sucesso: pedido foi criado
-- **❌ 400 BAD REQUEST:** Erro: não preencher todos os campos obrigatórios
-- **❌ 400 BAD REQUEST:** Erro: status inválidos, serão aceitados- pendete, em preparo e pronto
-- **❌ 400 BAD REQUEST:** Erro: preço apenas permitdo number
-- **❌ 400 BAD REQUEST:** Erro: Não foi possível adicionar o pedido


### 3️⃣ GET /order
- Rota criada para retornar a lista de pedidos

#### Cabeçalho HTTP de Requisição

- **User-Agent:** PostmanRuntime/7.43.0
- **Accept:** */*
- **Postman-Token:** c48d9da6-e997-4b68-902c-946e598c8c03
- **Host:** localhost:3000
- **Accept-Encoding:** gzip, deflate, br
- **Connection:** keep-alive

#### Cabeçalho HTTP de Resposta

- **X-Powered-By:** Express
- **Acess-Control-Allow-Origin:** *
- **Content-Type:** application/json; charset=utf-8
- **Content-Length:** 572
- **ETag:** W/"23c-lI6g9o2eJtue2/ADGAHIW1ZTmAY"
- **Date:** Wed, 19 Feb 2025 01:06:03 GMT
- **Connection:** keep-alive
- **Keep-Alive:** timeout=5

#### Corpo da resposta (JSON) 📑

![GET /order](./img/GET%20order.png)

#### Código Status 📣

-- **✅ 200 OK:** Sucesso: todos os pedidos foram retornados
-- **❌ 404 NOT FOUND:** Erro: não foi possível visualizar os pedidos


### 4️⃣ GET /order/:id
- Rota criada para retornar pedidos específicos, chamando pelo seu ID

#### Cabeçalho HTTP de Requisição

- **User-Agent:** PostmanRuntime/7.43.0
- **Accept:** */*
- **Postman-Token:** 2ded0a19-ff4f-4d6f-98f1-69eb20c7d1a8
- **Host:** localhost:3000
- **Accept-Encoding:** gzip, deflate, br
- **Connection:** keep-alive

#### Corpo da requisição (JSON) 📑

![GET /order id](./img/GET%20order%20id.png)


#### Cabeçalho HTTP de Resposta

- **X-Powered-By:** Express
- **Acess-Control-Allow-Origin:** *
- **Content-Type:** application/json; charset=utf-8
- **Content-Length:** 39
- **ETag:** W/"27-2Qfk+qF6pA/LQFpU21raem6hj5E"
- **Date:** Wed, 19 Feb 2025 01:20:39 GMT
- **Connection:** keep-alive
- **Keep-Alive:** timeout=5

#### Corpo da resposta (JSON) 📑

```json
{
    "client": "Ediana",
    "status": "pendente"
}
```

#### Código Status 📣

-- **✅ 200 OK:** Sucesso: o pedido buscado for retornado
-- **❌ 404 NOT FOUND:** Erro: não foi possível visualizar o pedido buscado


### 5️⃣ DELETE /order/:id
- Rota criada para deletar um pedido que esteja pendente

#### Cabeçalho HTTP de Requisição

- **User-Agent:** PostmanRuntime/7.43.0
- **Accept:** */*
- **Postman-Token:** e3eecf76-f951-483b-8cde-924f48a6df42
- **Host:** localhost:3000
- **Accept-Encoding:** gzip, deflate, br
- **Connection:** keep-alive

#### Corpo da requisição (JSON) 📑

![DELETE /order id](./img/DELETE%20order%20id.png)


#### Cabeçalho HTTP de Resposta

- **X-Powered-By:** Express
- **Acess-Control-Allow-Origin:** *
- **Content-Type:** application/json; charset=utf-8
- **Content-Length:** 30
- **ETag:** W/"1e-iR1NYDEaWYdIaA0a/woV5CTVUn8"
- **Date:** Wed, 19 Feb 2025 01:40:35 GMT
- **Connection:** keep-alive
- **Keep-Alive:** timeout=5

#### Corpo da resposta (JSON) 📑

```json
{
    "message": "Pedido cancelado"
}
```

#### Código Status 📣

-- **✅ 200 OK:** Sucesso: o pedido foi deletado
-- **❌ 404 NOT FOUND:** Erro: não foi possível deletar o pedido soliciatdo
-- **❌ 400 BAD REQUEST:** Erro: não foi possível deletar o pois não estava pendente