let app = document.querySelector('#frame');
app.style.background ='rgb(176, 216, 228)';
let div1 = document.createElement('div');
let div3 = document.createElement('div');
let pic = document.createElement('img');
let picdiv = document.createElement('div');
picdiv.textContent = `Hello! My name is Richard Duffy and I am a senior at PSU.  My current
proffessionl expierence with Computer Science involves the following:
Currently a CS tutor for PSU, have been a program grader for CS162 under the direction of Karla Fant
and aslo currently in my senior capstone project working with a local company to create
a working database application`;
picdiv.style.fontSize = '20px';
picdiv.style.background =' rgb(170, 146, 40)';
picdiv.style.border = 'thick solid rgb(176, 216, 228)';
pic.style.border = 'thick solid red';
picdiv.style.paddingTop = '15px';
div1.style.textAlign = 'center';
div1.style.paddingTop = '15px';
picdiv.style.paddingLeft = '15px';
picdiv.style.paddingRight = '15px';
picdiv.style.paddingBottom = '15px';
pic.alt = 'picture of me';
pic.src ='duffy.jpg';
pic.style.height = '250px';
div3.style.paddingTop = '15px';
div3.style.paddingLeft ='15px';
div3.style.paddingRight ='15px';
div3.style.paddingBottom ='15px';
div1.style.borderBottom = 'thick ridge red';
div1.append(pic);
div3.append(picdiv);
div1.append(div3);
app.append(div1);
let app2 = document.querySelector('#frame2');
let divPrev = document.createElement('div');
divPrev.style.border = 'thick ridge red';
app2.append(divPrev);
let cont = document.querySelector('#gridResume');
let array = ["Notable Classes Taken:","Language Knowledge:", "Work Expierience:"]
let array2= ["Advanced Programming in Java, Intro to Security, Software Engineering","Python, Java, C++, C, JavaScript, TypeScript","CS Tutor, Program Grader, Web App Creator/Designer"];
let array3 = ['rgb(93, 160, 105)', 'rgb(181, 150, 179)', 'green'];
    for (var i = 0; i < 3; i++) {
        let row = document.createElement('div');
        row.className = "row";
            let box = document.createElement('div');
            box.className = "box";
            let newspan = document.createElement('span');
            newspan.className = "classSpan";
            newspan.textContent = array2[i];
            box.textContent = array[i];
            box.style.background = array3[i];
            box.appendChild(newspan);             
            row.appendChild(box);             
        document.querySelector('#gridResume').appendChild(row);
    }
cont.style.textAlign = 'left';
cont.style.paddingLeft = '55px';
cont.style.paddingRight = '25px';





