class HtmlElment {
    constructor(tag, width, height, background) {
        this.tag = tag;
        this.width = width;
        this.height = height;
        this.background = background;
    }


    render(pranetElement) {
        const element = document.createElement(this.tag)
        this.element = element
        element.style.width = this.width;
        element.style.height = this.height;
        element.style.background = this.background;
        pranetElement.append(element)
    }

    addTextToTag(textValue) {
        this.element.textContent = textValue
    }
}

const button1 = new HtmlElment("button", '100px', '30px', "red");
button1.render(document.body)
button1.addTextToTag("Hello")


class Img extends HtmlElment {
    constructor(tag, width, height, src) {
        this.src = src
        super(tag, width, height);
    }
}

class Link {
    constructor(tag, href) {
        this.tag = tag;
        this.href = href;
    }
}