const zagrebAttractions = [
    {
      title: "Zagreb Cathedral",
      description: "Zagreb's iconic cathedral, officially known as the Cathedral of the Assumption of the Blessed Virgin Mary, is the tallest building in Croatia and a stunning example of Gothic architecture. Its spires are visible from many parts of the city."
    },
    {
      title: "Ban Jelačić Square",
      description: "The main square in the heart of Zagreb, named after the Croatian governor Josip Jelačić. It's a lively area surrounded by historic buildings, shops, and cafes, making it a central gathering spot for locals and tourists alike."
    },
    {
      title: "St. Mark’s Church",
      description: "This small, colorful church is known for its distinctive roof made of red, white, and blue tiles. Located in the historic Upper Town, it's a perfect spot for photos and offers insight into Croatia's medieval past."
    },
    {
      title: "Mirogoj Cemetery",
      description: "One of the most beautiful cemeteries in Europe, Mirogoj is famous for its impressive arcades and lush greenery. It’s not only a burial ground but also an open-air museum with sculptures and art."
    },
    {
      title: "Museum of Broken Relationships",
      description: "This quirky and unique museum showcases objects and stories from broken relationships around the world. It’s both humorous and poignant, offering a fascinating look at love, loss, and human emotion."
    },
    {
      title: "Upper Town (Gornji Grad)",
      description: "The historic heart of Zagreb, Upper Town is home to cobblestone streets, charming houses, and iconic sites like St. Mark's Church, the Croatian Parliament, and Lotrščak Tower, which offers panoramic views of the city."
    },
    {
      title: "Dolac Market",
      description: "A vibrant open-air market located just above Ban Jelačić Square, Dolac is the place to buy fresh, local produce. The market is colorful, bustling, and a perfect spot to experience the local flavor of Zagreb."
    },
    {
      title: "Lotrščak Tower",
      description: "Located at the southern edge of Upper Town, this medieval tower is famous for the cannon that fires every day at noon. Visitors can also climb the tower for a spectacular view of Zagreb."
    },
    {
      title: "Zagreb City Museum",
      description: "This museum offers an insight into the history of the city, showcasing artifacts, photographs, and exhibits from the Roman era to the present. It's located in a beautiful old palace near the heart of the city."
    },
    {
      title: "Art Pavilion",
      description: "A beautiful art gallery built in 1898, the Art Pavilion is one of the oldest exhibition spaces in Croatia. It hosts a variety of contemporary art exhibitions, featuring both Croatian and international artists."
    },
    {
      title: "Jarun Lake",
      description: "Known as the 'Zagreb Sea,' Jarun is a popular recreational spot for locals. It’s perfect for swimming, kayaking, or simply relaxing by the water. There are also plenty of cafes and restaurants around the lake."
    },
    {
      title: "Maksimir Park",
      description: "One of the oldest public parks in the city, Maksimir offers lush green spaces, a zoo, and beautiful lakes. It’s a peaceful escape from the city bustle, ideal for a leisurely stroll or picnic."
    },
    {
      title: "The Croatian National Theatre",
      description: "A stunning Neo-Baroque building, this theatre is an architectural masterpiece and hosts a variety of performances including opera, ballet, and drama. It’s one of the city's cultural landmarks."
    },
    {
      title: "Museum of Contemporary Art",
      description: "This modern museum is housed in a striking contemporary building and showcases an impressive collection of Croatian and international art. The museum's extensive collection spans the 20th and 21st centuries."
    },
    {
      title: "Zagreb 360°",
      description: "A must-visit viewpoint, Zagreb 360° offers a panoramic view of the entire city from the top of the office building in Ban Jelačić Square. It’s the perfect place for photos or to simply enjoy the view."
    },
    {
      title: "Tkalčićeva Street",
      description: "This lively street is known for its vibrant atmosphere and numerous cafes, bars, and restaurants. It’s a great place for people-watching, enjoying a drink, or simply soaking in the city’s vibe."
    },
    {
      title: "Klovićevi Dvori Gallery",
      description: "A cultural institution located in the heart of the city, this gallery hosts important exhibitions, including works of Croatian and international artists. The gallery is set in a beautiful historic building and is a must-see for art lovers."
    },
    {
      title: "The Botanical Garden",
      description: "This tranquil garden in the city center offers a peaceful escape and is home to a wide variety of plant species. It’s a lovely place for a stroll, offering both beauty and educational value."
    },
    {
      title: "Zagreb Zoo",
      description: "Located within Maksimir Park, the Zagreb Zoo is home to more than 275 species of animals. It’s a family-friendly attraction, perfect for kids and anyone interested in wildlife conservation."
    },
    {
      title: "Strossmayer Promenade",
      description: "A beautiful scenic walkway in Upper Town, Strossmayer Promenade offers breathtaking views of the city. It's lined with trees, benches, and sculptures, making it a peaceful spot to enjoy Zagreb’s charm."
    },
    {
      title: "Museum of Illusions",
      description: "This interactive museum offers a fun and playful experience with optical illusions, holograms, and puzzles. It’s perfect for a family outing or anyone interested in seeing reality from a different perspective."
    },
    {
      title: "Turek Street",
      description: "A hidden gem in Zagreb, Turek Street is a narrow alley filled with street art, murals, and quirky cafes. It’s a great spot for art lovers and those looking for something a little off the beaten path."
    },
    {
      title: "Zrinjevac Park",
      description: "Zrinjevac is one of the most beautiful parks in Zagreb, known for its lush green spaces, fountains, and historical monuments. It’s perfect for a peaceful walk or relaxing in the heart of the city."
    },
    {
      title: "Zagreb Funicular",
      description: "One of the shortest funiculars in the world, the Zagreb Funicular connects the Lower Town with the Upper Town. It’s a charming way to travel between the two areas while enjoying a great view of the city."
    }
];

function displayAttractions(values) {
    const attractions = document.getElementById("attractions");
    attractions.innerHTML = "";

    values.forEach(attraction => {
      // Create a new element for each of the attractions
      const div = document.createElement("div");
      div.classList.add("attraction");

      const title = document.createElement("h2");
      title.textContent = attraction.title;

      const description = document.createElement("p");
      description.textContent = attraction.description;

      // Add the new elemenet to the page
      div.appendChild(title);
      div.appendChild(description);

      attractions.appendChild(div);
    });
}

// Filter attractions by their name
function searchAttractions(value) {
    const filtered = zagrebAttractions.filter(attractions => attractions.title.toLowerCase().includes(value.toLowerCase()));
    displayAttractions(filtered);
}

// Listen for changes on the search bar
document.getElementById("searchbox").addEventListener("input", function() {
    searchAttractions(this.value);
});


// Show all attractions when page loads
addEventListener("load", (event) => {
    displayAttractions(zagrebAttractions);
});