## Available Scripts

Install mysql in your local machine

Also, you can find the database configuration:

##### `"development": {`

##### `"username": "root",`

##### `"password": "password",`

##### `"database": "obie",`

##### `"host": "127.0.0.1",`

##### `"dialect": "mysql"`

##### }

In the project directory, you can run:

### `npm install`

To migrate database:

### `npx sequelize-cli db:create`

### `npx sequelize-cli db:migrate`

To migrate excel data to mysql server:

### `cd data`

### `node data.js`

To run this project

### `node server.js`

API endpoint:

http://localhost:4000/api/carrier?state=il&policy=both

{
    "data": [
        {
            "carrier": {
                "id": 1,
                "name": "Allstate"
            }
        },
        {
            "carrier": {
                "id": 3,
                "name": "Auto Owners"
            }
        },
        {
            "carrier": {
                "id": 4,
                "name": "Encompass"
            }
        },
        {
            "carrier": {
                "id": 8,
                "name": "Chubb"
            }
        },
        {
            "carrier": {
                "id": 12,
                "name": "National General"
            }
        },
        {
            "carrier": {
                "id": 14,
                "name": "Progressive"
            }
        },
        {
            "carrier": {
                "id": 16,
                "name": "SafeCo"
            }
        },
        {
            "carrier": {
                "id": 15,
                "name": "Nationwide"
            }
        },
        {
            "carrier": {
                "id": 18,
                "name": "State Auto"
            }
        },
        {
            "carrier": {
                "id": 20,
                "name": "Travelers"
            }
        },
        {
            "carrier": {
                "id": 17,
                "name": "Secura"
            }
        }
    ]
}


