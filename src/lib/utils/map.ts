import type { Unary } from "./function-types";


const asArrayBrand = Symbol("svelte-viz-as-array-brand");

export interface AsArray<T> {
  readonly __brand: typeof asArrayBrand;
  value: Array<T>
}

export function asArray<T>(value: T[]): AsArray<T> {
  return {
    __brand: asArrayBrand,
    value
  };
}

const asMapBrand = Symbol("svelte-viz-as-map-brand");

export interface AsMap<T, K extends PropertyKey> {
  readonly __brand: typeof asMapBrand;
  value: Record<K, T>;
}

export function asMap<T, K extends PropertyKey>(value: Record<K, T>): AsMap<T, K> {
  return {
    __brand: asMapBrand,
    value
  };
}

function mapRecord<T, R, K extends keyof T>(coll: Record<K, T>, fn: Unary<T, R>): Record<K, R> {
  return Object.keys(coll)
    .reduce((o, key) =>
      Object.assign(o, { [key]: fn(coll[key as K]) }), {} as Record<K, R>);
}

export function map<T, R>(value: T, fn: Unary<Extract<T>, R>): ExtractValuesAs<T, R>;
export function map(value: any, fn: Unary<unknown, unknown>): unknown {
  if (value.__brand === asMapBrand) return mapRecord(value.value, fn);
  if (value.__brand === asArrayBrand) return value.value.map(fn);
  return fn(value);
}

export type Extract<T> =
  T extends AsArray<infer TS> ? TS :
    T extends AsMap<infer TS, infer _> ? TS :
      T;

export type ExtractValuesAs<T, R> =
  T extends AsArray<infer _> ? R[] :
    T extends AsMap<infer _, infer K> ? Record<K, R> :
      R;