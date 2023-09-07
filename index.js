//navbar for mobile
const bar = document.getElementById("bar");
const nav = document.getElementById("orderedList");
const xmark = document.getElementById("xmark");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

xmark.addEventListener("click", () => {
  nav.classList.remove("active");
});

//change photo on single prodcut
const smallPhoto = document.querySelectorAll(".this-small-photo");
const mainPhoto = document.querySelector(".this-main-photo");
smallPhoto.forEach((element) => {
  element.addEventListener("click", () => {
    mainPhoto.src = element.src;
  });
});

// families dropdown list

const listDown = document.querySelector(".list-down");
const listUp = document.querySelector(".list-up");
const families = document.querySelector(".families");
const prodDetails = document.querySelector(".prod-details");
const title = document.querySelector("title").textContent;

if (listDown) {
  listDown.addEventListener("click", () => {
    if (title === "Rocket Shop") {
      listDownFunction(families);
    } else if (title === "Single Product") {
      listDownFunction(prodDetails);
    }
  });
  listUp.addEventListener("click", () => {
    if (title === "Rocket Shop") {
      listUpFunction(families);
    } else if (title === "Single Product") {
      listUpFunction(prodDetails);
    }
  });

  function listDownFunction(className) {
    className.classList.add("active");
    listDown.style.display = "none";
    listUp.style.display = "inline-block";
  }
  function listUpFunction(className) {
    className.classList.remove("active");
    listUp.style.display = "none";
    listDown.style.display = "inline-block";
  }
}
//open single product page
class Product {
  constructor(description, smallPhoto1, smallPhoto2, smallPhoto3, smallPhoto4) {
    this.description = description;
    this.smallPhoto1 = smallPhoto1;
    this.smallPhoto2 = smallPhoto2;
    this.smallPhoto3 = smallPhoto3;
    this.smallPhoto4 = smallPhoto4;
  }
}
//Atlas
const Atlas2 = new Product(
  `Introducing the Atlas 2 Rocket, a reliable and powerful space launch vehicle designed by
 United Launch Alliance. Standing at 58 meters tall, this rocket has a proven track record of success, 
 launching numerous missions for NASA, the US Department of Defense, and commercial customers. 
 With a payload capacity of up to 9,000 kg to Low Earth Orbit, the Atlas 2 boasts advanced avionics and 
 guidance systems for precise launch and orbital insertion. Equipped with redundant safety features, 
 this rocket is perfect for launching satellites, conducting scientific research, and exploring the 
 mysteries of the universe. 
 Order now and take your space exploration to the next level.`,
  "/MyProjects/RocketsP/Atlas/Atlas2.png",
  "/MyProjects/RocketsP/Atlas/Atlas2blue.png",
  "/MyProjects/RocketsP/Atlas/Atlas2green.png",
  "/MyProjects/RocketsP/Atlas/Atlas2red.png"
);
const Atlas2A = new Product(
  `The Atlas 2A Rocket is an upgraded version of the Atlas 2 Rocket, 
featuring improved engines and avionics systems. With a proven track record of success, 
this rocket is capable of launching payloads up to 9,000 kg to Low Earth Orbit. 
Equipped with advanced safety features, the Atlas 2A is a reliable and efficient choice for all your space 
launch needs. 
 Take your space exploration to the next level and order your Atlas 2A Rocket today.`,
  "/MyProjects/RocketsP/Atlas/Atlas2A.png",
  "/MyProjects/RocketsP/Atlas/Atlas2Ablue.png",
  "/MyProjects/RocketsP/Atlas/Atlas2Agreen.png",
  "/MyProjects/RocketsP/Atlas/Atlas2Ared.png"
);
const Atlas2AS = new Product(
  `The Atlas 2AS Rocket is a further upgraded version of the Atlas 2A, 
featuring even more powerful engines and advanced avionics systems. 
With a payload capacity of up to 9,800 kg to Low Earth Orbit, this rocket is capable of launching 
larger and more complex payloads. Its advanced safety features ensure a reliable and efficient launch every time. 
 Trust the Atlas 2AS to deliver your payload to space with ease.`,
  "/MyProjects/RocketsP/Atlas/Atlas2AS.png",
  "/MyProjects/RocketsP/Atlas/Atlas2ASblue.png",
  "/MyProjects/RocketsP/Atlas/Atlas2ASgreen.png",
  "/MyProjects/RocketsP/Atlas/Atlas2ASred.png"
);
const Atlas3A = new Product(
  `The Atlas 3A Rocket is a powerful space launch vehicle designed to carry 
heavy payloads to orbit. With a payload capacity of up to 12,500 kg to Low Earth Orbit, this rocket is 
ideal for launching large satellites and other payloads. Equipped with advanced avionics and guidance systems, 
the Atlas 3A provides precise and accurate launches. 
Its reliable and efficient engines ensure a successful mission every time.`,
  "/MyProjects/RocketsP/Atlas/Atlas3A.png",
  "/MyProjects/RocketsP/Atlas/Atlas3Ablue.png",
  "/MyProjects/RocketsP/Atlas/Atlas3Agreen.png",
  "/MyProjects/RocketsP/Atlas/Atlas3Ared.png"
);
const Atlas3B = new Product(
  `The Atlas 3B Rocket is an upgraded version of the Atlas 3A, 
featuring improved engines and avionics systems. With a payload capacity of up to 16,800 kg to Low Earth Orbit, 
this rocket is capable of launching even larger payloads. Its advanced safety features ensure a reliable and 
efficient launch every time. 
Trust the Atlas 3B to deliver your payload to space with ease.`,
  "/MyProjects/RocketsP/Atlas/Atlas3B.png",
  "/MyProjects/RocketsP/Atlas/Atlas3Bblue.png",
  "/MyProjects/RocketsP/Atlas/Atlas3Bgreen.png",
  "/MyProjects/RocketsP/Atlas/Atlas3Bred.png"
);
const Atlas5400 = new Product(
  `The Atlas 5 400 Rocket is a modern and reliable space launch vehicle designed for a 
variety of missions. With a payload capacity of up to 9,850 kg to Low Earth Orbit, this rocket is perfect for 
launching smaller payloads such as communication satellites or scientific instruments. 
Equipped with advanced guidance and control systems, the Atlas 5 400 provides precise and accurate launches. 
Its powerful engines ensure a successful mission every time.`,
  "/MyProjects/RocketsP/Atlas/Atlas5400.png",
  "/MyProjects/RocketsP/Atlas/Atlas5400blue.png",
  "/MyProjects/RocketsP/Atlas/Atlas5400green.png",
  "/MyProjects/RocketsP/Atlas/Atlas5400red.png"
);
const Atlas5500 = new Product(
  `The Atlas 5 500 Rocket is an upgraded version of the Atlas 5 400, 
featuring more powerful engines and improved avionics systems. With a payload capacity of up to 18,800 kg to 
Low Earth Orbit, this rocket is capable of launching larger and more complex payloads. 
Its advanced safety features ensure a reliable and efficient launch every time. 
Trust the Atlas 5 500 to deliver your payload to space with ease.`,
  "/MyProjects/RocketsP/Atlas/Atlas5500.png",
  "/MyProjects/RocketsP/Atlas/Atlas5500blue.png",
  "/MyProjects/RocketsP/Atlas/Atlas5500green.png",
  "/MyProjects/RocketsP/Atlas/Atlas5500red.png"
);
//Delta
const ThorDelta =
  new Product(`The Thor-Delta rocket is a reliable and versatile launch vehicle with a successful 
history of launches spanning over half a century. Capable of launching payloads of up to 2,000 kilograms into 
low Earth orbit, it's a reliable option for both commercial and government missions. 
Its powerful first stage engine and reliable second stage allow for precise orbital insertion. 
The Thor-Delta rocket is a trusted and efficient launch vehicle for launching satellites, 
scientific instruments, and other space-based technology. With a proven track record and a long history of success, 
the Thor-Delta rocket is an excellent choice for your next mission.`);
const DeltaA =
  new Product(`The Delta A rocket is a reliable and powerful launch vehicle, 
designed to deliver payloads into orbit with precision and efficiency. 
With a successful track record of launches, it's a trusted option for both commercial and government missions.
Featuring a strong first-stage engine and a dependable second-stage, the Delta A rocket is capable of delivering 
payloads of up to 3,400 kilograms into low Earth orbit. It has been used to launch a variety of payloads, 
including satellites, scientific instruments, and military equipment.
If you're seeking a dependable and efficient launch vehicle for your next mission, 
the Delta A rocket is an excellent choice. With a focus on precision and reliability, 
it's a trusted option that delivers results.`);
const DeltaD =
  new Product(`Delta D rocket is a reliable launch vehicle designed for delivering payloads into
orbit with precision and efficiency. With a strong first-stage engine and a dependable second-stage, 
it can lift payloads of up to 1,810 kg into low Earth orbit. Its reliability and cost-effectiveness make it an ideal 
choice for both commercial and government missions.`);
const Delta2000 =
  new Product(`Delta 2000 is a versatile launch vehicle that has a strong track record of successful 
launches, making it an ideal choice for commercial and government missions. 
With a powerful first-stage engine and a reliable second-stage, it can lift payloads of up to 6,100 kg 
into low Earth orbit, and has the flexibility to launch payloads into geostationary transfer orbit and beyond.`);
const DeltaII =
  new Product(`Delta II is a reliable and cost-effective launch vehicle with a successful history of launches. 
Equipped with a strong first-stage engine and a dependable second-stage, it's capable of delivering payloads of up to 2,150 kg into low Earth orbit, 
and has been used to launch a wide variety of payloads for both commercial and government customers.`);
const DeltaIV =
  new Product(`Delta IV Medium+ (5,2) is a powerful launch vehicle capable of lifting payloads of up to 
6,750 kg into low Earth orbit. Featuring a strong first-stage engine and a reliable second-stage, 
it's a trusted option for commercial and government missions, and has been used to launch a variety of payloads, 
including military and reconnaissance satellites.`);
const DeltaIVHeavy =
  new Product(`Delta IV Heavy is a powerful and reliable launch vehicle designed to deliver 
heavy payloads into orbit. With three Common Booster Cores, it's capable of lifting payloads of up to 28,370 kg 
into low Earth orbit. It's a trusted option for launching large payloads for commercial, military, 
and government missions, and has been used to launch a variety of payloads, including large scientific instruments 
and military satellites.`);
//Redstone
const Redstone =
  new Product(`The Redstone Rocket is an impressive feat of engineering that will take you on a 
journey beyond the skies. This sleek and powerful rocket is the perfect addition to any space exploration collection. 
Its precision design and advanced technology make it a top choice for adventurers and collectors alike. So why wait? 
Take the plunge and join the ranks of space explorers who have dared to reach for the stars. 
Order your Redstone Rocket today and let the adventure begin!`);
const JupiterC =
  new Product(`The Jupiter-C is an impressive rocket that is designed to take you on an unforgettable 
journey. With its sleek design and advanced technology, this rocket is the perfect addition to any space exploration 
collection. Its powerful engines and precision design make it a top choice for adventurers and collectors alike. 
So why wait? Take the plunge and join the ranks of space explorers who have dared to reach for the stars. 
Order your Jupiter-C rocket today and let the adventure begin!`);
const JunoI =
  new Product(`The Juno I rocket is an impressive and well-engineered model that will take you on a 
journey like no other. This powerful rocket is designed with precision and care, ensuring that you get 
the most out of your space exploration experience. With its sleek design and incredible power, the Juno I is sure to 
capture your imagination and take you on a ride you'll never forget. So why wait? 
Take the plunge and join the ranks of space explorers who have dared to reach for the stars. Order your Juno I rocket today and let the adventure begin!`);
const MercuryRedstone =
  new Product(`The Mercury Redstone rocket is a powerful and impressive model that is sure to 
impress any space exploration enthusiast. This rocket is designed with precision and care, ensuring that you get 
the most out of your space exploration experience. With its sleek design and incredible power, 
the Mercury Redstone is sure to capture your imagination and take you on a ride you'll never forget. So why wait? 
Take the plunge and join the ranks of space explorers who have dared to reach for the stars. 
Order your Mercury Redstone rocket today and let the adventure begin!`);
const RedstoneSparta =
  new Product(`The Redstone Sparta is a top-of-the-line rocket that is sure to impress any 
space exploration enthusiast. This powerful and well-engineered model is designed with precision and care, 
ensuring that you get the most out of your space exploration experience. With its sleek design and incredible power, 
the Redstone Sparta is sure to capture your imagination and take you on a ride you'll never forget. So why wait? 
Take the plunge and join the ranks of space explorers who have dared to reach for the stars. 
Order your Redstone Sparta rocket today and let the adventure begin!`);
//Titan
const TitanI =
  new Product(`The Titan I Rocket is a two-stage space vehicle designed for reliable and efficient 
satellite and payload launches. Its first stage is powered by two liquid rocket engines, while the second 
stage uses a single engine for precise orbital insertion. With a lift capacity of up to 4,000 pounds, 
it's ideal for a wide range of applications.
This rocket features advanced guidance and control systems for precise and safe flight, as well as real-time 
monitoring and communication with ground control. It's a top choice for customers looking for 
high-quality launch services, delivering the performance and reliability needed to take missions to new heights.
In short, the Titan I Rocket is a powerful and efficient space vehicle, 
designed to meet the demands of today's space industry.`);
const TitanII =
  new Product(`The Titan II Rocket is a powerful and advanced space vehicle designed for 
high-performance satellite and payload launches. Its two-stage design and powerful liquid rocket engines allow 
for efficient and reliable performance, with a lift capacity of up to 8,000 pounds.
With advanced guidance and control systems, the Titan II Rocket provides precise and safe flight, 
while its state-of-the-art avionics package ensures real-time monitoring and communication with ground control. 
It's the perfect choice for customers who demand the best in launch services, delivering the power and 
reliability needed for successful missions.`);
const TitanIIGemini =
  new Product(`The Titan II Gemini Rocket is a powerful and reliable space vehicle designed for 
manned missions in low Earth orbit. Its advanced technology and cutting-edge design make it the perfect choice 
for customers who demand the best in manned spaceflight.
With a two-stage design and powerful liquid rocket engines, this rocket delivers efficient and reliable performance. 
Its advanced guidance and control systems ensure precise and safe flight, while its state-of-the-art avionics package enables real-time monitoring and communication with ground control.
With the ability to carry two astronauts in a pressurized capsule, the Titan II Gemini Rocket represents a major
milestone in manned spaceflight. It's the ideal solution for customers seeking the best in manned spaceflight 
technology.`);
const IIIBAgenda =
  new Product(`The III-B Agenda Rocket is an advanced space vehicle designed for high-performance 
satellite launches. Its powerful three-stage design and advanced technology make it the perfect choice for 
customers who demand the best in launch services.
Powered by three liquid rocket engines, the III-B Agenda Rocket delivers efficient and reliable performance, 
with a lift capacity of up to 9,000 pounds.
Featuring advanced guidance and control systems, this rocket ensures precise and safe flight, 
while its state-of-the-art avionics package provides real-time monitoring and communication with ground control.
If you need to launch a satellite or payload into orbit, the III-B Agenda Rocket is the perfect solution. 
It's a high-performance space vehicle that delivers the power and reliability needed for successful missions.`);
const TitanIIIC =
  new Product(`The Titan III-C Rocket is an advanced space vehicle designed for high-performance 
satellite launches. Its three-stage design and powerful liquid rocket engines provide efficient and reliable 
performance, with a lift capacity of up to 33,000 pounds.
Featuring advanced guidance and control systems, the Titan III-C Rocket ensures precise and safe flight, 
while its state-of-the-art avionics package delivers real-time monitoring and communication with ground control.
With its advanced technology and cutting-edge design, the Titan III-C Rocket is the perfect choice for 
customers who demand the best in launch services. It delivers the power and reliability needed for 
successful missions, making it a top choice for launching larger payloads and satellites into orbit.`);
const TitanIIICMOL =
  new Product(`The Titan III-C MOL Rocket is an advanced space vehicle designed for 
manned missions in space. With its three-stage design and powerful liquid rocket engines, 
it provides efficient and reliable performance for launching the Manned Orbiting Laboratory (MOL).
Featuring advanced guidance and control systems, the Titan III-C MOL Rocket ensures precise and safe flight, 
while its state-of-the-art avionics package delivers real-time monitoring and communication with ground control.
With the ability to carry a crew of up to two astronauts in the MOL, the Titan III-C MOL Rocket represents a major 
milestone in manned spaceflight. It's the perfect choice for customers looking to push the 
boundaries of space exploration and achieve new heights in manned spaceflight.`);
const TitanIIIBCentaur =
  new Product(`The Titan III-B Centaur Rocket is an advanced space vehicle designed for 
high-performance satellite launches. Its two-stage design and powerful liquid rocket engines provide efficient and 
reliable performance, with a lift capacity of up to 10,000 pounds to geostationary transfer orbit.
Featuring advanced guidance and control systems, the Titan III-B Centaur Rocket ensures precise and safe flight, 
while its state-of-the-art avionics package delivers real-time monitoring and communication with ground control.
With its advanced technology and cutting-edge design, the Titan III-B Centaur Rocket is the perfect 
choice for customers who demand the best in launch services. It delivers the power and reliability needed for 
successful missions, making it a top choice for launching medium to large payloads into space.`);

