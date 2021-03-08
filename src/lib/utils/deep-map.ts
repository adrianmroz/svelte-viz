import type { Unary } from "./function-types";

type MapOf<T> = Map<unknown, T>;

function mapValues<T, R>(coll: MapOf<T>, fn: Unary<T, R>): MapOf<R> {
  return new Map(Array.from(coll).map(([key, val]) => [key, fn(val)]));
}

export function deepMap<T, R>(value: T, fn: Unary<T, R>): R;
export function deepMap<T, R>(value: T[], fn: Unary<T, R>): R[];
export function deepMap<T, R>(value: MapOf<T>, fn: Unary<T, R>): MapOf<R>;
export function deepMap<T, R>(value: any, fn: Unary<T, R>): any {
  if (Array.isArray(value)) return value.map(fn);
  if (value instanceof Map) return mapValues(value, fn);
  return fn(value);

}
