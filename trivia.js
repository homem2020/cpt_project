var score = 0
var i = 1
var ans = 1

 
function submitAnswer(){
    
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
    var image_1 = document.getElementById('image_1'); 
 var image_2 = document.getElementById('image_2'); 
     var sound1 = new Audio('correct.mp3'); 
          var sound2 = new Audio('wrong.mp3');
        
        var image_3 = document.createElement("IMG");
  image_3.setAttribute("src", "correct.jpg");
  image_3.setAttribute("width", "300");
  image_3.setAttribute("height", "200");

  var image_4 = document.createElement("IMG");
  image_4.setAttribute("src", "wrong.jpg");
  image_4.setAttribute("width", "200");
  image_4.setAttribute("height", "300");
  
    
        
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
      
        document.body.appendChild(image_3)
       sound1.play();
        
        score++
        
    }
   
    else {
        document.getElementById("question").value="You are wrong"
         document.body.appendChild(image_4)
       
       sound2.play();
       
    }
    document.view.qscore.value=score
    
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
        
    }

    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
        
    }
document.view.qscore.value=score
}
    
    
    else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}



else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


	
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


	

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}

else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}

else if (ans===11){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


else if (ans===12){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


	

else if (ans===13){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


	

else if (ans===14){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}

else if (ans===15){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}


	

else if (ans===16){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}

    else if (ans===17){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}
    else if (ans===18){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}
else if (ans===19){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}
    else if (ans===20){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        sound1.play();
        document.body.appendChild(image_3)
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play();
        document.body.appendChild(image_4)
    }
    document.view.qscore.value=score

}
	ans++; 
    
}

function main(){ 
   
if (i===1){ 
      document.getElementById("image_1").style.visibility = "hidden";
    document.getElementById("image_2").style.visibility = "hidden";
	document.view.qnum.value=i;
   	document.view.question.value ="What team is the most recent recipient of the Larry O'Brien Championship Trophy of the National Basketball Association? \na)Golden State Warriors \nb)Cleveland Cavaliers \nc)Toronto Raptors \nd)Milwaukee Bucks";
    document.view.qans.value=""
}
else if (i===2){ 
      document.getElementById("image_1").style.visibility = "hidden";
    document.getElementById("image_2").style.visibility = "hidden";
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the highest paid athlete in the world? \na)Lebron James \nb)Cristiano Ronaldo \nc)Floyd Mayweather \nd)Roger Federer";
    document.view.qans.value=""
}
else if (i===3){ 
    document.getElementById("image_1").style.visibility = "hidden";
document.getElementById("image_2").style.visibility = "hidden";
	document.view.qnum.value=i;	
	document.view.question.value ="What sport is the most viewed today? \na)Soccer \nb)Baseball \nc)Basketball \nd)Football";
    document.view.qans.value=""
}

    else if (i===4){   
  
document.getElementById("image_1").style.visibility = "visible";
        document.getElementById("image_2").style.visibility = "hidden";
	document.view.qnum.value=i;	
	document.view.question.value ="Who is this in the image below? \na)Cristiano Ronaldo \nb)Lionel Messi \nc)Neymar da Silva Santos Jr. \nd)Gareth Bale";
    document.view.qans.value=""
}
   
    
else if (i===5){ 
    document.getElementById('image_1');
image_1.parentNode.removeChild(image_1);
    document.getElementById("image_2").style.visibility = "hidden";
	document.view.qnum.value=i;	
	document.view.question.value ="Out of his years on the Chicago Bulls in the NBA, how many championships has Michael Jordan won? \na)3 \nb)6 \nc)4 \nd)5";
    document.view.qans.value=""
     
}

else if (i===6){ 
document.getElementById("image_2").style.visibility = "visible";
	document.view.qnum.value=i;	
	document.view.question.value ="What baseball team is this? \na)Los Angeles Dodgers \nb)New York Mets \nc)Minnesota Twins \nd)Baltimore Orioles";
    document.view.qans.value=""
}

else if (i===7){ 
    document.getElementById('image_2');
image_2.parentNode.removeChild(image_2);
	document.view.qnum.value=i;	
	document.view.question.value ="Who holds the record for the most major victories in golf? \na)Tiger Woods \nb)Bobby Jones \nc)Jack Nicklaus \nd)Walter Hagen";
    document.view.qans.value=""
}

else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What sport association hosts an annual event called 'Wrestlemania'? \na)WWE \nb)NBA \nc)NFL \nd)MLB";
    document.view.qans.value=""
}

else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was the last time the Toronto Maple Leafs won the Stanley Cup? \na)1967 \nb)1984 \nc)2001 \nd)1992";
    document.view.qans.value=""
}

else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What sports did Canadians invent? \na)Lacrosse \nb)Basketball \nc)Hockey \nd)All of the Above";
    document.view.qans.value=""
}

else if (i===11){ 
	document.view.qnum.value=i;	
	document.view.question.value ="After intervals of how many years do national soccer teams participate in the FIFA World Cup? \na)2 \nb)1 \nc)3 \nd)4";
    document.view.qans.value=""
}

else if (i===12){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What individual player holds the record for most championship rings in NBA history? \na)Michael Jordan \nb)Lebron James \nc)Bill Russell \nd)Magic Johnson";
    document.view.qans.value=""
}

else if (i===13){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What team holds the record for most Stanley Cup wins? \na)Montreal Canadians \nb)Toronto Maple Leafs \nc)Edmonton Oilers \nd)Washington Capitals";
    document.view.qans.value=""
}

else if (i===14){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In what years did the Toronto Blue Jays of the Major League of Baseball win consecutive world series? \na)1983-1984 \nb)2001-2002 \nc)1992-1993 \nd)1997-1998";
    document.view.qans.value=""
}

else if (i===15){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many super bowls has Tom Brady won in his career thus far? \na)3 \nb)5 \nc)6 \nd)4";
    document.view.qans.value=""
}

else if (i===16){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who has won the most Grand Slam Tennis Tournament titles in their career(Men's Singles)? \na)Roger Federer \nb)Novak Djokovic \nc)Bjorn Borg \nd)Rafael Nadal";
    document.view.qans.value=""
}

else if (i===17){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who's boxing prowess is described famously by this quote: 'Float like a butterfly, sting like a bee. The hands can't hit what the eyes can't see'? \na)Floyd Mayweather \nb)Muhammed Ali \nc)Rocky Marciano \nd)Mike Tyson";
    document.view.qans.value=""
}

else if (i===18){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who holds the record for most individual goals in a career in NHL history? \na)Sidney Crosby \nb)Bobby Orr \nc)Alex Ovetchkin \nd)Wayne Gretzky";
    document.view.qans.value=""
}

else if (i===19){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What NFL player holds the all-time record for most touchdowns? \na)Dan Marino \nb)Tom Brady \nc)Peyton Manning \nd)Joe Montana";
    document.view.qans.value=""
}

else if (i===20){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the most recent winner of the national FIFA World Cup in Russia? \na)Italy \nb)France \nc)Croatia \nd)Germany";
    document.view.qans.value=""
}
else if (i===21){
   var final=(score/20*100).toFixed(1)
    document.write("<h5>Congratulaions.  You have completed the quiz.  Your score was " + final + "%.  To retry the quiz, press the RETRY button.</h5>")
   
}
    
    i++; 
   
}
function redo(){
    score = 0
i = 1
ans = 1
main();
}