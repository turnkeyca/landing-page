function showRenterContent() {
    document.getElementById("content").innerHTML = document.getElementById("renter").innerHTML;
    document.getElementById("renter-pill").classList.remove("text-gray-600", "bg-white");
    document.getElementById("renter-pill").classList.add("text-white", "tk-bg-teal");
    document.getElementById("landlord-pill").classList.remove("text-white", "tk-bg-amber");
    document.getElementById("landlord-pill").classList.add("text-gray-600", "bg-white");
}

function showLandlordContent() {
    document.getElementById("content").innerHTML = document.getElementById("landlord").innerHTML;
    document.getElementById("renter-pill").classList.remove("text-white", "tk-bg-teal");
    document.getElementById("renter-pill").classList.add("text-gray-600", "bg-white");
    document.getElementById("landlord-pill").classList.remove("text-gray-600", "bg-white");
    document.getElementById("landlord-pill").classList.add("text-white", "tk-bg-amber");
}

window.onload = (event) => {
    showRenterContent();
};