const doHomework = (subject: string, calck: () => number) => {
    console.log(`Starting my ${subject} homework.`)
    calck()
}
doHomework('math', () => {
    console.log('Finished my homework')
    return 5
})