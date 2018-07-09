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


## Sellers

#### Get All Sellers

`GET: /sellers`

Status | Response
-------|----------
success|`status: 'success', message: 'Return all sellers', 'data': output`
error  |`status: 'error', message: 'There arent sellers', 'data': {}`

#### Get One Customer

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

* example: /validation/{"cpfcnpj":string}

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

