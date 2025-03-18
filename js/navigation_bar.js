function showSidebar(){
    const sidebar = document.querySelectorAll(".sidebar")
    sidebar.forEach(element => {
        element.style.display = "flex";
    });
    const menuButton = document.getElementById("menu_button");
    menuButton.style.display = "none";

}

function closeSidebar(){
    const sidebar = document.querySelectorAll(".sidebar")
    sidebar.forEach(element => {
        element.style.display = "none";
    });
    const menuButton = document.getElementById("menu_button");
    menuButton.style.display = "flex";

}

function changeDropDown(dropClass, closeID, gapToggle = null, ...dropCloseSub) {
    const drop = document.querySelectorAll(dropClass);
    const closed = document.getElementById(closeID);
    const gapT = document.getElementById(gapToggle);

    drop.forEach(element => {
        if (window.getComputedStyle(element).display === "none") {
            element.style.display = "flex";
            if (gapT != null) {gapT.style.gap = "30px";}
        } else {
            element.style.display = "none";
            if (gapT != null) {gapT.style.gap = "0px";}
        }
    });

    if (window.getComputedStyle(closed).display === "flex") {
        closed.style.display = "none";
    } else {
        closed.style.display = "flex";
    }

    for (let i = 0; i < dropCloseSub.length; i++) {
        if (i % 2 === 0) {
            const dropSub = document.querySelectorAll(dropCloseSub[i]);
            dropSub.forEach(element => {
                element.style.display = "none";
            });
        } else {
            const closeSub = document.getElementById(dropCloseSub[i]);
            closeSub.style.display = "flex";
        }
    }
}