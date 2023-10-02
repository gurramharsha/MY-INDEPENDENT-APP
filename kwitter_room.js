
var firebaseConfig = {
      apiKey: "AIzaSyCwm0xoj31M7LHwNRgi2BpX-AS1hXKzgUo",
      authDomain: "kwitter-5c55b.firebaseapp.com",
      databaseURL: "https://kwitter-5c55b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5c55b",
      storageBucket: "kwitter-5c55b.appspot.com",
      messagingSenderId: "292026231949",
      appId: "1:292026231949:web:ec54b1f417a9d37e1b86c4"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
       document.getElementById("output").innerHTML += row;
      
     });
     }); 
      }
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
