{
    const ageFunction = function (age: number) {
        console.log(age < 18 ? 'Страница не доступна' : 'Страница доступна')
    }

    ageFunction(18)
}