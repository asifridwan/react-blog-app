import { configureStore } from '@reduxjs/toolkit';

import postReducer from './posts';
import detailsReducer from './details';
import commentsReducer from './comments';

export const store = configureStore({
    reducer: {
        posts: postReducer,
        details: detailsReducer,
        comments: commentsReducer
    }
});