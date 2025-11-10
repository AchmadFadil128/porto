export function getImageSrc(value?: string | null): string | null {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  if (/^(data:image|https?:|\/)/i.test(trimmed)) {
    return trimmed;
  }

  return `data:image/png;base64,${trimmed}`;
}


