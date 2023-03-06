{
    type Student = {
        age: number,
        firstName: string,
        secondName: string,
    }

    const groupList: Student[] = [{
        age: 21,
        firstName: 'Олег',
        secondName: 'Петров'
    },
    {
        age: 22,
        firstName: 'Ирина',
        secondName: 'Иванова'
    },
    {
        age: 23,
        firstName: 'Иван',
        secondName: 'Иванов'
    },
    {
        age: 24,
        firstName: 'Петр',
        secondName: 'Сидоров'
    }]


    groupList.forEach((student: Student) => {
        console.log(`${student.firstName}, ${student.age}`)
    })
}