# Botijon API Rest

### URL padrão:
```
https://botijon.herokuapp.com/api
```

## Users

#### Get All Users:

`GET: /users/`

Status | Response
-------|----------
success|`status: 'success', message: 'Return all users', 'data': output`
error  |`status: 'error', message: 'There arent users', 'data': {}`

#### Get One User

`GET: /users/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Return one user', 'data': output`
error  |`status: 'error', message: 'User dont found', 'data': {}`

#### Validation User

`GET: /users/validation/:user`

params | type
-------|------
:user  |object json

* example: /users/validation/{"email":string,"password":string}

Status | Response
-------|----------
success|`status: 'success', message: 'User registered', 'data': output`
error  |`status: 'error', message: 'User dont registered', 'data': {}`

#### Create a new User

`POST: /users/create`

```
Body:
{
  "email":string,
  "password": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Registered successfully', 'data': outpu`
error  |`status: 'error', message: 'Could not register user', 'data': {}`

#### Update User's password

`PUT: /users/update/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "password": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'User update successfully', 'data': output`
error  |`status: 'error', message: 'Cannot possible update the user', 'data': {}`

## Customers

#### Get All Customers

`GET: /customers`

Status | Response
-------|----------
success|`status: 'success', message: 'Return all customers', 'data': output`
error  |`status: 'error', message: 'There arent customers', 'data': {}`

#### Get One Customer

`GET: /customers/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Return one customer', 'data': output`
error  |`status: 'error', message: 'Customer dont found', 'data': {}`

#### Validation Customer

`GET: /customers/validation/:customer`

params | type
-------|------
:customer  |object json

* example: /users/validation/{"email":string,"password":string}

Status | Response
-------|----------
success|`status: 'success', message: 'Customer registered', 'data': output`
error  |`status: 'error', message: 'Customer dont registered', 'data': {}`

#### Create a new Customer

`POST: /customers/create`

```
Body:
{
  "name": string,
  "email": string,
  "password": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Customer registered successfully', 'data': output`
error  |`status: 'error', message: 'Could not register customer', 'data': {}`

#### Customer change password

`PUT: /customers/changepassword/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "password": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Customer update successfully', 'data': output`
error  |`status: 'error', message: 'Cannnot possible update the customer', 'data': {}`

#### Customer change name

`PUT: /customers/changename/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "name": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Customer update successfully', 'data': output`
error  |`status: 'error', message: 'Cannnot possible update the customer', 'data': {}`

#### Customer change address

`PUT: /customers/changeaddress/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "address_id": number
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Customer update successfully', 'data': output`
error  |`status: 'error', message: 'Cannnot possible update the customer', 'data': {}`


## Sellers

#### Get All Sellers

`GET: /sellers`

Status | Response
-------|----------
success|`status: 'success', message: 'Return all sellers', 'data': output`
error  |`status: 'error', message: 'There arent sellers', 'data': {}`

#### Get One Seller

`GET: /sellers/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Return one seller', 'data': output`
error  |`status: 'error', message: 'Seller dont found', 'data': {}`

#### Validation Seller

`GET: /sellers/validation/:seller`

params | type
-------|------
:seller  |object json

* example: /validation/{"email":string,"password":string}

Status | Response
-------|----------
success|`status: 'success', message: 'Seller registered', 'data': output`
error  |`status: 'error', message: 'Seller dont registered', 'data': {}`

#### Verify Seller

`GET: /sellers/verify/:seller`

params | type
-------|------
:seller|object json

Example:  
* /validation/{"cpfcnpj":string}

Status | Response
-------|----------
success|`status: 'success', message: 'Seller registered', 'data': output`
error  |`status: 'error', message: 'Seller dont registered', 'data': {}`

#### Create a new seller

`POST: /sellers/create`

```
Body:
{
	"name": string,
	"email": string,
	"password": string,
	"cpfcnpj": string,
	"address_id": number //on start can be null, after in edit profile page should be add
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Customer registered successfully', 'data': output`
error  |`status: 'error', message: 'Could not register customer', 'data': {}`

