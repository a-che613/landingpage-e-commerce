let cart = document.querySelector('.basket');
let drop = document.querySelector('.cartss');
let addButton = document.querySelector('.add-btn');
let emptyMessage = document.querySelector('.empty');
let dropBody = document.querySelector('.body');
let addItems = document.querySelector('.add');
let subItem = document.querySelector('.minus');
let incItem = document.querySelector('.item-count');
let cartDisp = document.querySelector('.disp');
let op = document.querySelector('.black');
let closeButton = document.querySelector('.close-btn');


cart.addEventListener('click', () => {
  drop.style.display = 'initial';
})
closeButton.addEventListener('click', () => {
  drop.style.display = 'none';
})
function decreaseItem() {
  subItem.addEventListener('click', () => {
    incItem.innerHTML--;
  })
}

decreaseItem()

function increaseItem() {
  addItems.addEventListener('click', () => {
    incItem.innerHTML++;
  })
}
increaseItem()

function addItem() {
  addButton.addEventListener('click', () => {
    let count = incItem.innerHTML;
    cartDisp.style.display = 'initial';
    cartDisp.innerHTML = count;

    let imgPrice = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', 'images/image-product-1-thumbnail.jpg');
    let div = document.createElement('div');
    let price = document.createElement('p');
    let amount = document.createElement('p');
    let buttonC = document.createElement('button');
    //APPENDING

    dropBody.appendChild(imgPrice);
    dropBody.appendChild(buttonC);
    imgPrice.appendChild(img);
    imgPrice.appendChild(div);
    div.appendChild(amount);
    div.appendChild(price);

    //ADDING THE CLASS NAME

    img.classList.add('smallI');
    div.classList.add('divI');
    imgPrice.classList.add('imgP');
    buttonC.classList.add('btnC');
    if (cartDisp.innerHTML == 0){
      document.querySelector('.smallI').style.display = 'none';
      return emptyMessage;
    }
    else {
      emptyMessage.style.display = 'none';
      let x = 125.00;
      count = parseInt(count)
      console.log(typeof(count))
      let result = x * count;
      price.innerHTML = `$125.00*${count}   $${result}`;
      amount.innerHTML = document.querySelector('.h2').innerHTML;
      buttonC.innerHTML = 'Checkout';
      amount.classList.add('headerr');
    }
  })
}
addItem()

let burger = document.querySelector('.bx-menu');
let hideMenu = document.querySelector('.hide');

burger.addEventListener('click', () => {
  hideMenu.classList.toggle('active');
})

function imageChange() {
  let mainImage = document.querySelector('.main-img');
  let img1 = document.querySelector('.img1');
  let img2 = document.querySelector('.img2');
  let img3 = document.querySelector('.img3');
  let img4 = document.querySelector('.img4');

  img1.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-1.jpg');
  })
  img2.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-2.jpg')
  })
  img3.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-3.jpg')
  })
  img4.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-4.jpg')
  })

}

imageChange()

function mobileChange() {
  let bacBtn = document.querySelector('.btn-fow');
  let fowBtn = document.querySelector('.btn-bac');
  let picTog = document.querySelectorAll('.tog');
  let mainImage = document.querySelector('.main-img');

  fowBtn.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-1.jpg');
  })
  fowBtn.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-2.jpg')
  })  
  fowBtn.addEventListener('click', () => {
    mainImage.setAttribute('src', 'images/image-product-3.jpg')
  })  
  fowBtn.addEventListener('click', () => {
     mainImage.setAttribute('src', 'images/image-product-4.jpg')
  })
}
mobileChange()