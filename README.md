# PPS Monorepo

### Requirements
- Create a `.env` file in the `/backend` folder and provide the following data structure:

```dosini
MONGODB_URI="mongodb_uri"
PORT=2345 # default 4000
JWT_SECRET_KEY="some_key"
```

- Create a `.env` file in the `/frontend` folder and provide the following data structure:

```dosini
VITE_API_BASE_PATH="http://localhost:2345/api"
VITE_LOCAL_STORAGE_KEY="some_key"
```
