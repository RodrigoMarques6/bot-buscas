import puppeteer from 'puppeteer-core';
// google-chrome --remote-debugging-port=9222
// opera --remote-debugging-port=9222
// node index.js


(async () => {
  try {
    // Conecta ao navegador Chrome em execução
    const browser = await puppeteer.connect({
      browserURL: 'http://localhost:9222'
    });

    // Cria uma nova aba
    const page = await browser.newPage();

    // Acessa o Bing
    await page.goto('https://www.bing.com/news', { waitUntil: 'networkidle2' });
    console.log('Página carregada');

    // Aguarda até que o campo de pesquisa inicial (textarea) esteja disponível
    await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
console.log('Campo de pesquisa (input) encontrado');


    // Escreve o número 1 no campo de pesquisa
    await page.type('input#sb_form_q', '1', { delay: 100 });
    console.log('Número 1 inserido');

    // Pressiona Enter para realizar a busca
    await page.keyboard.press('Enter');
    console.log('Enter pressionado, aguardando resultados');

    // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
    await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
    console.log('Campo de pesquisa (input) encontrado');

    // Coloca o cursor no final do campo de pesquisa
    await page.evaluate(() => {
      const input = document.querySelector('input#sb_form_q');
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });

    // Escreve o número 2 após o número 1
    await page.type('input#sb_form_q', '2', { delay: 100 });
    console.log('Número 2 inserido');

    // Pressiona Enter para realizar a nova busca
    await page.keyboard.press('Enter');
    console.log('Enter pressionado, aguardando resultados');

    // Aguarda até que os resultados sejam carregados
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
    console.log('Resultados carregados');

    // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Para o 3:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '3', { delay: 100 });
     console.log('Número 3 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 3


         // Para o 4:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '4', { delay: 100 });
     console.log('Número 4 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 4

             // Para o 5:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '5', { delay: 100 });
     console.log('Número 5 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 5

    // Para o 6:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '6', { delay: 100 });
     console.log('Número 6 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 6

    // Para o 7:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '7', { delay: 100 });
     console.log('Número 7 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 7

        // Para o 8:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '8', { delay: 100 });
     console.log('Número 8 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 8

    // Para o 9:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '9', { delay: 100 });
     console.log('Número 9 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 9


    // Para o 0:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '0', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 0


    // Para o 1:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '1', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 1

       // Para o 2:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '2', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 2


       // Para o 3:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '3', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 3

           // Para o 4:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '4', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 4

               // Para o 5:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '5', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 5

                   // Para o 6:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '6', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 6

// Para o 7:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '7', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 7


    // Para o 8:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '8', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 8

    // Para o 9:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '9', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 9


    // Para o 0:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '0', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 0


    // Para o 1:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '1', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 1


    // Para o 2:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '2', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 2


    // Para o 3:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '3', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 3

     // Para o 4:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '4', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 4


    // Para o 5:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '5', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 5

    // Para o 6:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '6', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 6

        // Para o 7:

     // Aguarda até que o campo de pesquisa (input) esteja disponível após a primeira busca
     await page.waitForSelector('input#sb_form_q', { timeout: 5000 });
     console.log('Campo de pesquisa (input) encontrado');
 
     // Coloca o cursor no final do campo de pesquisa
     await page.evaluate(() => {
       const input = document.querySelector('input#sb_form_q');
       input.focus();
       input.setSelectionRange(input.value.length, input.value.length);
     });
 
     // Escreve o número 2 após o número 1
     await page.type('input#sb_form_q', '7', { delay: 100 });
     console.log('Número 0 inserido');
 
     // Pressiona Enter para realizar a nova busca
     await page.keyboard.press('Enter');
     console.log('Enter pressionado, aguardando resultados');
 
     // Aguarda até que os resultados sejam carregados
     await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 100000 });
     console.log('Resultados carregados');

     // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Antes do 7


    // Fecha a aba e desconecta do navegador quando terminar
    await page.close();
    await browser.disconnect();
    console.log('Aba fechada e navegador desconectado');
  } catch (error) {
    console.error('Erro ao realizar a busca:', error);
  }
})();
