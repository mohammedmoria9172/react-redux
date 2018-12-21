export const deletePost = (id) => {
    return {
        type: 'DELE_POST',
        id
    }
}

export const addPost = (newPost) => {
    console.log(newPost, 'in action')
    return {
        type: 'ADD_POST',
        newPost
    }
}