let Icons = document.getElementById('icon')

Icons.addEventListener('click',()=>{
    document.body.classList.toggle('DarkMode')
    if (document.body.classList.contains('DarkMode')) {
        Icons.innerHTML =`<h1>&#9788;</h1>`  
    } else {
        Icons.innerHTML =`<h1>&#9790;</h1>`
    }
})




// =======Simple Method of Dark Mode and Light Mode==============