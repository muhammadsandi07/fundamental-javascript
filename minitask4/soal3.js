const name = 'sandi'
const nilaiUjian = 70
const nilaiAbsen = 75

const rataRata = (nilaiUjian + nilaiAbsen) / 2

if (rataRata >= 75) {
  console.log(`Selamat ${name} anda lulus`)
} else {
  console.log('Anda belum lulus, silahkan mencoba kembali')
}
