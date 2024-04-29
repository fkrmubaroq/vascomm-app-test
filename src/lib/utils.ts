export function formatRupiah(priceInt: number, delimiters = ".", startText = "Rp") {
  if (typeof priceInt !== "number" && typeof priceInt !== "string")
    return priceInt;
  return `${startText} ${priceInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiters)}`;
}

export function appendFormFromObject(obj:Record<string, string | File | number>):FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    if (value instanceof File) {
      formData.append(key, value);
      continue;
    }
    formData.append(key, value.toString());
  }
  return formData;
}

export function storage(fileName: string) {
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${fileName}`;
}