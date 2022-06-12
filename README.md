## API Documentation

### Authentication User (Using JWT)

**Base URL :**

> https://mag-it-tnymgnzb5a-et.a.run.app/

- Register
  - method: `POST`
  - endpoint: `/signup`
  - body request:
    ```json
    "name": varchar,
    "email": varchar,
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
    "email": varchar,
    "password": varchar
    ```
  - body response:
    ```json
    "success": 1,
    "message": "Login Successfully",
    "token": token
    }
    ```
    
    ### Model Detection
    
  **Base URL :**

  > https://mag-it-service-tnymgnzb5a-et.a.run.app/
    
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
