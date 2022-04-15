

const nhap = document.querySelector("#ten")
const mail = document.querySelector("#mail")
const sdt = document.querySelector("#phone")

function clickdone(e) {
  e.preventDefault();
  checklength();
  checkmail();
  checkphone();
}
function checklength() {


  if (nhap.value == "") {
    document.querySelector("#check").innerHTML = "Vui lòng điền trường này."

  }else{
    if (nhap.value.length < 10) {
      document.querySelector("#check").innerHTML = "Phải nhập trên 10 ký tự."
    }
    else {
      document.querySelector("#check").innerHTML = ""
    }
  }
}
function checkmail(){
  const regex = /[a-zA-Z0-0]+@[a-z]+.[a-z]{2-3}$/;
  if(mail.value == ""){
    document.querySelector("#checkmail").innerHTML = "Vui lòng điền trường này."
  }else{
    if (!regex.test(mail.value)) {
      document.querySelector("#checkmail").innerHTML = "Nhập đúng định dạng email-Vd:abc123@gmail.com"
    }else{
    document.querySelector("#checkmail").innerHTML = ""
    }
  }
}
function checkphone(){
  const regex = /[0-9]{10}$/;
  if(sdt.value == ""){
    document.querySelector("#checkphone").innerHTML = "Vui lòng điền trường này."
  }else{
    if(!regex.test(sdt.value) ){
    document.querySelector("#checkphone").innerHTML = "Nhập số đi"
    }else{
    document.querySelector("#checkphone").innerHTML = ""
    }
  }
}


// Bước 3 DOM đến 2 cái vừa tạo là select và input
const lesson = document.querySelector("#lesson");
const price = document.querySelector("#price");
// Bước 4: Tạo 1 function và sử dụng if để kiểm tra value của option sau đó thay đổi value của price.
function changePrice() {
  if (lesson.value == "HTML") {
    price.value = 500;
    console.log("HTML");
  } else if (lesson.value == "JS") {
    price.value = 800;
    console.log("Js");
  } else if (lesson.value == "PHP") {
    price.value = 1000;
    console.log("PHP");
  }
}

// function checklength(input,message){
//   if(input.value.length < 10){
//     document.getElementById("chu").innerHTML="chưa có"
//   }
// }
