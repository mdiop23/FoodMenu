"use strict"

let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
    };


window.onload = function(){
    const menuSelect = document.getElementById('menuSelect');
    const menuContent = document.getElementById('menuContent');
    
    menuSelect.addEventListener('change', function() {
        menuContent.innerHTML = ""
        const selectedCategory = menuSelect.value;
        
        if(selectedCategory){
            menuContent.style.display = "block"
        } else{
            menuContent.style.display = "none"
        }

        for(let selectedMealOption of menu[selectedCategory]){
            let optionTag = document.createElement("option");
            optionTag.textContent = selectedMealOption
            menuContent.appendChild(optionTag)
        }
    });

}



