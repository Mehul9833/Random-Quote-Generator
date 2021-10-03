let newQuote = document.getElementById("new-quote");
let quoteWriterName = document.getElementById('quote-writter');
let title = document.getElementById('title');
let morningRadio = document.getElementById('morning');
let eveningRadio = document.getElementById('evening');
let nightRadio = document.getElementById('night');
let changeBackground = document.getElementById('change-background');
let timing = document.getElementById('timing');
let changeColorBackground = document.getElementById('change-color-background');

morningRadio.addEventListener("click", function () {
  changeBackground.style.backgroundImage = "url('https://res.cloudinary.com/mehulprojectimages/image/upload/v1632520573/Random%20Quote%20Generator/Morning-large-image_gnltxa.jpg')";
  timing.innerHTML = "Morning";
  newQuote.innerHTML = "Write it on your heart that every day is the best day in the year."
  quoteWriterName.innerHTML = "Ralph Waldo Emerson";
  changeColorBackground.style.backgroundColor = "hsla(0, 100%, 90%, 0.3)";
});

eveningRadio.addEventListener("click", function () {
  changeBackground.style.backgroundImage = "url('https://res.cloudinary.com/mehulprojectimages/image/upload/v1632520789/Random%20Quote%20Generator/Evening-large-image_kmpbtc.jpg')";
  timing.innerHTML = "Evening";
  newQuote.innerHTML = "Evenings are the beautifully sweet spot between the harsh light of the day and the dead darkness of night."
  quoteWriterName.innerHTML = "Annonymuos";
  changeColorBackground.style.backgroundColor = "hsla(0, 100%, 90%, 0.3)";
});

nightRadio.addEventListener("click", function () {
  changeBackground.style.backgroundImage = "url('https://res.cloudinary.com/mehulprojectimages/image/upload/v1632521025/Random%20Quote%20Generator/Night-large-image_rbvqnu.jpg')";
  timing.innerHTML = "Night";
  newQuote.innerHTML = "I like the night. Without the dark, we'd never see the stars."
  quoteWriterName.innerHTML = "Stephenie Meyer";
  changeColorBackground.style.backgroundColor = "hsla(0, 100%, 90%, 0.3)";
});


function generateQuote() {
  if (morningRadio.checked == true) {
    let morningQuotes = [
      "",
      "Write it on your heart that every day is the best day in the year.",
      "I get up every morning and it’s going to be a great day. You never know when it’s going to be over, so I refuse to have a bad day.",
      "Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.",
      "I wake up every morning at nine and grab for the morning paper. Then I look at the obituary page. If my name is not on it, I get up.",
      "Every morning, I wake up saying, ‘I’m still alive, a miracle.’ And so I keep on pushing",
      "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.",
      "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.",
      "I like freedom. I wake up in the morning and say, ‘I don’t know, should I have a popsicle or a donut?’ You know, who knows?",
      "Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.",
      "Some people dream of success, while other people get up every morning and make it happen.",
    ];
    let quoteWriter = [
      "",
      "Ralph Waldo Emerson",
      "Paul Henderson",
      "Nanea Hoffman",
      "Benjamin Franklin",
      "Jim Carrey",
      "Larry Page",
      "Marcus Aurelius",
      "Oscar Nunez",
      "Yoko Ono",
      "Wayne Huizenga"
    ];
    let randomQuoteGenerate = Math.floor(Math.random() * 10) + 1;
    newQuote.innerHTML = morningQuotes[randomQuoteGenerate];
    quoteWriterName.innerHTML = quoteWriter[randomQuoteGenerate];

  } else if (eveningRadio.checked == true) {
    let eveningQuotes = [
      "",
      "Evenings are the beautifully sweet spot between the harsh light of the day and the dead darkness of night.",
      "This evening is as brief as the twinkling of an eye yet such twinklings is what eternity is made of.",
      "The evening's the best part of the day. You've done your day's work. Now you can put your feet up and enjoy it.",
      "The lights begin to twinkle from the rocks: The long day wanes: the slow moon climbs: the deep Moans round with many voices.",
      "In the evenings the art of building gave way to that of music, which is architecture, too, though invisible.",
      "When the evening shadows and the stars appear and there is no one there to dry your tears. I could hold you for a million years. To make you feel my love.",
      "One evening you may learn about enlightenment, koans, meditation and personal power.",
      "Each morning sees some task begin, Each evening sees it close; Something attempted, something done, Has earned a night's repose.",
      "The evening praises the day, and the morning a frost.",
      "Evening is a time of real experimentation. You never want to look the same way.",
    ];
    let quoteWriter = [
      "",
      "Annonymuos",
      "Fred Rogers",
      "Kazuo Ishiguro",
      "Lord Alfred Tennyson",
      "Marguerite Yourcenar",
      "Adele",
      "Frederick Lindemann",
      "Henry Wadsworth Longfellow",
      "George Herbert",
      "Donna Karan"
    ];
    let randomQuoteGenerate = Math.floor(Math.random() * 10) + 1;
    newQuote.innerHTML = eveningQuotes[randomQuoteGenerate];
    quoteWriterName.innerHTML = quoteWriter[randomQuoteGenerate];

  } else if (nightRadio.checked == true) {
    let nightQuotes = [
      "",
      "I like the night. Without the dark, we'd never see the stars.",
      "Those who dream by day are cognizant of many things which escape those who dream only by night.",
      "I have loved the stars too fondly to be fearful of the night.",
      "The darker the night, the brighter the stars, The deeper the grief, the closer is God!",
      "Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.",
      "The night is the hardest time to be alive and 4am knows all my secrets.",
      "This is night, Diddykins. That's what we call it when it goes all dark like this. ",
      "The longest way must have its close - the gloomiest night will wear on to a morning.",
      "Some nights are made for torture, or reflection, or the savoring of loneliness.",
      "It was the possibility of darkness that made the day seem so bright.",
    ];
    let quoteWriter = [
      "",
      "Stephenie Meyer",
      "Edgar Allan Poe",
      "Sarah Williams",
      "Fyodor Dostoevsky",
      "Mahatma Gandhi",
      "Poppy Z. Brite",
      "J.K. Rowling",
      "Harriet Beecher Stowe",
      "Poppy Z.Brite",
      "Stephen King"
    ];
    let randomQuoteGenerate = Math.floor(Math.random() * 10) + 1;
    newQuote.innerHTML = nightQuotes[randomQuoteGenerate];
    quoteWriterName.innerHTML = quoteWriter[randomQuoteGenerate];
  }

};