#### Seller change address

`PUT: /sellers/changeaddress/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "address_id": number
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Seller update successfully', 'data': output`
error  |`status: 'error', message: 'Cannnot possible update the seller', 'data': {}`

#### Seller change name

`PUT: /sellers/changename/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "name": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Seller update successfully', 'data': output`
error  |`status: 'error', message: 'Cannnot possible update the seller', 'data': {}`

#### Seller change password

`PUT: /sellers/changepassword/:id`

params | type
-------|------
:id    |number

```
Body:
{
  "password": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Seller update successfully', 'data': output`
error  |`status: 'error', message: 'Cannnot possible update the seller', 'data': {}`

## Products

#### Get All Products

`GET: /products`

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all products', 'data': output`
error  |`status: 'error', message: 'There arent products found', 'data': {}`

#### Get All Products per seller

`GET: /products/byseller/:seller_id`

params      | type
------------|------
:seller_id  |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all Products this seller', 'data': output`
error  |`status: 'error', message: 'There arent products this seller', 'data': {}`

#### Get All Products per type

`GET: /products/pertype/:productType`

params | type
-------|------
:type  |string

Example:  
* /products/pertype/agua
* /products/pertype/gas

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all Products this type', 'data': output`
error  |`status: 'error', message: 'There arent products this type registered', 'data': {}`

#### Get All Products per type and status

`GET: /products/availabletypes/:availabletypes`

params          | type
----------------|------
:availabletypes |object json

Example:  
* /products/availabletypes/{"product_type": string,"status": string}
  1. /products/availabletypes/{"product_type": "agua","status": "available"}
  2. /products/availabletypes/{"product_type": "gas","status": "unavailable"}

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all products with this status of this type', 'data': output`
error  |`status: 'error', message: 'There arent products this status of this type', 'data': {}`

#### Get All Products per description

`GET: /products/description/:description`

params       | type
-------------|------
:description |string

Example:  
* /products/description/Água Mineral Marca X 20L

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all products', 'data': output`
error  |`status: 'error', message: 'Product dont found', 'data': {}`

#### Get All products with value bigger than value params

`GET: /products/biggervalue/:value`

params | type
-------|------
:value |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all Products this value', 'data': output`
error  |`status: 'error', message: 'There arent products this value registered', 'data': {}`

#### Get All products with value smaller than value params

`GET: /products/smallervalue/:value`

params | type
-------|------
:value |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all Products this value', 'data': output`
error  |`status: 'error', message: 'There arent products this value registered', 'data': {}`

#### Get One Product by Id

`GET: /products/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned one product', 'data': output`
error  |`status: 'error', message: 'Product dont found', 'data': {}`

#### Create a new Product

`POST: /products/create`

```
Body:
{
	"name": string,
	"value": decimal,
	"seller_id": number,
	"product_type": string, //can be 'agua' or 'gas'
	"status": string //can be 'available or unavailable'
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Product created successfully', 'data': output`
error  |`status: 'error', message: 'Could not create product', 'data': {}`

#### Change Product's description

`PUT: /products/changedescription/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"description": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Product description update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the product description', 'data': {}`

#### Change Product's value

`PUT: /products/changevalue/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"value": decimal
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Product value update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the product value', 'data': {}`

#### Change Product's status

`PUT: /products/changestatus/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"status": string //can be 'available' or 'unavailable'
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Product status update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the product status', 'data': {}`

## Addresses

#### Get All Addresses

`GET: /addresses`

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all addresses', 'data': output`
error  |`status: 'error', message: 'There arent addresses', 'data': {}`

#### Get One Address by Id

`GET: /addresses/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned one address', 'data': output`
error  |`status: 'error', message: 'There arent addresses', 'data': {}`

#### Get one address by address, number and cep

`GET: /addresses/getid/:address`

params  | type
--------|------
:address|object json

Example:  
* /addresses/getid/{"address":string,"number":number,"cep":string}
  1. /addresses/getid/{"address":"rua passarinho","number":"21","cep":"54331002"}

