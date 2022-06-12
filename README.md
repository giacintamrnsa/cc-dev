## API Documentation

### Authentication User (Using JWT)

- Register
  - method: `POST`
  - endpoint: `/signup`
  - body request:
    ```json
    "name": varchar
    "email": varchar
    "password": varchar
    ```
  - body response:
    ```json
    "success": "1",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": id
    }
    ```
- Login

  - method: `POST`,
  - endpoint: `/login`
  - body request:
    ```json
    "email": string, email | required
    "password": string | required
    ```
  - body response:
    ```json
    "success": 1,
    "message": "Login Successfully",
    "token": token
    }
    ```
    
    ### Model Detection
    
  - Model Result

  - method: `POST`,
  - endpoint: `/detect`
  - body request:
    ```multipart/form-data
    "img": image
    ```
  - body response:
    ```json
    "prediction": result
    }
    ```
