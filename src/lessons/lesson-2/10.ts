{
    class Car {
        private stateIsOn: boolean = false
        private speed: number = 0
        public getState() {
            if (this.stateIsOn) console.log('Текущее состояние машины включена')
            else console.log('Текущее состояние машины выключена')
        }
        private isSpeedCorrect(speed: number) {
            if (speed >= 0 && speed <= 100) return true
            return false
        }
        public turnOff() {
            this.stateIsOn = false
        }
        public turnOn() {
            this.stateIsOn = true
        }
        public setSpeed(speed: number) {
            if (this.isSpeedCorrect(speed) && this.stateIsOn) this.speed = speed
            else if (this.isSpeedCorrect(speed)) console.log(`Текущее состояние машины выключена. Для изменения скорости включите машину.`)
            else console.log(`${speed} не входит в границы допустимой скорости от 0 до 100`)

            console.log(`Текущая скорость машины ${this.speed}`)
        }
    }

    const car: Car = new Car()

    car.getState()
    // car.turnOn()
    car.getState()
    car.setSpeed(200)
}
// state поменять на boolean
// отсортировать методы по алфавиту
// создать отдельный метод для включенности машины
// меньше условий