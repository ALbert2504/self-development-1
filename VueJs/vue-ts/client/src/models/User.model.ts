import { User } from '@/store/types';

class UserModel implements User {
  public id;
  public name;

  constructor(name: string, id: string | number) {
    this.name = name;
    this.id = id;
  }
}

export default UserModel;