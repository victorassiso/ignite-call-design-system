export function currency(
  e: React.ChangeEvent<HTMLInputElement>,
  locale: string,
) {
  const decimalSeparator = locale === 'pt-BR' ? ',' : '.'
  const groupSeparator = locale === 'pt-BR' ? '.' : ','
  let value = e.target.value

  /// Clear not digits
  value = value.replace(/\D/g, '')

  // Pad with zeros
  value = value.padStart(3, '0')

  // Remove unnecessary zeros on the left
  while (value.length > 3 && value.at(0) === '0') {
    value = value.slice(1)
  }

  // Insert separators
  value = value.replace(/(\d)(\d{2})$/, `$1${decimalSeparator}$2`)
  value = value.replace(/(?=(\d{3})+(\D))\B/g, groupSeparator)

  e.currentTarget.value = value
  return e
}

export function phone(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value

  // Clear not digits
  value = value.replace(/\D/g, '')

  // Limit the length to 11 digits
  value = value.slice(0, 11)

  // Format the phone number
  let formattedValue = ''
  if (value.length >= 1) {
    formattedValue = value.slice(0, 2)
  }
  if (value.length >= 3) {
    formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 3)}`
  }
  if (value.length >= 4) {
    formattedValue += ` ${value.slice(3, 7)}`
  }
  if (value.length >= 8) {
    formattedValue += `-${value.slice(7, 11)}`
  }

  e.currentTarget.value = formattedValue
  return e
}
