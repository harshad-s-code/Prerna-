
// =========================================
// DEAR PRERNA - SCROLLING MEMORY SCRAPBOOK
// =========================================

// CHANGE PHOTO NAMES OR CAPTIONS HERE

const photos = [
  { src: "/image1.jpg", caption: "The beginning ♡" },
  { src: "/image2.jpg", caption: "That smile!" },
  { src: "/image3.jpg", caption: "Little adventures" },
  { src: "/image4.jpg", caption: "Good old days" },
  { src: "/image5.jpg", caption: "Pure happiness" },
  { src: "/image6.jpg", caption: "A happy memory" },
  { src: "/image7.jpg", caption: "The silly moments" },
  { src: "/image8.jpg", caption: "Golden hour" },
  { src: "/image9.jpg", caption: "Never forget this" },
  { src: "/image10.jpg", caption: "Unfiltered joy" },
  { src: "/image11.jpg", caption: "One for the books" },
  { src: "/image12.jpg", caption: "Always a vibe" },
  { src: "/image13.jpg", caption: "Just because" },
  { src: "/image4.jpg", caption: "Another chapter" },
  { src: "/image5.jpg", caption: "Stay this happy" },
  { src: "/image6.jpg", caption: "To more memories ♡" }
];

const rotations = [-5, 4, -3, 6, 3, -6, 5, -4];

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const memoryGrid = document.getElementById("memoryGrid");
const filmTrack = document.getElementById("filmTrack");

// Create memory wall
photos.forEach((photo, index) => {
  const figure = document.createElement("figure");
  figure.className = "memory-card";

  figure.style.setProperty(
    "--rotation",
    `${rotations[index % rotations.length]}deg`
  );

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = `Prerna scrapbook photograph ${index + 1}`;
  img.loading = index < 4 ? "eager" : "lazy";

  const caption = document.createElement("figcaption");
  caption.textContent = photo.caption;

  figure.append(img, caption);
  memoryGrid.appendChild(figure);
});

// Create horizontal photo film
photos.slice(0, 10).forEach((photo, index) => {
  const card = document.createElement("div");
  card.className = "film-card";

  card.style.setProperty(
    "--rotation",
    `${rotations[index % rotations.length] / 2}deg`
  );

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = `Photo film memory ${index + 1}`;
  img.loading = "lazy";

  const caption = document.createElement("span");
  caption.textContent = photo.caption;

  card.append(img, caption);
  filmTrack.appendChild(card);
});

// Loading screen
const loader = document.getElementById("loader");

function hideLoader() {
  loader.classList.add("hidden");
}

if (document.readyState === "complete") {
  hideLoader();
} else {
  window.addEventListener("load", hideLoader, { once: true });
}

// Backup in case an image is slow or missing
setTimeout(hideLoader, 2500);

// Secret letter
const letterButton = document.getElementById("openLetter");
const secretLetter = document.getElementById("secretLetter");

letterButton.addEventListener("click", () => {
  const isOpen = !secretLetter.hidden;

  if (isOpen) {
    secretLetter.hidden = true;
    letterButton.innerHTML = "Open your letter <span>↗</span>";
    letterButton.setAttribute("aria-expanded", "false");
    return;
  }

  secretLetter.hidden = false;
  letterButton.innerHTML = "Close your letter <span>↑</span>";
  letterButton.setAttribute("aria-expanded", "true");

  if (window.gsap && !reducedMotion) {
    gsap.fromTo(
      ".letter-paper",
      { opacity: 0, y: 55, rotation: -4 },
      {
        opacity: 1,
        y: 0,
        rotation: -1,
        duration: 1,
        ease: "power3.out"
      }
    );
  }

  secretLetter.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "center"
  });
});

// GSAP animations
if (window.gsap && window.ScrollTrigger && !reducedMotion) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  const heroTimeline = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  heroTimeline
    .from(".eyebrow", {
      y: 25, opacity: 0, duration: .7
    })
    .from(".hero-title", {
      y: 65, opacity: 0, duration: 1
    }, "-=.3")
    .from(".hero-subtitle", {
      y: 25, opacity: 0, duration: .7
    }, "-=.5")
    .from(".hero-polaroid", {
      y: 100,
      opacity: 0,
      rotation: -20,
      scale: .8,
      duration: 1.2
    }, "-=.3")
    .from(".hero-footer-note", {
      opacity: 0, duration: .8
    }, "-=.4");

  // Hero photo parallax
  gsap.to(".hero-polaroid-wrap", {
    y: -110,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Intro reveal
  gsap.from(".intro-content", {
    y: 90,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".intro",
      start: "top 75%",
      once: true
    }
  });

  // Section heading reveals
  gsap.utils.toArray(".section-heading").forEach((heading) => {
    gsap.from(heading, {
      y: 65,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        once: true
      }
    });
  });

  // Polaroids fly in as you scroll
  gsap.utils.toArray(".memory-card").forEach((card, index) => {
    gsap.from(card, {
      y: 110,
      x: index % 2 === 0 ? -35 : 35,
      opacity: 0,
      scale: .8,
      rotation: index % 2 === 0 ? -15 : 15,
      duration: 1.1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: card,
        start: "top 92%",
        once: true
      }
    });

    // Interactive hover
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.07,
        rotation: 0,
        y: -12,
        duration: .35,
        overwrite: "auto"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        rotation: rotations[index % rotations.length],
        y: 0,
        duration: .4,
        overwrite: "auto"
      });
    });
  });

  // Spotlight photo reveals
  gsap.from(".spotlight-copy", {
    x: -75,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".spotlight-layout",
      start: "top 75%",
      once: true
    }
  });

  gsap.from(".spotlight-photo-one", {
    x: 120,
    y: 80,
    opacity: 0,
    rotation: 25,
    duration: 1.3,
    scrollTrigger: {
      trigger: ".spotlight-photos",
      start: "top 85%",
      once: true
    }
  });

  gsap.from(".spotlight-photo-two", {
    x: -100,
    y: 100,
    opacity: 0,
    rotation: -25,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".spotlight-photos",
      start: "top 85%",
      once: true
    }
  });

  // Sticky note animations
  gsap.utils.toArray(".note-card").forEach((card, index) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      scale: .85,
      duration: 1,
      delay: index * .12,
      scrollTrigger: {
        trigger: ".notes-grid",
        start: "top 80%",
        once: true
      }
    });
  });

  // Horizontal scroll photo film
  function filmDistance() {
    return Math.max(
      0,
      filmTrack.scrollWidth - window.innerWidth + 70
    );
  }

  gsap.to(filmTrack, {
    x: () => -filmDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: ".film-section",
      start: "top top",
      end: () => `+=${Math.max(filmDistance(), 1)}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true
    }
  });

  // Letter section reveal
  gsap.from(".letter-container", {
    y: 90,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".letter-section",
      start: "top 75%",
      once: true
    }
  });

  // Refresh measurements after images load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}

// Missing image fallback
document.addEventListener("error", (event) => {
  if (event.target.tagName === "IMG") {
    event.target.style.background = "#ead9cd";
    event.target.alt = "Photo not found — check the images folder";
  }
}, true);
