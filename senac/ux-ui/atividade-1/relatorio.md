# Atividade 1 — Relatório de experiência de usuário

**Responsável:** Pedro Henrique Nascimento  
**Data inicial:** 09/11/2026 — simulação  
**Data final:** 15/11/2026 — simulação  
**Link da pesquisa:** não publicado; há um script de criação em [criar_google_forms.gs](criar_google_forms.gs).  
**Natureza dos dados:** exercício acadêmico, respostas fictícias.

## Visão geral

O contexto é o desenvolvimento de um sistema desktop para registrar alimentos recebidos em um refeitório. O material inicial possui uma tela de login e outra de cadastro, com nome, quantidade em estoque, descrição, notas e imagem.

Foram previstas oito perguntas para conhecer funções, métodos atuais de registro, frequência de uso, maiores dificuldades, avaliação dos wireframes, dados essenciais e sugestões de melhorias. A amostra simulada inclui **8 participantes**: 3 auxiliares de cozinha, 2 estoquistas, 2 cozinheiros e 1 gestor. No cenário fictício, **5 de 8** utilizam papel ou planilhas, **6 de 8** mencionam dificuldades com quantidades ou validade e **6 de 8** avaliam as telas como regulares ou difíceis. Esse resultado é ilustrativo e não representa coleta realizada.

### Perguntas do questionário

1. Qual é sua função no refeitório? (alternativas: auxiliar de cozinha, estoquista, cozinheiro, gestor, outro)
2. Como os alimentos recebidos são registrados atualmente? (papel, planilha, sistema informatizado, sem padrão)
3. Com que frequência você registra ou consulta o estoque? (várias vezes ao dia, diariamente, semanalmente, raramente)
4. Qual é a maior dificuldade no controle de alimentos? (localizar, atualizar quantidades, vencimentos, duplicidade, nenhuma)
5. Após observar os wireframes, como avalia a facilidade de uso? (muito fácil, fácil, regular, difícil, muito difícil)
6. Quais dados são essenciais no cadastro? (múltipla seleção: nome, quantidade, unidade, validade, lote, recebimento, foto, fornecedor)
7. O que deveria ser melhorado nas duas telas? (resposta aberta)
8. Que funcionalidade adicional facilitaria seu trabalho? (resposta aberta)

### Análise das telas e recomendações

**Login:** adicionar um botão "Entrar", mensagens claras para campos inválidos e forma de recuperar acesso.  
**Cadastro de alimentos:** incluir botão "Salvar", unidade de medida, data de validade, lote, data do recebimento e fornecedor. Adotar rótulos consistentes, validação acessível e mensagens de sucesso.

### Resultados simulados

| Indicador | Resultado fictício |
|---|---|
| Participantes | 8 |
| Auxiliares de cozinha | 3 |
| Estoquistas | 2 |
| Cozinheiros | 2 |
| Gestores | 1 |
| Papel ou planilhas | 5/8 |
| Dificuldades com quantidade ou validade | 6/8 |
| Usabilidade regular ou difícil | 6/8 |

Os comentários simulados foram agrupados em: campos obrigatórios; organização visual; controle de validade; unidade de medida; confirmação do salvamento; alertas e consulta ao histórico.

## Personas

### Persona 1 — Maria Oliveira

**Idade:** 38 anos. **Função:** auxiliar de cozinha. Recebe alimentos e confere embalagens e quantidades diariamente. Sabe usar funções básicas do computador, mas prefere telas simples. Quer registrar entradas de forma rápida e segura. Suas principais dificuldades são campos ambíguos, ausência de confirmação, retrabalho e risco de erro ao conferir validade.

**Necessidades:** botão visível para salvar, campos claros, acessibilidade, navegação intuitiva e identificação da validade.  
**Frase fictícia:** “Não quero perder tempo tentando descobrir onde clicar.”

### Persona 2 — Carlos Mendes

**Idade:** 29 anos. **Função:** estoquista. Controla entradas, saídas e armazenamento; usa planilhas. Procura garantir saldos corretos e reduzir perdas. Enfrenta informação dispersa, falta de histórico e dificuldade para identificar itens próximos do vencimento.

**Necessidades:** lote, unidade de medida, fornecedor, consultas rápidas e alertas de vencimento.  
**Frase fictícia:** “Quero enxergar o estoque sem conferir tudo manualmente.”

## Mapa de empatia

| Dimensão | Síntese do cenário simulado |
|---|---|
| **Fala** | “Falta um botão de salvar”; “Quero ver a validade” |
| **Pensa** | Preciso evitar erros e registrar rápido; o sistema deve ser simples |
| **Faz** | Confere entregas, registra itens e quantidades, consulta estoque |
| **Sente** | Pressa no recebimento, insegurança diante de erros e alívio quando há confirmação |

## Conclusão

O exercício aponta oportunidades para simplificar as interações e aumentar a confiabilidade do registro dos alimentos: nomenclatura acessível, validação, botões evidentes, validade e consulta de estoque. Como as respostas são totalmente simuladas, as conclusões são **hipóteses de projeto**, não achados validados com usuários.

> Para a avaliação acadêmica, o documento DOCX foi preenchido diretamente no modelo original disponibilizado pelo SENAC. Esta é uma versão Markdown acessível e versionável do mesmo conteúdo.