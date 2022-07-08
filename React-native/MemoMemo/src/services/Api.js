class Api {
  static catchError(err) {
    alert(err);
    console.log(err);
  }

  static transformCollectionToArray(collection) {
    if (collection === null) {
      return [];
    }

    if (collection === undefined) {
      throw new Error('Something went wrong.');
    }

    return Object.entries(collection).map(([key, value]) => {
      return {
        id: key,
        ...value,
      };
    });
  }
}

export default Api;
