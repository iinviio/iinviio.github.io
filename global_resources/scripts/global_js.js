/*this script will contain some methods to manipulate the html document (such as menu for responsiveness)*/

/*load the last selected theme at startup*/
load_current_theme();

function mobile_menu_btn(){

    let x = document.getElementById("mobile_menu_id");
    /*add an event listener that switch the class from "disable_fade_out" to "disable" when the animation ends*/
    
    if(x.className === "disable" || x.className === "disable_fade_out"){
        
        x.className = "mobile_menu_fadeIn";
        
        x.addEventListener("animationend", () => {
            
            x.className = "mobile_menu";
        });

        return;
    }

    x.className = "disable_fade_out";
    
    x.addEventListener("animationend", () => {
        
        x.className = "disable";
    });
}

/*this function set the proper theme on the page*/

function change_theme(){

    
    const html_tag = document.getElementsByTagName("html")[0];
    if(html_tag.hasAttribute("data-theme")){
        
        html_tag.removeAttribute("data-theme");
        window.localStorage.removeItem("current_theme");
        return;
    }

    html_tag.setAttribute("data-theme", "dark");
    window.localStorage.setItem("current_theme", "dark");
}

function load_current_theme(){

    if(window.localStorage.getItem("current_theme") !== null){

        document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
    }
}