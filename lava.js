import zim from "https://zimjs.org/cdn/016/zim_game";

const lava = () =>{
    var s5 = new Squiggle({color:green, interactive: false }).loc(500,500);
    s5.appendPoints([[s5.width, 0], [s5.width, 150], [0,150]], "free");
    var b2 = s5.makeBlob("free").loc(s5); 
    b2.color = yellow;


    
}
export default lava;
