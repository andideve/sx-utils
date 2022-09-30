export function isFunction(arg: unknown): arg is Function {
  return typeof arg === 'function';
}

export default isFunction;
