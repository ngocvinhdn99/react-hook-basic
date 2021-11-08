// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './homepage.scss';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
// import ColorBox from './components/colorBox';
import PostList from './components/PostList';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

function HomePage() {
    // const [todoList, setTodoList] = useState([
    //   { id: 1, title: 'I love Easy Frontend! 😍 ' },
    //   { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    //   { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    // ])

    const [postlist, setPostList] = useState([])
    const [pagination, setPagination] = useState({
        _page: 1,
        __limit: 10,
        _totalRows: 12
    })

    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1
    })

    const [showClock, setShowClock] = useState(true)

    if (filter.title_like) {
        var filterLikeTitle = `&title_like=${filter.title_like}`
    } else {
        var filterLikeTitle = ''
    }
    const filterPage = filter._page

    useEffect(() => {
        async function handleFetch() {
            try {

                const api = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=${filterPage}${filterLikeTitle}`
                const response = await fetch(api)
                const responseJSON = await response.json()

                console.log({ responseJSON })
                const { data, pagination } = responseJSON

                setPostList(data)
                setPagination(pagination)
            } catch (error) {
                console.log('Failed to fetch post list: ', error.message)
            }
        }

        console.log('useEffect 1')
        handleFetch()
    }, [filter])

    useEffect(() => {
        console.log('useEffect 2')
    })

    function handlePageChange(newPage) {
        console.log('new page: ', newPage)

        setFilter({
            ...filter,
            _page: newPage
        })
    }

    function handleSubmitSearchForm(formValues) {
        console.log('New search: ', formValues)

        setFilter({
            ...filter,
            _page: 1,
            title_like: formValues.searchTerm
        })


    }


    // function handleTodoListClick(todo) {
    //   const index = todoList.indexOf(todo)
    //   if (index < 0) return

    //   // Xử lý setTodoList
    //   const newTodoList = [...todoList]
    //   newTodoList.splice(index, 1)

    //   setTodoList(newTodoList)
    // }

    // function handleSubmitForm(formValues) {
    //   const newFormValues = {
    //     ...formValues,
    //     id: todoList.length + 1
    //   }

    //   const newTodoList = [...todoList]
    //   newTodoList.push(newFormValues)

    //   setTodoList(newTodoList)
    // }

    return (
        <div className="app">

            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React cùng Vinh nào
        </a>
      </header> */}

            <h1>Welcome to React Hook!</h1>

            {/* <ColorBox /> */}

            {/* <TodoForm onSubmit={handleSubmitForm} /> */}
            {/* <TodoList todos={todoList} onTodoClick={handleTodoListClick} /> */}

            <PostFilterForm onSubmit={handleSubmitSearchForm} />
            <PostList posts={postlist} />
            <Pagination pagination={pagination} pageChange={handlePageChange} />

            <MagicBox />

            {/* {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => { setShowClock(false) }}>Hide Clock</button> */}
        </div>
    );
}

export default HomePage;

