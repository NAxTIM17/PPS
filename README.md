# PPS Monorepo

### Contents

-   [Backend's README](/backend/README.md)
-   [Frontend's README](/frontend/README.md)

### Chore-related

##### Installing dependencies

Since this a monorepo (i.e. a single repository containing more than one workspace),
we have **scoped** dependencies and **common** dependencies.  
If the dependency should be accessible to all workspaces, then you need to use a common dependency.
The command for adding one is:

```bash
$ yarn -W add <dependency_name>
```

If the dependency will be used in only one workspace, then you need to use a scoped dependency.
The command for adding one is:

```bash
$ yarn --cwd <environment_name> add <dependency_name>
# or
$ cd <environment_name> && yarn add <dependency_name>
```

### Requirements

-   Create a `.env` file in the `/backend` folder and provide the following data structure:

    ```dosini
    MONGODB_URI="mongodb_uri"
    PORT=2345 # default 4000
    JWT_SECRET_KEY="some_key"
    ```

-   Create a `.env` file in the `/frontend` folder and provide the following data structure:
    ```dosini
    VITE_API_BASE_PATH="http://localhost:2345/api"
    VITE_LOCAL_STORAGE_KEY="some_key"
    ```
