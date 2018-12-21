const initState = {
    posts: [
        {
            id: '1',
            title: 'delectus aut autem vvvvvdvd',
            body: 'lorem ipsome adsad asdfasf'
        },
        {
            id: '2',
            title: 'delectus aut autem tuytu',
            body: 'lorem ipsome adsad yuikliiu'
        },
        {
            id: '3',
            title: 'delectus aut autem zcxczc',
            body: 'lorem ipsome adsad wqeqwe'
        }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELE_POST') {
        let newPosts = state.posts.filter((posts) => {
            return posts.id !== action.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    if (action.type === 'ADD_POST') {
        console.log(action.newPost, 'in reducer')
        state.posts.push(action.newPost)
        return {
            ...state
        }
    }
    return state;
}

export default rootReducer;