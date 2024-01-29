# 🚀 Fastify-starter

Fastify starter template with Typescript, Prisma and Vitest

### Requirements

- Node.js and [bun](https://bun.sh) (or npm, yarn, pnpm)

### Getting started

#### 1. Download starter and install dependencies

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/pierreberger/fastify-starter.git my-project-name
cd my-project-name
bun install
```

#### 2. Set the environment variables:

```shell
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

#### 3. Create and seed the database

Run the following command to create your SQLite database file. This also creates
the `User` and `Post` tables that are defined in
[`prisma/schema.prisma`](./prisma/schema.prisma):

```shell
bun prisma migrate dev --name init
```

#### 4. Start the Fastify server

Launch your Fastify server in development mode with live reload:

```shell
bun run dev
```

Navigate to [http://localhost:3000/](http://localhost:3000/) in your favorite
browser to explore the API of your Fastify server.

### Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `bun install`    | Installs dependencies                       |
| `bun run dev`    | Starts local dev server at `localhost:3000` |
| `bun run test`   | Run tests with Vitest                       |
| `bun run build`  | Build your production site to `./dist/`     |
| `bun run start`  | Preview your build locally                  |
| `bun run format` | Format codes with Prettier                  |
| `bun run lint`   | Run Eslint                                  |

### Environment Variables

The environment variables can be found and modified in the `.env` file. They
come with these default values:

```bash
# Port number
PORT=3000
DATABASE_URL="./data.db"
```
