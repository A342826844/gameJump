var config = {
    history_highest_store_key: 'history_highest_store_key',
    frist_tips_store_key: 'frist_tips_store_key'
}

function getHistoryHighest() {
    return localStorage.getItem(config.history_highest_store_key);
}
function setHistoryHighest(value) {
    var oldValue = getHistoryHighest(value);
    if (Number(oldValue) < Number(value)) {
        localStorage.setItem(config.history_highest_store_key, value);
    }
}

function getFristTips() {
    return !!Number(sessionStorage.getItem(config.frist_tips_store_key));
}

function setFristTips() {
    sessionStorage.setItem(config.frist_tips_store_key, '1')
}