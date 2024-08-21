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

-   In the `/backend` folder you will find a `.env.example` file that you can rename to `.env` and provide the missing data.
-   In the `/frontend` folder you will find a `.env.example` file that you can rename to `.env` and provide the missing data.
