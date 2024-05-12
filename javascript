console.clear();

const library = {
  1: {
    Title: "Blood & Reign",
    Instalment: "3rd Book in series",
    Pages: "354 Pages",
    releaseDate: "11th November 2022",
    Genre: "Romance & Fantasy",
    Rating: "4.3 out of 5 - Amazon review",
    Author: "Rumer Hale",
    url: "https://i.postimg.cc/rwGMzmcW/Blood-Reign.jpg"
  },
  2: {
    Title: "Blood & Ruin",
    Instalment: "1st Book in series",
    Pages: "324 Pages",
    releaseDate: "11th November 2021",
    Genre: "Romance & Fantasy",
    Rating: "4.3 out of 5 - Amazon Review",
    Author: "Rumer Hale",
    url: "https://i.postimg.cc/fRYmLxJK/Blood-Ruin.jpg"
  },
  3: {
    Title: "Blood & Wrath",
    Instalment: "2nd Book in series",
    Pages: "386 Pages",
    releaseDate: "31st March 2022",
    Genre: "Romance & Fantasy",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Rumer Hale",
    url: "https://i.postimg.cc/Lspxx9cH/Blood-Wrath.jpg"
  },
  4: {
    Title: "Pride & Prejudice",
    Pages: "397 Pages",
    releaseYear: "1813",
    Genre: "Romance",
    Rating: "4.6 out of 5 - Amazon Review",
    Author: "Jane Austen",
    url: "https://i.postimg.cc/MKJQJTYR/Pride-Prejudice.jpg"
  },
  5: {
    Title: "Punk 57",
    Pages: "343 Pages",
    releaseDate: "21st October 2016",
    Genre: "Adult Romance",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Penelope Douglas",
    url: "https://i.postimg.cc/fbT8PWHN/Punk-57-new.jpg"
  },
  6: {
    Title: "Fourth Wing",
    Instalment: "Book 1 out of 2 in The Empyrean series",
    Pages: "646 Pages",
    releaseDate: "2nd May 2023",
    Genre: "Fantasy",
    Rating: "4.8 out of 5 - Amazon Review",
    Author: "Rebecca Yarros",
    url: "https://i.postimg.cc/T1nQZKgt/Fourth-Wing-New.jpg"
  },
  7: {
    Title: "Iron Flame",
    Instalment: "Book 2 out of 2 in The Empyrean series",
    Pages: "639 Pages",
    releaseDate: "7th November 2023",
    Genre: "Fantasy",
    Rating: "4.6 out of 5 - Amazon Review",
    Author: "Rebecca Yarros",
    url: "https://i.postimg.cc/wjWKWr67/Iron-Flame-New.jpg"
  },
  8: {
    Title: "A Court of Thorns & Roses",
    Instalment: "Book 1 out of 5 in the Thorns & Roses series",
    Pages: "432 Pages",
    releaseDate: "4.5 out of 5 - Amazon Review",
    Genre: "Fantasy",
    Rating: "4.5 out of 5 - Amazon Review",
    Author: "Sarah J Maas",
    url: "https://i.postimg.cc/QtW1YVTV/Thorns-Roses-New.jpg"
  },
  9: {
    Title: "A Court of Mist & Fury",
    Instalment: "Book 2 out of 5 in the Thorns & Roses series",
    Pages: "643 Pages",
    releaseDate: "3rd May 2023",
    Genre: "Fantasy",
    Rating: "4.8 out of 5 = Amazon Review",
    Author: "Sarah J Maas",
    url: "https://i.postimg.cc/XqVS16yB/Mist-Fury-New.jpg"
  },
  10: {
    Title: "A Court of Wings & Ruin",
    Instalment: "Book 3 out of 5 in the Thorns & Roses series",
    Pages: "720 Pages",
    releaseDate: "2nd May 2017",
    Genre: "Fantasy",
    Rating: "4.7 out of 5 - Amazon Review",
    Author: "Sarah J Maas",
    url: "https://i.postimg.cc/WzfrYjf5/Wings-Ruin-New.jpg"
  },
  11: {
    Title: "A Court of Frost & Starlight",
    Instalment: "Book 4 out of 5 in the Thorns & Roses series",
    Pages: "263 Pages",
    releaseDate: "1st May 2018",
    Genre: "Fantasy",
    Rating: "4.3 out of 5 - Amazon Review",
    Author: "Sarah J Maas",
    url: "https://i.postimg.cc/7YkfD5SS/Frost-Starlight-New.jpg"
  },
  12: {
    Title: "A Court of Silver Flames",
    Instalment: "Book 5 out of 5 in the Thorns & Roses series",
    Pages: "759 Pages",
    Genre: "Fantasy",
    releaseDate: "16th February 2021",
    Rating: "4.7 out of 5 - Amazon Review",
    Author: "Sarah J Maas",
    url: "https://i.postimg.cc/rm1QHdSQ/Silver-flame-New.jpg"
  },
  13: {
    Title: "The Notebook",
    Instalment: "Standalone",
    Pages: "272 Pages",
    releaseDate: "1st November 2007",
    Genre: "Romance",
    Rating: "4.4 out of 5 - Amazon review",
    Author: "Nicholas Sparks",
    url: "https://i.postimg.cc/NFqsDnQW/Notebook-New.jpg"
  },
  14: {
    Title: "Plays well with others",
    Instalment: "2nd Book in the How to Date series",
    Pages: "426 Pages",
    releaseDate: "12th July 2023",
    Genre: "Romance, Best friend to lovers",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Lauren Blakely",
    url: "https://i.postimg.cc/0QdL5n4D/Plays-well-with-others.jpg"
  },
  15: {
    Title: "My so-called sex life",
    Instalment: "1st Book in the How to Date series",
    Pages: "374 Pages",
    releaseDate: "1st March 2023",
    Genre: "Enemy to Lovers & Standalone",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Lauren Blakely",
    url: "https://i.postimg.cc/8cHFxGK2/My-so-called-sex-life-new.jpg"
  },
  16: {
    Title: "Distance",
    Instalment: "1st book in Beneath the Mask series",
    Pages: "430 Pages",
    releaseDate: "1st March 2023",
    Genre: "Dark Mafia Romance",
    Rating: "4.2 out of 5 = Amazon Review",
    Author: "Luna Mason",
    url: "https://i.postimg.cc/9Mn8xT3v/Distance.jpg"
  },
  17: {
    Title: "Detonate",
    Instalment: "2nd book in the Beneath the Mask series",
    Pages: "460 Pages",
    releaseDate: "31st May 2023",
    Genre: "Dark Mafia Romance",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Luna Mason",
    url: "https://i.postimg.cc/kGP13C4c/Detonate.jpg"
  },
  18: {
    Title: "Devoted",
    Instalment: "3rd book in the Beneath the Mask series",
    Pages: "666 Pages",
    releaseDate: "30th September 2023",
    Genre: "Dark Mafia Romance",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Luna Mason",
    url: "https://i.postimg.cc/PrWxkQ6z/Devoted.jpg"
  },
  19: {
    Title: "Detained",
    Instalment: "4th book in the Beneath the Mask",
    Pages: "383 Pages",
    releaseDate: "24th January 2024",
    Genre: "Dark Mafia Romance",
    Rating: "4.5 out of 5 - Amazon Review",
    Author: "Luna Mason",
    url: "https://i.postimg.cc/pLQrpRY3/Detained-New.jpg"
  },
  20: {
    Title: "The Hating Game",
    Instalment: "Standalone",
    Pages: "387 Pages",
    releaseDate: "9th August 2016",
    Genre: "Enemies to Lovers & A Standalone",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Sally Thorne",
    url: "https://i.postimg.cc/wj5rPGgh/Hating-Game-New.jpg"
  },
  21: {
    Title: "The Almost Romantic",
    Instalment: "3rd book out of the How to Date series",
    Pages: "376 pages",
    releaseDate: "14th March 2024",
    Genre: "Fake Relationship, Romance, Standalone",
    Rating: "NOT RELELASED YET",
    Author: "Lauren Blakely",
    url: "https://i.postimg.cc/HxmkmKyd/Almost-Romantic-New.jpg"
  },
  22: {
    Title: "Monroe's Story",
    Instalment: "4th book out of the How to Date series",
    Pages: "TO BE CONFIRMED",
    releaseDate: "COMING OUT 27th June 2024",
    Genre: "The one who got away romance",
    Rating: "NOT RELEASED YET",
    Author: "Lauren Blakely",
    url: "https://i.postimg.cc/0jrZyVTH/Monroes-story-New.jpg"
  },
  23: {
    Title: "Wilder's Story",
    Instalment: "5th book out of the How to Date series",
    Pages: "TO BE CONFIRMED",
    releaseDate: "COMING OUT 31st December 2024",
    Genre: "Billionaire Romance",
    Rating: "NOT RELEASED YET",
    Author: "Lauren Blakely",
    url: "https://i.postimg.cc/76DwdWC7/Wilders-Story-New.jpg"
  },
  24: {
    Title: "Haunting Adeline",
    Instalment: "1st book in the Cat & Mouse series",
    Pages: "551 Pages",
    releaseDate: "12th August 2021",
    Genre: "Dark Romance - CHECK TRIGGER WARNINGS!!",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "H.D. Carlton",
    url: "https://i.postimg.cc/0NZjBTGJ/Haunting-Adeline.jpg"
  },
  25: {
    Title: "Hunting Adeline",
    Instalment: "2nd book in the Cat & Mouse series",
    Pages: "531 Pages",
    releaseDate: "28th January 2022",
    Genre: "Dark Romance - CHECK TRIGGER WARNINGS!!",
    Rating: "4.5 out of 5 - Amazon Review",
    Author: "H.D. Carlton",
    url: "https://i.postimg.cc/8cfhDpwY/Hunting-Adeline.jpg"
  },
  26: {
    Title: "Where's Molly",
    Instalment: "Spinoff of the Cat & Mouse Duet series",
    Pages: "243 Pages",
    releaseDate: "16th February 2024",
    Genre: "Dark Romance - CHECK TRIGGER WARNINGS!!",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "H.D. Carlton",
    url: "https://i.postimg.cc/d3kCkp4p/Where-s-Molly-New.jpg"
  },
  27: {
    Title: "Twisted Love",
    Instalment: "Book 1 out of 4 - Twisted Series",
    Pages: "360 Pages",
    releaseDate: "14th April 2022",
    Genre: "Brother's Best Friend Romance",
    Rating: "4.2 out of 5 - Amazon Review",
    Author: "Ana Huang",
    url: "https://i.postimg.cc/76PM6Bvr/Twisted-Love-New.jpg"
  },
  28: {
    Title: "Twisted Games",
    Instalment: "Book 2 out of 4 - Twisted Series",
    Pages: "450 Pages",
    releaseDate: "14th April 2022",
    Genre: "Forbidden Romance",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Ana Huang",
    url: "https://i.postimg.cc/kg5j1XYd/Twisted-Games-New.jpg"
  },
  29: {
    Title: "Twisted Hate",
    Instalment: "Book 3 out 4 - Twisted Series",
    Pages: "515 Pages",
    releaseDate: "14th April 2022",
    Genre: "Enemies to Lovers & Best friends brother romance",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Ana Huang",
    url: "https://i.postimg.cc/nVkg05VB/Twisted-Hate-New.jpg"
  },
  30: {
    Title: "Twisted Lies",
    Instalment: "Book 4 out of 4 - Twisted Series",
    Pages: "578 Pages",
    releaseDate: "30th June 2022",
    Genre: "Fake Dating Romance",
    Rating: "4.5 out of 5 - Amazon Review",
    Author: "Ana Huang",
    url: "https://i.postimg.cc/DZhpcQtx/Twisted-Lies-New.jpg"
  },
  31: {
    Title: "The Stalker",
    Instalment: "Standalone",
    Pages: "368 Pages",
    releaseDate: "8th July 2021",
    Genre: "Thriller, Crime, Mystery",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Sarah Alderson",
    url: "https://i.postimg.cc/BnJ97pHM/The-Stalker-New.jpg"
  },
  32: {
    Title: "The Housemaid",
    Instalment: "Book 1 out of 3 - The Housemaid Series",
    Pages: "338 Pages",
    releaseDate: "26th April 2022",
    Genre: "Thriller",
    Rating: "4.4 out of 5 - Amazon Review",
    Author: "Freida Mcfadden",
    url: "https://i.postimg.cc/8PcNTtjc/The-Housemaid-New.jpg"
  },
  33: {
    Title: "The Silent Patient",
    Instalement: "Standalone",
    Pages: "352 Pages",
    releaseDate: "12th December 2019",
    Genre: "Thriller",
    Rating: "4.3 out 5 - Amazon Review",
    Author: "Alex Michaelides",
    url: "https://i.postimg.cc/J4Y6WQk1/Silent-Patient-New.jpg"
  }
};

