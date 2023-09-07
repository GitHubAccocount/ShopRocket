// // families dropdown list

// const listDown = document.querySelector('.list-down');
// const listUp = document.querySelector('.list-up')
// const families = document.querySelector('.families');



// listDown.addEventListener('click', () => {
//     families.classList.add('active');
//     listDown.style.display = 'none'
//     listUp.style.display = 'inline-block'
// })
// listUp.addEventListener('click', () => {
//     families.classList.remove('active');
//     listUp.style.display = 'none'
//     listDown.style.display = 'inline-block'
// })

// list element activition

const liel = document.querySelectorAll('.liel');

liel.forEach(item => {
    item.addEventListener('click', () => {
      liel.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
});


// list element interaction
const allProd = document.querySelectorAll('.featured-product');
const atlas = document.querySelectorAll('.atlas');
const delta = document.querySelectorAll('.delta');
const redstone = document.querySelectorAll('.redstone');
const titan = document.querySelectorAll('.titan');



liel.forEach(item => {
    item.addEventListener('click', () =>{
        allProd.forEach(item => {
            item.style.display = 'none';
        })
        if(item.classList.contains('liAtlas')) {
            allProd.forEach(item => {
                if(item.classList.contains('atlas')) {
                    currentPage = 1
                    loadItems(atlas);
                }
                
            })
        } else if(item.classList.contains('liDelta')) {
            allProd.forEach(item => {
                if(item.classList.contains('delta')) {
                    currentPage = 1
                    loadItems(delta);
                }
                
            })
        }
        else if(item.classList.contains('liRedstone')) {
            allProd.forEach(item => {
                if(item.classList.contains('redstone')) {
                    currentPage = 1
                    loadItems(redstone);
                }

            })
        }
        else if(item.classList.contains('liTitan')) {
            allProd.forEach(item => {
                if(item.classList.contains('titan')) {
                    currentPage = 1
                    loadItems(titan);
                }
                
            })
        } else if(item.classList.contains('liAll')) {
            allProd.forEach(item => {
                if(item.classList.contains('featured-product')) {
                    currentPage = 1
                    loadItems(allProd);
                }

            })
        }
    })
})

// pagination

let currentPage = 1;
let max = 6;

function loadItems(classVar) {
    let start = max * (currentPage - 1);
    let end = max * currentPage - 1;
    classVar.forEach((item , i) => {
        if(i >= start && i <= end) {
            item.style.display = 'grid';
        } else {
            item.style.display = 'none'
        }
    })
    listPage(classVar);
}
loadItems(allProd);

function listPage(classVar) {
    let pageNumbers = Math.ceil(classVar.length / max);
    let listPage = document.querySelector('.listPage')
    listPage.innerHTML='';
    if(currentPage > 1) {
        let previousPage = document.createElement('li');
        previousPage.innerText = '<';
        previousPage.addEventListener('click', () => {
            changePage(currentPage - 1, classVar);
            ShopScroll();
        })
        listPage.appendChild(previousPage);
    }
    for(let i = 1; i <= pageNumbers; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i === currentPage) {
            newPage.classList.add('active2');
        }
        newPage.addEventListener('click', () => {
            changePage(i, classVar);
            ShopScroll();
        })
        listPage.appendChild(newPage);
    }
    if(currentPage < pageNumbers) {
        let nextPage = document.createElement('li');
        nextPage.innerText = '>';
        nextPage.addEventListener('click', () => {
            changePage(currentPage + 1, classVar);
            ShopScroll();
        })
        listPage.appendChild(nextPage);
    }
}

function changePage(i, classVar) {
    currentPage = i;
    loadItems(classVar);
}

banner = document.querySelector('.bannerShop');
let height = banner.offsetHeight;
function ShopScroll() {
    window.scroll({
        top: height,
        behavior: "smooth"
    })
}