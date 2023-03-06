{
    const firstNumber = 6
    const secondNumber = 2
    function calc(x: number, y: number, callback: () => number): void {
        console.log(`Первый операнд: ${x}`)
        console.log(`Второй операнд: ${y}`)
        console.log(`Результат выражения: ${callback()}`)
        console.log('')
    }

    calc(firstNumber, secondNumber, () => { return firstNumber + secondNumber })
    calc(firstNumber, secondNumber, () => { return firstNumber - secondNumber })
    calc(firstNumber, secondNumber, () => { return firstNumber * secondNumber })
    calc(firstNumber, secondNumber, () => { return firstNumber / secondNumber })
}