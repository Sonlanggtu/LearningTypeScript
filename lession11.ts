let DisplayColor = function(...DisplayColor:string[]){
    for(let ar in DisplayColor){
        console.log(arguments[ar]);
    }
}

let color : string = 'Color: ';
DisplayColor(color,'Red','Green');
DisplayColor('Yello','Pink');
DisplayColor('Red','Green','Yello','Pink');
