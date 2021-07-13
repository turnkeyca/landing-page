function showRenterContent() {
    document.getElementById("content").innerHTML = document.getElementById("renter").innerHTML;
    document.getElementById("renter-pill").classList.remove("text-gray-500", "bg-white");
    document.getElementById("renter-pill").classList.add("text-white", "tk-bg-teal", "shadow-lg");
    document.getElementById("landlord-pill").classList.remove("text-white", "tk-bg-amber", "shadow-lg");
    document.getElementById("landlord-pill").classList.add("text-gray-500", "bg-gray-100");
}

function showLandlordContent() {
    document.getElementById("content").innerHTML = document.getElementById("landlord").innerHTML;
    document.getElementById("renter-pill").classList.remove("text-white", "tk-bg-teal", "shadow-lg");
    document.getElementById("renter-pill").classList.add("text-gray-500", "bg-gray-100");
    document.getElementById("landlord-pill").classList.remove("text-gray-500", "bg-gray-100");
    document.getElementById("landlord-pill").classList.add("text-white", "tk-bg-amber", "shadow-lg");
}

window.onload = (event) => {
    showRenterContent();
};