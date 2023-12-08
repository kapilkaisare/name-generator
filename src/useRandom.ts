export const useRandom = (list: any[]) => {
  const pickAtRandom = () => {
    return list[Math.floor(Math.random() * list.length)]
  }

  return { pickAtRandom }
}
