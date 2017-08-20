import {
    authors,
    posts
} from './dataSource';

const rootResolvers = {
    Query: {
        posts: () => posts,
        author: (_, {
            id
        }) => authors.find(a => a.id === id)
    },
    Mutation: {
        upvotePost: (_, {
            postId
        }) => {
            const post = posts.find(p => p.id === postId);
            if (!post) {
                throw new Error(`Couldn't find post with id ${postId}`);
            }
            post.votes += 1;
            return post;
        }
    },
    Author: {
        posts: (author) => posts.filter(p => p.authorId === author.id)
    },
    Post: {
        author: (post) => authors.find(a => a.id === post.authorId)
    }
};


export default rootResolvers;
