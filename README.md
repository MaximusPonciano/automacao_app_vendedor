# App Vendedor – Mobile Automation

Projeto de automação mobile do **App Vendedor** usando **Appium**, **WebdriverIO** e **Cucumber**.

## Requisitos

- Node.js 18+
- Java JDK 11+
- Android SDK
- Appium

## Instalação

```bash
npm install
```

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

## Stack

- Appium
- WebdriverIO
- Cucumber
- dotenv

## Observações

- Compatível com emulador e dispositivo físico
- App instalado automaticamente via URL
- Arquitetura baseada em Page Objects
