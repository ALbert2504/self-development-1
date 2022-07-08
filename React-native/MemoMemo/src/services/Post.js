import database from '@react-native-firebase/database';
import storage from "@react-native-firebase/storage";

// Services
import Api from './Api';
import User from './User';

// Utils
import { uriToBlob } from '../utils';


class Post extends Api {
  static async createPost(post) {
    try {
      const newPost = await database().ref(`/posts`).push();

      const owner = await User.getUser(User.uid);

      // setting image of memory to storage
      const storageReference = storage().ref(`memories/${newPost.key}`);

      const blob = await uriToBlob(post.image?.uri);

      await storageReference.put(blob);

      const image = await storageReference.getDownloadURL();

      await newPost
        .set({
          ...post,
          image,
          owner,
        });

      return await this.getPost(newPost.key);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getPosts() {
    try {
      const snapshot = await database()
        .ref('/posts')
        .once('value');

      const posts = snapshot.val();

      return super.transformCollectionToArray(posts);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getPost(id) {
    try {
      const snapshot = await database()
        .ref(`posts/${id}`)
        .once('value');

      return {
        ...snapshot.val(),
        id: snapshot.key,
      };
    } catch (e) {
      super.catchError(e);
    }
  }
}

export default Post;
