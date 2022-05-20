const data = "data.json";
const listdata = document.querySelector('#datalist');

const getlistdata = ()=>{
    fetch(data)
    .then(response=>{
        return response.json();
    }).then(responseJson =>{
        console.log(responseJson);
    }).catch(error =>{
        console.error(error);
    });

}

document.addEventListener('DOMContentLoaded', getlistdata);