let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let dataTxt = xhr.responseText;
            let data = JSON.parse(dataTxt);
            window.data = data;
            fillCardItems(data);
            fillCardData(data, 0);
            initSlick();
        };
});
xhr.open('get', 'https://secret-refuge-89433.herokuapp.com/api/v1/dashboards/financial');
xhr.send();

// --- slick section --- 
function initSlick() {
    $('.single-slide').slick({
        infinite: true,
        prevArrow: "<img src='images/arr-left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='images/arr-right.svg' class='next' alt='2'>",
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: "<img src='images/arr-right.svg' class='next' alt='2'>",
        responsive: [{
            breakpoint: 639,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    $('.single-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
        fillCardData(window.data, Number($('.slick-active').attr('data-slick-index')));
        fillCardItems(window.data);
    });
};

//-------------

function fillCardItems(arr) {
    for (let x = 0; x < (arr.length); x++) {
        let cardNumber = document.querySelector('.card-item-' + (x + 1) + ' .card-number');
        let cardHolder = document.querySelector('.card-item-' + (x + 1) + ' .card-holder');
        let cardExpire = document.querySelector('.card-item-' + (x + 1) + ' .card-expire');
        cardNumber.innerHTML = arr[x].cardNubmber;
        cardHolder.innerHTML = arr[x].cardHolder;
        cardExpire.innerHTML = arr[x].cardExpire;
    }
};

function fillCardData(arr, i) {

    /* card */
    let cardBalance = document.querySelector('.cash-current');
    let cardIncome = document.querySelector('.cash-income');
    let cardOutcome = document.querySelector('.cash-outcome');
    let cardLimit = document.querySelector('#card-limit');
    let cardProgress = document.querySelector('#card-progress-bar-inner');
    cardBalance.innerHTML = '$ ' + arr[i].cardBalance;
    cardIncome.innerHTML = '$ ' + arr[i].cardIncome;
    cardOutcome.innerHTML = '$ ' + arr[i].cardOutcome;
    cardLimit.innerHTML = '$' + arr[i].cardOutcome + ' /$' + arr[i].cardLimit;
    cardProgress.style.width = Number(arr[i].cardOutcome)/Number(arr[i].cardLimit) * 100 + '%';

    /* transactions  */
    for (let j = 0; j < 4; j++) {
        let transactionReceiver = document.querySelector('#transactions-row-' + (j + 1) + ' .receiver');
        let transactionType = document.querySelector('#transactions-row-' + (j + 1) + ' .type');
        let transactionDate = document.querySelector('#transactions-row-' + (j + 1) + ' .date');
        let transactionAmount = document.querySelector('#transactions-row-' + (j + 1) + ' .amount');
        transactionReceiver.innerHTML = arr[i].transactions[j].receiver;
        transactionType.innerHTML = arr[i].transactions[j].type;
        transactionDate.innerHTML = arr[i].transactions[j].date;
        transactionAmount.innerHTML = arr[i].transactions[j].amount;
    }

    /* goals */
    for (let k = 0; k < 5; k++) {
    let goalAmount = document.querySelector('#goal-item-' + (k + 1) + ' .goal-amount');
    let goalDate = document.querySelector('#goal-item-' + (k + 1) + ' .goal-date');
    let goalName = document.querySelector('#goal-item-' + (k + 1) + ' .goal-name');
    goalAmount.innerHTML = arr[i].goals[k].amount;
    goalDate.innerHTML = arr[i].goals[k].date;
    goalName.innerHTML = arr[i].goals[k].goal;
    }

    /* statistics  */
    let statProgress1 = document.querySelector('#statistics-item-1 .progress-bar-inner');
    let statProgress2 = document.querySelector('#statistics-item-2 .progress-bar-inner');
    let statProgress3 = document.querySelector('#statistics-item-3 .progress-bar-inner');
    let statPercent1 = document.querySelector('#statistics-item-1 .statistics-percent');
    let statPercent2 = document.querySelector('#statistics-item-2 .statistics-percent');
    let statPercent3 = document.querySelector('#statistics-item-3 .statistics-percent');
    statProgress1.style.width = arr[i].statistics[0] + '%';
    statProgress2.style.width = arr[i].statistics[1] + '%';
    statProgress3.style.width = arr[i].statistics[2] + '%';
    statPercent1.innerHTML = arr[i].statistics[0] + '%';
    statPercent2.innerHTML = arr[i].statistics[1] + '%';
    statPercent3.innerHTML = arr[i].statistics[2] + '%';
};

let navOverview = document.querySelector('#nav-item-overview');
let navTransactions = document.querySelector('#nav-item-transactions');
let navCards = document.querySelector('#nav-item-cards');
let navInvoices = document.querySelector('#nav-item-invoices');
let navGoals = document.querySelector('#nav-item-goals');
let navSettings = document.querySelector('#nav-item-settings');

navOverview.addEventListener('mouseover', function () {
    let p = document.querySelector('#nav-item-overview a');
    let svg = document.querySelector('#nav-item-overview svg');
    navOverview.style.background = '#F0F7FF';
    p.style.color = '#197BBD';
    svg.style.stroke =  '#197BBD';
});
navOverview.addEventListener('mouseout', function () {
    let p = document.querySelector('#nav-item-overview a');
    let svg = document.querySelector('#nav-item-overview svg');
    navOverview.style.background = 'none';
    p.style.color = '#C7C7C7';
    svg.style.stroke =  '#C7C7C7';
});
navTransactions.addEventListener('mouseover', function () {
    let p = document.querySelector('#nav-item-transactions a');
    let svg = document.querySelector('#nav-item-transactions svg');
    navTransactions.style.background = '#F0F7FF';
    p.style.color = '#197BBD';
    svg.style.stroke =  '#197BBD';
});
navTransactions.addEventListener('mouseout', function () {
    let p = document.querySelector('#nav-item-transactions a');
    let svg = document.querySelector('#nav-item-transactions svg');
    navTransactions.style.background = 'none';
    p.style.color = '#C7C7C7';
    svg.style.stroke =  '#C7C7C7';
});
navCards.addEventListener('mouseover', function () {
    let p = document.querySelector('#nav-item-cards a');
    let svg = document.querySelector('#nav-item-cards svg');
    navCards.style.background = '#F0F7FF';
    p.style.color = '#197BBD';
    svg.style.stroke =  '#197BBD';
});
navCards.addEventListener('mouseout', function () {
    let p = document.querySelector('#nav-item-cards a');
    let svg = document.querySelector('#nav-item-cards svg');
    navCards.style.background = 'none';
    p.style.color = '#C7C7C7';
    svg.style.stroke =  '#C7C7C7';
});
navInvoices.addEventListener('mouseover', function () {
    let p = document.querySelector('#nav-item-invoices a');
    let svg = document.querySelector('#nav-item-invoices svg');
    navInvoices.style.background = '#F0F7FF';
    p.style.color = '#197BBD';
    svg.style.stroke =  '#197BBD';
});
navInvoices.addEventListener('mouseout', function () {
    let p = document.querySelector('#nav-item-invoices a');
    let svg = document.querySelector('#nav-item-invoices svg');
    navInvoices.style.background = 'none';
    p.style.color = '#C7C7C7';
    svg.style.stroke =  '#C7C7C7';
});
navGoals.addEventListener('mouseover', function () {
    let p = document.querySelector('#nav-item-goals a');
    let svg = document.querySelector('#nav-item-goals svg');
    navGoals.style.background = '#F0F7FF';
    p.style.color = '#197BBD';
    svg.style.stroke =  '#197BBD';
});
navGoals.addEventListener('mouseout', function () {
    let p = document.querySelector('#nav-item-goals a');
    let svg = document.querySelector('#nav-item-goals svg');
    navGoals.style.background = 'none';
    p.style.color = '#C7C7C7';
    svg.style.stroke =  '#C7C7C7';
});
navSettings.addEventListener('mouseover', function () {
    let p = document.querySelector('#nav-item-settings a');
    let svg = document.querySelector('#nav-item-settings svg');
    navSettings.style.background = '#F0F7FF';
    p.style.color = '#197BBD';
    svg.style.stroke =  '#197BBD';
});
navSettings.addEventListener('mouseout', function () {
    let p = document.querySelector('#nav-item-settings a');
    let svg = document.querySelector('#nav-item-settings svg');
    navSettings.style.background = 'none';
    p.style.color = '#C7C7C7';
    svg.style.stroke =  '#C7C7C7';
});

let btnDeactOuter = document.querySelector('.btn-deactivate');
let btnDeactInner = document.querySelector('.btn-deactivate-inner');
var btnDeactStatus = 0;
btnDeactOuter.addEventListener('click', function () {
    if (btnDeactStatus == 0) {
        btnDeactOuter.style.transform = 'rotate(180deg)';
        btnDeactOuter.style.background = '#70A6E8';
        btnDeactInner.style.background = '#197BBD';
        btnDeactStatus = 1;
    } else {
        btnDeactOuter.style.transform = 'rotate(0deg)';
        btnDeactOuter.style.background = '#EBEBEB   ';
        btnDeactInner.style.background = '#CDCDCD';
        btnDeactStatus = 0;
    }
});