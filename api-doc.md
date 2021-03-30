# Live url
https://code-id.burhanyusuf.dev/
## list of Endpoints
```
- GET /generateToken
- GET /
- GET /identityNumber/{identityNumber}
- GET /accountNumber/{accountNumber}
- POST /
- PUT /{id} => will replace entire object
- PATCH /{id} => will updated only spesific field
- DELETE /{id}

```


### GET /generateToken

Request body
```
No Body
```

Response
```json
- status: 200
{
  "access_token" : String
}
```


### GET /

Request Header
```json
{
    "token" : Sting
}
```

Request body
```
No Body
```

Response
```json
- status: 200
[
    {
        "userName": String,
        "accountNumber": String,
        "emailAddress": String,
        "identityNumber": String,
        "__v": Int,
        "id": String
  }
]
```

### GET /identityNumber/{identityNumber} || /accountNumber/{accountNumber}

Request Header
```json
{
    "token" : Sting
}
```

Request body
```
No Body
```

Response
```json
- status: 200
{
    userData: {
        "userName": String,
        "accountNumber": String,
        "emailAddress": String,
        "identityNumber": String,
        "__v": Int,
        "id": String
    }
}
```

### POST /

Request Header
```json
{
    "token" : Sting
}
```

Request body
```
{
	"userName" : String,
	"accountNumber" : String,
	"emailAddress" : String,
	"identityNumber" : String
}
```

Response
```json
- status: 201
{
    userData: {
      "userName": String,
      "accountNumber": String,
      "emailAddress": String,
      "identityNumber": String,
      "__v": Int,
      "id": String
    }
}

```

### PUT /{id}

Request Header
```json
{
    "token" : Sting
}
```

Request body
```
{
	"userName" : String,
	"accountNumber" : String,
	"emailAddress" : String,
	"identityNumber" : String
}
```

Response
```json
- status: 200
{
    userData: {
      "userName": String,
      "accountNumber": String,
      "emailAddress": String,
      "identityNumber": String,
      "__v": Int,
      "id": String
    }
}

```
### PATCH /{id}

Request Header
```json
{
    "token" : Sting
}
```

Request body
```
{
	"userName" : String,
	"accountNumber" : String,
	"emailAddress" : String,
	"identityNumber" : String
}
```

Response
```json
- status: 200
{
    userData: {
      "userName": String,
      "accountNumber": String,
      "emailAddress": String,
      "identityNumber": String,
      "__v": Int,
      "id": String
    }
}

```

### DELETE /{id}

Request Header
```json
{
    "token" : Sting
}
```

Request body
```
No Body
```

Response
```json
- status: 200
{
    "message": "Success"
}


