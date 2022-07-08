interface Identifiable {
  id(): string
}
type Employable = Identifiable & {
  salary(): number
}

class Person implements Identifiable {
  #name: string
  #id: string
  constructor(name: string, id: string) { this.#name = name; this.#id = id; }
  id() { return this.#id }
}

type Dictionary = {
  creator: string,
  [arg: string]: string | string[]
}

const dict: Dictionary = { creator: 'Pierre' }
dict.hello = ['bonjour', 'salut', 'allô']
let str = 'world'
dict[str] = 'monde'