var a = document.getElementById("bgPhoto")
var b = document.getElementById("gender")
var c = document.getElementById("boy")
var text = document.getElementById("text")
var nm = document.getElementById("nm")
var nme = document.getElementById("nme")
var nmBoy = document.getElementById("nmBoy")
var nmeBoy = document.getElementById("nmeBoy")
var fightText = document.getElementById("fghText")
var information = document.getElementById("information")
var information1 = document.getElementById("information1")
var information2 = document.getElementById("information2")
var information3 = document.getElementById("information3")
var information4 = document.getElementById("information4")
var information5 = document.getElementById("information5")


document.onkeydown = function(e){
   if(e.keyCode == 49){
      a.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/015/079/314/large/daniele-verzini-mockupsocialpoint-backgroundscastle.jpg?1546974007')"
      a.style.backgroundSize = "cover"
      text.innerHTML = "Gladiator Arena"
     
      information.innerHTML = " "
      information1.innerHTML = " "
      information2.innerHTML = " "
      information3.innerHTML = " "
      information4.innerHTML = " "
      information5.innerHTML = " "
   }
   
   if(e.keyCode == 50){
      a.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/015/079/316/large/daniele-verzini-mockupsocialpoint-backgroundschaos.jpg?1546974197')"
      a.style.backgroundSize = "cover"
      a.style.backgroundRepeat = "no-repeat"
      text.innerHTML = "Death Arena"

      information.innerHTML = " "
      information1.innerHTML = " "
      information2.innerHTML = " "
      information3.innerHTML = " "
      information4.innerHTML = " "
      information5.innerHTML = " "
    } 
   
   if(e.keyCode == 51){
      b.style.backgroundImage = "url('Photo/girl2.png')"
      b.style.backgroundSize = "contain"
      b.style.backgroundRepeat = "no-repeat"
      nme.innerHTML = "Kleopatra"
      nm.style.border = "1px solid red"
      nm.style.backgroundColor = "rgba(255, 0, 0, 0.527)"

      information.innerHTML = " "
      information1.innerHTML = " "
      information2.innerHTML = " "
      information3.innerHTML = " "
      information4.innerHTML = " "
      information5.innerHTML = " "
    }

    console.log(e.keyCode)
    if(e.keyCode == 52){
      b.style.backgroundImage = "url('Photo/girl.png')"
      b.style.backgroundSize = "contain"
      b.style.backgroundRepeat = "no-repeat"
      nme.innerHTML = "Veronika"
      nm.style.border = "1px solid red"
      nm.style.backgroundColor = "rgba(255, 0, 0, 0.527)"

      information.innerHTML = " "
      information1.innerHTML = " "
      information2.innerHTML = " "
      information3.innerHTML = " "
      information4.innerHTML = " "
      information5.innerHTML = " "
    }

     if(e.keyCode == 53){
      c.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/08/16/15/33/knight-1598226_960_720.png')"
      c.style.backgroundSize = "cover"
      nmeBoy.innerHTML = "Sezar"
      nmBoy.style.border = "1px solid red"
      nmBoy.style.backgroundColor = "rgba(255, 0, 0, 0.527)"

      information.innerHTML = " "
      information1.innerHTML = " "
      information2.innerHTML = " "
      information3.innerHTML = " "
      information4.innerHTML = " "
      information5.innerHTML = " "
     }

     if(e.keyCode == 54){
        c.style.backgroundImage = "url('Photo/Boy2.png')"
        c.style.backgroundSize = "cover"
        nmeBoy.innerHTML = "Hercul"
        nmBoy.style.border = "1px solid red"
        nmBoy.style.backgroundColor = "rgba(255, 0, 0, 0.527)"

      information.innerHTML = " "
      information1.innerHTML = " "
      information2.innerHTML = " "
      information3.innerHTML = " "
      information4.innerHTML = " "
      information5.innerHTML = " "
     }

     if(e.keyCode == 13){
         fightText.innerHTML = "Fight"

         information.innerHTML = " "
         information1.innerHTML = " "
         information2.innerHTML = " "
         information3.innerHTML = " "
         information4.innerHTML = " "
         information5.innerHTML = " "
     }

     if(e.keyCode == 32){
        nme.innerHTML = " "
        text.innerHTML = " "
        nmeBoy.innerHTML = " "
        fightText.innerHTML = " "

        information.innerHTML = "1-2: War Arena"
        information1.innerHTML = "3-4: Girl Warriors"
        information2.innerHTML = "5-6: Boy Warriors"
        information3.innerHTML = "Enter: Fight"
        information4.innerHTML = "Information:"
        information5.innerHTML = "Space: Reset"

        a.style.backgroundImage = "url('')"
        b.style.backgroundImage = "url('')"
        c.style.backgroundImage = "url('')"

        nmBoy.style.border = "0px solid red"
        nmBoy.style.backgroundColor = "transparent"
        nm.style.border = "0px solid red"
        nm.style.backgroundColor = "transparent"
     }
}