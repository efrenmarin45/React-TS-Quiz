export const shuffleArr = (array: any[]) => {
    [...array].sort(() => Math.random() - 0.5)
}