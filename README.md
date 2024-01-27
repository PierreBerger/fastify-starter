# 🚀 Fastify-starter

Fastify starter template with Typescript, Prisma and Vitest

### Requirements

- Node.js and [bun](https://bun.sh) (or npm, yarn, pnpm)

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/pierreberger/fastify-starter.git my-project-name
cd my-project-name
bun install
```

Set the environment variables:

```shell
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

Then, you can run locally in development mode with live reload:

```shell
bun run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

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
```
