import casual from 'casual';
import RandExp from 'randexp';
import {
    MockList
} from 'graphql-tools';
import {
    startCase
} from 'lodash';


export default {
    Int: () => casual.integer(0),

    Author: () => ({
        firstName: casual.first_name,
        posts: () => new MockList([1, 7]),
        books: () => new MockList([0, 5])
    }),

    Post: () => ({
        title: casual.title
    }),

    Book: () => ({
        ISBN: new RandExp(/ISBN-\d-\d{3}-\d{5}-\d/)
            .gen(),
        title: startCase(casual.title)
    })
}
