const subjectButtons = document.querySelectorAll(".subject-button");
const chapterCardsContainer = document.querySelector(".chapter-cards-container");

const chapterData = {
  "C": [
    "Introduction to programming",
    "History of programming",
    "Write a program",
    "Conditionals",
    "Loops",
    "Function and Pointers",
    "Arrays and Strings",
    "Structure and Unions",
  ],
  "C++": [
    "Introduction to C++",
    "Classes and Objects",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Templates",
    "STL",
  ],
  // Add chapter data for other subjects here
};

subjectButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const subject = button.textContent;

        const chapters = chapterData[subject] || [];


        const chapterCards = chapters.map((chapter) => {

            const card = document.createElement("div");

            card.classList.add("chapter-card");

            card.textContent = chapter;

            return card;

        });


        // chapterCardsContainer.innerHTML = "";
        chapterCardsContainer.innerHTML = '';
        chapterCardsContainer.innerHTML = '';

        // const connectingLine = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const connectingLine = document.createElementNS('/images/languages/connector.svg', 'svg');
        connectingLine.classList.add('connecting-line');
        connectingLine.setAttribute('width', '100%');
        connectingLine.setAttribute('height', '100%');
        chapterCardsContainer.appendChild(connectingLine);


        if (index % 2 === 0) {

            // If button is at even position, show cards on the right side

            chapterCardsContainer.style.left = `${

                button.offsetLeft + button.offsetWidth

            }px`;

            chapterCardsContainer.style.right = "unset";

        } else {

            // If button is at odd position, show cards on the left side

            chapterCardsContainer.style.right = `${

                window.innerWidth - button.offsetLeft

            }px`;

            chapterCardsContainer.style.left = "unset";

        }


        chapterCards.forEach((card, i) => {

            // const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.classList.add('connecting-line');
            line.setAttribute('x1', `${index % 2 === 0 ? 0 : 100}%`);
            line.setAttribute('y1', `${50 * (i + 1)}%`);
            line.setAttribute('x2', `${100 - (index % 2 === 0 ? 100 : 0)}%`);
            line.setAttribute('y2', `${50 * (i + 1)}%`);
            connectingLine.appendChild(line);

            chapterCardsContainer.appendChild(card);
        });

    });
});
