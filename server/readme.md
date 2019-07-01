<!-- --register--

### http://localhost:3000/user/signup || 'get' || headers: none || description: register user to database

--login--

### http://localhost:3000/user/signin || 'post' || headers: token || description: generate jwtoken for user who login -->

# E-Comerce

#### built with Express and Vue


### List of Content's routes:
| Route            | HTTP   | Header(s)  | Body                             |
|:-----------------|:-------|:-----------|----------------------------------|
| `/item/addItem`     | POST    |  role : admin      | none                             |
| `/item/removeItem`     | DELETE    |  role : admin    | none                             |
| `/item/editItem`     | PATCH    |  role : admin     | none                             |
| `/item/showAll`     | GET     |  none      | none                             |
| `/item/getOne`     | GET    |  none      | none                             |
| `/item/buy`     | POST    |  none      | none                             |
| `/item/addToCart`     | POST    |  none      | none                             |
| `/item/clearCart`     | DELETE    |  none      | none                             |
| `/item/showAllCart`     | GET    |  none      | none                             |



### List of user's routes:
| Route            | HTTP   | Header(s)  | Body                           |
|:-----------------|:-------|:-----------|--------------------------------|
| `/user/signup`    | POST   |  none      | username:string (**Required**),|
|                  |        |            | email:string (**Required**)    |
|                  |        |            | pasword:string (**Required**), |
| `/user/signin`    | POST   |  none      | username:string (**Required**),|
|                  |        |            | password:string (**Required**) |

## Usage
### Make sure you have installed Node.js and npm in your computer, and run these commands:

- $ npm install
- $ nodemon app.js
- $ live-server --host=localhost

Access the API via **https://pacific-lake-99626.herokuapp.com/**
#### Developed by: wildanan