class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.some((element) => element.time === time)) {
            console.warn("Уже присутствует звонок на это же время")
        }
        return this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        let newAlarmCollection = this.alarmCollection.filter(
            element => (element.time != time));
        this.alarmCollection = newAlarmCollection;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date();
        let currentHours = currentTime.getHours().toString();
        let currentMinutes = currentTime.getMinutes().toString();
        return currentHours + ":" + currentMinutes;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(this.alarmCollection.forEach(alarm => 
            {if (alarm.time == this.getCurrentFormattedTime() && alarm.canCall == true) {
                alarm.canCall = false;
                alarm.callback();
            }}))
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}