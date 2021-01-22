

function kilometerToMeter (kilometer){
    if (kilometer < 0){
        return 'Invalid Input';
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}



function budgetCalculator (watch, phone, laptop){
    var total = 0;
    
    if (watch < 0){
        return 'Invalid Input';
    }
    else if (phone < 0){
        return 'Invalid Input';
    }
    else if (laptop < 0){
        return 'Invalid Input';
    }
    else{
        var totalWatchPrice = watch * 50;
        var totalPhonePrice = phone * 100;
        var totalLaptopPrice = laptop * 500;

        var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    }
    return total;
}



function hotelCost (days){
    var total = 0;

    if (days < 0){
        return 'Invalid Input';
    }
    else if (days <= 10){
        total = days * 100;
    }
    else if (days <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        total = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var restOfTheDays = remainingDays * 50;

        total = firstTenDays + secondTenDays + restOfTheDays;
    }
    return total;
}


function megaFriend (array){
    var length = 0;
    var longest;

    if (array == []){
        return 'Invalid Input';
    }
    else{
        for (var i = 0; i < array.length; i++) {
            if (array[i].length > length) {
              var length = array[i].length;
              longest = array[i];
            }
          }
    }
  return longest;
}