//////////////order.html js 
var totalPrice = 0;
var totalQuan = 0;

function getPsize() {
    var s = document.getElementById("size");
    var size = s.value;// where can i find these funcs api
    return size;
}

function getPtype() {
    var t = document.getElementById("ingre");
    var type = t.value;// where can i find these funcs api
    return type;
}

function extraPizzachecked() {
    if (document.getElementById("cheese").checked == true) {
        return true;
    }
    else {
        return false;
    }  
}

function getQuantity() {
    return document.getElementById("quan").value;
}

function calculatePrice() {

    var smallPepperoni = 8.99;
    var smallVegetarian = 9.99;
    var smallCombo = 10.99;
    var extraCheese = 2.00;

    var size = getPsize();
    var type = getPtype();
    var cheese = extraPizzachecked();
    var quan = getQuantity();
    var price=0;

    if (size == "small") {
        if (type == "Pepperoni") {
            if (cheese == false) { price = smallPepperoni * quan; }
            else { price = (smallPepperoni + extraCheese) * quan; }
        }
        else if (type == "Vegetarian") {
            if (cheese == false) { price = smallVegetarian * quan; }
            else { price = (smallVegetarian + extraCheese) * quan; }
        }
        else if (type == "Combo") {
            if (cheese == false) { price = smallCombo * quan; }
            else { price = (smallCombo + extraCheese) * quan; }
        }

    }
    else if (size == "Medium") {
        if (type == "Pepperoni") {
            if (cheese == false) { price = (smallPepperoni + 1) * quan; }
            else { price = (smallPepperoni + 1 + extraCheese) * quan; }
        }
        else if (type == "Vegetarian") {
            if (cheese == false) { price = (smallVegetarian + 1) * quan; }
            else { price = (smallVegetarian + 1 + extraCheese) * quan; }
        }
        else if (type == "Combo") {
            if (cheese == false) { price = (smallCombo + 1) * quan; }
            else { price = (smallCombo + 1 + extraCheese) * quan; }
        }
    }
    else if (size == "LARGE") {
        if (type == "Pepperoni") {
            if (cheese == false) { price = (smallPepperoni + 2) * quan; }
            else { price = (smallPepperoni + 2 + extraCheese) * quan; }
        }
        else if (type == "Vegetarian") {
            if (cheese == false) { price = (smallVegetarian + 2) * quan; }
            else { price = (smallVegetarian + 2 + extraCheese) * quan; }
        }
        else if (type == "Combo") {
            if (cheese == false) { price = (smallCombo + 2) * quan; }
            else { price = (smallCombo + 2 + extraCheese) * quan; }
        }
    }
    return price;
}

function writePrice(p) {
    
    document.getElementById('price').innerHTML = "<br>" + "Price now: " + p;
   
}

function calBtnclick() {
    if (quanValidate(getQuantity())) {
        var p = calculatePrice();
        writePrice(p);
    }
    else {
        return;
    }
}

function writeAfteradd(p) {
    var q = getQuantity();
    document.getElementById('price').innerHTML =
        "<br>" + q + " item(s) have been add to cart." +
        "<br>" + "Now your total is: " + p;
}

function addBtnclick() {
    if (quanValidate(getQuantity())) {
        var q = getQuantity();
        var p = calculatePrice();
        totalQuan += Number(q);
        totalPrice += Number(p);
        writeAfteradd(totalPrice);
    }
    else {
        return;
    }
}

function goCartclick() {
    document.getElementById('price').innerHTML =
        "<br>" + "You have selected " + totalQuan + " pizzas." +
        "<br>" + "Total: " + totalPrice;

    document.getElementById('checkout').innerHTML =
        "<br>" + "<input id='checkoutBtn' type = 'button' value='Check Out' onclick='checkoutBtnclick()' />";
}


function checkoutBtnclick() {
    window.location = "hw2_checkout.html";
}

function quanValidate(quantity) {
        if (isNaN(quantity) || quantity == '') {
            alert("Please enter a number in quantity field");
            return false;
        }
        else {
            return true;
        }
    
}

function special() {
    var num = (Math.random() * 1000);
    if (num > 500) {
        var x = "You got 30% off!";
        document.getElementById("message").innerHTML = x;
        //$("input").after("<p>You got 30% off!</p>");
    }
    else {
        var x = "Sorry, you have no discount this time.";
        //$("input").after("You go);
        document.getElementById("message").innerHTML = x;

    }
    
    
}

//////////////order.html js end

function getFname() {
    var fname = document.getElementById("fname").value;
    return fname;
}

function getLname() {
    var name = document.getElementById("lname").value;
    return lname;
}

function getAddrLine1() {
    var line1 = document.getElementById("addr1").value;
    return line1;
}

function getAddrLine2() {
    var line2 = document.getElementById("addr2").value;
    return line2;
}

function getCity() {
    var city = document.getElementById("city").value;
    return city;
}

function getState() {
    var state = document.getElementById("state").value;
    return state;
}

function getZcode() {
    var zcode = document.getElementById("zcode").value;
    return zcode;
}

function getCountry() {
    var country = document.getElementById("country").value;
    return country;
}

function getTelnum() {
    var telnum = document.getElementById("telnum").value;
    return telnum;
}

function getPayType() {
    if(document.getElementById("cash").checked){
        return 0; // pay cash   
    }
    else{
        return 1; // pay card
    }
}

function getCardType(){
    if(document.getElementById("amex").checked){
        return 0; // choose amex
    }
    else{
        return 1;// choose visa
    }
}


function getCardnum() {
    var cardnum = document.getElementById("cardnumber").value;
    return cardnum;
}

function getExpdate() {
    var date = document.getElementById("expiredate").value;
    return date;
}

///// field funcs  end

function finalizeClick() {
    var fname = getFname();
    var lname = getLname();
    var addr1 = getAddrLine1();
    var addr2 = getAddrLine2();
    var city = getCity();
    var state = getState();
    var zcode = getZcode();
    var country = getCountry();
    var telnum = getTelnum();
    var paytype;
    if (getPayType() == 0) {
        paytype = "cash";
    }
    else {
        paytype = "credit";
    }
    var cardtype;
    if (getCardType() == 0) {
        cardtype = "amex";
    }
    else {
        cardtype = "visa";
    }
    var cardnum = getCardnum();
    var expdate = getExpdate();

    var order_num = randnum();
    order_complete(order_num);
}

function randnum() {
    var num = Math.random()* 1000;
    return parseInt(num);
}

function hideorshow() {
    var cardtype = document.getElementById('credit').checked;
    if (cardtype == true) {
        document.getElementById('cardoption').style.display = 'block';
    }
    else {
        document.getElementById('cardoption').style.display = 'none';
    }
}

function goBack() {
    document.location.href = "hw2_order.html";
}

function goHome() {
    document.location.href = "index.html";
}

function order_complete(a) {
    document.getElementById("message").innerHTML = "Your order has been completed, the order number is " + a + ".";
}

