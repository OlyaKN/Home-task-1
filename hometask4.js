'use strict';


var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ваша фамилия? ', (answerSurname) => {
  rl.question('Ваше имя? ', (answerName) => {
    rl.question('Ваше отчество? ', (answerPatronymic) => {
      rl.setPrompt('Ваш возраст? ');
      rl.prompt();
      rl.on('line', (answerAge) => {
        if (isNaN(answerAge)) {console.log('Введите число!');
        } else {
          console.log('Фамилия Имя Отчество: ' + answerSurname + ' ' + answerName + ' ' + answerPatronymic + ' Возраст: ' + answerAge);
        };
        rl.close();
      });
    });
  });
});
