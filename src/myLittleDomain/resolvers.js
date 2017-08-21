import {
    myLittleTypes
} from './dataSource';

const rootResolvers = {
    Query: {
        myLittleType: (_, {
            id
        }) => myLittleTypes.find(t => t.id === id)
    },
};


export default rootResolvers;
