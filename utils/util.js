export function formatPrice(amount){ // 12000 => 12,000₮
  if(amount === undefined || amount === null) return false
  amount = amount.toString()
  var pattern = /(-?\d+)(\d{3})/
  while (pattern.test(amount))
      amount = amount.replace(pattern, "$1,$2")
  return amount + '₮'
}