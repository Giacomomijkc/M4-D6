const emailButton = document.getElementById("emailButton");
const nameButton = document.getElementById("nameButton");
const usernameButton = document.getElementById("usernameButton");
const myInput = document.getElementById("myInput");




const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok){
            const users = await response.json();
            //console.log(users);
            renderUsers(users);
        }

    } catch (error) {
        console.error('Si è verificato un errore durante la richiesta dei libri:', error);
    }
}

const renderUsers = (users) => {
    let myTable = document.getElementById("table");
    let myTbody = document.createElement("tbody");
    myTbody.classList.add("usersInfoBody");

    users.forEach(user => {
        let myTr = document.createElement("tr");
        myTr.classList.add("userInfo");
        myTbody.appendChild(myTr);

        let myTdId = document.createElement("td");
        myTdId.textContent = user.id;
        myTr.appendChild(myTdId);

        let myTdName = document.createElement("td");
        myTdName.textContent = user.name;
        myTdName.classList.add("name");
        myTr.appendChild(myTdName);

        let myTdUserName = document.createElement("td");
        myTdUserName.textContent = user.username;
        myTdUserName.classList.add("username");
        myTr.appendChild(myTdUserName);

        let myTdEmail = document.createElement("td");
        myTdEmail.textContent = user.email;
        myTdEmail.classList.add("email");
        myTr.appendChild(myTdEmail);

        let myTdAddress = document.createElement("td");
        myTdAddress.textContent = user.address.street + " " + user.address.suite + " " + user.address.city;
        myTr.appendChild(myTdAddress);

        let myTdPhone = document.createElement("td");
        myTdPhone.textContent = user.phone;
        myTr.appendChild(myTdPhone);

        let myTdWebsite = document.createElement("td");
        myTdWebsite.textContent = user.website;
        myTr.appendChild(myTdWebsite);

        let myTdCompany = document.createElement("td");
        myTdCompany.textContent = user.company.name + " " + user.company.catchPhrase + " " + user.company.bs;
        myTr.appendChild(myTdCompany);

        myTable.appendChild(myTbody);
    });
}

emailButton.addEventListener("click", () => {
    let query = myInput.value.toLowerCase();
    let usersInfo = document.querySelectorAll(".usersInfoBody");
  
    if (query) {
      usersInfo.forEach((userInfo) => {
        let userEmails = userInfo.querySelectorAll(".email");
        //let hasVisibleRow = false;
  
        userEmails.forEach((email) => {
          let userRow = email.parentElement;
  
          if (email.innerText.toLowerCase().includes(query)) {
            userRow.style.display = "table-row";
            //hasVisibleRow = true;
          } else {
            userRow.style.display = "none";
          }
        });
  
        /*if (!hasVisibleRow) {
          userInfo.style.display = "none";
        } else {
          userInfo.style.display = "table-row-group";
        }*/
      });
    } else {
      console.log("Valorizza il campo Input!");
    }
  });

  nameButton.addEventListener("click", () => {
    let query = myInput.value.toLowerCase();
    let usersInfo = document.querySelectorAll(".usersInfoBody");
  
    if (query) {
      usersInfo.forEach((userInfo) => {
        let userNames = userInfo.querySelectorAll(".name");
        //let hasVisibleRow = false;
  
        userNames.forEach((name) => {
          let userRow = name.parentElement;
  
          if (name.innerText.toLowerCase().includes(query)) {
            userRow.style.display = "table-row";
            //hasVisibleRow = true;
          } else {
            userRow.style.display = "none";
          }
        });
  
        /*if (!hasVisibleRow) {
          userInfo.style.display = "none";
        } else {
          userInfo.style.display = "table-row-group";
        }*/
      });
    } else {
      console.log("Valorizza il campo Input!");
    }
  });

  usernameButton.addEventListener("click", () => {
    let query = myInput.value.toLowerCase();
    let usersInfo = document.querySelectorAll(".usersInfoBody");
  
    if (query) {
      usersInfo.forEach((userInfo) => {
        let userUserNames = userInfo.querySelectorAll(".username");
        //let hasVisibleRow = false;
  
        userUserNames.forEach((userName) => {
          let userRow = userName.parentElement;
  
          if (userName.innerText.toLowerCase().includes(query)) {
            userRow.style.display = "table-row";
            //hasVisibleRow = true;
          } else {
            userRow.style.display = "none";
          }
        });
  
        /*if (!hasVisibleRow) {
          userInfo.style.display = "none";
        } else {
          userInfo.style.display = "table-row-group";
        }*/
      });
    } else {
      console.log("Valorizza il campo Input!");
    }
  });
  

window.onload = () => {
    fetchUsers();
  };