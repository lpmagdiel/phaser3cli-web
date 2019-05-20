const $ = el => document.querySelector(el);
const fecha = new Date();

$('#info-footer').innerText = 'Phaser 3 CLI By Gammafp • '+fecha.getFullYear();


function createTerminal(arr = []){
    let terminal = document.createElement('div');
    terminal.className+='terminal';
    let barra = document.createElement('div');
    let btn1 = document.createElement('div');
    let btn2 = document.createElement('div');
    let btn3 = document.createElement('div');
    btn1.className+='btn-terminal';
    btn2.className+='btn-terminal';
    btn3.className+='btn-terminal';
    
    barra.className+='barra';

    btn3.style.backgroundColor="#FF6057";
    btn2.style.backgroundColor="#FFC22E";
    btn1.style.backgroundColor="#28CA40";
    barra.append(btn3);
    barra.append(btn2);
    barra.append(btn1);

    terminal.append(barra);
    for(let i in arr){
        let p = document.createElement('p');
        p.innerText = ' >  '+arr[i];
        terminal.append(p);
    }
    return terminal;
}

var lineas = ["npm install -g phaser3-cli-gamma","pg --new folderName","cd folderDirectory","pg --scene sceneName"];
$('#terminal-container').append(createTerminal(lineas));