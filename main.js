// виселица игра

//создаем диалогове окно
// var name1 = prompt("Как вас зовут?");
// console.log("Привет, " + name1);


// диалоговое окно с да или нет
// var likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//  console.log("Ты классная кошка!");
// } else {
//  console.log("Что ж, не проблема. Все равно ты молодец!");
// };

// диалоговое окно чтобы просто показать человеку инфу
// alert("JavaScript это здорово!");

// пишем игру



// Создаем массив со словами
var words = [
    "программа",
    // "макака",
    // "прекрасный",
    // "оладушек",
    // "пельмень",
    // "кукушка"
    ];
    // Выбираем случайное слово
    var word = words[Math.floor(Math.random() * words.length)];
    // Создаем итоговый массив
    var answerArray = [];
    for (var i = 0; i < word.length; i++) 
    {
        answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    var attempts = 3;
    
    // Игровой цикл
    while ((remainingLetters > 0) && (attempts > 0)) 
    {
        // Показываем состояние игры
        alert(answerArray.join(" "));
        
        // Запрашиваем вариант ответа
        var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
        guess = guess.toLowerCase();
        if (guess === null) 
        {
            // Выходим из игрового цикла
            break;
        } 
        else if (guess.length !== 1) 
        {
            alert("Пожалуйста, введите одиночную букву."); 
        } 
        else 
        {      
            // Флаг, что буква присутствует в слове (по умолчанию это неправда)
            var letterInWord = false;
            // Обновляем состояние игры
            for (var j = 0; j < word.length; j++) 
            {
                if (word[j] === guess && answerArray[j] === "_")
                {
                    letterInWord = true;
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
            if(letterInWord === false)
            {
                attempts -= 1;
            }

        }
    // Конец игрового цикла
    }

    if(attempts>0)
    {
        // Отображаем ответ и поздравляем игрока
        alert(answerArray.join(" "));
        alert("Отлично! Было загадано слово " + word);
    }
    else 
    {
        alert("Попытки закончились!"); 
    }
