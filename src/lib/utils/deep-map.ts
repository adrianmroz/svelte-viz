import type { Unary } from "./function-types";

type MapOf<T> = Map<unknown, T>;

function mapMap<T, R>(coll: MapOf<T>, fn: Unary<T, R>): MapOf<R> {
  return new Map(Array.from(coll).map(([key, val]) => [key, fn(val)]));
}

function mapRecord<T, R, K extends keyof T>(coll: Record<K, T>, fn: Unary<T, R>): Record<K, R> {
  return Object.keys(coll)
    .reduce((o, key) =>
      Object.assign(o, { [key]: fn(coll[key as K])}), {} as Record<K, R>);
}

function isPrimitive(value: unknown): boolean {
  return value instanceof Date ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean";
}

export function deepMap<T, R>(value: T, fn: Unary<T, R>): R;
export function deepMap<T, R>(value: T[], fn: Unary<T, R>): R[];
export function deepMap<T, R, K extends keyof T>(value: Record<K, T>, fn: Unary<T, R>): Record<K, R>;
export function deepMap<T, R>(value: MapOf<T>, fn: Unary<T, R>): MapOf<R>;
export function deepMap<T, R>(value: any, fn: Unary<T, R>): any {
  if (isPrimitive(value)) return fn(value);
  const mapper = (e: T) => deepMap(e, fn);
  if (Array.isArray(value)) return value.map(mapper);
  if (value instanceof Map) return mapMap(value, mapper);
  return mapRecord(value, mapper);
}

