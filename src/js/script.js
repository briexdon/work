"use strict";


window.onload = function(){

    let money,
        name;

    function start(){
        money = prompt('Your budget?');

        while(isNaN(money) || money == null || money == "" ){
            money = prompt('Your budget?');
        }
        name = prompt('Whats your shop name?');

    }
    // start();

    let price = 0;

    let mainList = {
        budget: money,
        shopName: name,
        shopGoods: [],
        employers: {},
        open: false,
        discount: true,
        price: price
    };
    function disc(d){
        if( mainList.discount === true){
           var res =  (d/ 100) * 80;
           mainList.price = res;
        }else{
            console.log('error');
        }
    }

    disc(120.51);
    
    function hire() {
        for(let i = 0; i < 3; i++){

         let n = prompt('what is your name?');
            if((typeof(n)) === 'string' && (typeof(n))!= null && n.length < 50 && n != '' && !isNaN(n)){
                mainList.employers = n.innerHTML;
            }else{
                prompt('what is your name?');
            }
        }
    }
    hire();

    console.log(mainList.employers);



    // for(let i = 0; i< 3; i++){
    //     let a = prompt('Какой тип товар а будем продавать?');
    //     if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
    //         mainList.shopGoods[i] = a;
    //     }else{
    //         i = i -1;
    //     }
    //
    // }

    // console.log(mainList.shopGoods);



};