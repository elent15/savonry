const video = () => {
  const videoBtn = document.querySelector('.video__play-btn');

  if (videoBtn) {
    videoBtn.addEventListener('click', () => {
      const videoContainer = videoBtn.closest('.video__container');
      const videoBg = videoContainer.querySelector('.video__bg')
      const videoContent = videoContainer.querySelector('.video__content')
      const src = videoContent.dataset.src;

      videoBtn.classList.add('video__play-btn--hidden');
      videoBg.remove();
      videoContent.insertAdjacentHTML('afterbegin', '<iframe class="video__iframe" src="' + src + '" frameborder="0" allow="autoplay;" allowfullscreen></iframe>');
    });
  }
}

video();
