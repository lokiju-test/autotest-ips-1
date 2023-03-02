{
    let age: number = 18

    let ageFunction = function (a: number) {
        console.log(a < 18 ? 'Страница не доступна' : 'Страница доступна')
    }

    ageFunction(age)
}