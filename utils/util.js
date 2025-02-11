export function formatPrice(amount){ // 12000 => 12,000₮
  if(amount === undefined || amount === null) return false
  amount = amount.toString()
  var pattern = /(-?\d+)(\d{3})/
  while (pattern.test(amount))
      amount = amount.replace(pattern, "$1,$2")
  return amount + '₮'
}

export function formatDateLong(date){ // 2024-04-10T12:00:00.000Z => 2024 оны 04-р сарын 10
  date = new Date(date);
  var day = String(date.getDate());
  var month = String(date.getMonth() + 1);
  var year = String(date.getFullYear());
  return `${year} оны ${month}-р сарын ${day}`;
}