/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

//==================A
  // thay doi button dang nhap bang dia chi user va them nut logout
        
  let userName = localStorage.getItem("username");
  let loginName = document.querySelector("#login").innerText;
        
  if(userName){
      document.querySelector('#alogin').innerText = userName;
      document.querySelector("#logout").classList.remove('displayhidden');
      } else {
         document.querySelector('#alogin').innerText = loginName;
      }

  // nhap js cho nut logout bang cach remove storage va load lai trang
 
  function logOut(){
     return localStorage.removeItem("username");
  }
  
  function reloadPage(){
  location.reload(true);
  }

  //===========A


const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item"); 
const panes = $$(".tab-pane"); 

// chạy lặp mảng tabs, ứng với index của tab sẽ là nội dung bên dưới
tabs.forEach(function(element,index){

    let pane = panes[index];
    console.log(pane);

    element.onclick = function(){
    
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");
        element.classList.add("active");
        pane.classList.add("active");
    

    }

});
//ktr các ô đã điền đầy đủ hay chưa?
    function checkNull(){
       let formElement = document.querySelector('.form-row');
       let inputElement = formElement.querySelectorAll('.form-control');
       
       for (let i =0; i<inputElement.length; i++){
        if(inputElement[i].value ===""){
            inputElement[i].parentElement.querySelector('.error-mess').innerText = `Vui lòng không để trống ${inputElement[i].name}`;
            } else {
                inputElement[i].parentElement.querySelector('.error-mess').innerText="";
            }
        }
        }
        
    //Ktra, nếu còn trống thì không add data vào form
        function subMess(){
            checkNull();
            let formElement = document.querySelector('.form-row');
            let errElement = formElement.querySelectorAll('.error-mess');
            
            let arrayErr=[];
            for (let i=0; i<errElement.length; i++){
                arrayErr.push(errElement[i].innerText);
    
            }
            let checkError = arrayErr.every(function(value){
                return value ==="";
            });
            if (checkError){
                let name = document.querySelector('#name').value;
                let email = document.querySelector('#email').value;
                let subject = document.querySelector('#subject').value;
                let message = document.querySelector('#message').value;
                let listShare= localStorage.getItem("list-Share") ? JSON.parse(localStorage.getItem("list-Share")) : [];
                listShare.push({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                });
    
                //Lưu vào local
                localStorage.setItem("list-Share",JSON.stringify(listShare));
                }; 
                resetInput()
            }
            
        function resetInput(){
            document.querySelector('#name').value = "";
            document.querySelector('#email').value ="";
            document.querySelector('#subject').value="";
            document.querySelector('#message').value="";
    
        }

