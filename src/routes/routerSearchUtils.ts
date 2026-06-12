export const readStringSearchParam = (
  value: unknown,
  fallback = '',
): string => {
  return typeof value === 'string' ? value : fallback
}

export const readTrimmedStringSearchParam = (
  value: unknown,
  fallback = '',
): string => {
  return readStringSearchParam(value, fallback).trim()
}

export const readPositiveIntegerSearchParam = (
  value: unknown,
  fallback: number,
): number => {
  const parsedValue = Number(value)

  return Number.isInteger(parsedValue) && parsedValue > 0
    ? parsedValue
    : fallback
}

export const readEnumSearchParam = <Value extends string>(
  value: unknown,
  allowedValues: readonly Value[],
  fallback: Value,
): Value => {
  return allowedValues.includes(value as Value) ? (value as Value) : fallback
}

export const readBooleanSearchParam = (
  value: unknown,
  fallback = false,
): boolean => {
  if (typeof value === 'boolean') return value
  if (value === 'true') return true
  if (value === 'false') return false

  return fallback
}
