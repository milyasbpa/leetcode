function romanToInt(s: string): number {
  // Constraints:
  // 1. Penulisan dari Besar ke Kecil (Kecuali Subtractive)
  // 2. Aturan Subtractive (Pengurangan) -> Jika angka kecil muncul sebelum angka yang lebih besar, berarti dikurangkan. Hanya kombinasi berikut yang valid:
  // I hanya boleh di depan V atau X
  // X hanya boleh di depan L atau C
  // C hanya boleh di depan D atau M
  // 3. Pengulangan Karakter Maksimum 3x
  // 4. Angka Romawi Biasanya Diwakili Oleh Angka 1 - 3999

  const romanDict = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  // 1. 1 <= s.length <= 15
  if (!s.length || s.length > 15) return -1;
  // 2. s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  if (!/^[IVXLCDM]+$/.test(s)) return -1;

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanDict.get(s[i])!;
    const next = romanDict.get(s[i + 1]) ?? 0;
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

console.log(romanToInt("III")); // return: 3
console.log(romanToInt("LVIII")); // return: 58
console.log(romanToInt("MCMXCIV")); // return 1994
