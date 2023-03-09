{
    class Car {
        private stateIsOn: boolean = false
        public getState() {
            if (this.stateIsOn) console.log('Текущее состояние машины включена')
            else console.log('Текущее состояние машины выключена')
        }
        public turnOff() {
            this.stateIsOn = false
        }
        public turnOn() {
            this.stateIsOn = true
        }
    }

    const car: Car = new Car()

    car.getState()
    car.turnOn()
    car.getState()
}
// state поменять на boolean
// отсортировать методы по алфавиту