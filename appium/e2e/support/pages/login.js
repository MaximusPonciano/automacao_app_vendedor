// src/pageObjects/elements/loginElements.js

export const loginElements = {
  // App (NATIVE)
  loginButton: 'android=new UiSelector().description("Login")',

  // WebView / Browser VTEX
  cookieDomain: '.vtexcommercestable.com.br',
  authCheck: 'css:body', // usado só pra validar contexto carregado
};
