import React, { Component } from 'react'
import './App.css'


// Создаем классовый компонент App который наследуется от Component
export default class App extends Component {
  constructor(props) {
    super(props)
    // создаем ссылки в качестве массивца
    this.state = {
      links: [
        { name: "Home", link: "/" },
        { name: "Setting", link: "/settings" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "FAQ", link: "/faq" },
      ],

      // инициализируем значение постов
      posts: [{ id: 1, title: "Hello World" }]
    }

    // привязываем методы для работы в компоненте
    this.handleRemovePosts = this.handleRemovePosts.bind(this)
    this.getPosts = this.getPosts.bind(this)
  }

  // componentDidMount при вызове данного метода у нас будет делатся запрос для получения посотов
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(async res => {
      const data = await res.json();
      // мы изменяем состояния компоненты
      this.setState({ ...this.state, posts: data })
    })
  }

  handleRemovePosts() {
    this.setState({ ...this.state, posts: [] })
  }

  getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(async res => {
      const data = await res.json();
      // мы изменяем состояния компоненты
      this.setState({ ...this.state, posts: data })
    })
  }

  // в методе render возращаем jsx разметку
  render() {
    return (
      <nav>
        {/* итеративно проходимся по каждой ссылки и для каэдой ссылки вызываем компонент Link, в который передаем в качестве пропа название и ссылку */}
        {/* {this.state.links.map((eachLink, idx) => {
          return <Link {...eachLink} key={idx} />
        })} */}
        {/* вызываем метод handleRemovePosts для удаления постов */}
        <button onClick={this.handleRemovePosts}>CLick</button>
        {/* итеративно покказываем каждый пост */}
        {this.state.posts.map(eachPost => <EachPost eachPost={eachPost} key={eachPost.id} />)}
        {/* Проверяем если посты есть то покажи одну ссылку если нет то пказывай null(нечего) */}
        {this.state.posts.length ? <Link name="Home" link="/home" /> : null}
      </nav>
    )
  }
}


class Link extends Component {
  // Наследуем все параметры которые были переданны данному коомпоненты от родителья
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  // вызывается до того как компонент удаляется из DOM, здесь стоит очищать ресурсы такие как таймеры и подипски
  componentWillUnmount() {
    console.log('====================================');
    console.log('Component was deleted');
    console.log('====================================');
  }

  // возращаем jsx разметку
  render() {
    // делаем деструктуризацию props чтобы не писать this.props.name this.props.lin
    const { name, link } = this.props
    return (
      <a href={link}>{name}</a>
    )
  }
}

class EachPost extends Component {
  constructor(props) {
    super(props)
  }

  // данный метода вызывается один раз поскольку он получает в качестве параметра пост, сперва он у нас был один (посмотреть на сторчку 20), а потом у нас проп изменился посколку мы сдлелли запорс и получили новые посты (сторчка 26)
  // componentDidUpdate(prevProps, prevState) {
  // console.log({prevProps, prevState});
  // }




  render() {
    return <li>123</li>
  }
}