const featuredProducts = document.querySelectorAll(".featured-product");
// const prodDetails = document.querySelector('.prod-details');
const sphoto1 = document.querySelector("#sphoto1");
const sphoto2 = document.querySelector("#sphoto2");
const sphoto3 = document.querySelector("#sphoto3");
const sphoto4 = document.querySelector("#sphoto4");

featuredProducts.forEach((product) => {
  const anchor = product.querySelector("a");

  anchor.addEventListener("click", () => {
    const shipName = product.querySelector(".ship-name").textContent;
    const price = product.querySelector(".price").textContent;
    const imgSrc = product.querySelector("img").src;

    localStorage.setItem("selectedShipName", shipName);
    localStorage.setItem("selectedPrice", price);
    localStorage.setItem("selectedImg", imgSrc);
  });
});

const prodName = document.querySelector(".prod-name");
const selectedShipName = localStorage.getItem("selectedShipName");
const prodPrice = document.querySelector(".prod-price");
const selectedPrice = localStorage.getItem("selectedPrice");
const prodImg = document.querySelector(".this-main-photo");
const selectedImg = localStorage.getItem("selectedImg");
if (prodName) {
  prodName.textContent = selectedShipName;
  prodPrice.textContent = selectedPrice;
  prodImg.src = selectedImg;
}
//Atlas
singleProdDetails("Atlas 2", Atlas2);
singleProdDetails("Atlas 2A", Atlas2A);
singleProdDetails("Atlas 2AS", Atlas2AS);
singleProdDetails("Atlas 3A", Atlas3A);
singleProdDetails("Atlas 3B", Atlas3B);
singleProdDetails("Atlas 5 400", Atlas5400);
singleProdDetails("Atlas 5 500", Atlas5500);
//Delta
singleProdDetails("Thor-Delta", ThorDelta);
singleProdDetails("Delta A", DeltaA);
singleProdDetails("Delta D", DeltaD);
singleProdDetails("Delta 2000", Delta2000);
singleProdDetails("Delta II", DeltaII);
singleProdDetails("Delta II", DeltaII);
singleProdDetails("Delta IV Medium+ (5,2)", DeltaIV);
singleProdDetails("Delta IV Heavy", DeltaIVHeavy);
//Redstone
singleProdDetails("Redstone", Redstone);
singleProdDetails("Jupiter-C", JupiterC);
singleProdDetails("Juno I", JunoI);
singleProdDetails("Mercury Redstone", MercuryRedstone);
singleProdDetails("Redstone Sparta", RedstoneSparta);
//Titan
singleProdDetails("Titan I", TitanI);
singleProdDetails("Titan II", TitanII);
singleProdDetails("Titan II Gemini", TitanIIGemini);
singleProdDetails("III-B Agenda", IIIBAgenda);
singleProdDetails("Titan III-C", TitanIIIC);
singleProdDetails("Titan III-C MOL", TitanIIICMOL);
singleProdDetails("Titan III-B Centaur", TitanIIIBCentaur);

