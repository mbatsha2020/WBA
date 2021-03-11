function createAccount() {

    const inputs = document.getElementsByTagName("input"); 

   
    
    fetch("http://127.0.0.1:5000/add-data/", {
    method: "POST",
    body: JSON.stringify({
        name: inputs[0].value,
        email: inputs[1].value,
        address: inputs[2].value,
        password: inputs[3].value,
        repeat_password: inputs[4].value,
    }), 
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((json) => {
    alert(json.msg);
    document.getElementById("reg")
    window.location.href = "./index.html";
    })
     .catch((e) => alert(e));
    }