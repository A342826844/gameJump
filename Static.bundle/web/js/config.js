var config = {
    history_highest_store_key: 'history_highest_store_key',
    day_replay_count_store_key: 'day_replay_count_store_key',
    frist_tips_store_key: 'frist_tips_store_key',
    first_ad_href: 'https://play.google.com/store/apps/details?id=com.dayspro.trade.app&pli=1'
}
var MILLISECONDS_IN_DAY = 60 * 60 * 24 * 1000

function getHistoryHighest() {
    return localStorage.getItem(config.history_highest_store_key);
}
function setHistoryHighest(value) {
    var oldValue = getHistoryHighest(value);
    if (Number(oldValue) < Number(value)) {
        localStorage.setItem(config.history_highest_store_key, value);
    }
}

function getDailyEndTime() {
    var now = Date.now();
    return Math.floor(now / MILLISECONDS_IN_DAY) * MILLISECONDS_IN_DAY + MILLISECONDS_IN_DAY;
}

function getReplayCount() {
    var _res = localStorage.getItem(config.day_replay_count_store_key);
    if (_res) {
        var res = JSON.parse(_res);
        if (res.expirationTime > Date.now()) return Number(res.value)
    }
    return 0
}
function setReplayCount(value) {
    var expirationTime = getDailyEndTime();
    var data = {
        expirationTime: expirationTime,
        value,
    }
    localStorage.setItem(config.day_replay_count_store_key, JSON.stringify(data));
}

function getFristTips() {
    return !!Number(sessionStorage.getItem(config.frist_tips_store_key));
}

function setFristTips() {
    sessionStorage.setItem(config.frist_tips_store_key, '1')
}

function gotoOutLink() {
    window.open(config.first_ad_href)
}