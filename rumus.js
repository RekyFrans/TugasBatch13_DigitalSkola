export function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case "+":
        return angka1 + angka2;
    case "-":
      return angka1 - angka2; // Penambahan untuk pengurangan
    case "*":
      return angka1 * angka2; // Penambahan untuk perkalian
    case "/":
      // Cek untuk menghindari pembagian dengan nol
      if (angka2 === 0) {
        return "Tidak bisa dibagi dengan nol!";
      }
      return angka1 / angka2; // Penambahan untuk pembagian
    default:
      return "Operator tidak valid!";
  }
}