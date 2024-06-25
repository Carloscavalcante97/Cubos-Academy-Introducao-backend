function solucao(
  quantidadeCriancas: number,
  quantidadePreAdolescentes: number,
  quantidadeTotal: number
): number {
  // seu código aqui
  let quantidadeAdulto = quantidadeTotal - (quantidadeCriancas + quantidadePreAdolescentes)
  return (quantidadeCriancas * 100) + (quantidadePreAdolescentes * 200) + (quantidadeAdulto * 300)
}

export default solucao;
