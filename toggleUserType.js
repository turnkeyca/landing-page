function showRenterContent() {
    document.getElementById("content").innerHTML = document.getElementById("renter").innerHTML;
    document.getElementById("renter-pill").classList.remove("text-gray-500", "bg-white");
    document.getElementById("renter-pill").classList.add("text-white", "tk-bg-teal", "shadow-lg");
    document.getElementById("landlord-pill").classList.remove("text-white", "tk-bg-amber", "shadow-lg");
    document.getElementById("landlord-pill").classList.add("text-gray-500", "bg-gray-100");
    document.getElementById("feedback").setAttribute("href", "https://forms.gle/FBxFB2rYS8szgAk2A")
}

function showLandlordContent() {
    document.getElementById("content").innerHTML = document.getElementById("landlord").innerHTML;
    document.getElementById("renter-pill").classList.remove("text-white", "tk-bg-teal", "shadow-lg");
    document.getElementById("renter-pill").classList.add("text-gray-500", "bg-gray-100");
    document.getElementById("landlord-pill").classList.remove("text-gray-500", "bg-gray-100");
    document.getElementById("landlord-pill").classList.add("text-white", "tk-bg-amber", "shadow-lg");
    document.getElementById("feedback").setAttribute("href", "https://forms.gle/hHjEFEDFvz3sMX1J9")
}
