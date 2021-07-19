var books = [

    {
        year: 1984,
        name: "The Tie That Binds",
        plot: "Colorado, January 1977. Eighty-year-old Edith Goodnough lies in a hospital bed, IV taped to the back of her hand, police officer at her door. She is charged with murder. The clues: a sack of chicken feed slit with a knife, a milky-eyed dog tied outdoors one cold afternoon. The motives: the brutal business of farming and a family code of ethics as unforgiving as the winter prairie itself.In his critically acclaimed first novel, Kent Haruf delivers the sweeping tale of a woman of the American High Plains, as told by her neighbor, Sanders Roscoe. As Roscoe shares what he knows, Edith's tragedies unfold: a childhood of pre-dawn chores, a mother's death, a violence that leaves a father dependent on his children, forever enraged. Here is the story of a woman who sacrifices her happiness in the name of family--and then, in one gesture, reclaims her freedom. Breathtaking, determinedly truthful, The Tie That Binds is a powerfully eloquent tribute to the arduous demands of rural America, and of the tenacity of the human spirit.",
        img: "./img/tie-that-binds.jpg"

    },
    {
        year: 1990,
        name: "Where You Once Belonged",
        plot: "Heavy-built Jack Burdette is quite literally too big for his boots - and too big, certainly for the small-town attitudes of Holt, Colorado. But when he fails to make the grade as a college footballer, and takes a job with the local farmers' co-operative, it seems he has finally settled into the rhythm and routine of everyday life. Outward appearances can be deceptive, however, as Jack proves: returning from a weekend conference with a new wife in tow, then leaving her behind and skipping town with a bundle of other folk's money.Nearly a decade later, no one has forgiven or forgotten, and when Jack reappears, resentment runs high. Once again though, it is Jack whose presence - even more than his eight-year absence - proves the most devastating",
        img: "./img/where-you-once-belonged.jpg"

    },
    {
        year: 1999,
        name: "Plainsong",
        plot: "In the small town of Holt, Colorado, a high school teacher is confronted with raising his two boys alone after their mother retreats first to the bedroom, then altogether. A teenage girl—her father long since disappeared, her mother unwilling to have her in the house—is pregnant, alone herself, with nowhere to go. And out in the country, two brothers, elderly bachelors, work the family homestead, the only world they've ever known.From these unsettled lives emerges a vision of life, and of the town and landscape that bind them together—their fates somehow overcoming the powerful circumstances of place and station, their confusion, curiosity, dignity and humor intact and resonant. As the milieu widens to embrace fully four generations, Kent Haruf displays an emotional and aesthetic authority to rival the past masters of a classic American tradition.Utterly true to the rhythms and patterns of life, Plainsong is a novel to care about, believe in, and learn from.",
        img: "./img/plain-song.jpg"

    },
    {
        year: 2004,
        name: "Eventide",
        plot: "Kent Haruf, award-winning, bestselling author of Plainsong returns to the high-plains town of Holt, Colorado, with a novel of masterful authority. The aging McPheron brothers are learning to live without Victoria Roubideaux, the single mother they took in and who has now left their ranch to start college. A lonely young boy stoically cares for his grandfather while a disabled couple tries to protect their violent relative. As these lives unfold and intersect, Eventide unveils the immemorial truths about human beings: their fragility and resilience, their selfishness and goodness, and their ability to find family in one another.",
        img: "./img/eventide.jpg"

    },
    {
        year: 2013,
        name: "Benediction",
        plot: "When Dad Lewis is diagnosed with terminal cancer, he and his wife must work together, along with their daughter, to make his final days as comfortable as possible, despite the bitter absence of their estranged son. Next door, a young girl moves in with her grandmother and contends with the memories that Dad’s condition stirs up of her own mother’s death. A newly arrived preacher attempts to mend his strained relationships with his wife and son, and soon faces the disdain of his congregation when he offers more than they are used to getting on Sunday mornings. And throughout, an elderly widow and her middle-aged daughter do all they can to ease the pain of their friends and neighbors.",
        img: "./img/benediction.jpg"

    },

    {
        year: 2015,
        name: "Our Souls at Night",
        plot: "A spare yet eloquent, bittersweet yet inspiring story of a man and a woman who, in advanced age, come together to wrestle with the events of their lives and their hopes for the imminent future.In the familiar setting of Holt, Colorado, home to all of Kent Haruf's inimitable fiction, Addie Moore pays an unexpected visit to a neighbor, Louis Waters. Her husband died years ago, as did his wife, and in such a small town they naturally have known of each other for decades; in fact, Addie was quite fond of Louis's wife. His daughter lives hours away in Colorado Springs, her son even farther away in Grand Junction, and Addie and Louis have long been living alone in houses now empty of family, the nights so terribly lonely, especially with no one to talk with.Their brave adventures - their pleasures and their difficulties - are hugely involving and truly resonant, making Our Souls at Night the perfect final installment to this beloved writer's enduring contribution to American literature.",
        img: "./img/our-souls-at-night.jpg"

    }
];

//Selecting the elements

const bookname = document.querySelector('.book-title');
const prev = document.querySelector('.left-arrow');
const next = document.querySelector('.right-arrow');
const bookYear = document.querySelector('.book-year');
const bookPlot = document.querySelector('.book-plot');



//Logic

let counter = 1;

//Click event for Next arrow
next.addEventListener('click', () => {

    if (counter < books.length) {
        console.log(counter);
        bookname.textContent = books[counter].name;
        bookYear.textContent = books[counter].year;
        bookPlot.textContent = books[counter].plot;
        counter++;
    } else {
        counter = 0;

    }
});

//Click event for Previous Arrow

prev.addEventListener('click', () => {


    if (counter > 0) {
        console.log(counter);
        bookname.textContent = books[counter].name;
        bookYear.textContent = books[counter].year;
        bookPlot.textContent = books[counter].plot;
        counter--;
    } else {
        counter = 5;
    }
});
