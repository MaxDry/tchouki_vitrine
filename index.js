document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const buttons = document.querySelectorAll('.btn');
        for (const button of buttons) {
            button.classList.add('btn-charged');
        }

        const tchouki_logo = document.querySelector('.tchouki_logo');
        tchouki_logo.classList.add('tchouki_logo_charged');
      }, "50")

      const audioElement = document.getElementById("audio");
      audioElement.play();
});