# traP Collection Admin

## 開発方法

## Clone 後

```bash
pnpm install
pnpm generate-api
```

## API が更新されるたび次のコマンドを実行

```bash
pnpm generate-api
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
NUXT_PUBLIC_API_URL=https://collection-dev.trapti.tech
NUXT_PUBLIC_USE_MOCK_API=true

```

```
# .env
NUXT_PUBLIC_API_URL=https://collection.trap.jp
NUXT_PUBLIC_USE_MOCK_API=false
```

を推奨

## Storybook

```bash
pnpm storybook
```

で storybook を起動できる。 components 以下の `stories.ts` を読みこみ、コンポーネントの確認ができる。
