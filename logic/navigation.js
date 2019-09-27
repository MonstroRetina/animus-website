var pages = [
    'https://i.imgur.com/Kbginzv.jpg',
    'https://i.imgur.com/1gvsmAb.jpg',
    'https://i.imgur.com/VWL4vLZ.jpg',
    'https://i.imgur.com/7mncOfM.jpg',
    'https://i.imgur.com/ofO1s3M.jpg',
    'https://i.imgur.com/9q7atTt.jpg',
    'https://i.imgur.com/HAVZBRG.jpg'
];

var latestPageNumber = pages.length - 1;

currentPage = 0;

function firstPage() {
    currentPage = 0;
    document.getElementById('displayedPage').setAttribute('src', pages[currentPage]);
}

function previousPage() {
    if (currentPage > 0) {
        currentPage = currentPage - 1
        document.getElementById('displayedPage').setAttribute('src', pages[currentPage]);
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage = currentPage + 1
        document.getElementById('displayedPage').setAttribute('src', pages[currentPage]);
    }
}

function latestPage() {
    currentPage = latestPageNumber;
    document.getElementById('displayedPage').setAttribute('src', pages[currentPage]);
}

function leftArrowPressed() {
    previousPage();
 }
 
 function rightArrowPressed() {
    nextPage();
 }
 
 document.onkeydown = function(evt) {
     evt = evt || window.event;
     switch (evt.keyCode) {
         case 37:
             leftArrowPressed();
             break;
         case 39:
             rightArrowPressed();
             break;
     }
 };