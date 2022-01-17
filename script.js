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

    
}

phone.batteryPower = {
    charge: 40,
}



