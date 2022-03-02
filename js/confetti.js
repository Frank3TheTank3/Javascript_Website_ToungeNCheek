//The confetti SCRIPT

  var ShowConfetti = localStorage.getItem("showconf");


  //Ser Vars
  let canvas = document.getElementById("confetti");

  canvas.width = 1920;
  canvas.height = 1080;

  let ctx = canvas.getContext("2d");
  let teili = [];
  let anzahlTeil = 500;
  let lastUpdateTime = Date.now();

  //Random Farbe Funktion
  function randomFarbe() {
    let colors = ["#f00", "#0f0", "#00f", "#0ff", "#f0f", "#ff0"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  //Update Funktion
  function update() {
    let now = Date.now();
    dt = now - lastUpdateTime;

    for (let i = teili.length - 1; i >= 0; i--) {
      let t = teili[i];

      if (t.y > canvas.height) {
        teili.splice(i, 1);
        continue;
      }

      t.y += t.gravity * dt;
      t.rotation += t.rotationSpeed;
    }
    while (teili.length < anzahlTeil) {
      teili.push(new Stuck(Math.random() * canvas.width, -20));
    }
    lastUpdateTime = now;
    setTimeout(update, 1);
  }

  //Zeichne confetti auf dem bild

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    teili.forEach(function (p) {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
      ctx.rotate(p.rotation);

      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  //Erstelle ein Stuck Confetti als Object mit Parameters und x + y argument

  function Stuck(x, y) {
    this.x = x;
    this.y = y;
    this.size = (Math.random() * 0.5 + 0.75) * 20;
    this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
    this.rotation = Math.PI * 2 * Math.random();
    this.rotationSpeed = Math.PI * 2 * Math.random() * 0.001;
    this.color = randomFarbe();
  }

  //Push neue confetti teili
  while (teili.length < anzahlTeil) {
    teili.push(
      new Stuck(Math.random() * canvas.width, Math.random() * canvas.height)
    );
  }

  //Update and draw funciton aufruf

 
  if(ShowConfetti)
  { update();
    draw();

    }


 

  console.log(ShowConfetti);
