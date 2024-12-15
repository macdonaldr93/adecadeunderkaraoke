(() => {
  const Selectors = {
    ListItemPressables: '.links-list__item > a, .links-list__item > button',
  };

  // Button box shadow colours
  document.querySelectorAll(Selectors.ListItemPressables).forEach(el => {
    el.addEventListener('mouseenter', randomizeLinksListItemBoxShadow);
    el.addEventListener('mouseleave', resetLinksListItemBoxShadow);
    el.addEventListener('touchstart', randomizeLinksListItemBoxShadow);
    el.addEventListener('touchend', resetLinksListItemBoxShadow);
  });

  function randomizeLinksListItemBoxShadow(event) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;

    event.currentTarget.style.boxShadow = `${randomColor} 10px 10px 0px 0px`;
  }

  function resetLinksListItemBoxShadow(event) {
    event.currentTarget.style.boxShadow = '';
  }

  // Modals
  MicroModal.init();

  // Doodle
  let doodleEnabled = false;
  let audio = null;
  const doodleBtn = document.getElementById('DoodleToggle');
  const canvas = document.getElementById('Doodle');
  doodleBtn.addEventListener('click', event => {
    event.preventDefault();
    doodleEnabled = !doodleEnabled;

    if (!audio) {
      audio = new Audio('music/fat-lip.mp3');
      audio.volume = 0.5;
    }

    if (doodleEnabled) {
      audio.play();
      canvas.style.zIndex = 0;
      doodleBtn.innerText = 'Turn off doodle mode';
    } else {
      audio.pause();
      canvas.style.zIndex = -1;
      doodleBtn.innerText = 'Turn on doodle mode';
    }
  });

  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempContext.drawImage(canvas, 0, 0);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      tempCanvas,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height,
      0,
      0,
      canvas.width,
      canvas.height,
    );
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let drawing = false;

  function getPosition(event) {
    if (event.touches) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    } else {
      return {
        x: event.clientX,
        y: event.clientY,
      };
    }
  }

  function startDrawing(event) {
    if (!doodleEnabled) {
      return;
    }
    drawing = true;
    const { x, y } = getPosition(event);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  // Draw
  function draw(event) {
    if (!drawing || !doodleEnabled) {
      return;
    }

    event.preventDefault();

    const { x, y } = getPosition(event);

    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  function stopDrawing() {
    if (!doodleEnabled) {
      return;
    }
    drawing = false;
    ctx.closePath();
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', stopDrawing);

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'c') {
      // Press 'C' to clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
})();
