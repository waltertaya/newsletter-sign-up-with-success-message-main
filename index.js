// let elope = document.getElementById('button1');
function btn () {
    if(document.getElementById('input').value.includes('@' && '.')){
        document.getElementById('main').style.display = 'none';
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        document.getElementById('input').style.backgroundColor = 'unset';
        document.getElementById('input').style.color = 'unset';
    }
    else{
        document.getElementById('main').style.display = 'block';
        document.getElementById('success').style.display = 'none';
        document.getElementById('error').style.display = 'unset';
        document.getElementById('input').style.backgroundColor = 'pink';
        document.getElementById('input').style.color = 'brown';
    }
}

// button.addEventListener('click', btn);
 
function dismiss () {
    document.getElementById('main').style.display = 'block';
    document.getElementById('success').style.display = 'none';
 
}

// let success = document.getElementById('success');
// let main = document.getElementById('main');
// let input = document.getElementById('input');

// function btn (){
//     if(input.value.includes('@' && '.' ) && input.value.length >13){
//         success.style.display = 'block';
//         main.style.display = 'none';
//     }

//     else {
//         success.style.display = 'none';
//         main.style.display = 'block';
//     }
// }