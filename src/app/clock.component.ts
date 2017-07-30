import { Component } from "@angular/core";

@Component({ 
    selector: 'clock',
    templateUrl: './clock.component.html',
    styleUrls: ['clock.component.css']
}) 

export class ClockComponent {
    break: number = 5; 
    seconds: number = 0;
    minutes: number = 25;

    startCountDown(): void{
        let time: number = ((this.minutes * 60) + this.seconds);

        let x = setInterval(() => {
            time--;   
            this.minutes = Math.floor(time / 60);
            this.seconds = time % 60;     
            if (time < 0){   
                clearInterval(x);
            }
        }, 1000);
    }  
 }