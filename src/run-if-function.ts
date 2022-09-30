import isFunction from './is-function';

export function runIfFn(valueOrFn: any, ...args: any[]) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export default runIfFn;
