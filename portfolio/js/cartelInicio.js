const d = document,
ls=localStorage,
$body = d.querySelector(".classDark");
let firstTime = true,
$div = document.createElement("div"),
$audio = document.getElementById("audio"),
$apagar = document.querySelector(".apagado"),
$src = undefined;
d.addEventListener("DOMContentLoaded", (e)=>{
    if(ls.getItem("theme") === "light") $src=`/portfolio/assets/video/wallpaper light mode.mp4`;
    if(ls.getItem("theme") === "dark") $src=`/portfolio/assets/video/wallpaper dark mode.mp4`;
})
export default function cartelInicio($apagado){
    $div.classList.add("parrafo-inicio");
    $div.innerHTML =`
    <p>Bienvenido.</p>`;
    $body.appendChild($div);
        $div.style.opacity=1;
    d.addEventListener("click",(e)=>{
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)){
            d.exitFullscreen();
        }
        if (firstTime === true){
            $audio.play();
            $div.style.opacity=0;
            let $video = d.querySelector(".background-video");
            document.documentElement.requestFullscreen();
            $video.setAttribute("src",`${$src}`);
            firstTime = false;
            setTimeout(() => {
                $div.classList.toggle("parrafo-inicio");
            }, 2000);        }

    })
}
