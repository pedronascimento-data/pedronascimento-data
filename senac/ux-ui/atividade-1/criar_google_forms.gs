/**
 * ATIVIDADE 1 — GOOGLE FORMS (PESQUISA SIMULADA)
 * 1. Abra https://script.google.com/ e crie um projeto.
 * 2. Cole este arquivo no editor e execute criarFormularioAtividade1.
 * 3. Autorize as permissões solicitadas.
 * 4. No registro de execução, copie URL DE EDIÇÃO e URL PARA RESPONDER.
 * 5. Opcional: adicione imagens dos wireframes no formulário pelo editor do Google Forms.
 * IMPORTANTE: o script envia OITO RESPOSTAS FICTÍCIAS para fins acadêmicos.
 */
function criarFormularioAtividade1() {
  const form = FormApp.create('Pesquisa UX — Cadastro de alimentos no refeitório (simulação)');
  form.setDescription('Atividade acadêmica simulada de UX Research. As respostas de teste são sintéticas. Avalie as telas de login e cadastro fornecidas no enunciado.');
  form.setConfirmationMessage('Obrigado por participar desta pesquisa demonstrativa!');
  const q1=form.addMultipleChoiceItem().setTitle('1. Qual é sua função no refeitório?').setChoiceValues(['Auxiliar de cozinha','Estoquista','Cozinheiro(a)','Gestor(a)','Outro']).setRequired(true);
  const q2=form.addMultipleChoiceItem().setTitle('2. Como os alimentos recebidos são registrados atualmente?').setChoiceValues(['Papel','Planilha','Sistema informatizado','Sem registro padronizado']).setRequired(true);
  const q3=form.addMultipleChoiceItem().setTitle('3. Com que frequência registra ou consulta o estoque?').setChoiceValues(['Várias vezes ao dia','Uma vez ao dia','Algumas vezes por semana','Raramente']).setRequired(true);
  const q4=form.addMultipleChoiceItem().setTitle('4. Qual é a maior dificuldade no controle de alimentos?').setChoiceValues(['Localizar produtos','Atualizar quantidades','Identificar vencimentos','Evitar duplicidade','Nenhuma']).setRequired(true);
  const q5=form.addMultipleChoiceItem().setTitle('5. Após observar as telas, como avalia a facilidade de uso?').setHelpText('Observe os wireframes de login e cadastro da atividade antes de responder.').setChoiceValues(['Muito fácil','Fácil','Regular','Difícil','Muito difícil']).setRequired(true);
  const q6=form.addCheckboxItem().setTitle('6. Quais campos são essenciais para cadastrar alimentos?').setChoiceValues(['Nome','Quantidade','Unidade','Validade','Lote','Recebimento','Foto','Fornecedor']).setRequired(true);
  const q7=form.addParagraphTextItem().setTitle('7. O que deveria ser melhorado nas telas apresentadas?');
  const q8=form.addParagraphTextItem().setTitle('8. Que funcionalidade adicional facilitaria seu trabalho?');
  const data=[
    ['Auxiliar de cozinha','Papel','Várias vezes ao dia','Identificar vencimentos','Regular','Nome, Quantidade, Unidade, Validade, Recebimento','Campos maiores e salvar visível','Alerta de validade'],
    ['Estoquista','Planilha','Várias vezes ao dia','Atualizar quantidades','Regular','Nome, Quantidade, Unidade, Validade, Lote, Fornecedor','Botão salvar e unidade de medida','Histórico de movimentações'],
    ['Cozinheiro(a)','Papel','Uma vez ao dia','Localizar produtos','Fácil','Nome, Quantidade, Unidade, Validade','Busca por nome','Pesquisa de alimentos'],
    ['Gestor(a)','Planilha','Algumas vezes por semana','Identificar vencimentos','Regular','Nome, Quantidade, Unidade, Validade, Lote, Recebimento, Fornecedor','Validade e fornecedor no cadastro','Relatórios de perdas'],
    ['Auxiliar de cozinha','Sem registro padronizado','Várias vezes ao dia','Atualizar quantidades','Difícil','Nome, Quantidade, Unidade, Validade','Instruções simples e salvar claro','Confirmação do cadastro'],
    ['Estoquista','Planilha','Uma vez ao dia','Identificar vencimentos','Regular','Nome, Quantidade, Unidade, Validade, Lote, Recebimento','Campo de validade','Alertas por vencimento'],
    ['Auxiliar de cozinha','Papel','Várias vezes ao dia','Evitar duplicidade','Fácil','Nome, Quantidade, Unidade, Validade, Foto','Evitar produtos repetidos','Aviso de duplicidade'],
    ['Gestor(a)','Sistema informatizado','Uma vez ao dia','Atualizar quantidades','Regular','Nome, Quantidade, Unidade, Validade, Lote, Fornecedor','Feedback ao salvar','Relatório de estoque']
  ];
  for(const r of data){
    const response=form.createResponse();
    [q1,q2,q3,q4,q5].forEach((q,i)=>response.withItemResponse(q.createResponse(r[i])));
    response.withItemResponse(q6.createResponse(r[5].split(', ').map(x=>x.trim())));
    response.withItemResponse(q7.createResponse(r[6]));
    response.withItemResponse(q8.createResponse(r[7]));
    response.submit();
  }
  if(typeof form.setPublished==='function') form.setPublished(true);
  Logger.log('URL DE EDIÇÃO: '+form.getEditUrl());
  Logger.log('URL PARA RESPONDER: '+form.getPublishedUrl());
  Logger.log('RESPOSTAS SIMULADAS: '+form.getResponses().length);
}