// const prodPrice = document.querySelector('.prod-price');
// const selectedPrice = localStorage.getItem('selectedPrice');
// // prodPrice.textContent = selectedPrice;

// const prodImg = document.querySelector('.this-main-photo');
// const selectedImg = localStorage.getItem('selectedImg');
// prodImg.src = selectedImg;

// add singleProdDetails
function singleProdDetails(prodNameString, nameOfObj) {
  if (prodName) {
    if (prodName.textContent === prodNameString) {
      prodDetails.textContent = nameOfObj.description;
      sphoto1.src = nameOfObj.smallPhoto1;
      sphoto2.src = nameOfObj.smallPhoto2;
      sphoto3.src = nameOfObj.smallPhoto3;
      sphoto4.src = nameOfObj.smallPhoto4;
    }
  }
}

//Cart

const addButton = document.querySelector("#add-cart");
const AllOrderedProds = document.querySelector(".all-ordered-prods-container");
const cartNotfication = document.querySelectorAll(".cartNotfication");
let cartItems = [];

if (addButton) {
  const colors = document.querySelector("#colors");
  selectedColor = colors.value;
  colors.addEventListener("change", () => {
    selectedColor = colors.value;
  });

  addButton.addEventListener("click", () => {
    // create an object representing the new cart item
    let newCartItem = {
      name: prodName.textContent,
      price: prodPrice.textContent,
      image: prodImg.src,
      color: selectedColor,
      quantity: document.querySelector("#amount").value,
    };
    // add the new cart item to the array
    for (let i = 0; i < cartItems.length; i++) {
      if (
        cartItems[i].name === prodName.textContent &&
        cartItems[i].color === selectedColor
      ) {
        alert("This product is already in the cart.");
        return;
      }
    }
    cartItems.push(newCartItem); // Can't place if(cartItems[i].color === 'select') because it's before
    // adding selectedColor to newCartItem
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].color === "select") {
        alert("Color must be chosen.");
        cartItems.splice(i, 1);
        return;
      }
    }
    // update localStorage with the new cart item array
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // update the cart display
    updateCartDisplay();
  });
}

