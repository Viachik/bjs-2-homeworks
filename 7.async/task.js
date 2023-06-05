// Задача №1. Будильник-колыбельная

class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    
    addClock(time, callback){
        if(!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }
    

        if(this.alarmCollection.some(alarm => alarm.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            callback,
            time,
            canCall: true,
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
    }
    
    start(){
        if(this.intervalId){
            return
        }
    
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if(item.time === this.getCurrentFormattedTime() && item.canCall) {
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000)
    }
    
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    
    resetAllCalls(){
        this.alarmCollection.forEach(item => item.canCall = true);
    }
    
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}