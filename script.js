function calcularDRE() {
  // Obtendo valores dos inputs
  const receitaBruta = parseFloat(document.getElementById('receitaBruta').value) || 0;
  const deducoes = parseFloat(document.getElementById('deducoes').value) || 0;
  const custos = parseFloat(document.getElementById('custos').value) || 0;
  const despesas = parseFloat(document.getElementById('despesas').value) || 0;

  // Calculando a Receita Líquida
  const receitaLiquida = receitaBruta - deducoes;

  // Calculando o Lucro Bruto
  const lucroBruto = receitaLiquida - custos;

  // Calculando o Lucro Operacional
  const lucroOperacional = lucroBruto - despesas;

  // Calculando o Lucro Líquido (sem considerar impostos)
  const lucroLiquido = lucroOperacional;

  // Exibindo os resultados
  document.getElementById('receitaLiquida').textContent = `Receita Líquida: R$ ${receitaLiquida.toFixed(2)}`;
  document.getElementById('lucroBruto').textContent = `Lucro Bruto: R$ ${lucroBruto.toFixed(2)}`;
  document.getElementById('lucroOperacional').textContent = `Lucro Operacional: R$ ${lucroOperacional.toFixed(2)}`;
  document.getElementById('lucroLiquido').textContent = `Lucro Líquido: R$ ${lucroLiquido.toFixed(2)}`;
}
