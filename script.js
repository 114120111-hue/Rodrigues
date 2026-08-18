window.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const openButton = document.getElementById("mobile-menu-button");
    const closeButton = document.getElementById("mobile-menu-close");

    if (!mobileMenu || !openButton || !closeButton) {
        return;
    }

    const toggleMenu = () => {
        mobileMenu.classList.toggle("is-open");
        document.body.classList.toggle("overflow-hidden");
    };

    openButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("is-open");
            document.body.classList.remove("overflow-hidden");
        });
    });
});

/* Gallery lightbox / album */
(function initGallery(){
    function openLightbox(images){
        const lightbox = document.getElementById('lightbox');
        const imgEl = document.getElementById('lightbox-img');
        const captionEl = document.getElementById('lightbox-caption');
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');
        const closeBtn = document.getElementById('lightbox-close');

        if(!lightbox) return;
        let current = 0;

        const show = (i) => {
            current = (i + images.length) % images.length;
            imgEl.src = images[current] || '';
            captionEl.textContent = `${current + 1} / ${images.length}`;
            lightbox.classList.add('is-open');
            document.body.classList.add('overflow-hidden');
        };

        const hide = () => {
            lightbox.classList.remove('is-open');
            document.body.classList.remove('overflow-hidden');
            imgEl.src = '';
        };

        prevBtn.onclick = (e)=>{ e.stopPropagation(); show(current-1); };
        nextBtn.onclick = (e)=>{ e.stopPropagation(); show(current+1); };
        closeBtn.onclick = (e)=>{ e.stopPropagation(); hide(); };

        lightbox.onclick = (e)=>{ if(e.target === lightbox) hide(); };

        document.addEventListener('keydown', (e)=>{
            if(!lightbox.classList.contains('is-open')) return;
            if(e.key === 'Escape') hide();
            if(e.key === 'ArrowLeft') show(current-1);
            if(e.key === 'ArrowRight') show(current+1);
        });

        show(0);
    }

    document.addEventListener('click', (e)=>{
        const card = e.target.closest('.gallery-card');
        if(!card) return;
        const data = card.getAttribute('data-images');
        try{
            const images = JSON.parse(data || '[]');
            if(images.length) openLightbox(images);
        }catch(err){
            console.warn('Invalid data-images on gallery-card', err);
        }
    });
})();
