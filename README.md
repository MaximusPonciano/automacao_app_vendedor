# App Vendedor – Mobile Automation

Projeto de automação mobile do **App Vendedor** usando **Appium**, **WebdriverIO** e **Cucumber**.

## Requisitos

- Node.js 18+ (recomendado 20)
- Java JDK 11+
- Android SDK
- Appium

## Instalação

```bash
npm install
````

Execute `npm run prepare` após a instalação para habilitar os hooks do Husky.

## Configuração

Crie o arquivo `.env` com os dados do dispositivo:

```env
DEVICE_NAME=
DEVICE_UDID=
ENVIRONMENT=qa/beta
```

> O `.env.example` serve como referência e não deve conter dados sensíveis.

## Execução

```bash
appium
```

```bash
npm run test:mobile
```

## Organização

```
/src
  /config          # wdio.conf.js
  /features        # arquivos .feature
    /step-definitions
    /support
  /pageObjects
    /base          # ações genéricas (basePage)
    /elements      # mapeamento de seletores
    /pages         # lógica de páginas + export centralizado
  /utils
```

## Qualidade e formatação

* `npm run lint` / `npm run lint:fix`
* `npm run prettier:check` / `npm run prettier:write`
* Hooks do Husky:

  * `pre-commit`: eslint nos arquivos alterados + prettier em modo check
  * `commit-msg`: validação com commitlint

## Commits e versionamento

* Padrão [Conventional Commits](https://www.conventionalcommits.org/)
* Semantic Release gera versão, changelog e atualiza `package.json`/`package-lock.json`
* Histórico do `CHANGELOG.md` segue Keep a Changelog + SemVer

## CI/CD

* `.github/workflows/ci.yml`: executa `npm ci`, lint e prettier em `push` para `main` e `pull_request`
