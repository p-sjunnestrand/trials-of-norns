let mainWrapper = document.getElementById('mainWrapper');
let header = document.querySelector('header');
let hintText = document.createElement('div');
hintText.classList.add('hintText');

if (sessionStorage.getItem('reload')){
    thirdTrial();
} else {
    if (sessionStorage.getItem('name')){
        sessionStorage.removeItem('name');
    }
    landingPage();
}

function landingPage (){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgba(20,19,69,1)';
    let landingHeaderText = document.createElement('h1');
    landingHeaderText.innerHTML = 'The Seven Trials of the Norns';
    header.appendChild(landingHeaderText);
    let textContainer = document.createElement('div');
    textContainer.classList.add('container');
    mainWrapper.appendChild(textContainer);
    let landingInfoText = document.createElement('div');
    landingInfoText.classList.add('infoBox');
    landingInfoText.innerHTML= 'The norns have spun your threads of fate and tied them to the doors of these trials before which you stand. Make of the yarn your Ariadne&#39;s thread and prove your wits. Enter if you dare. Exit if you are worthy.';
    textContainer.appendChild(landingInfoText);
    let nameInput = document.createElement('div');
    nameInput.innerHTML = `Your Name:<input type='text' id='nameInput'>`;
    textContainer.appendChild(nameInput);
    let enterBtn = document.createElement('div');
    enterBtn.innerHTML = 'Enter';
    enterBtn.classList.add('btn');
    textContainer.appendChild(enterBtn);

    enterBtn.addEventListener('click', ()=>{
        let firstName = document.getElementById('nameInput');
        if (firstName.value != ''){
            sessionStorage.setItem('name', firstName.value);
            firstTrial();
        }
    });
}
function firstTrial(){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgba(19,57,69,1)';
    header.innerHTML = 'The First Trial';
    hintText.innerHTML = `The Norns see the fate of all beings, even those who are hidden.<br><span class='voluspa'>völuspa</span>`;
    mainWrapper.appendChild(hintText);
    let firstBox = document.createElement('div');
    firstBox.classList.add('box');
    firstBox.innerHTML = `<input type='text' id='firstInput'>`;
    mainWrapper.appendChild(firstBox);
    let firstProceed = document.createElement('div');
    firstProceed.innerHTML = 'Proceed';
    firstProceed.classList.add('btn');

    let firstInput = document.getElementById('firstInput');
    window.addEventListener('keyup', ()=>{
        if (firstInput.value == 'völuspa'){
            mainWrapper.appendChild(firstProceed);
        }
    })
    firstProceed.addEventListener('click', ()=>{
            secondTrial();
    });
}
function secondTrial(){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgb(44, 125, 65)';
    header.innerHTML = 'The Second Trial';
    hintText.innerHTML = 'The Norns see what was and what will be. The threads of fate run through time. Follow them back to see what will come.';
    mainWrapper.appendChild(hintText);
    sessionStorage.setItem('reload', true);
}
function thirdTrial(){
    sessionStorage.removeItem('reload');
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgb(124, 130, 36)';
    header.innerHTML = 'The Third Trial';
    hintText.innerHTML = 'The weave of fate is thick, but its threads are thin. Pull apart its strands to gaze what will come.';
    mainWrapper.appendChild(hintText);
    let thirdBox = document.createElement('div');
    thirdBox.classList.add('hiddenBox');
    thirdBox.innerHTML = 'Proceed';
    mainWrapper.appendChild(thirdBox);
    const mql = window.matchMedia("(max-width: 500px)");
    mql.addEventListener('change', function(e){
        if(e.matches){
            thirdBox.style.display = 'block';
        } else {
            thirdBox.style.display = 'none';
        }
    });
    thirdBox.addEventListener('click', fourthTrial);
}
function fourthTrial(){
    console.log('Verdandi');
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgba(173, 89, 24)';
    header.innerHTML = 'The Fourth Trial';
    hintText.innerHTML = 'Fate speaks to those who listen. Look inside to find its voice.';
    mainWrapper.appendChild(hintText);
    let fourthBox = document.createElement('div');
    fourthBox.classList.add('box');
    fourthBox.innerHTML = `<input type='text' id='fourthInput'>`;
    mainWrapper.appendChild(fourthBox);
    let fourthProceed = document.createElement('div');
    fourthProceed.innerHTML = 'Proceed';
    fourthProceed.classList.add('btn');

    let fourthInput = document.getElementById('fourthInput');

    const matchPassword = () => {
        if (fourthInput.value == 'Verdandi'){
            mainWrapper.appendChild(fourthProceed);
        }
    }

    window.addEventListener('keyup', matchPassword);
    fourthProceed.addEventListener('click', ()=>{
            window.removeEventListener('keyup', matchPassword);
            fifthTrial();
    });
}
function fifthTrial(){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgb(173, 89, 24)';
    header.innerHTML = 'The Fifth Trial';
    hintText.innerHTML = 'The fate of man is hidden in plain sight. Remove the weave and you shall see what will be.';
    mainWrapper.appendChild(hintText);
    let fifthBox = document.createElement('div');
    fifthBox.innerHTML = 'Proceed';
    fifthBox.classList.add('btn');
    mainWrapper.appendChild(fifthBox);
    let coverBox = document.createElement('div');
    coverBox.classList.add('coverBox');
    mainWrapper.appendChild(coverBox);
    fifthBox.addEventListener('click', sixthTrial);
}
function sixthTrial(){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgb(110, 22, 22)';
    header.innerHTML = 'The Sixth Trial';
    hintText.innerHTML = 'The Norns weave for all and thus fate is sealed for all living. Only those outside of memory are free to move as they please.';
    mainWrapper.appendChild(hintText);
    let sixthBox = document.createElement('div');
    sixthBox.classList.add('hiddenBox');
    sixthBox.innerHTML = 'Proceed';
    mainWrapper.appendChild(sixthBox);
    window.addEventListener('storage', function(e){
        // This doesn't work because the way the event listener works is it only detects changes made to storage in another window.
        // Maybe function that makes the user change their system clock?
        if(e.key == 'name'){
            sixthBox.style.display = 'block';
        }
    })
    sixthBox.addEventListener('click', seventhTrial);
}

//-------------------SEVENTH TRIAL-----------------//

function seventhTrial(){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgb(110, 22, 107)';
    header.innerHTML = 'The Seventh Trial';
    hintText.innerHTML = 'The Norns gaze inside every being and weave their strands within them. Gaze into your innermost being and you too may change your fate.';
    mainWrapper.appendChild(hintText);
    let exitDoor = document.createElement('div');
    exitDoor.innerHTML = 'Proceed';
    exitDoor.classList.add('btn');

    exitDoor.addEventListener('click', ()=>{
        trialsSuccess();
    });
    
    //---------------- EXIT LOCK ----------------//
    let exitLocked = true;
    
    if (exitLocked == false){
        mainWrapper.appendChild(exitDoor);
    }   
}
function trialsSuccess(){
    mainWrapper.innerHTML = '';
    document.body.style.background = 'rgb(66, 22, 110)';
    header.innerHTML = '';
    hintText.innerHTML = 'Well done! You have passed the Seven Trials of the Norns. Now weave the strands of your own fate.';
    mainWrapper.appendChild(hintText);
    let lastBox = document.createElement('div');
    lastBox.classList.add('btn');
    lastBox.innerHTML = 'Back to start';
    mainWrapper.appendChild(lastBox);

    lastBox.addEventListener('click', landingPage);
}