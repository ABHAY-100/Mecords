export function preserveWhitespaceForPdf(text: string): string {
  if (text == null) return "";
  const withExpandedTabs = text.replace(/\t/g, "    ");
  return withExpandedTabs.replace(/ /g, "\u00A0");
}