function returnGenres() {
  let genreList = document.getElementById("genre-list");
  let genre = document.getElementById("genre-inpt").value.toLowerCase();
  genreList.innerHTML = "";

  let genreBooks = Object.values(library).filter((book) =>
    book.Genre.toLowerCase().includes(genre)
  );

  if (genreBooks.length === 0) {
    genreList.innerHTML = "<li>Genre not found</li>";
    return;
  }

  shuffleArray(genreBooks);

  genreBooks.slice(0, 6).forEach((book) => {
    const listElem = document.createElement("li");
    listElem.innerHTML = `<ul class="book-info"><div class="top-row"> <img id = "book-img" src=${book.url}</> <p>${book.Title}</p><i class="fa-solid fa-angle-down" id="menu-toggle"></i></div><div class="menu-content"></div></ul>`;
    genreList.appendChild(listElem);

    var menuContent = listElem.querySelector(".menu-content");

    for (const [key_, value] of Object.entries(book)) {
      const listItem = document.createElement("li");
      if (key_ === "releaseDate") {
        listItem.textContent = `Release Date: ${value}`;
      } else if (key_ !== "url") {
        listItem.textContent = `${key_}: ${value}`;
      }
      menuContent.appendChild(listItem);
    }

    var menuToggle = listElem.querySelector("#menu-toggle");
    menuToggle.addEventListener("click", function () {
      var menu = listElem.querySelector(".menu-content");
      menu.classList.toggle("open");
      menuToggle.classList.toggle("fa-angle-up");
    });
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
