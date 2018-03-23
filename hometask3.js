'use strict';


var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ваша фамилия? ', function (answerSurname) {
  rl.question('Ваше имя? ', function (answerName) {
    rl.question('Ваше отчество? ', function (answerPatronymic) {
      rl.setPrompt('Ваш возраст? ');
      rl.prompt();
      rl.on('line', function (answerAge) {
        if (isNaN(answerAge)) {console.log('Введите число!');
        } else {
          console.log('Фамилия Имя Отчество: ' + answerSurname + ' ' + answerName + ' ' + answerPatronymic + ' Возраст: ' + answerAge);
        };
        rl.close();
      });
    });
  });
});
