        // DATA CONFIG
        const NOMOR_WA = "6289526797014"; 
        const TANGGAL_JADIAN = "2026-6-18"; 

        // Efek partikel latar belakang
        const decorArea = document.getElementById('decorationsArea');
        const symbols = ['🤍', '💙', '✨'];
        for (let i = 0; i < 15; i++) {
            const span = document.createElement('span');
            span.className = 'sparkle-particle';
            span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            span.style.left = Math.random() * 100 + 'vw';
            span.style.top = Math.random() * 100 + 'vh';
            span.style.animationDelay = (Math.random() * 4) + 's';
            span.style.animationDuration = (4 + Math.random() * 3) + 's';
            decorArea.appendChild(span);
        }

        // Efek Klik Memancar Love Biru
        function createTapHeart(e) {
            if(e.target.closest('.bottom-sheet') || e.target.closest('.top-menu-btn')) return;
            const heart = document.createElement('div');
            heart.className = 'tap-heart';
            heart.innerText = '💙';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            document.body.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 800);
        }

        function openEnvelope() { document.getElementById('introWrapper').classList.add('open'); }

        let currentPageIndex = 0;
        const totalPages = 5;
        const bookBox = document.getElementById('bookBox');
        const loader = document.getElementById('layerLoader');
        const myAudio = document.getElementById('albumMusic');
        const largeDisc = document.getElementById('largeDisc');
        const musicCtrlBtn = document.getElementById('musicCtrlBtn');

        function startApp() {
            myAudio.play().catch(() => {});
            largeDisc.style.animationPlayState = 'running';
            
            const intro = document.getElementById('introWrapper');
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.display = 'none';
                bookBox.style.display = 'block';
                setTimeout(() => {
                    bookBox.style.opacity = '1';
                    showPage(0);
                    initInnerSliders();
                    startCountdown();
                }, 50);
            }, 400);
        }

        function toggleMusic() {
            if (myAudio.paused) { 
                myAudio.play(); 
                largeDisc.style.animationPlayState = 'running';
                musicCtrlBtn.innerText = "Jeda Musik ⏸️";
            } else { 
                myAudio.pause(); 
                largeDisc.style.animationPlayState = 'paused';
                musicCtrlBtn.innerText = "Putar Musik ▶️";
            }
        }

        // PERBAIKAN & PENINGKATAN: NAVIGASI SLIDE BUKU BENAR
        function showPage(index) {
            for (let i = 0; i < totalPages; i++) {
                const p = document.getElementById(`page-${i}`);
                if (p) {
                    p.classList.remove('active-page', 'prev-page');
                    if (i === index) {
                        p.classList.add('active-page');
                    } else if (i < index) {
                        p.classList.add('prev-page');
                    }
                }
            }
            currentPageIndex = index;
            updateNavBar();
        }

        function jumpToPageWithLoading(index) {
            loader.classList.add('show-loading');
            setTimeout(() => {
                showPage(index);
                setTimeout(() => { loader.classList.remove('show-loading'); }, 200);
            }, 300);
        }

        // PERBAIKAN BUG TOMBOL < BERFUNGSI NORMAL (currentPageIndex - 1)
        function bookNextPage() { if (currentPageIndex < totalPages - 1) showPage(currentPageIndex + 1); }
        function bookPrevPage() { if (currentPageIndex > 0) showPage(currentPageIndex - 1); }

        function updateNavBar() {
            for (let i = 1; i <= 3; i++) {
                const btn = document.getElementById(`nav-${i}`);
                if (btn) btn.classList.toggle('active-nav', i === currentPageIndex);
            }
        }

        // CONTROL POPUP BOTTOM SHEET
        function openBottomSheet() { document.getElementById('sheetOverlay').classList.add('open'); }
        function closeBottomSheet() { document.getElementById('sheetOverlay').classList.remove('open'); }

        // NAVIGASI TAB DI DALAM SETTING
        function switchSheetTab(tabName) {
            document.querySelectorAll('.sheet-nav-item').forEach(el => el.classList.remove('active-tab'));
            document.querySelectorAll('.sheet-tab-panel').forEach(el => el.classList.remove('active-panel'));

            document.getElementById(`tab-${tabName}`).classList.add('active-tab');
            document.getElementById(`panel-${tabName}`).classList.add('active-panel');
        }

        // COUNTDOWN SYSTEM
        function startCountdown() {
            const startDate = new Date(TANGGAL_JADIAN).getTime();
            setInterval(() => {
                const now = new Date().getTime();
                const diff = now - startDate;
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('c-days').innerText = days < 10 ? '0' + days : days;
                document.getElementById('c-hours').innerText = hours < 10 ? '0' + hours : hours;
                document.getElementById('c-mins').innerText = minutes < 10 ? '0' + minutes : minutes;
                document.getElementById('c-secs').innerText = seconds < 10 ? '0' + seconds : seconds;
            }, 1000);
        }

        // BUCKET LIST SYSTEM
        function toggleCheck(element) {
            const cb = element.querySelector('input');
            cb.checked = !cb.checked;
            element.classList.toggle('checked', cb.checked);
        }

        // PAP SYSTEM
        function triggerFileSelect() { document.getElementById('photoInput').click(); }
        function handlePhotoSelect(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imgPreview').src = e.target.result;
                    document.getElementById('previewContainer').style.display = 'block';
                    document.getElementById('btnWa').style.display = 'flex';
                }
                reader.readAsDataURL(file);
            }
        }
        function sendToWhatsApp() {
            const captionMsg = encodeURIComponent("Halo sayang! Aku barusan pilih foto pap terbaik aku lewat web aplikasi DARA AJA kamu nih. Aku kirim fotonya di bawah ini yaaa! 👇🥰");
            window.open(`https://api.whatsapp.com/send?phone=${NOMOR_WA}&text=${captionMsg}`, '_blank');
        }

        // SLIDER FOTO INTERNAL
        function initInnerSliders() {
            setupTrackSlider('track1', 'dots-container-1', 10);
            setupTrackSlider('track2', 'dots-container-2', 10);
            setupTrackSlider('track3', 'dots-container-3', 10);
        }
        function setupTrackSlider(trackId, dotsContainerId, totalPhotos) {
            const track = document.getElementById(trackId);
            const dots = document.getElementById(dotsContainerId).getElementsByClassName('dot');
            let activeIdx = 0; let startX = 0;

            function updateTrack() {
                track.style.transform = `translateX(-${activeIdx * 100}%)`;
                for (let i = 0; i < dots.length; i++) {
                    dots[i].classList.toggle('active', i === activeIdx);
                }
            }
            track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, {passive: true});
            track.addEventListener('touchend', (e) => {
                const diff = startX - e.changedTouches[0].clientX;
                if (diff > 45 && activeIdx < totalPhotos - 1) { activeIdx++; updateTrack(); }
                else if (diff < -45 && activeIdx > 0) { activeIdx--; updateTrack(); }
            }, {passive: true});
        }
