
// ============================================
// DEAR PRERNA — INTERACTIVE VINTAGE SCRAPBOOK
// ============================================

// 1. PHOTOGRAPHS AND PERSONAL MESSAGES
// Keep your existing /image1.jpg image paths.

const memories = [
  {
    image: "/image1.jpg",
    caption: "Pure happiness ♡",
    title: "You are genuinely beautiful.",
    message:
      "Prerna, you're gorgeous, but what makes you even more beautiful is your kind heart. Never forget how wonderful you are, inside and out."
  },
  {
    image: "/image2.jpg",
    caption: "A happy memory",
    title: "You have a beautiful heart.",
    message:
      "You are one of those people who make others feel comfortable and valued. Your kindness is something I truly appreciate about you."
  },
  {
    image: "/image3.jpg",
    caption: "The silly moments",
    title: "Never lose your smile.",
    message:
      "Your smile has its own charm. I hope life gives you a thousand reasons to smile, even on the days when things don't go as planned."
  },
  {
    image: "/image4.jpg",
    caption: "The little adventures",
    title: "Thank you for being there.",
    message:
      "Thank you for supporting me, listening to me, and being there when I needed someone. I may not say it every time, but it means a lot to me."
  },
  {
    image: "/image5.jpg",
    caption: "Golden memories",
    title: "You deserve wonderful things.",
    message:
      "I hope you receive the same kindness, care, and happiness that you give to others. You genuinely deserve good things in life."
  },
  {
    image: "/image6.jpg",
    caption: "That lovely smile",
    title: "Believe in yourself.",
    message:
      "Even when you doubt yourself, remember that you're capable of achieving amazing things. Have faith in your journey and never underestimate yourself."
  },
  {
    image: "/image7.jpg",
    caption: "Little moments",
    title: "Your strength inspires me.",
    message:
      "You might not realize it, but you're stronger than you think. Whatever challenges come your way, I hope you always find the courage to keep going."
  },
  {
    image: "/image8.jpg",
    caption: "A day to remember",
    title: "Thank you for understanding.",
    message:
      "Sometimes having someone who listens without judging makes all the difference. Thank you for being that kind of friend."
  },
  {
    image: "/image9.jpg",
    caption: "The good old days",
    title: "Stay wonderfully yourself.",
    message:
      "Never feel like you need to change your personality to please everyone. Your uniqueness is what makes you special."
  },
  {
    image: "/image10.jpg",
    caption: "A little sunshine",
    title: "You make a difference.",
    message:
      "The little things you do for people may seem ordinary to you, but they can mean so much to someone else. That's a beautiful quality to have."
  },
  {
    image: "/image11.jpg",
    caption: "Caught on camera",
    title: "I'm proud of you.",
    message:
      "I'm proud of the effort you put into becoming a better version of yourself. Keep learning, growing, and chasing the things that make you happy."
  },
  {
    image: "/image12.jpg",
    caption: "A perfect little day",
    title: "It's okay to have difficult days.",
    message:
      "You don't have to be strong or cheerful every single day. Take your time, rest when you need to, and remember that difficult moments don't define you."
  },
  {
    image: "/image13.jpg",
    caption: "Unforgettable",
    title: "Your friendship matters.",
    message:
      "I'm grateful that life gave us the chance to become friends. Thank you for the conversations, the laughter, and the memories we've shared."
  },
 
{
  image: "/image14.jpg",
  caption: "Smiles and stories",
  title: "Never stop dreaming.",
  message: "Whatever dreams you carry..."
},
{
  image: "/image15.jpg",
  caption: "One for the album",
  title: "You are appreciated.",
  message: "Sometimes we forget..."
},
{
  image: "/image16.jpg",
  caption: "To be continued...",
  title: "Here's to more memories.",
  message: "Thank you for being part..."
}
];

// 2. BUILD INDIVIDUAL BOOK PAGES

const pages = memories.map((memory, index) => ({
  type: "photo",
  memoryIndex: index,
  kicker: `MEMORY ${String(index + 1).padStart(2, "0")}`,
  title: [
    "A Little Sunshine",
    "The Beautiful Things",
    "Reasons to Smile",
    "Thank You, Friend",
    "All the Good Things",
    "Keep Believing",
    "A Strong Soul",
    "Someone Who Listens",
    "Simply Being You",
    "The Little Kindnesses",
    "Growing Every Day",
    "On Difficult Days",
    "The Gift of Friendship",
    "Dream Big",
    "A Little Reminder",
    "More Memories Await"
  ][index],
  quote: [
    "some people just make life brighter ♡",
    "kindness never goes out of style",
    "a smile worth remembering",
    "the little things mean the most",
    "good things are coming",
    "you've got this, always",
    "stronger than you know",
    "thank you for listening",
    "the original is always special",
    "little gestures, big meaning",
    "one step at a time",
    "even flowers need rainy days",
    "so glad we're friends",
    "your story is still unfolding",
    "you matter more than you know",
    "the best is yet to come"
  ][index]
}));