function updateCartDisplay() {
  // clear the cart display
  if (AllOrderedProds) {
    AllOrderedProds.innerHTML = "";
  }

  // loop through the cartItems array and create a div for each item
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i];
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("ordered-prods-container");

    let removerContainer = document.createElement("div");
    removerContainer.classList.add("cart-divider");
    let cartRemove = document.createElement("i");
    cartRemove.classList.add("fa-sharp", "fa-solid", "fa-trash-can", "remover");
    removerContainer.appendChild(cartRemove);
    cartDiv.appendChild(removerContainer);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("cart-divider");
    let cartImg = document.createElement("img");
    cartImg.src = cartItem.image;
    imgContainer.appendChild(cartImg);
    cartDiv.appendChild(imgContainer);

    let cartName = document.createElement("p");
    cartName.classList.add("cart-divider");
    if (cartItem.color === "classic") {
      cartName.textContent = cartItem.name;
    } else {
      cartName.textContent = `${cartItem.name} ${cartItem.color}`;
    }
    cartDiv.appendChild(cartName);

    let cartPrice = document.createElement("p");
    cartPrice.classList.add("cart-divider");
    cartPrice.textContent = cartItem.price;
    cartDiv.appendChild(cartPrice);

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("cart-divider");
    let cartInput = document.createElement("input");
    cartInput.type = "number";
    cartInput.max = "10";
    cartInput.min = "1";
    cartInput.value = cartItem.quantity;
    inputContainer.appendChild(cartInput);
    cartDiv.appendChild(inputContainer);

    let cartSubtotal = document.createElement("p");
    cartSubtotal.classList.add("cart-divider", "cart-subtotal");
    let priceNumber = cartItem.price.replace("$", "").replace(/\s+/g, "");
    cartSubtotal.textContent = `$${priceNumber * cartInput.value}`;
    cartDiv.appendChild(cartSubtotal);

    if (AllOrderedProds) {
      AllOrderedProds.appendChild(cartDiv);
    }

    cartNotfication.forEach((e) => {
      e.classList.add("active");
      e.textContent = cartItems.length;
    });
  }
}

