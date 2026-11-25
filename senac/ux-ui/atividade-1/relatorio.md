# Atividade 1 — Pesquisa de experiência de usuário (revisada)

**Curso:** SENAC — UX Research e pesquisa qualitativa  
**Responsável:** Pedro Henrique Nascimento  
**Aplicação registrada:** 25/11/2026 (simulação acadêmica)  
**Participantes:** 8 perfis fictícios  
**Situação:** formulário criado e atualizado com as duas imagens originais; oito respostas simuladas preservadas.

## Pesquisa publicada

[**Abrir questionário Google Forms — Cadastro de alimentos em refeitório**](https://docs.google.com/forms/d/e/1FAIpQLScwgecmzzK4AboluH4W1YIm-vWh7v1zhngqY7xjwht-YiJtRQ/viewform)

O questionário possui oito perguntas, inclui os dois wireframes originais do enunciado (tela de login e tela de cadastro de alimentos) e foi preenchido com oito respostas **inteiramente simuladas**, para estudo. A publicação e as imagens foram confirmadas pelos registros de execução do Google Apps Script. O acesso público depende das permissões de compartilhamento do formulário.

## Visão geral

O objetivo é compreender necessidades e dificuldades de profissionais que registram alimentos recebidos em um refeitório, além de avaliar o layout inicial apresentado pela equipe de design.

As perguntas foram escolhidas para identificar função, método atual de registro, frequência de uso, principal dificuldade, facilidade percebida nas duas telas, campos essenciais no cadastro e possíveis melhorias.

### Perguntas aplicadas

1. Qual é sua função no refeitório?
2. Como os alimentos recebidos são registrados atualmente?
3. Com que frequência registra ou consulta o estoque?
4. Qual é a maior dificuldade no controle de alimentos?
5. Após observar as telas, como avalia a facilidade de uso?
6. Quais campos são essenciais para cadastrar alimentos?
7. O que deveria ser melhorado nas telas apresentadas?
8. Que funcionalidade adicional facilitaria seu trabalho?

### Resultados da amostra simulada

| Indicador | Resultado |
|---|---|
| Participantes fictícios | 8 |
| Auxiliares de cozinha | 3 |
| Estoquistas | 2 |
| Cozinheiros | 1 |
| Gestores | 2 |
| Registro por papel ou planilha | 6 de 8 |
| Dificuldades com quantidades ou validade | 6 de 8 |
| Telas avaliadas como regulares ou difíceis | 6 de 8 |

Os resultados sugerem, *dentro desta simulação*, a necessidade de botões **Entrar** e **Salvar** evidentes, campo de validade, unidade de medida e mecanismos de alerta. Esses números não representam entrevistas reais.

## Personas

### Persona 1 — Maria Oliveira

**38 anos; auxiliar de cozinha.** Recebe alimentos, confere embalagens e quantidades diariamente. Usa recursos básicos de computador e prefere formulários simples. Seu objetivo é registrar entradas com rapidez e segurança, sem retrabalho. As dificuldades do cenário são campos pouco claros, falta de confirmação do salvamento e risco de erro no registro de validade.

*Frase hipotética:* “Não quero perder tempo tentando descobrir onde clicar.”

### Persona 2 — Carlos Mendes

**29 anos; estoquista.** Controla entradas, saídas e armazenamento, consultando planilhas. Pretende manter saldos corretos e reduzir perdas de alimentos. Entre as dores simuladas estão dados dispersos, falta de histórico e dificuldade de encontrar lotes próximos do vencimento. Necessita de lote, unidade de medida, fornecedor, busca e alertas de validade.

*Frase hipotética:* “Quero enxergar o estoque sem conferir tudo manualmente.”

## Mapas de empatia

### Maria Oliveira — mapa presente no modelo oficial

| Dimensão | Síntese |
|---|---|
| **Fala** | “Preciso salvar rápido.”; “Quero ver a validade.” |
| **Pensa** | Preciso registrar sem erros; quero campos simples e claros |
| **Faz** | Confere alimentos recebidos, registra quantidades e datas, organiza entregas |
| **Sente** | Pressa ao receber alimentos, receio de lançar dados errados, alívio ao confirmar o registro |

### Carlos Mendes — mapa complementar

| Dimensão | Síntese |
|---|---|
| **Fala** | “Preciso saber o saldo real.”; “Qual lote vence primeiro?”; “Quero localizar itens rápido.” |
| **Pensa** | Como evitar perdas? Os registros precisam ser confiáveis; é importante rastrear entradas |
| **Faz** | Confere mercadorias, atualiza quantidades e lotes, consulta relatórios e validade |
| **Sente** | Preocupação com desperdícios, pressão por dados corretos e alívio com alertas automáticos |

## Recomendações preliminares

- **Login:** adicionar um botão de entrada, mensagens de erro e recuperação de acesso.
- **Cadastro:** incluir botão de salvar, unidade de medida, validade, lote, data de recebimento e fornecedor.
- **Usabilidade:** rótulos legíveis, organização dos campos, validação clara, confirmação de salvamento e pesquisa de alimentos.

## Arquivos e preservação do modelo

A entrega acadêmica foi corrigida diretamente no **modelo oficial do SENAC**, sem reestruturar suas páginas. O primeiro mapa foi preenchido no espaço do documento e o segundo foi disponibilizado como anexo complementar.

- [Script inicial de criação da pesquisa](criar_google_forms.gs) — **histórico**, não executar novamente para não duplicar o formulário.
- [Script corrigido de inclusão das imagens](atualizar_formulario_com_imagens.gs) — usado para atualizar o formulário existente sem excluir respostas.
- [Link da pesquisa em TXT](link-pesquisa.txt)
- [Mapa de empatia da segunda persona em Markdown](mapa-empatia-persona-2.md)

**Nota sobre formatos:** o DOCX oficial e os PDFs corrigidos foram disponibilizados no pacote final da conversa e não estão hospedados neste repositório como arquivos binários. Este Markdown registra o mesmo conteúdo em formato versionável.

**Ética e metodologia:** as oito respostas são sintéticas e descritas como simulação em todos os materiais. O professor não confirmou explicitamente que simulação substitui coleta real.
