# Agenda World Beauty (WB) - Sistema CLI

## Sumário

* [Visão Geral do Projeto](#visão-geral-do-projeto)
* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Pré-requisitos](#pré-requisitos)
* [Como Configurar e Rodar o Projeto](#como-configurar-e-rodar-o-projeto)
* [Manual do Usuário Básico](#manual-do-usuário-básico)
* [Estrutura do Projeto](#estrutura-do-projeto)
* [Considerações Adicionais](#considerações-adicionais)
* [Autor](#autor)

## Visão Geral do Projeto

Este projeto consiste no desenvolvimento de um sistema de agenda de clientes baseado em interface de linha de comando (CLI - Command-Line Interface) para o Grupo World Beauty (WB)[cite: 18, 19]. O Grupo WB é uma empresa do ramo de estética que atende tanto o público feminino (manicure, pedicure, design de sobrancelhas, corte e pintura de cabelos, remoção de rugas, manchas na pele, aplicação de Botox, tratamento para emagrecimento e redução de medidas) [cite: 15, 16] quanto o masculino (barbearia, corte de cabelo, modelagem e corte de barba, tratamento para quedas de cabelo e venda de produtos especializados)[cite: 17].

O sistema foi concebido para ser utilizado por cada unidade do Grupo WB individualmente, sem compartilhamento de dados entre elas[cite: 20]. Seu objetivo principal é fornecer uma base de dados robusta para gerenciar clientes, produtos, serviços e o consumo associado, permitindo análises estratégicas para melhorar o contato e as vendas da empresa[cite: 10, 11].

## Funcionalidades

O sistema oferece as seguintes funcionalidades principais:

* **CRUD (Create, Read, Update, Delete) de Clientes:** [cite: 21]
    * Cadastrar novos clientes.
    * Listar todos os clientes cadastrados.
    * Atualizar dados de clientes existentes.
    * Excluir clientes.
* **CRUD (Create, Read, Update, Delete) de Produtos:** [cite: 22]
    * Cadastrar novos produtos (com nome e valor).
    * Listar todos os produtos disponíveis.
    * Atualizar dados de produtos existentes.
    * Excluir produtos.
* **CRUD (Create, Read, Update, Delete) de Serviços:** [cite: 22]
    * Cadastrar novos serviços (com nome e valor).
    * Listar todos os serviços disponíveis.
    * Atualizar dados de serviços existentes.
    * Excluir serviços.
* **Registro de Consumo:** [cite: 23]
    * Permite registrar quais produtos ou serviços cada cliente adquiriu.
* **Listagens Específicas (Análises Estratégicas):**
    * **Top 10 Clientes que Mais Consumiram (em quantidade):** Lista os 10 clientes com maior número de produtos/serviços consumidos. [cite: 29]
    * **Clientes por Gênero:** Lista todos os clientes filtrados por gênero. [cite: 30]
    * **Produtos e Serviços Mais Consumidos (Geral):** Apresenta os itens (produtos e serviços) mais populares. [cite: 31]
    * **Produtos e Serviços Mais Consumidos por Gênero:** Mostra os itens mais populares separados por gênero de cliente. [cite: 31]
    * **Top 10 Clientes que Menos Consumiram:** Lista os 10 clientes com menor número de produtos/serviços consumidos. [cite: 32]
    * **Top 5 Clientes que Mais Consumiram (em valor):** Identifica os 5 clientes que geraram maior receita para a empresa. [cite: 33]

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript, utilizada para o desenvolvimento do projeto. [cite: 1]
* **NPM (Node Package Manager):** Gerenciador de pacotes para Node.js, utilizado para gerenciar dependências.

## Pré-requisitos

Para executar este projeto, você precisará ter o seguinte instalado em seu sistema:

* **Node.js e NPM:** Baixe e instale a versão mais recente em [nodejs.org](https://nodejs.org/).
* **TypeScript Compiler (TSC):** Idealmente instalado globalmente. [cite: 1]
    ```bash
    npm install -g typescript
    ```

## Como Configurar e Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação em sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/lucasguerra12/parte1-agenda-wb]
    cd parte1-agenda-wb
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```
    Isso instalará todas as dependências do projeto (incluindo o TypeScript localmente, se não estiver global).

3.  **Compile o Código TypeScript:**
    ```bash
    tsc
    ```
    * Se o comando `tsc` não for reconhecido, você pode usar `npx tsc`.

4.  **Execute a Aplicação:**
    ```bash
    node dist/classes/main.js
    ```

Ao executar a aplicação, um conjunto de dados iniciais (30 clientes, 20 produtos e 20 serviços, com alguns consumos) será automaticamente populado para facilitar os testes das funcionalidades de listagem[cite: 34].

## Manual do Usuário Básico

Após executar `node dist/classes/main.js`, o sistema apresentará um menu no terminal. Para interagir, digite o número correspondente à opção desejada e pressione `Enter`.

* **Opções de 1 a 4 (CRUD Clientes):** Para gerenciar os dados dos clientes.
* **Opções de 5 a 8 (CRUD Produtos):** Para gerenciar os produtos oferecidos.
* **Opções de 9 a 12 (CRUD Serviços):** Para gerenciar os serviços oferecidos.
* **Opção 13 (Registrar Consumo):** Permite associar produtos e serviços aos clientes. Você precisará informar o nome do cliente e, em seguida, o tipo de item (produto ou serviço) e o nome do item a ser consumido.
* **Opções de 14 a 19 (Listagens Específicas):** Para visualizar relatórios e análises dos dados.
* **Opção 0 (Sair):** Encerra o programa. Lembre-se que, como este é um sistema em memória, todos os dados não salvos serão perdidos ao sair.

## Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção: