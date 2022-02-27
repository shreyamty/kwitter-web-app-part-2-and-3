var firebaseConfig = {
      apiKey: "AIzaSyBu4kfr77jVGWz7nXZmsq2x8Qy5eFEhd28",
      authDomain: "kwitter-13-feb.firebaseapp.com",
      databaseURL: "https://kwitter-13-feb-default-rtdb.firebaseio.com",
      projectId: "kwitter-13-feb",
      storageBucket: "kwitter-13-feb.appspot.com",
      messagingSenderId: "655060313821",
      appId: "1:655060313821:web:0db33cf9621b85631e9d34"
};
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);


function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}