// console.log(randomNum=Math.floor(Math.random()*100))/100;
        // console.log(randomNum=Math.random())


        function randNum(){
            var num=Math.floor(1+Math.random()*10);
            if(num===0||num===10){
                randNum();
            }
            else
            {return num}
        }

       console.log(randNum());