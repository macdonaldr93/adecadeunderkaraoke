console.log('I am your elder');

playAudioOnLogoClick();
openBookmarkOnClick();
listenForSongRequestSubmit();

function playAudioOnLogoClick() {
  const fatLipElement = document.getElementById('PlayFatLip');
  const fatLipContentElement = document.getElementById('PlayFatLipContent');

  if (fatLipElement) {
    let playing = false;
    const audio = new Audio('fat-lip.mp3');

    fatLipElement.addEventListener('click', event => {
      event.preventDefault();

      if (playing) {
        audio.pause();
        playing = false;

        if (fatLipContentElement) {
          fatLipContentElement.textContent = '(click me)';
        }
      } else {
        audio.play();
        playing = true;

        if (fatLipContentElement) {
          fatLipContentElement.textContent = '(click me again to pause)';
        }
      }
    });
  }
}

function openBookmarkOnClick() {
  /** @type NodeListOf<HTMlAnchorElement> */
  const bookmarkElements = document.querySelectorAll('a[data-bookmark]');

  bookmarkElements.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();

      if (window.sidebar && window.sidebar.addPanel) {
        // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
      } else if (window.external && 'AddFavorite' in window.external) {
        // IE Favorite
        window.external.AddFavorite(location.href, document.title);
      } else if (window.opera && window.print) {
        // Opera Hotlist
        this.title = document.title;
        return true;
      } else {
        // webkit - safari/chrome
        alert(
          'Press ' +
            (navigator.userAgent.toLowerCase().indexOf('mac') != -1
              ? 'Command/Cmd'
              : 'CTRL') +
            ' + D to bookmark this page.',
        );
      }
    });
  });
}

function listenForSongRequestSubmit() {
  /** @type HTMLFormElement */
  const songRequestForm = document.getElementById('SongRequestForm');

  if (songRequestForm) {
    songRequestForm.addEventListener('submit', event => {
      event.preventDefault();
      alert('Song request received. The elders will review');
    });
  }
}
