//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyDdnxMd-JCQFqodl20zi0XHqVRd8IHezRA",
      authDomain: "kwitter-24cb7.firebaseapp.com",
      databaseURL: "https://kwitter-24cb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-24cb7",
      storageBucket: "kwitter-24cb7.appspot.com",
      messagingSenderId: "960905729613",
      appId: "1:960905729613:web:a28233f3d8071e751d2e04"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>"+ name +"<img class='user_tick' src'tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ Like +"</span></button><hr>";


                        row = name_with_tag + message_with_tag +like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        function send() {
                              msg = document.getElementById("msg").value;
                              firebase.database().ref(room_name).push({
                                    name: user_name,
                                    message: msg,
                                    like: 0
                              });

                              document.getElementById("msg").value = "";
                        }
                        //End code
                  }
            });
      });
}
getData();


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}