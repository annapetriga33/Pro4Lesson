var howManyYears = prompt ( 'Сколько тебе лет ?' );
var doYouSmoke = prompt ( 'Куришь ? ');

if (howManyYears < 18 && doYouSmoke === 'нет') {
    alert( 'Молодец, так держать' );
}   else if (howManyYears < 18 && doYouSmoke === 'да') {
    alert('Маме расскажу');
}   else if ( howManyYears > 18 && doYouSmoke === 'нет' ) {
    alert ('Молодец и не надо')
}   else {
    alert( 'ну и зря ');
}