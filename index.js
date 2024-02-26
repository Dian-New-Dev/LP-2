

window.onscroll = function() {stickyFunction()};

const mainDiv1 = document.getElementById('mainDiv1');
const sticky = mainDiv1.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    mainDiv1.classList.add('mainDiv1-sticky');
  } else {
    mainDiv1.classList.remove('mainDiv1-sticky');
  }
}
