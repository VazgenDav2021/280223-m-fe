1. Реакт - UI библиотека, созданная компаний Meta.
2. Реакт библиотека использутся для создания веб интервейсов (веб страницы, веб прилоюения тд)
3. Плюсы реакта: (https://dzen.ru/a/ZDw5BIeAvVVyahph?utm_referer=www.google.com)
    --3.1. Он использует виртуальный DOM (https://hyeny.medium.com/virtual-dom-vs-real-dom-44d442eb2501)
    --3.2. Moжно переиспользовать код (Создать компонент и вызват его где удогно).
    --3.3. Есть большое количество специалостов, материалов и большие сообщество по нему, и можно найти почти любую информацию о нем.
    --3.4. Данная технология была созданна компанией Meta, и каждое изменения обсуждается, тестируется и только после этого заливается в общий доступ.
4. Минусы реакта (https://dzen.ru/a/ZDw5BIeAvVVyahph?utm_referer=www.google.com)
    --3.1. Нет четко структурированной файловый архитектуры
    --3.2. Используя реакт не зная базовые понятия рендера, причину его работы, то можно получить ненужные рендеры
    --3.3  SEO



1. node_modules - директория где хранятся библиотеки, зависимости нашего проекта
2. public - хранятся статичные данные (иконки, html)
3. src - React приложение
    --3.1 index.js - рутовое место, где соединяется react приложение с html
    --3.2 App.js(опционально) - оснавной компонент в котором будут показыватся остальные компоненты
4. .gitignore - это место где прописываются те директории и документы которые должны игнориоватся git-ом
5. package-lock.json - хранится деатальная инфорамиця о проекте, какие библиотеки были скачены, какие версии и ссылки на них
6. package.json - место где хранится общая инфромация о проекте (название, команды, библиотеки тд)
7. README.md - место где написанна документация о проекте (надо для погружение в проект)


1. В реакте куски jsx элемента разбиваются на компоненты (рабивка происходит по разнымм критериям)
2. Компонент это кусок кода который можно переиспользовать
3. Компонент можно создать с помощю функции или классов
4. Когда только появился реакта писали только на классовых компонентах
5. Со временем для уменьшение количество кода и для простоты были введены функциональные компоненты
6. Для того чотбы здать класс тегу для стилей надо написать атрибут "className" вместо атрибута "class"
7. Для создания компонента используем или стрелочную функцию или функцию декларирования
8. Для вызова компонента пишем его как тег с большой буквой
9. Для того чибы использовать динамичные значения внутри JSX(html) надо ставить фугурные скобки и писать название переменной или какую то логику
10. Коогда хотим что то итеративно показать можно использовать метода массива map. ОБЯЗАТЕЛЬНО СТАВИМ KEY НА ОБЕРТОЧНЫЙ ЭЛЕМЕНТ
11. Если видим что несколько элементо в похожи друг на друга но немного отилчаютдся стилями, датами то стараемся их показовать итеративно в компненте
12. Компонент как и сама функция в качестве параметра может принимать значение (props)




https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#disallow-bind-or-arrow-functions-in-jsx-props-reactjsx-no-bind

https://www.youtube.com/watch?v=I2UBjN5ER4s&t=2435s


https://ru.legacy.reactjs.org/docs/state-and-lifecycle.html



Есть 2 типа экпорта компонента

1. По дефолту. Пишем export default <название компонента/функции>. Там где хотим импортиорвать пишем import <любое название> from <директорию>
2. По конкретному имени



1. Хук в реакте это функция с помощю которой можно взаимодействовать с жизненным циклам компонента
2. Правила использования
    --3.1 Хук должен вызыватся в компоненте или в другом хуке
    --2.2 Для создания хука обязательно перед название ставим префикс (use)
    --3.3 Хук нельзя вызывать усходя из условия