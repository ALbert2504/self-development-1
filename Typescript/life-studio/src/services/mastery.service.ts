import store from "store";

// Utils
import request from '../utils/request';

// Types
import {TodoItem, Todo} from "../store/mastery/mastery.actionTypes";

class Mastery {
  #endpoint = 'todos';
  #userId = store.get('user_id');
  #date = new Date(Date.now()).toLocaleDateString().split('/').join('-');

  async createTodo(value: string) {
    try {
      const url = `${this.#endpoint}/${this.#userId}/${this.#date}.json`;
      const todoItem: TodoItem = {
        name: value,
        isDone: false,
        timeStamp: Date.now(),
      };

      const response = await request('POST', url, todoItem);

      if (!response?.data) {
        throw new Error('Something went wrong');
      }

      return await this.getTodos();
    } catch (e) {
      console.log(e);
    }
  }

  async getTodos(): Promise<Todo[] | void> {
    try {
      const url = `${this.#endpoint}/${this.#userId}/${this.#date}.json`;

      const response = await request('GET', url);

      if (!response?.data) {
        throw new Error('Something went wrong');
      }

      return Object.entries(response.data).map(Mastery.transformData).reverse();
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async editTodo(id: string, data: TodoItem) {
    try {
      const url = `${this.#endpoint}/${this.#userId}/${this.#date}/${id}.json`;

      const response = await request('PUT', url, data);

      if (!response?.data) {
        throw new Error('Something went wrong.');
      }

      return await this.getTodos();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteTodo(id: string) {
    try {
      const url = `${this.#endpoint}/${this.#userId}/${this.#date}/${id}.json`;

      const response = await request('DELETE', url);

      if (response?.status !== 200) {
        throw new Error('Something went wrong');
      }

      return await this.getTodos();
    } catch (e) {
      console.log(e);
    }
  }

  static transformData([id, data]: any[]): Todo {
    return {
      id,
      ...data,
    };
  }
}

export default new Mastery;