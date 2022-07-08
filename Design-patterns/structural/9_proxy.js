function networkFetch(url) {
  return `${url} - response from the server`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if(cache.has(url)) {
      return `${url} - response from cache`;
    } else {
      cache.add(url);
      // console.dir(target);
      return target(args);
    }
  }
});

console.log(proxiedFetch('google.com'));
console.log(proxiedFetch('yandex.ru'));
console.log(proxiedFetch('yandex.ru'));