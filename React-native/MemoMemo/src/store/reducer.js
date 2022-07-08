import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';
import postsReducer from './posts/posts.reducer';

const reducer = {
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
};

export default reducer;
