class RollDice{
    constructor(){
        this.dice_data=[];
    }
    Rolle(){
        let random_num=Math.floor(Math.random()*5)+1;
        // console.log("さいころの目 : "+random_num);
        document.getElementById("output").innerHTML="さいころの目 : "+random_num;
        this.dice_data.push(random_num);
        // console.log(this.dice_data);
    }
    Show(){
        // console.log("さいころの目のログ");
        let pre_txt="さいころの目のログ<br>";
        this.dice_data.forEach(function (element) {
            pre_txt+=element+"<br>\n"
            // console.log(element);
        })
        // console.log(pre_txt);
        document.getElementById("output").innerHTML=pre_txt;
    }
}


window.onload=function(){
    const Dice=new RollDice();
    document.getElementById("roll_dice_btn").onclick=function () {
        Dice.Rolle();
    }
    document.getElementById("show_dice_log").onclick=function () {
        Dice.Show();
    }
}