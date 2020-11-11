/* --- slick section --- */
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
/* --- cards array --- */
const arr = [
    {
        cardId: 1,
        cardNubmber: '6363 &nbsp;&nbsp;* * * * &nbsp;&nbsp; * * * * &nbsp;&nbsp;5891',
        cardHolder: 'Mike Smith',
        cardExpire: '06/21',
        cardBalance: '2856.75',
        cardIncome: '1500.50',
        cardOutcome: '1350.60',
        cardLimit: '4000.00',
        cardDeact: false,
        transactions: [
            {receiver: 'Tesco Market', type: 'Shopping', date: '23 Dec 2020', amount: '$75.67'},
            {receiver: 'ElectroMen Market', type: 'Shopping', date: '14 Dec 2020', amount: '$250.00'},
            {receiver: 'Fiorgio Restaurant', type: 'Food', date: '07 Dec 2020', amount: '$19.50'},
            {receiver: 'Tesco Market', type: 'Sport', date: '06 Dec 2020', amount: '$350.00'}
        ],
        goals: [
            {amount: '$550.00', date: '12/20/20', goal: 'Holidays'},
            {amount: '$200.00', date: '12/20/20', goal: 'Renovation'},
            {amount: '$820.00', date: '12/20/20', goal: 'Xbox'},
            {amount: '$1430.00', date: '12/20/20', goal: 'Renovation'},
            {amount: '$935.00', date: '12/20/20', goal: 'Xbox'},
        ],
        statistics: [52, 68, 74]
    },
    {
        cardId: 2,
        cardNubmber: '6363 &nbsp;&nbsp;* * * * &nbsp;&nbsp; * * * * &nbsp;&nbsp;5891',
        cardHolder: 'John Deer',
        cardExpire: '03/23',
        cardBalance: '1210.50',
        cardIncome: '500.00',
        cardOutcome: '2880.00',
        cardLimit: '4000.00',
        cardDeact: false,
        transactions: [
            {receiver: 'Tesco Market', type: 'Shopping', date: '23 Dec 2020', amount: '$75.67'},
            {receiver: 'ElectroMen Market', type: 'Shopping', date: '14 Dec 2020', amount: '$250.00'},
            {receiver: 'Fiorgio Restaurant', type: 'Food', date: '07 Dec 2020', amount: '$19.50'},
            {receiver: 'Tesco Market', type: 'Sport', date: '06 Dec 2020', amount: '$350.00'}
        ],
        goals: [
            {amount: '$550.00', date: '12/20/20', goal: 'Holidays'},
            {amount: '$200.00', date: '12/20/20', goal: 'Renovation'},
            {amount: '$820.00', date: '12/20/20', goal: 'Xbox'},
            {amount: '$1430.00', date: '12/20/20', goal: 'Renovation'},
            {amount: '$935.00', date: '12/20/20', goal: 'Xbox'},
        ],
        statistics: [30, 85, 45]
    }
]
/*  -------------------------------  */
fillCardData (0);

$('.single-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
    fillCardData(Number($('.slick-active').attr('data-slick-index')));
});

/* card */
function fillCardData (i) {
    let cardNubmber = document.querySelector('[data-card-item="' + (i + 1) + '"] .card-holder');
    let cardHolder = document.querySelector('[data-card-item="' + (i + 1) + '"] .card-holder');
    let cardExpire = document.querySelector('[data-card-item="' + (i + 1) + '"] .card-expire');
    let cardBalance = document.querySelector('.cash-current');
    let cardIncome = document.querySelector('.cash-income');
    let cardOutcome = document.querySelector('.cash-outcome');
    let cardLimit = document.querySelector('[data-card-limit-value]');
    let cardProgress = document.querySelector('[data-card-progress]');
    cardNubmber.innerHTML = arr[i].cardNubmber;
    cardHolder.innerHTML = arr[i].cardHolder;
    cardExpire.innerHTML = arr[i].cardExpire;
    cardBalance.innerHTML = '$ ' + arr[i].cardBalance;
    cardIncome.innerHTML = '$ ' + arr[i].cardIncome;
    cardOutcome.innerHTML = '$ ' + arr[i].cardOutcome;
    cardLimit.innerHTML = '$' + arr[i].cardOutcome + ' /$' + arr[i].cardLimit;
    cardProgress.style.width = Number(arr[i].cardOutcome)/Number(arr[i].cardLimit) * 100 + '%';
    
    /* statistics  */
    let statProgress1 = document.querySelector('[data-statistics="1"] .progress-bar-inner');
    let statProgress2 = document.querySelector('[data-statistics="2"] .progress-bar-inner');
    let statProgress3 = document.querySelector('[data-statistics="3"] .progress-bar-inner');
    let statPercent1 = document.querySelector('[data-statistics-percent="1"]');
    let statPercent2 = document.querySelector('[data-statistics-percent="2"]');
    let statPercent3 = document.querySelector('[data-statistics-percent="3"]');
    statProgress1.style.width = arr[i].statistics[0] + '%';
    statProgress2.style.width = arr[i].statistics[1] + '%';
    statProgress3.style.width = arr[i].statistics[2] + '%';
    statPercent1.innerHTML = arr[i].statistics[0] + '%';
    statPercent2.innerHTML = arr[i].statistics[1] + '%';
    statPercent3.innerHTML = arr[i].statistics[2] + '%';
}

