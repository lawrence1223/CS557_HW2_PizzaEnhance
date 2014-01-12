$(document).ready(function () {

    $("#specialbtn").click(function () {
        var num = (Math.random() * 1000);
        if (num > 500) {
            var x = "You got 30% off!";
        }
        else {
            var x = "Sorry, you have no discount this time.";
        }
        $("#specialarea").text(x);
                
    });

          

    var totalPrice = 0;
    var totalQuan = 0;

    function getPsize() {
        //var s = document.getElementById("size");
        var size = $("#size").val()
        //var size = s.value;// where can i find these funcs api
        return size;
    }

    function getPtype() {
        var type = $("#type").val();
        //var type = t.value;// where can i find these funcs api
        return type;
    }

    function extraPizzachecked() {

        if ($("#cheese").checked == true) {
            return true;
        }
        else {
            return false;
        }
    }

    function getQuantity() {
        return $("#quantity").val();
    }

    function calculatePrice() {

        var smallPepperoni = 8.99;
        var smallVegetarian = 9.99;
        var smallCombo = 10.99;
        var extraCheese = 2.00;

        var size = getPsize();
        //alert(size);
        var type = getPtype();
        var cheese = extraPizzachecked();
        var quan = getQuantity();
        var price = 0;

        if (size == "small") {
            if (type == "pepperoni") {
                if (cheese == false) { price = smallPepperoni * quan; }
                else { price = (smallPepperoni + extraCheese) * quan; }
            }
            else if (type == "vegetarian") {
                if (cheese == false) { price = smallVegetarian * quan; }
                else { price = (smallVegetarian + extraCheese) * quan; }
            }
            else if (type == "combo") {
                if (cheese == false) { price = smallCombo * quan; }
                else { price = (smallCombo + extraCheese) * quan; }
            }
        }
        else if (size == "medium") {
            if (type == "pepperoni") {
                if (cheese == false) { price = (smallPepperoni + 1) * quan; }
                else { price = (smallPepperoni + 1 + extraCheese) * quan; }
            }
            else if (type == "vegetarian") {
                if (cheese == false) { price = (smallVegetarian + 1) * quan; }
                else { price = (smallVegetarian + 1 + extraCheese) * quan; }
            }
            else if (type == "combo") {
                if (cheese == false) { price = (smallCombo + 1) * quan; }
                else { price = (smallCombo + 1 + extraCheese) * quan; }
            }
        }
        else if (size == "large") {
            if (type == "pepperoni") {
                if (cheese == false) { price = (smallPepperoni + 2) * quan; }
                else { price = (smallPepperoni + 2 + extraCheese) * quan; }
            }
            else if (type == "vegetarian") {
                if (cheese == false) { price = (smallVegetarian + 2) * quan; }
                else { price = (smallVegetarian + 2 + extraCheese) * quan; }
            }
            else if (type == "combo") {
                if (cheese == false) { price = (smallCombo + 2) * quan; }
                else { price = (smallCombo + 2 + extraCheese) * quan; }
            }
        }
                
        return price;
    }

    function writePrice(p) {

        $("#calarea").text("Price now: " + p);

    }

    $("#calbtn").click(function () {
        calBtnclick();
    });

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
        $("#addcartarea").text( q + " item(s) have been add to cart." +
           "Now your total is: " + p);
    }

    $("#addcart").click(function () {
        addBtnclick();
    });
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

    $("#gocart").click(function () {
        goCartclick();

    });
    function goCartclick() {
        $("#gocartarea").text("You have selected " + totalQuan + " pizzas." +
            "Total: " + totalPrice);

        $('<a href="#checkpage" data-role="button">Check Out</a>').insertAfter("#gocheck");
        //$('[data-role="button"]').button();//if disable, it will not insert more than 1 time
        //$("#gocheck").append('<a href="#checkpage" data-role="button">Check Out</a>');
                
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
    $("#cardoption").hide();
    //$("#cardoption").ready(function () {
               
    //    hideorshow();

    //});

    function hideorshow() {
        var cardtype = $("#cash").show();
        //alert(cardtype);
        if (cardtype == "choice-1") {
            $("#cardoption").hide();
        }
        else {
            $("#cardoption").show();
        }
    }
           


        
    //var cardtype = $("#cash").val();
    ////alert(cardtype);
    //if (cardtype == "choice-1") {
    //    $("#cardoption").hide();
    //}
    //else {
    //    $("#cardoption").show();
    //}


});