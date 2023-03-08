{
    class Car {
        private state: string = 'выключена'
        public turnOn() {
            this.state = 'включена'
        }
        public turnOff() {
            this.state = 'выключена'
        }
        public getState() {
            console.log(`Текущее состояние машины ${this.state}`)
        }
    }

    const car: Car = new Car()

    car.getState()
    car.turnOn()
    car.getState()
}