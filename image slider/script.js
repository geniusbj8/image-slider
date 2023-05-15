var maining=document.querySelector("img");
var images=["images/first.jpg","images/second.jpg","images/third.jpg","images/fourth.jpg","images/fifth.jpg"];
var num=0;

function next(){
    num++;
    if(num>=images.length){
        num=0;
        maining.src=images[num]
    }else{
        maining.src=images[num]
    }
};
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        maining.src=images[num]
    }else{
        maining.src=images[num]
    }
};