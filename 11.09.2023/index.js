const navigationLinks = [
    'HOME', "ABOUT", "CONTACT", "ABOUT US", "CAREER"
];

class HTMLElement {
    constructor(tag, className, parentElement) {
        // инициализируем значения
        this.tag = tag
        this.className = className
        // это означает как токо создастся новый экземпляр класса пусть вызовится метод init
        this.init(parentElement)
    }

    init(parentELement) {
        // написал через this, чтобы в глобальном обекте создать общою переменную с созданым элементом для того чтобы в других методах с ним работать
        this.currentElement = document.createElement(this.tag)
        parentELement.prepend(this.currentElement)
        this.currentElement.classList.add(this.className)
    }


    // в качсетве параемтра принимаем:
    // 1. Массив значениий которые будут как дочерние элементы созданого тега
    // 2. НАзвание тега для дочерних элементов
    // 3. Класс для дочерних элем,ентов
    renderElements(children, childrensTagName, classNameOfChildren) {
        children.forEach(eachChild => {
            // создаем для каждого элемента новый тег
            const element = document.createElement(childrensTagName);
            // добавлем к этому тего значение из массива
            element.textContent = eachChild
            // динамично каждому элементу даем класс
            element.classList.add(classNameOfChildren)
            // в конце к оснваному тегу добавляем новасозднные элементы
            this.currentElement.append(element);
        })
    }
}

const header = new HTMLElement("header", 'header', document.body);
header.renderElements(navigationLinks, 'li', 'navLinks')


// 1. Должен быть хедер
// 2. В нем долженн быть эелемтн ul
// 3. В ul должны быть элементы navigationLinks
// 4. Надо доабить стили таким образом чтобы навигация смотрелось красивая