

let download = document.getElementById('download_div');
let loading = document.getElementById("loading")

function generate(){

  let input = document.getElementById("input").value
  let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&format=png&data=${input}`
  let output = document.getElementById("qr")
  let image = document.getElementById("image")
  let download_link = document.getElementById("download_link")
  let download = document.getElementById('download_div');

  if(input=="https://"){
    download_link.innerText="Please Write something in the the box";
  }
  else{

    loading.removeAttribute("hidden");
    download.setAttribute("hidden","true")
    image.setAttribute("hidden","true")
    setTimeout(()=>{
    loading.setAttribute("hidden","true")


    },3000)
    setTimeout(()=>{
    download.removeAttribute("hidden")
    image.removeAttribute("hidden")
    image.src = URL;
    download_link.href = URL+"&download=1";
    download_link.innerText = "Download"
    download_link.classList.add("text-white","link-underline-opacity-0","link-underline")
    download.classList.add("bg-success","text-center",'rournded-0',"pt-1" ,"pb-1" ,"pr-3" ,"pl-2", "mt-2")
    
  },3100);
    
  }
  download_link.innerText="";
}

let btn = document.getElementById("gen_btn")
btn.addEventListener("click",generate)
