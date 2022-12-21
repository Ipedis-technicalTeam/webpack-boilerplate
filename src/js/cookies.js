const cookieBanner = document.querySelector('.js-cookiesContainer');

setTimeout(() =>{
    cookieBanner.focus();
},0)

if (document.cookie.match(/ps-cookie-venus=true/) !== null) {
    removeModal();
} else {
    window.addEventListener('keyup', function(e) {
        if (e.key == "Escape") {
            document.cookie = 'ps-cookie-venus=false';
            removeModal();
        }
    });
}

cookieBanner.querySelector('.accept-cookie')?.addEventListener('click', function() {
    document.cookie = 'ps-cookie-venus=true';
    removeModal();
});

cookieBanner.querySelector('.refuseContinue')?.addEventListener('click', function() {
    document.cookie = 'ps-cookie-venus=false';
    removeModal();
});

cookieBanner.querySelector('.refuseContinue')?.addEventListener('keydown', function(e) {
    if (e.key == "Tab") {
        setTimeout(() => {
            console.log('ooo', cookieBanner.querySelector('.accept-cookie'));
            cookieBanner.querySelector('.accept-cookie').focus();
            e.preventDefault();
        }, 0);
    }
});

cookieBanner.querySelector('.accept-cookie')?.addEventListener('keydown', function(e) {
    if (e.shiftKey && e.key == "Tab") {
        setTimeout(() => {
            document.querySelector('.refuseContinue').focus();
            e.preventDefault();
        }, 0);
    }
});

function removeModal() {
    document.querySelector('.js-cookiesContainer').classList.add("remove-modal");
}
