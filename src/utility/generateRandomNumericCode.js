export function generateRandomNumericCode() {
  let code = '';
  const digits = '0123456789';
  const codeLength = 6;

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    code += digits[randomIndex];
  }

  return parseInt(code);
}

// Example usage