// Final two pages form the last spread.

pages.push({
  type: "letter",
  kicker: "A LETTER FOR PRERNA",
  title: "Dear Prerna,",
  paragraphs: [
    "I made this little book because sometimes a simple thank you doesn't feel like enough.",
    "Thank you for your kindness, your patience, your support, and the little moments that have become lovely memories.",
    "I hope you always remember that you are appreciated, not just on your best days, but on the difficult ones too."
  ],
  quote: "with friendship and gratitude ♡"
});

pages.push({
  type: "ending",
  kicker: "THE LAST PAGE",
  title: "To be continued...",
  paragraphs: [
    "May you always find happiness in the little things.",
    "May you keep growing, smiling, and believing in yourself.",
    "And may we have many more wonderful memories to add to this book."
  ],
  quote: "Your Friend ♡"
});

// 3. ELEMENT REFERENCES

const bookStage = document.querySelector(".book-stage");
const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");

const leftNumber = document.getElementById("leftNumber");
const rightNumber = document.getElementById("rightNumber");

const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");

const chapterName = document.getElementById("chapterName");
const pageCount = document.getElementById("pageCount");

const turnSheet = document.getElementById("turnSheet");

const messageModal = document.getElementById("messageModal");
const messageTitle = document.getElementById("messageTitle");
const messageBody = document.getElementById("messageBody");

const closeModalButton = document.getElementById("closeModal");
const messageBackdrop = document.getElementById("messageBackdrop");

const mobileQuery = window.matchMedia("(max-width: 700px)");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

let currentIndex = 0;
let isTurning = false;
let lastWheelTurn = 0;
let touchStartX = 0;
let touchStartY = 0;
let previousFocus = null;

// 4. HELPER FUNCTIONS

function isMobile() {
  return mobileQuery.matches;
}

function getStep() {
  return isMobile() ? 1 : 2;
}

