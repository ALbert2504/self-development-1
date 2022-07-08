import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';

// Services
import Api from './Api';


class User extends Api {
  static async createUser(uid, email, username) {
    try {
      await database()
        .ref(`/users/${uid}`)
        .set({
          email,
          username,
        });

      return  await this.getUser(uid);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getUser(uid) {
    try {
      const snapshot = await database()
        .ref(`/users/${uid}`)
        .once('value');

      return {
        ...snapshot.val(),
        uid: snapshot.key,
      };
    } catch (e) {
      super.catchError(e);
    }
  }

  static get uid() {
    return auth().currentUser?.uid;
  }
}

export default User;
