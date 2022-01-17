let phone = {
    nameBrand: 'Honer',
    model: '10',
    color: 'darkslateblue',
    power: (true / false),


    call(subscriber) {
        return `'Я звоню' ${subscriber}`;
    },

    getBatteryPower() {
        return `Ваша зарядка ${this.batteryPower}%`
    },

    isOn() {
        if (this.power === true) {
            return 'телефон включен';
        } else 
            return  'телефон выключен';
        
    },

    switch() {
        this.power = !this.power
    }




}

phone.batteryPower = {
    charge: 40,
}

phone.outgoingMessage = [
    {
        to: "89386854942",
        time: "23:00",
        message: "Hi",
    }
];

phone.incoming = [
    {
        from: "89899052345",
        time: "01:00",
        message: "Д1авала",
    }
]






