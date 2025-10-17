const timeEl = document.querySelector("[data-testid='test-user-time']");
function updateTime() {
    const now = new Date();
    //  returning its result:
    return now.toLocaleTimeString(); 
}
setInterval (function() {
const currentTime = updateTime();
timeEl.textContent = currentTime;
timeEl.textContent = updateTime();
}, 1000)