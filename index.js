const body=document.querySelector("body");

const lnk_features=document.querySelector("#lnk-features");
const context_menu_features=document.querySelector(".context-menu-features");




let context_menu_features_flag=false;

lnk_features.addEventListener('click',event=>{

    context_menu_features_flag=!context_menu_features_flag;
    
    //Get Cordinates of Features link
    const cords=lnk_features.getBoundingClientRect();
        context_menu_features.style.top=`${cords.top+30}px`;
        context_menu_features.style.left=`${cords.left}px`;
    
    if (context_menu_features_flag) {
        //display context menu

        context_menu_features.style.display="inline"
        context_menu_features.style.top="40px";
        context_menu_features.style.left="125px";
        
    } else {
        //hide context menu
        context_menu_features.style.display="none"

    }

});


body.addEventListener('click',event=>{
    
    if (!context_menu_features_flag) {
        hideContextMenus();
    }
});

function hideContextMenus () {
    context_menu_features.style.display="none";
    context_menu_features_flag=false;
}