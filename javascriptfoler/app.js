let signup=()=>{
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var number=document.getElementById("number");
    var country=document.getElementById("city")  


    localStorage.setItem("number",number.value)
    localStorage.setItem("city",city.value)



    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    
    var user = userCredential.user;
    console.log(user)
    window.location.href="signin.html"

  })
  .catch((error) => {
    
    var errorMessage = error.message;
    console.log(errorMessage)
    
  });
    
}

let signin=()=>{
    var email=document.getElementById("email");
    var password=document.getElementById("password");


    if(email.value=="admin@gmail.com" && password.value=="123123"){

       
        window.location.href="dishboard.html"
        
    }else{
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          
          var user = userCredential.user;
         console.log(user)
         
         window.location.href="resturants.html"

        })
        .catch((error) => {
         
          var errorMessage = error.message;
          console.log(errorMessage)
          alert("fail to signin")
        });
    }
}



function funfun(){
  window.location.href="resturant.html"
}


function funfun1(){
  window.location.href="resturant1.html"
}





 
function get(){
    

   

   firebase.database().ref("product").on("child_added",function(data){
     var a=data.val()
   

       var card=document.getElementById("porductshow");
       card.innerHTML+=`
       
       
       <div id="cart1" >
       <img class="carskiimage" src="${a.url}" alt="">
       
       <p>${a.catagiri}</p>
       <p>${a.decs}</p>
       
       <p>${a.price}</p>
       <p>${a.type}</p>

       <a  class="cardkabutton" onclick='addToCart("${a.url}","${a.catagiri}","${a.price}","${a.decs}","${a.type}")' class="btn btn-primary">ADD TO CART</a>
       

       
       
       </div>
       
       `
      
     
       
      })
    }
    
    function addToCart(url,catagri,desc,price,type){
      
 
        let card = {
            url,
            desc,
            price,
            type,
            catagri

          }
          
          var key = Math.random()*345;
firebase.database().ref("OrderFromCoustmer" ).child(key.toFixed()).set(card);
alert("your order is in pending ")
}

            


function showOrder(){
    

   
  

  firebase.database().ref("OrderFromCoustmer").on("child_added",function(data){
    var a=data.val()
  // console.log(a)

      var card=document.getElementById("showorder");
      card.innerHTML+=`
      
      
      <div class="orderdiv" id="cart1" >
      <img class="orderimage" src="${a.url}" alt="">
      
      <p class="ordertext">${a.catagri}</p>
      <p class="ordertext">${a.price}</p>
      <p class="ordertext">${a.desc}</p>
      
      <p class="ordertext">${a.type}</p>

      
      <a  id=" button" class="orderbotton" onclick='recived("${a.url}","${a.catagri}","${a.desc}","${a.price}","${a.type}")' class="btn btn-primary">I RECIVED</a>
      

      
      
      </div>
      
      `
     
    
      
     })
   }
     
  

   function recived(url,catagri,price,desc,type){
      
     var key = Math.random()*5850000;
 
    let recivedorder = {
        url,
        catagri,
        price,
        desc,
        type

      }
      // console.log(recivedorder)
      
firebase.database().ref("ActiveOrder" ).child(key.toFixed()).set(recivedorder);




}







function showRecivedOrder(){
    

   

  firebase.database().ref("OrderFromCoustmer").on("child_added",function(data){
    var a=data.val()
  // console.log(a)

      var card=document.getElementById("recivedproducts");
      card.innerHTML+=`
      
      
      <div class="orderdiv" id="cart1" >
      <img class="orderimage" src="${a.url}" alt="">
      
      <p class="ordertext">${a.catagri}</p>
      <p class="ordertext">${a.price}</p>
      <p class="ordertext">${a.desc}</p>
      
      <p class="ordertext">${a.type}</p>

      
      <a  class="orderbotton" onclick='readyorder()' class="btn btn-primary">ReadyOrder</a>
      

      
      
      </div>
      
      `
     
    
      
     })
   }

function readyorder(url,catagri,price,desc,type){
      
 
    let orderprovide= {
        url,
        catagri,
        price,
        desc,
        type

      }
      console.log(orderprovide)
      
      var key = Math.random()*573574000;
firebase.database().ref("transferedOrder" ).child(key.toFixed()).set(orderprovide);



}




   
     
