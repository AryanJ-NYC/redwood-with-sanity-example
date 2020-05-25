# Redwood and Sanity: Movie App

## Getting Started

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

1. Install Sanity CLI

```terminal
yarn global add @sanity/cli
```

2. Create a Sanity account then log into Sanity

```terminal
sanity login
```

3. Create a Sanity movie project

```terminal
sanity init --template moviedb
```

4. Use Sanity sample movie dataset
```terminal
sanity dataset import https://public.sanity.io/moviesdb-2018-03-06.tar.gz
```

5. Create a `.env` file in the root.

6. Add `SENTRY_PROJECT_ID` (found in `/sanity.json`) to `.env`. Your `.env` should look like:

```text
SENTRY_PROJECT_ID=nfbwci30
```

7. Start your Sentry dev server.

```terminal
sanity start
```

8. Start your Redwood dev server.

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.
