{
    class Car {
        private state: string = 'выключена'
        private speed: number = 0
        public turnOn() {
            this.state = 'включена'
        }
        public turnOff() {
            this.state = 'выключена'
        }
        public getState() {
            console.log(`Текущее состояние машины ${this.state}`)
        }
        public setSpeed(manualSpeed: number) {
            if (this.state === 'выключена') {
                console.log(`Текущее состояние машины ${this.state}. Для изменения скорости включите машину.`)
            } else {
                if (manualSpeed < 0) {
                    console.log(`${manualSpeed} меньше минимально допустимой скорости 0`)
                } else if (manualSpeed > 100) {
                    console.log(`${manualSpeed} больше максимально допустимой скорости 100`)
                } else {
                    this.speed = manualSpeed
                }
            }
            console.log(`Текущая скорость машины ${this.speed}`)
        }
    }

    const car: Car = new Car()

    car.getState()
    car.turnOn()
    car.getState()
    car.setSpeed(30)
}