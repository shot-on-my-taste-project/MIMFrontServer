export function goHome() {
    window.location.href = "/";
}

export function openNav() {
    if (matchMedia("screen and (max-width: 1023px)").matches)
        document.getElementById("sidenav").style.width = "250px";
    else
        document.getElementById("sidenav").style.width = "400px";
    document.getElementById("sidenav").style.display = "block";
}

export function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("sidenav").style.display = "none";
}

export function checkOnlyOne(elementId) {
    if(elementId === "picture") {
        document.getElementById("input-text").setAttribute("placeholder", " ex) 화투를 치는 장면")
        document.getElementById("input-text").setAttribute("name", "picture")
        document.getElementById("search-image-ex").style.display = "flex";
        document.getElementById("search-script-ex").style.display = "none";
    }
    else {
        document.getElementById("input-text").setAttribute("placeholder", " ex) 손모가지 날아가붕게")
        document.getElementById("input-text").setAttribute("name", "text")
        document.getElementById("search-image-ex").style.display = "none";
        document.getElementById("search-script-ex").style.display = "flex";
    }

    const checkboxes = document.getElementsByName("search-opt");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
  
    document.getElementById(elementId).checked = true;
}

export function checkOnlyOneSmall(elementId) {
    if(elementId === "picture") {
        document.getElementById("input-text-small").setAttribute("placeholder", " ex) 화투를 치는 장면")
        document.getElementById("input-text-small").setAttribute("name", "picture")
    }
    else {
        document.getElementById("input-text-small").setAttribute("placeholder", " ex) 손모가지 날아가붕게")
        document.getElementById("input-text-small").setAttribute("name", "text")
    }

    const checkboxes = document.getElementsByName("search-opt-small");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
  
    document.getElementById(elementId + "-small").checked = true;
}