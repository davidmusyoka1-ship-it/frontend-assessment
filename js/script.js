// Membership toggle
function toggleMembership(id){
    let foundation = document.getElementById("foundation");
    let economy = document.getElementById("economy");

    if(id === "foundation"){
        foundation.style.display = (foundation.style.display === "block") ? "none" : "block";
        economy.style.display = "none";
    }
    if(id === "economy"){
        economy.style.display = (economy.style.display === "block") ? "none" : "block";
        foundation.style.display = "none";
    }
}

// Sidebar toggle
function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("mainContent");

    if(window.innerWidth >= 768){ // tablet/desktop push
        sidebar.classList.toggle("showSidebarPush");
        if(sidebar.classList.contains("showSidebarPush")){
            main.style.marginLeft = "300px";
        } else {
            main.style.marginLeft = "0";
        }
    } else { // phone overlay
        sidebar.classList.toggle("showSidebar");
    }
}

// View buttons
function setView(view){
    if(view === "phone") document.body.style.zoom = "1";
    if(view === "tablet") document.body.style.zoom = "0.9";
    if(view === "desktop") document.body.style.zoom = "0.8";
}