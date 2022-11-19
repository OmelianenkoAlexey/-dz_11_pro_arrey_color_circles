// ! ДЗ 11. Rainbow render

hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];
// Используя циклы, if/else, switch/case и методы.push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse().join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.

rainbow = hero.concat(native);
rainbow = rainbow.concat(destination);
console.log(`Соединили три массива в один ${rainbow}`);
// Ivan, York, Of, Poltava, In

// 2. Сделать реверс элементов полученного массива rainbow.
rainbow.reverse();
console.log(`Массив после реверса ${rainbow}`);
//In, Poltava, Of, York, Ivan

// 3. Изменить / добавить элементы массива rainbow так, что бы в итоге получился массив вида
// ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain'];

rainbow.splice(0, 2); //вырезаем с 0 2 элемента
rainbow.splice(2, 1); //вырезаем с 2 1 элемент
rainbow.unshift("Richard"); // вставляем в начале
// Richard, Of, York,
rainbow.push("Gave"); // добавляем в конце
rainbow.push("Battle");
rainbow.push("In");
rainbow.push("Vain");
// Richard, Of, York, Gave, Battle, In, Vain
console.log(`Массив ${rainbow}`);
console.log(rainbow);
console.log(rainbow[0]);

newRainbow = rainbow.slice();
console.log(newRainbow);


// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.
for (i = 0; i < rainbow.length; i++) {
    rainbow[i] = (rainbow[i]).toLowerCase();
    console.log(rainbow[i]);
    document.write(`
<div class="item">
<div class="circle ${rainbow[i]}"></div>
<div class="title">${newRainbow[i]}</div>
</div>
    `)
}




// Шрифт надписей на картинке Quicksand.Вы можете взять любой))
// Использовать все методы не обязательно! Берем только те, которые помогут вам привести массив к такому виду, что бы вывести его как на прикрепленной картинке rainbow.png.


    // ! ДЗ 12. Print right arrays

// Задача:

// 1. С массива sports с помощью метода.slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
// 2. С массива sports с помощью метода.slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.

//     sports = [
//         ['skier', '⛷'],
//         ['snowboarder', '🏂'],
//         ['apple', '🍎'],
//         ['hockey', '🏒'],
//         ['ice skate', '⛸'],
//         ['swimmer', '🏊'],
//         ['surfer', '🏄‍'],
//         ['watermelon', '🍉'],
//         ['lemon', '🍋'],
//         ['rowboat', '🚣'],
//         ['bicyclist', '🚴‍']
//     ];


