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

function isMap<T>(o: unknown): o is AsMap<T, PropertyKey> {
  return (o as AsMap<T, PropertyKey>).__brand === asMapBrand;
}

function isArray<T>(o: unknown): o is AsArray<T> {
  return (o as AsArray<T>).__brand === asArrayBrand;
}

export type ExtractValueAndReturnTypes<T, R> =
  T extends AsArray<infer TS> ?
    { value: ExtractValueAndReturnTypes<TS, R>["value"], return: Array<ExtractValueAndReturnTypes<TS, R>["return"]> } :
    T extends AsMap<infer TS, infer K> ?
      { value: ExtractValueAndReturnTypes<TS, R>["value"], return: Record<K, ExtractValueAndReturnTypes<TS, R>["return"]> } :
      { value: T, return: R }

export function map<Input, Output>(value: ExtractValueAndReturnTypes<Input, Output>['value'], fn: Unary<ExtractValueAndReturnTypes<Input, Output>['value'], Output>): ExtractValueAndReturnTypes<Input, Output>['return'] {
  function innerMap<V, O>(v: V, fn: Unary<V, O>) {
    if (isMap<V>(v)) {
      return mapRecord(v.value, v => innerMap(v, fn));
    }
    if (isArray<V>(v)) return v.value.map(v => innerMap(v, fn));
    return fn(v);
  }

  return innerMap(value, fn);
}
