let Array=[{
    image: '<img src="/product/img/prod1.jpg"></img>',
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    priceCent:1010,
},
{
    image: '<img src="/product/img/prod2.jpg"></img>',
    name:'Intermediate Size Basketball',
    priceCent:2035
},
{
    image: '<img src="/product/img/prod3.jpg"></img>',
    name:'basketball',
    priceCent:2035
},
{
    image: '<img src="/product/img/prod4.jpg"></img>',
    name:'basketball',
    priceCent:2035
},
{
    image: '<img src="/product/img/prod4.jpg"></img>',
    name:'basketball',
    priceCent:2035
},
{
    image: '<img src="/product/img/prod3.jpg"></img>',
    name:'basketball',
    priceCent:2035
},
{
    image: '<img src="/product/img/prod4.jpg"></img>',
    name:'basketball',
    priceCent:2035
},
{
    image: '<img src="/product/img/prod4.jpg"></img>',
    name:'basketball',
    priceCent:2035
}];

let ObjectElementHTML='';
Array.forEach((value, index)=>{
    let objectElement=Array[index];
    
    ObjectElementHTML+=
    `<div class="prod-div">
        <div class="img-div">${objectElement.image}</div>
        <div class="name-div">${objectElement.name}</div>
        <div class="price-div">${objectElement.priceCent}</div>
        <div class="button-div"><button class="add-button">Add to cart</button></div>
    </div>`;
});

document.querySelector('.js-main-div').innerHTML=ObjectElementHTML;