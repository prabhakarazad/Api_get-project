// https://reqres.in/api/users?page=1

const api_url = 
      "https://reqres.in/api/users?page=1";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>first name</th>
          <th>Last name</th>
          <th>Email</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.data) { //.data api ke data ka name hai like data=[{}]
        tab += `<tr> 
    <td>${r.first_name} </td>
    <td>${r.last_name}</td>
    <td>${r.email}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = tab;
}