Status | Response
-------|----------
success|`status: 'success', message: 'Return Address id', 'data': output`
error  |`status: 'error', message: 'This address is not found', 'data': {}`

#### Create a new address

`POST: /addresses/create`

```
Body:
{
	"address": string,
	"number": string or number,
	"neighborhood": string,
	"cep": string,
	"reference_point": string //can be null
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Address registered successfully', 'data': output`
error  |`status: 'error', message: 'Could not register the address', 'data': {}`

#### Update the Address

`PUT: /addresses/update/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"address": string,
	"number": string or number,
	"neighborhood": string,
	"cep": string,
	"reference_point": string //can be null
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Address update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the address', 'data': {}`

## Requests

#### Get All Requests

`GET: /requests`

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all requests', 'data': output`
error  |`status: 'error', message: 'There arent requests found', 'data': {}`

#### Get One Request by Id

`GET: /requests/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned one request', 'data': output`
error  |`status: 'error', message: 'There arent requests found', 'data': {}`

#### Get One Request of day by Customer

`GET: /requests/getid/:request`

params      | type
------------|------
:request    |object json

Example:
* /requests/getid/{"customer_id":number,"product_id":number}
	* NOTE: There is a third parameter: the current date. This parameter is already in the query, so no need to worry.

Status | Response
-------|----------
success|`status: 'success', message: 'Returned one request', 'data': output`
error  |`status: 'error', message: 'There arent requests found', 'data': {}`

#### Create a new Request

`POST: /requests/create`

```
Body:
{
	"customer_id": number,
	"product_id": number,
	"quantity": number
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Request registered successfully', 'data': output`
error  |`status: 'error', message: 'Could not register the request', 'data': {}`

#### Update the request

`PUT: /requests/update/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"quantity": number
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Request update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the request', 'data': {}`

## Payments

#### Get All Payments

`GET: /payments`

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all payments', 'data': output`
error  |`status: 'error', message: 'There arent payments', 'data': {}`

#### Get one Payment by id

`GET: /payments/:id`

params | type
-------|------
:id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned one payment', 'data': output`
error  |`status: 'error', message: 'There arent payments', 'data': {}`

#### Get all payments per status and type

`GET: /payments/typestatus/:payment`

params   | type
---------|------
:payment |object json

Example:
* /payments/typestatus/{"payment_type":string,"status":string}
	* payment_type:
		1. can be "dinheiro" or "cartao"
	* status:
		1. can be "success", "waiting" or "failed"

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all payments type and status', 'data': output`
error  |`status: 'error', message: 'There arent payments', 'data': {}`

#### Get all payments of a customer

`GET: /payments/bycustomer/:id`

params          | type
----------------|------
:customer_id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all payment', 'data': output`
error  |`status: 'error', message: 'There arent payments', 'data': {}`

#### Get all payments of a seller

`GET: /payments/toseller/:seller_id`

params        | type
--------------|------
:seller_id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned all payment', 'data': output`
error  |`status: 'error', message: 'There arent payments', 'data': {}`

#### Get value total of all payments of a seller

`GET: /payments/valuetotal/:seller_id`

params        | type
--------------|------
:seller_id    |number

Status | Response
-------|----------
success|`status: 'success', message: 'Returned value total of payments this seller', 'data': output`
error  |`status: 'error', message: 'There arent payments', 'data': {}`

#### Create a new payment

`POST: /payments/create/`

```
Body:
{
	"value": double,
	payment_type: string, //can be "dinheiro" or "cartao"
	address_id: number,
	request_id: number,
	status: string // can be "success", "waiting" or "failed"
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Payment registered successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible register the payment', 'data': {}`

#### Change value of payment

`PUT: /payments/changevalue/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"value": double
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Payment value update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the payment value', 'data': {}`

#### Change status of payment

`PUT: /payments/changestatus/:id`

params | type
-------|------
:id    |number

```
Body:
{
	"status": string
}
```

Status | Response
-------|----------
success|`status: 'success', message: 'Status payment update successfully', 'data': output`
error  |`status: 'error', message: 'Could not possible update the payment status', 'data': {}`