function getLastIndex() {
  return isMobile()
    ? pages.length - 1
    : pages.length - 2;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

// 5. RENDER A PAGE

function renderPage(container, pageData) {
  container.replaceChildren();

  if (!pageData) return;

  const kicker = createElement(
    "span",
    "page-kicker",
    pageData.kicker
  );

  const title = createElement(
    "h3",
    "page-title",
    pageData.title
  );

  container.append(kicker, title);

  if (pageData.type === "photo") {
    const memory = memories[pageData.memoryIndex];

    const photoButton = createElement(
      "button",
      "book-polaroid"
    );

    photoButton.type = "button";
    photoButton.setAttribute(
      "aria-label",
      `Read a special message for memory ${pageData.memoryIndex + 1}`
    );

    const rotations = [-6, 4, -3, 7, -5, 3];

    photoButton.style.setProperty(
      "--tilt",
      `${rotations[pageData.memoryIndex % rotations.length]}deg`
    );

    photoButton.style.setProperty(
      "--float-delay",
      `${-(pageData.memoryIndex % 4)}s`
    );

    const image = createElement("img");

    image.src = memory.image;
    image.alt = memory.caption;
    image.loading = "lazy";

    const caption = createElement(
      "span",
      "caption",
      memory.caption
    );

    photoButton.append(image, caption);

    photoButton.addEventListener("click", () => {
      openMessage(pageData.memoryIndex);
    });

    container.append(photoButton);

    const quote = createElement(
      "p",
      "page-quote",
      pageData.quote
    );

    container.append(quote);

    const flower = createElement(
      "span",
      "paper-decoration decoration-flower",
      "✿"
    );

    const heart = createElement(
      "span",
      "paper-decoration decoration-heart",
      "♡"
    );

    const star = createElement(
      "span",
      "paper-decoration decoration-star",
      "✧"
    );

    container.append(flower, heart, star);

  } else {
    // Letter and ending pages
    pageData.paragraphs.forEach((paragraph) => {
      const p = createElement(
        "p",
        "page-small-note",
        paragraph
      );

      container.append(p);
    });

    const quote = createElement(
      "p",
      "page-quote",
      pageData.quote
    );

    const stamp = createElement(
      "span",
      "page-stamp",
      pageData.type === "letter"
        ? "WITH GRATITUDE ♡"
        : "END OF VOLUME 01"
    );

    container.append(quote, stamp);
  }
}

// 6. DISPLAY CURRENT PAGES

function renderBook() {
  const mobile = isMobile();

  if (mobile) {
    // Single page on phones
    renderPage(leftContent, null);
    renderPage(rightContent, pages[currentIndex]);

    leftNumber.textContent = "";
    rightNumber.textContent = String(
      currentIndex + 1
    ).padStart(2, "0");

  } else {
    // Two facing pages on desktop
    renderPage(leftContent, pages[currentIndex]);
    renderPage(rightContent, pages[currentIndex + 1]);

    leftNumber.textContent = String(
      currentIndex + 1
    ).padStart(2, "0");

    rightNumber.textContent = String(
      currentIndex + 2
    ).padStart(2, "0");
  }

  const currentPage = pages[currentIndex];

  chapterName.textContent = currentPage.title;

  const totalSpreads = Math.ceil(
    pages.length / getStep()
  );

  const currentSpread = Math.floor(
    currentIndex / getStep()
  ) + 1;

  pageCount.textContent =
    `${String(currentSpread).padStart(2, "0")} / ` +
    `${String(totalSpreads).padStart(2, "0")}`;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex >= getLastIndex();
}

// 7. PAGE TURNING ANIMATION

function turnPage(direction) {
  if (isTurning) return;

  const nextIndex = currentIndex + direction * getStep();

  if (nextIndex < 0 || nextIndex > getLastIndex()) {
    return;
  }

  isTurning = true;

  // Mobile uses a simpler paper transition.
  if (isMobile() || reducedMotion.matches) {
    currentIndex = nextIndex;
    renderBook();
    isTurning = false;
    return;
  }

  turnSheet.classList.remove(
    "flipping",
    "reverse"
  );

  // Restart the animation reliably.
  void turnSheet.offsetWidth;

  if (direction < 0) {
    turnSheet.classList.add("reverse");
  }

  turnSheet.classList.add("flipping");

  // Change the visible pages halfway through.
  window.setTimeout(() => {
    currentIndex = nextIndex;
    renderBook();
  }, 400);

  window.setTimeout(() => {
    turnSheet.classList.remove(
      "flipping",
      "reverse"
    );

    isTurning = false;
  }, 820);
}

// 8. BUTTON NAVIGATION

prevButton.addEventListener("click", () => {
  turnPage(-1);
});

nextButton.addEventListener("click", () => {
  turnPage(1);
});

// 9. SCROLL-CONTROLLED PAGE TURNING
// Only captures wheel input over the book itself.
// The rest of the website scrolls normally.

bookStage.addEventListener("wheel", (event) => {
  if (messageModal.classList.contains("active")) {
    return;
  }

  const direction = Math.sign(event.deltaY);

  if (direction === 0) return;

  const canTurn = direction > 0
    ? currentIndex < getLastIndex()
    : currentIndex > 0;

  if (!canTurn) return;

  event.preventDefault();

  const now = Date.now();

  if (isTurning || now - lastWheelTurn < 950) {
    return;
  }

  lastWheelTurn = now;
  turnPage(direction);

}, { passive: false });

// 10. SWIPE GESTURES FOR MOBILE

bookStage.addEventListener("touchstart", (event) => {
  if (event.touches.length !== 1) return;

  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;

}, { passive: true });

bookStage.addEventListener("touchend", (event) => {
  if (event.changedTouches.length !== 1) return;

  const deltaX =
    event.changedTouches[0].clientX - touchStartX;

  const deltaY =
    event.changedTouches[0].clientY - touchStartY;

  // Only react to deliberate horizontal swipes.
  if (
    Math.abs(deltaX) > 55 &&
    Math.abs(deltaX) > Math.abs(deltaY) * 1.3
  ) {
    turnPage(deltaX < 0 ? 1 : -1);
  }

}, { passive: true });

// 11. OPEN PERSONALIZED MESSAGE

function openMessage(memoryIndex) {
  const memory = memories[memoryIndex];

  if (!memory) return;

  previousFocus = document.activeElement;

  messageTitle.textContent = memory.title;
  messageBody.textContent = memory.message;

  messageModal.classList.add("active");
  messageModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  closeModalButton.focus();
}

// 12. CLOSE PERSONALIZED MESSAGE

function closeMessage() {
  messageModal.classList.remove("active");
  messageModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (previousFocus && previousFocus.isConnected) {
    previousFocus.focus();
  }
}

closeModalButton.addEventListener("click", closeMessage);
messageBackdrop.addEventListener("click", closeMessage);

// 13. KEYBOARD NAVIGATION

document.addEventListener("keydown", (event) => {
  if (messageModal.classList.contains("active")) {
    if (event.key === "Escape") {
      closeMessage();
    }

    if (event.key === "Tab") {
      event.preventDefault();
      closeModalButton.focus();
    }

    return;
  }

  const active = document.activeElement;

  if (
    active &&
    ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)
  ) {
    return;
  }

  const bookRect = bookStage.getBoundingClientRect();

  const bookVisible =
    bookRect.top < window.innerHeight &&
    bookRect.bottom > 0;

  if (!bookVisible) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    turnPage(1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    turnPage(-1);
  }
});

// 14. RESPONSIVE LAYOUT

function handleLayoutChange() {
  // Keep the same memory visible when
  // switching between desktop and mobile.
  if (!isMobile()) {
    currentIndex = Math.floor(currentIndex / 2) * 2;
  }

  currentIndex = Math.min(
    currentIndex,
    getLastIndex()
  );

  renderBook();
}

mobileQuery.addEventListener(
  "change",
  handleLayoutChange
);

// 15. INITIALIZE

renderBook();

console.log("Dear Prerna scrapbook is ready ♡");
