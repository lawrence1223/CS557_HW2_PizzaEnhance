$(document).ready(function () {

    $("#check_form").validate({
        rules: {
            fname: {
                required: true,
                rangelength: [1, 20]
            },
            lname: {
                required: true,
                rangelength: [1, 25]
            },
            addr1: {
                required: true
            },
            addr2: {
                required: true
            },
            city: {
                required: true
            },
            state: {
               required: true,
                rangelengh: [2, 4]
            },
            zcode: {
                required: true,
                digits: true,
                rangelengh: [5, 5]
            },
            country: {
                required: true
            },
            telnum: {
                required: true,
                digits: true,
                rangelength: [9, 10]
            },
            cardnumber: {
                required: true,
                digits: true,
                rangelength: [15, 16]
            },
            expiredate: {
                required: true

            }


        },
        messages: {
            fname: {
                rangelength: "Please enter a first name within 20 characters."
            },
            lname: {
                rangelength: "Please enter a last name within 25 characters."
            },
            state: {
                rangelength: "Please enter a 2-character state code."
            },
            zcode: {
                rangelength: "Please enter a 5-digit zip code."
            },
            telnum: {
                rangelength: "Please enter a 9-digit phone number."
            },
            cardnumber: {// how to validate the card num under visa or amex
                rangelength: "Please enter a card number in 15~16 digits."
            }

        }

    });
});