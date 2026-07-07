  const sliderTrack = document.getElementById('sliderTrack');
        const pauseBtn = document.getElementById('pauseBtn');
        const pauseIcon = document.getElementById('pauseIcon');
        let isPaused = false;

        pauseBtn.addEventListener('click', function() {
            isPaused = !isPaused;
            if (isPaused) {
                sliderTrack.style.animationPlayState = 'paused';
                pauseIcon.className = 'fas fa-play';
                pauseBtn.title = 'Tiếp tục chạy';
            } else {
                sliderTrack.style.animationPlayState = 'running';
                pauseIcon.className = 'fas fa-pause';
                pauseBtn.title = 'Tạm dừng';
            }
        });

        // Hover vào slider cũng tạm dừng
        sliderTrack.addEventListener('mouseenter', function() {
            if (!isPaused) {
                sliderTrack.style.animationPlayState = 'paused';
            }
        });

        sliderTrack.addEventListener('mouseleave', function() {
            if (!isPaused) {
                sliderTrack.style.animationPlayState = 'running';
            }
        });