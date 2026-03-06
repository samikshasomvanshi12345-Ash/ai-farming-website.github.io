function suggestCrop(){

let soil = document.getElementById("soil").value;
let result = document.getElementById("result");

if(soil == "Black"){
result.innerHTML = "Recommended Crop: Cotton";
}

else if(soil == "Red"){
result.innerHTML = "Recommended Crop: Groundnut";
}

else{
result.innerHTML = "Recommended Crop: Watermelon";
}

}