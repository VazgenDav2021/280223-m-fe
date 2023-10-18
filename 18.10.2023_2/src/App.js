import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchPostsFail, fetchPostsSucces, fetchUsers, fetchUsersFail, fetchUsersSucces } from './features/action';

const App = () => {
  const dispatch = useDispatch()
  const { users, loading: userLoading, error: userError } = useSelector(state => state.users);
  const { posts, loading: postLoading, error: postError } = useSelector(state => state.posts)

  const getUsers = async () => {
    // при начале запроса вызвать fetchUsers для того чтобы поменять флажок loading на true
    dispatch(fetchUsers())
    await fetch('https://jsonplaceholder.typicode.com/users').then(async data => {
      const res = await data.json()
      // при успшеном запросе добавить в наш стор дату котора пришла из сервера
      dispatch(fetchUsersSucces(res))
    }).catch(() => {
      // если пошло что то не таки отправить сигнал нашему редаксу что запрос провален
      dispatch(fetchUsersFail())
    })
  }

  const getPosts = async () => {
    // при начале запроса вызвать fetchUsers для того чтобы поменять флажок loading на true
    dispatch(fetchPosts())
    await fetch('https://jsonplaceholder.typicode.com/posts').then(async data => {
      const res = await data.json()
      // при успшеном запросе добавить в наш стор дату котора пришла из сервера
      dispatch(fetchPostsSucces(res))
    }).catch(() => {
      // если пошло что то не таки отправить сигнал нашему редаксу что запрос провален
      dispatch(fetchPostsFail())
    })
  }

  useEffect(() => {
    getUsers();
    getPosts();
  }, [])

  return (
    <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
      <div>Пользотели
      <div>
        {users.map(eachUser=>(<h1 key={eachUser.id}>{eachUser.name}</h1>))}
      </div>
      </div>

      <div>Посты
        <div>
          {posts.map(eachUser => (<h1 key={eachUser.id}>{eachUser.title}</h1>))}
        </div>
      </div>
    </div>
  )
}

export default App