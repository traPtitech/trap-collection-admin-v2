# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## API が更新されるたび次のコマンドを実行

```bash
npm run generate-api
```

## .env の設定

.env.exmple をコピーして
.env.development
と
.env
を作成。

それぞれ

```
# .env.development
NUXT_PUBLIC_API_URL=https://collection-dev.trapti.tech/api/v2
```

```
# .env
NUXT_PUBLIC_API_URL=https://collection.trap.jp/api/v2
```

を推奨

## Setup

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
