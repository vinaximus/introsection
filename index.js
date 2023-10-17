const body=document.querySelector("body");

const lnk_features=document.querySelector("#lnk-features");
const lnk_company=document.querySelector("#lnk-company");
const context_menu_features=document.querySelector(".context-menu-features");
const context_menu_company=document.querySelector(".context-menu-company");

console.log (window.innerWidth);


let context_menu_features_flag=false;
let context_menu_company_flag=false;

lnk_features.addEventListener('click',event=>{
    context_menu_features_flag=!context_menu_features_flag;

    /*
    if (window.innerWidth<=600) {
        context_menu_features.style.position="static";
        lnk_features.appendChild(context_menu_features);
    }*/

    
    
    //Get Cordinates of Features link
        let cords=lnk_features.getBoundingClientRect();
        context_menu_features.style.top=`${cords.top+30}px`;
        context_menu_features.style.left=`${cords.left}px`;
    
    if (context_menu_features_flag) {
        //display context menu

        context_menu_features.style.display="inline"

        
    } else {
        //hide context menu
        context_menu_features.style.display="none"

    }

});

lnk_company.addEventListener('click',event=>{

    context_menu_company_flag=!context_menu_company_flag;
    
    //Get Cordinates of Features link
        let cords=lnk_company.getBoundingClientRect();
        context_menu_company.style.top=`${cords.top+30}px`;
        context_menu_company.style.left=`${cords.left}px`;
    
    if (context_menu_company_flag) {
        //display context menu

        context_menu_company.style.display="inline"

        
    } else {
        //hide context menu
        context_menu_company.style.display="none"

    }

});

