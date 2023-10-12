const d = document;
export default function scrollear(scroll){
    d.addEventListener("mouseenter", e=> {
        console.log(e.target)
      });
      
     d.addEventListener("mouseleave", function() {
        console.log("Ya no estoy sobre la imagen");
      });
}