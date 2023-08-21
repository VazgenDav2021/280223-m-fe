1. Код в JavaScript-е бывает синхронным и асинхронным
2. Синхронным называется тот код который вызывается сразу
3. Асинхронный код может вызыватся не сразу
4. JavaScript движок (V8) отрабатывает кот сверху вниз по очередности
5. "V8" работает след образом, когда о видит асинхронный код он еге оставляет, отрабатывает все синхорнные коды и только в конце отрабатывает асинхронный код
6. setTimeout асинхорнная функция, которая в качестве первого параметра принимает колбэк функцию, в качестве второго параметра принимает количство милисекунд. "Когда пройдет определнное количство милисикунд вызвится функция переденная как параметр"
7. Даже если в качестве 2ого параметра в setTimeout передать 0, он все ровно будет считатся асинхронным кодом => пункта 5, сперва заработают синхронные коды а потом асинхорнные

8. Есть 2 функции который тоже относятся к асинхорнности
 --8.1 setInterval - функция которая принимает в качестве первого праметра, функцию которая вызывается через определлный интервал времени, второй параметр это у нас количсетво милисекунд интервал. То есть определаем через какой интервал времени вызывать функцию колбэк
 --8.2 clearInterval - когда мы хотим оставоить какую то функцию которая вызвыатся через определнный интервал то мы данный интервал приравниваем к переменной, таким образом в перемнной хранится id данного интервал, птом вызываем функцию ClearINterval в которой в качестве параметра передаем id интервала

 9. Event Loop - это специальный механизм на уровне движка js. Он состоит callStack (место где срабатывает код), Web API (место где код ждет своего часа), CallBack Que (после того как код "подождал своего часа" он помещается сюда, когда очередь дошла до него он помещается в Call Stack и отрабатывает)




1. https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/asynchronous-code/theory_unit#:~:text=%D0%92%20%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%BC%20%D0%BA%D0%BE%D0%B4%D0%B5%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B9,%D0%BD%D0%B5%20%D0%B7%D0%BD%D0%B0%D0%B5%D0%BC%2C%20%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0%20%D0%BE%D0%BD%D0%B0%20%D0%BE%D1%82%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82.


2. http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

3. https://www.jsv9000.app/


4. https://learn.javascript.ru/event-loop