document.addEventListener('DOMContentLoaded', function () {
    displayWishlist();
});

function displayWishlist() {
    const wishlistContainer = document.querySelector('.wish-main');
    wishlistContainer.innerHTML = ''; 
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistItems.forEach((item) => {
        const wishlistItemHTML = `
            <div class="wish-item">
                <div class="wish-img">
                    <img src="${item.imgSource}" alt="${item.nam}">
                </div>
                <div class="remove">
                    <button onclick="removeFromWishlist(${item.id})">Remove</button>
                </div>
            </div>
        `;
        wishlistContainer.innerHTML += wishlistItemHTML;
    });
}

function removeFromWishlist(id) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const itemIndex = wishlistItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
        wishlistItems.splice(itemIndex, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        displayWishlist();
        Swal.fire('Remove From Wish List');
    }
}
