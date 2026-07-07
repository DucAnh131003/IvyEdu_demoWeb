      document.querySelector('.video-wrapper').addEventListener('click', function() {
            const iframe = this.querySelector('iframe');
            const src = iframe.getAttribute('src');
            // Thêm autoplay vào URL
            if (src.indexOf('autoplay') === -1) {
                const newSrc = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
                iframe.setAttribute('src', newSrc);
            }
            // Ẩn nút play
            this.querySelector('.play-btn').style.display = 'none';
        });