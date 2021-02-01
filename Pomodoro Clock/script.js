var x;
var y;
var b1 = document.getElementById("subBreak");
var b2 = document.getElementById("addBreak");
var b3 = document.getElementById("subSession");
var b4 = document.getElementById("addSession");
var b5 = document.getElementById("start");
var b6 = document.getElementById("reset");
var sesn = 0;

b1.onclick = () => {
    var s3 = parseInt(document.getElementById("break").value);
    if(s3 > 0) {
        document.getElementById("break").value = s3-1;
    }
}
b2.onclick = () => {
    var s4 = parseInt(document.getElementById("break").value);
    document.getElementById("break").value = s4+1;
}
b3.onclick = () => {
    var s1 = parseInt(document.getElementById("session").value);
    if(s1>0) {
        document.getElementById("session").value = s1-1;
    }
}
b4.onclick = () => {
    var s2 = parseInt(document.getElementById("session").value);
    document.getElementById("session").value = s2+1;
}
b5.onclick = () => {
    b5.innerHTML = "Pause";
    b5.setAttribute("id","pause");
    counter();
}
b6.onclick = () => {
    clearTimeout(x);
    clearTimeout(y);
    document.getElementById("session").value = 0;
    document.getElementById("break").value = 0;
    document.getElementById("time").innerHTML = "";
}

function counter() {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    document.getElementById("time").style.borderColor = "blue";
    document.getElementById("time").style.color = "blue";
    sesn++;
    document.getElementById("display").innerHTML = "Session"+sesn;
    var m = parseInt(document.getElementById("session").value);
    var s = 0;

    x = setInterval(function() {
        if(s>0) {
            s--;
        }
        if(m>0 && s==0) {
            m--;
            s = 60;
        }
        if(s<10) {
            document.getElementById("time").innerHTML = m+":0"+s;
        } else if(m<10) {
            document.getElementById("time").innerHTML = "0"+m+":"+s;
        } else if(s<10 && m<10) {
            document.getElementById("time").innerHTML = "0"+m+":0"+s;
        } else {
            document.getElementById("time").innerHTML = m+":"+s;
        }

        if(m== 0 && s==0) {
            breakTime();
        }
    }, 1000);

}

function breakTime() {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    document.getElementById("time").style.borderColor = "red";
    document.getElementById("time").style.color = "red";
    document.getElementById("display").innerHTML = "break!";
    var b = parseInt(document.getElementById("break").value);
    var sec = 0;

    y = setInterval(function() {
        if(sec>0) {
            sec--;
        }
        if(b>0 && sec==0) {
            b--;
            sec = 60;
        }
        if(sec<10) {
            document.getElementById("time").innerHTML = b+":0"+sec;
        } else if(b<10) {
            document.getElementById("time").innerHTML = "0"+b+":"+sec;
        } else if(sec<10 && b<10) {
            document.getElementById("time").innerHTML = "0"+b+":0"+sec;
        } else {
            document.getElementById("time").innerHTML = b+":"+sec;
        }
        
        if(sec==0 && b == 0) {
            var f = document.getElementById("time");
            f.style.borderColor = "grey";
            f.style.color = black;
            f.innerHTML = "";
        }
    }, 1000);
}