// on page load, retrieve the cartItems array from localStorage and update the cart display

cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
updateCartDisplay();

if (AllOrderedProds) {
  let remover = Array.from(document.querySelectorAll(".remover"));

  // Remover
  // remover.forEach((e, i) => {
  //     e.addEventListener('click', () => {
  //         e.parentElement.parentElement.remove();
  //         console.log('index', i)
  //         cartItems.splice(i, 1);
  //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //         remover = Array.from(document.querySelectorAll('.remover'));
  //         console.log(remover.length);
  //         updateSbutotal();
  //         updateFinalSubtotal();
  //     })
  // })

  function removerByClick() {
    remover = Array.from(document.querySelectorAll(".remover"));
    for (let i = remover.length - 1; i >= 0; i -= 1) {
      let removeri = remover[i];
      removeri.addEventListener("click", () => {
        removeri.parentElement.parentElement.remove();
        cartItems.splice(i, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        remover = Array.from(document.querySelectorAll(".remover"));
        updateSbutotal();
        updateFinalSubtotal();
        removerByClick();
        location.reload();
      });
    }
  }
  removerByClick();

  let inputCart = Array.from(document.querySelectorAll(".cart-divider input"));

  // Subtotal
  function updateSbutotal() {
    inputCart = Array.from(document.querySelectorAll(".cart-divider input"));
    cartSubtotal = Array.from(document.querySelectorAll(".cart-subtotal"));
  }
  updateSbutotal();
  let inputCartVal = "";
  function updateCartSubtotal() {
    updateSbutotal();
    for (let i = 0; i < inputCart.length; i++) {
      let input = inputCart[i];
      cartItems[i].quantity = input.value;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      let priceNumber = cartItems[i].price.replace("$", "").replace(/\s+/g, "");

      let subtotal = cartSubtotal[i];
      subtotal.textContent = `$${input.value * priceNumber}`;
      updateFinalSubtotal();
    }
  }
  inputCart.forEach((e) => {
    e.addEventListener("input", updateCartSubtotal);
  });

  // Final subtotal
  const finalSubtotal = document.querySelector(".final-cart-subtotal");
  const finalTotal = document.querySelector(".final-cart-total");
  const applyBtn = document.querySelector("#apply-btn");

  let promoCode = "";
  applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    promoCode = document.querySelector("#promo").value;
    updateFinalSubtotal();
  });

  function updateFinalSubtotal() {
    let sum = 0;
    for (let i = 0; i < cartSubtotal.length; i++) {
      let subtotal = cartSubtotal[i];
      let newSubtotal = Number(
        subtotal.textContent.replace("$", "").replace(/\s+/g, "")
      );
      sum += newSubtotal;
      finalSubtotal.textContent = `$${sum}`;

      finalTotal.textContent = finalSubtotal.textContent;
      if (promoCode === "Space25") {
        finalTotal.textContent = `$${sum * 0.95}`;
      }
    }
  }
  updateFinalSubtotal();
}

// HOME, video loading
const video = document.querySelector("#video");
if (video) {
  const loadingMessage = document.querySelector("#loading-message");

  video.addEventListener("loadeddata", () => {
    console.log("done");
    loadingMessage.style.display = "none";
  });

  //   video.addEventListener("loadstart", () => {
  //     console.log("22");
  //     loadingMessage.style.display = "block";
  //   });
}
