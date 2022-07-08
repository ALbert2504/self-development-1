var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_name, _Person_id;
class Person {
    constructor(name, id) {
        _Person_name.set(this, void 0);
        _Person_id.set(this, void 0);
        __classPrivateFieldSet(this, _Person_name, name, "f");
        __classPrivateFieldSet(this, _Person_id, id, "f");
    }
    id() { return __classPrivateFieldGet(this, _Person_id, "f"); }
}
_Person_name = new WeakMap(), _Person_id = new WeakMap();
const dict = { creator: 'Pierre' };
dict.hello = ['bonjour', 'salut', 'allô'];
let str = 'world';
dict[str] = 'monde';
