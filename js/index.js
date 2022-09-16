let burger = document.querySelector(".burger");
let inside = document.querySelector(".inside");
let accordions1 = document.querySelector(".accordions1");
let accordions2 = document.querySelector(".accordions2");
let accordions3 = document.querySelector(".accordions3");
let listDown = document.querySelector(".list-down");
let same = document.querySelector("li.same");
let same2 = document.querySelector("li.same2");
let same3 = document.querySelector("li.same3");
let company = document.querySelector(".company")
let connect = document.querySelector(".connect");
let product = document.querySelector(".product");

burger.addEventListener('click', function(){
    inside.classList.toggle('active')
    burger.classList.toggle('active')
    
});

same.addEventListener('click', function(){
    product.classList.toggle('active');
    accordions1.classList.toggle('active');
})
same2.addEventListener('click', function(){
    company.classList.toggle('active')
    accordions2.classList.toggle('active');

    
})
same3.addEventListener('click', function(){
    accordions3.classList.toggle('active');
    connect.classList.toggle('active');
    

})
