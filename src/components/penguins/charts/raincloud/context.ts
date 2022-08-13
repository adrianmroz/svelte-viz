import { getContext, setContext } from 'svelte';
import type { Unary } from '$lib/utils/function-types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

const key = Symbol('svelte-viz-rainclouds-context');

type ChartContext<T> = {
	[P in keyof ChartParams<T>]: Writable<ChartParams<T>[P]>;
};

interface ChartParams<T> {
	data: Array<T>;
	getValue: Unary<T, number>;
	domain: readonly [T, T];
}

export function setChartContext<T>({ data, getValue, domain }: ChartParams<T>) {
	setContext(key, {
		data: writable(data),
		getValue: writable(getValue),
		domain: writable(domain)
	});
}

export function getChartContext<T>(): ChartContext<T> {
	return getContext(key);
}

export function updateChartVariable<T, K extends keyof ChartContext<T>>(
	key: K,
	value: ChartParams<T>[K]
) {
	const context = getChartContext<T>();
	const variable = context[key];
	variable.set(value);
}
