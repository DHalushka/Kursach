const posts = new Map()

export const getPost = (postId) => {  //получение поста по id
    return posts.get(postId)
}

export const setPost = (post) => { //запись поста в хранилище
    posts.set(post.id, post)
}

export default {
    getPost,
    setPost
}