export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function hasItems<T>(items?: T[] | null): items is T[] {
  return Array.isArray(items) && items.length > 0;
}

export function hasText(value?: string | null) {
  return Boolean(value && value.trim().length > 0);
}

export function shouldRenderSection(options: {
  enabled?: boolean;
  items?: unknown[];
  fields?: Array<string | null | undefined>;
}) {
  if (options.enabled === false) {
    return false;
  }

  if (options.items && options.items.length > 0) {
    return true;
  }

  if (options.fields) {
    return options.fields.some(hasText);
  }

  return options.enabled ?? false;
}

