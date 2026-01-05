/**
 * Projeto demonstrativo – Google Apps Script
 * Código original desenvolvido em ambiente institucional
 * Versão adaptada para portfólio
 */

function executarAutomacao() {
  prepararAmbiente();
  processarDados();
  gerarRelatorio();
}

function prepararAmbiente() {
  Logger.log("Ambiente preparado.");
}

function processarDados() {
  for (let i = 1; i <= 5; i++) {
    Logger.log("Processando item " + i);
  }
}

function gerarRelatorio() {
  Logger.log("Relatório gerado com sucesso.");
}
