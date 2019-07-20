const navigationAnimator = function(target, height, currentPosition) {
  if (currentPosition >= (height * 0.75 - 15)) {
    target.classList.add('nav--active');
  } else {
    target.classList.remove('nav--active');
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const primaryNavigation = document.querySelector('#primary-navigation');
  if (primaryNavigation) {
    navigationAnimator(primaryNavigation, window.innerHeight, window.pageYOffset);
    document.addEventListener('scroll', function() {
      navigationAnimator(primaryNavigation, window.innerHeight, window.pageYOffset);
    });
  }
});
