import auth from '@react-native-firebase/auth';

// Services
import Api from './Api';
import User from './User';


class Auth extends Api {
  static async signUp(email, password, username) {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);

      return  await User.createUser(user.uid, email, username);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async signIn(email, password) {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password);

      return  await User.getUser(user.uid);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async logout() {
    try {
      await auth().signOut();

      return true;
    } catch (e) {
      super.catchError(e)
    }
  }
}

export default Auth;
