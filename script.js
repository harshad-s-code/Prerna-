
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
  image: "/image4.jpg",
  caption: "Smiles and stories",
  title: "Never stop dreaming.",
  message: "Whatever dreams you carry in your heart, I hope you find the confidence and opportunities to make them real. Keep moving forward at your own pace."
},
{
  image: "/image9.jpg",
  caption: "One for the album",
  title: "You are appreciated.",
  message: "Sometimes we forget how much our presence means to others. So here's your reminder: you're appreciated, your efforts matter, and your friendship is valued."
},
{
  image: "/image1.jpg",
  caption: "To be continued...",
  title: "Here's to more memories.",
  message: "Thank you for being part of so many good moments. I hope the coming years bring you happiness, success, wonderful experiences, and countless reasons to smile."
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


/* ============================================
   3. REALISTIC STPAGEFLIP BOOK ENGINE
============================================ */

const flipBookElement = document.getElementById("flipBook");
const bookStage = document.querySelector(".book-stage");

const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const chapterName = document.getElementById("chapterName");
const pageCount = document.getElementById("pageCount");

const messageModal = document.getElementById("messageModal");
const messageTitle = document.getElementById("messageTitle");
const messageBody = document.getElementById("messageBody");
const closeModalButton = document.getElementById("closeModal");
const messageBackdrop = document.getElementById("messageBackdrop");

let pageFlip = null;
let previousFocus = null;
let lastWheelTurn = 0;

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

/* ============================================
   4. BUILD PAGE CONTENT
============================================ */

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

    const image = createElement("img");
    image.src = memory.image;
    image.alt = memory.caption;
    image.loading = "eager";
    image.draggable = false;

    const caption = createElement(
      "span",
      "caption",
      memory.caption
    );

    photoButton.append(image, caption);

    photoButton.addEventListener("click", (event) => {
      event.stopPropagation();
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
    pageData.paragraphs.forEach((paragraph) => {
      container.append(
        createElement(
          "p",
          "page-small-note",
          paragraph
        )
      );
    });

    container.append(
      createElement(
        "p",
        "page-quote",
        pageData.quote
      )
    );

    container.append(
      createElement(
        "span",
        "page-stamp",
        pageData.type === "letter"
          ? "WITH GRATITUDE ♡"
          : "END OF VOLUME 01"
      )
    );
  }
}

/* ============================================
   5. CREATE ALL SCRAPBOOK PAGES
============================================ */

function buildScrapbookPages() {
  const elements = [];

  pages.forEach((pageData, index) => {
    const page = createElement(
      "div",
      "scrap-page"
    );

    const inner = createElement(
      "div",
      "page-inner"
    );

    renderPage(inner, pageData);

    const number = createElement(
      "span",
      "scrap-page-number",
      String(index + 1).padStart(2, "0")
    );

    page.append(inner, number);
    flipBookElement.appendChild(page);

    elements.push(page);
  });

  return elements;
}

/* ============================================
   6. UPDATE NAVIGATION INDICATOR
============================================ */

function updateBookControls() {
  if (!pageFlip) return;

  const index = pageFlip.getCurrentPageIndex();
  const total = pageFlip.getPageCount();

  const currentPage = pages[index];

  chapterName.textContent = currentPage
    ? currentPage.title
    : "The Prerna Archives";

  const isPortrait =
    pageFlip.getOrientation() === "portrait";

  const spreadNumber = isPortrait
    ? index + 1
    : Math.floor(index / 2) + 1;

  const totalSpreads = isPortrait
    ? total
    : Math.ceil(total / 2);

  pageCount.textContent =
    `${String(spreadNumber).padStart(2, "0")} / ` +
    `${String(totalSpreads).padStart(2, "0")}`;

  prevButton.disabled = index <= 0;
  nextButton.disabled = index >= total - 1;
}

/* ============================================
   7. INITIALIZE REALISTIC PAGE FLIP
============================================ */

function initializeScrapbook() {
  if (!window.St || !window.St.PageFlip) {
    console.error(
      "StPageFlip failed to load. Check the CDN script."
    );
    return;
  }

  const pageElements = buildScrapbookPages();

  pageFlip = new St.PageFlip(flipBookElement, {
    width: 460,
    height: 620,

    size: "stretch",

    minWidth: 250,
    maxWidth: 560,

    minHeight: 340,
    maxHeight: 750,

    flippingTime: 1800,

    drawShadow: true,
    maxShadowOpacity: 0.85,

    showCover: false,
    usePortrait: true,

    startPage: 0,
    startZIndex: 10,

    autoSize: true,

    mobileScrollSupport: true,
    swipeDistance: 35,

    useMouseEvents: true,
    clickEventForward: true,

    showPageCorners: true,
    disableFlipByClick: true
  });

  pageFlip.on("flip", () => {
    updateBookControls();
  });

  pageFlip.on("changeOrientation", () => {
    updateBookControls();
  });

  pageFlip.on("init", () => {
    updateBookControls();
  });

  pageFlip.loadFromHTML(pageElements);

  updateBookControls();

  console.log(
    "Dear Prerna realistic scrapbook is ready ♡"
  );
}

/* ============================================
   8. PREVIOUS / NEXT BUTTONS
============================================ */

prevButton.addEventListener("click", () => {
  if (!pageFlip) return;
  pageFlip.flipPrev("bottom");
});

nextButton.addEventListener("click", () => {
  if (!pageFlip) return;
  pageFlip.flipNext("bottom");
});

/* ============================================
   9. SCROLL TO TURN PAGES
============================================ */

bookStage.addEventListener(
  "wheel",
  (event) => {
    if (!pageFlip) return;

    if (messageModal.classList.contains("active")) {
      return;
    }

    const direction = Math.sign(event.deltaY);

    if (direction === 0) return;

    const index = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    const canTurn = direction > 0
      ? index < total - 1
      : index > 0;

    if (!canTurn) return;

    event.preventDefault();

    const now = Date.now();

    if (now - lastWheelTurn < 2000) {
      return;
    }

    if (pageFlip.getState() !== "read") {
      return;
    }

    lastWheelTurn = now;

    if (direction > 0) {
      pageFlip.flipNext("bottom");
    } else {
      pageFlip.flipPrev("bottom");
    }
  },
  { passive: false }
);

/* ============================================
   10. PHOTO MESSAGE POPUP
============================================ */

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

function closeMessage() {
  messageModal.classList.remove("active");
  messageModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (previousFocus && previousFocus.isConnected) {
    previousFocus.focus();
  }
}

closeModalButton.addEventListener(
  "click",
  closeMessage
);

messageBackdrop.addEventListener(
  "click",
  closeMessage
);

/* ============================================
   11. KEYBOARD CONTROLS
============================================ */

document.addEventListener("keydown", (event) => {
  if (messageModal.classList.contains("active")) {
    if (event.key === "Escape") {
      closeMessage();
    }
    return;
  }

  if (!pageFlip) return;

  const active = document.activeElement;

  if (
    active &&
    ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)
  ) {
    return;
  }

  const rect = bookStage.getBoundingClientRect();

  const bookVisible =
    rect.top < window.innerHeight &&
    rect.bottom > 0;

  if (!bookVisible) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    pageFlip.flipNext("bottom");
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    pageFlip.flipPrev("bottom");
  }
});

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
