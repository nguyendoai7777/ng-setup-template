# Angular Application

## Features

- SPA
- SSR
- SSR + Localize
- SPA + Localize

### Extract i18n

```shell
npm run i18n
```

translate file at `src/locales`

---

### Start app options

1. SPA mode

```shell
  npm start
```

2. SSR mode

```shell
npm run dev:ssr
```

3. SPA mode with Vietnamese (after extract i18n)

```shell
npm run dev:vi
```

4. SSR mode with Vietnamese (after extract i18n)

```shell
npm run dev:ssr:vi
```

### Build options

1. SPA mode

```shell
  npm run build:spa
```

2. SSR mode

```shell
npm run build:ssr
```

3. SSR mode and multiple localize/language

```shell
npm run build:i18n
```

4. SPA mode and multiple localize/language

```shell
npm run build:i18n:spa
```
