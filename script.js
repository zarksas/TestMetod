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
    },

    sentMessage(to, time, message) {
        this.sent.push({
            to, time, push
        })
    },


    clearSent() {
        this.sent = [];
    },

    clearInbox() {
        this.inbox = [];
    },

  


}

phone.batteryPower = {
    charge: 40,
}

phone.sent = [
    {
        to: "89386854942",
        time: "23:00",
        message: "Hi",
    }
];

phone.inbox = [
    {
        from: "89899052345",
        time: "01:00",
        message: "Д1авала",
    }
]






