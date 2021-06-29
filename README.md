# API 

## Rotas

POST

<url_base>/jobs - criar novas vagas  
```json
    {
	    "city": "Belo Horizonte - MG",
	    "experience_id": "3d5e27fe-a556-4bfc-9745-ea4ce6f87d9d",
	    "technologies": [
	    	"578884e8-6ad8-4954-a6a3-40b7acc65f10",
	    	"24fb4e02-2a7b-4fe0-880d-51f2ac0a953b"
	    ]
    }
```
<url_base>/candidates - criar novos candidatos
```json
    {
	    "city": "Belo Horizonte - MG",
	    "experience_id": "de2dfb15-86b0-4745-8d93-d018489900d0",
	    "technologies": [
	    	{
	    		"technology_id": "578884e8-6ad8-4954-a6a3-40b7acc65f10",
	    		"is_main_tech": true
	    	},
	    	{
	    		"technology_id": "10e7a210-9808-4373-99da-06d3abfa2084",
	    		"is_main_tech": false
	    	},
	    	{
	    		"technology_id": "e299f773-0ddb-472e-8561-1b65e3163b09",
	    		"is_main_tech": false
	    	}
	    ]
    }
```

GET

<url_base>/experience - retorna a lista de possíveis valores para tempo de experiência

<url_base>/technologies - retorna a lista de possíveis valores para técnologias disponíveis

<url_base>/candidates/filter - retorna a lista de candidatos compatíveis com os requisitos para a vaga

```url
    <base_url>/candidates/filter?city=Belo%20Horizonte%20-%20MG&experience_id=de2dfb15-86b0-4745-8d93-d018489900d0&technologies=578884e8-6ad8-4954-a6a3-40b7acc65f10,10e7a210-9808-4373-99da-06d3abfa2084,e299f773-0ddb-472e-8561-1b65e3163b09
```