# Atividade 3 — Protótipo interativo da pizzaria

**Nome do conceito:** Forno & Gestão  
**Público:** administrador e equipe de uma pizzaria de 20 mesas, com necessidade de controle de caixa e clientes.  
**Tipo:** protótipo acadêmico desktop de alta fidelidade, sem backend.

## Abrir e testar
1. Baixe [prototipo.html](prototipo.html) do repositório e abra no navegador, ou utilize uma visualização HTML estática.
2. Entre com usuário **admin** e senha **123456**.
3. Para simular o **erro de autenticação**, informe quaisquer outras credenciais.
4. Na tela de caixa, registre uma entrada ou saída e observe a atualização do saldo demonstrativo.
5. Acesse **Cadastro de clientes** pelo menu lateral; preencha, limpe ou simule salvar os dados.
6. Utilize o controle de sair para voltar à tela inicial.

## Telas e fluxo
- **Login** → credenciais corretas → **Controle de caixa**
- **Login** → credenciais incorretas → **Erro de login** → **Tentar novamente**
- **Controle de caixa** ↔ **Cadastro de clientes** pela navegação lateral
- **Sair** → **Login**

## Campos
**Caixa:** descrição, tipo (Entrada/Saída), valor, data e saldo em destaque.  
**Clientes:** nome, contato, CPF opcional, endereço, ponto de referência, limpar e salvar.

## UI/UX
Identidade visual em tons de vinho e creme, hierarquia visual, campos com rótulos, destaque para o saldo, feedback de erro e sucesso, navegação consistente, tratamento de foco pelo teclado e alertas textuais. A interface foi desenhada para desktop (1280 × 800 px).

A imagem de pizza neste arquivo HTML hospedado no GitHub é carregada de um endereço público do Unsplash; o pacote original da atividade, gerado no ChatGPT, contém a fotografia local. A fotografia externa requer internet.

**Limitação:** dados de clientes e movimentações são apenas demonstrativos, ficam na sessão atual e não são enviados a nenhum servidor. Não há autenticação real. Um link público de protótipo Figma ainda não foi gerado.
