export function buildMapEmbedSrc(mapQuery: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
}

