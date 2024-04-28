export function formatRupiah(priceInt: number, delimiters = ".") {
  if (typeof priceInt !== "number" && typeof priceInt !== "string")
    return priceInt;
  return `Rp ${priceInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiters)}`;
}
