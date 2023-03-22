function VideoModel(option) {
    var defaultOptions = {
        src: './source/video1.mp4',
        countdown: 15,
        adTtile: '24Trade Pro',
        muted: true,
    }
    this.init = function() {
        this.option = option || defaultOptions;
        this.countdown = this.option.countdown;
        this.muted = false;
        this.timer = null;
        this.fristClose = false;
        // this.currentTime = 0;
        this.boxEl = document.getElementById('video_box');
        this.countdownEl = document.getElementById('countdown');
        this.ad_tips1El = document.getElementById('ad_tips1');
        this.ad_tips2El = document.getElementById('ad_tips2');
        this.video_idEl = document.getElementById('video_id');
        this.card_downloadEl = document.getElementById('card_download');
        this.card_download1El = document.getElementById('card_download1');
        this.noticeEl = document.getElementById('notice');
        this.mutedEl = document.getElementById('muted');
        this.closeBtnEl = document.getElementById('close_btn');
        this.continueEl = document.getElementById('continue');
        this.give_upEl = document.getElementById('give_up');

        if (this.video_idEl) {
            this.video_idEl.onended = this.playEnd.bind(this)
        }
        if (this.closeBtnEl) {
            this.closeBtnEl.onclick = this.closeEventHandle.bind(this)
        }
        if (this.give_upEl) {
            this.give_upEl.onclick = this.giveUpHandle.bind(this)
        }
        if (this.continueEl) {
            this.continueEl.onclick = this.continueHandle.bind(this)
        }

        if (this.mutedEl) {
            this.mutedEl.onclick = this.mutedHandle.bind(this, false)
        }

        if (this.noticeEl) {
            this.noticeEl.onclick = this.mutedHandle.bind(this, true)
        }

    }

    this.closeEventHandle = function() {
        // this.boxEl.style.display = 'none';
        this.video_idEl.pause();
        this.clearHandle();
        if (this.countdown <= 0) {
            this.closeHandle();
            revive()
        } else if (!this.fristClose) {
            this.fristClose = true;
            gotoOutLink()
        } else {
            document.getElementById('popup_box').style.display = 'block';

        }
    }

    // this.continuePlayHandle = function() {
    //     this.play();
    //     this.video_idEl.currentTime = this.currentTime;
    // }

    this.playStart = function() {
        this.boxEl.style.display = 'flex';

        this.ad_tips1El.style.display = 'inline';
        this.ad_tips2El.style.display = 'none';
        
        this.video_idEl.style.display = 'block';
        this.card_download1El.style.display = 'none';
        this.card_downloadEl.style.display = 'flex';

        this.video_idEl.src = this.option.src;
        this.mutedHandle(false);
        this.video_idEl.play();
        this.countdownHandle();
    }
    this.playEnd = function() {
        this.ad_tips1El.style.display = 'none';
        this.ad_tips2El.style.display = 'inline';
        this.card_download1El.style.display = 'flex';
        this.video_idEl.style.display = 'none';
        this.card_downloadEl.style.display = 'none';
        this.clearHandle();
        
    }
    this.closeHandle = function() {
        this.boxEl.style.display = 'none';
        this.video_idEl.pause();
        this.clearHandle();
    }
    this.clearHandle = function() {
        if (this.timer) clearTimeout(this.timer);
    }
    this.countdownHandle = function() {
        if (this.countdown <= 0) {
            this.ad_tips2El.style.display = 'inline';
            this.ad_tips1El.style.display = 'none';
        }
        this.timer = setTimeout(() => {
            this.countdown -= 1;
            this.countdownHandle();
        }, 1000);
        this.countdownEl.innerText = this.countdown;
    }

    this.mutedHandle = function(_muted) {
        this.muted = _muted;
        this.video_idEl.muted = this.muted;
        if (_muted) {
            this.mutedEl.style.display = 'inline-block';
            this.noticeEl.style.display = 'none';
        } else {
            this.noticeEl.style.display = 'inline-block';
            this.mutedEl.style.display = 'none';
        }
    }

    this.giveUpHandle = function() {
        document.getElementById('popup_box').style.display = 'none';
        this.closeHandle();
    }

    this.continueHandle = function() {
        document.getElementById('popup_box').style.display = 'none';
        this.video_idEl.play();
        this.countdownHandle();
    }

    this.init()


}
