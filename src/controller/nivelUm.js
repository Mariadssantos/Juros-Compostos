//Emprestimo Bancário
// regra: o banco ganha sempre 5% ao mes / e o maximo de parcelas e 24 mostrar o valor final e o valor da parcela

function main(req, res) {
  if(req.body.parcelas > 24) return res.status(400).send("Numeros de parcelas maior que o permitido");
  const valor = totalJuros(req.body)
  return res.json(valor)

}

function consultaParcelas(obj) {
  const valParcelas = obj.emprestimo / obj.parcelas
  return valParcelas
}

function calcJuros(obj) {
  const juros = obj * 0.05
  const valMontante = obj + juros
  return valMontante
}

function totalJuros(obj) {
  const array = []

  const valorTotalParcelas = consultaParcelas(obj)
  const parcelas = calcJuros(valorTotalParcelas)

  const total = parcelas * obj.parcelas

  array.push({
    "valor total": total,
    "parcela": parcelas
  })

  return array

}

module.exports = {main}