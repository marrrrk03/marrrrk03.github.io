function GetValue()
{
    var myarray= new Array("the plum",
    "and the candle with the purple flame",
    "corrosive.",
    "the flame's gone out",
    "with someone new",
    "that emerald green seemed so vibrant",
    "undulating ribbons, the cargo bleeding a bloodshot maroon.",
    "the cabin, the lake, the mountains in the clouds,",
    "the three large oil tanks by the road in the desert.",
    "Cuban red in the great unknown",
    "let me feed off your irreverence",
    "there was grey in the blue of the sky.",
    "Playboy magazine, art projects, grass, big rocks, red chairs",
    "alfredo penne with roasted broccoli and grilled chicken thigh.",
    "'what do you mean Jack is sweet?!'",
    "the sky was so big",
    "let's dress up as cowboys and fire this double barrel Winchester together.",);
    
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}