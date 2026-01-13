// Movie database with vibes and details
const movieDatabase = {
    happy: [
        { title: "Amélie", year: 2001, director: "Jean-Pierre Jeunet", poster: "https://image.tmdb.org/t/p/w300/nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg", description: "A whimsical romance about a shy waitress who decides to change the lives of those around her." },
        { title: "La La Land", year: 2016, director: "Damien Chazelle", poster: "https://image.tmdb.org/t/p/w300/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", description: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles." },
        { title: "The Grand Budapest Hotel", year: 2014, director: "Wes Anderson", poster: "https://image.tmdb.org/t/p/w300/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg", description: "A legendary concierge and his protégé become embroiled in a theft and framing." },
        { title: "Paddington 2", year: 2017, director: "Paul King", poster: "https://image.tmdb.org/t/p/w300/gF30bjzSMH4Dq0IAjLq8Rf6jEWN.jpg", description: "Paddington is wrongly accused of stealing and must clear his name with his family's help." },
        { title: "Sing Street", year: 2016, director: "John Carney", poster: "https://image.tmdb.org/t/p/w300/nU8V24lXDrRCe9L0sGrQOddIxrV.jpg", description: "A boy in 1980s Dublin forms a band to impress a mysterious girl." },
        { title: "Everything Everywhere All at Once", year: 2022, director: "Daniels", poster: "https://image.tmdb.org/t/p/w300/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", description: "A Chinese immigrant is swept into a wild adventure through the multiverse." },
        { title: "Little Miss Sunshine", year: 2006, director: "Valerie Faris", poster: "https://image.tmdb.org/t/p/w300/wKn7AJw730emlmzPvsqv994sAwC.jpg", description: "A family's road trip to a beauty pageant becomes a hilarious and heartwarming journey." },
        { title: "Chef", year: 2014, director: "Jon Favreau", poster: "https://image.tmdb.org/t/p/w300/jKxXM3RBkyvJ5lBfqsHLQ6wZj9w.jpg", description: "A chef starts a food truck to reclaim his creative passion and bond with his son." },
        { title: "Ferris Bueller's Day Off", year: 1986, director: "John Hughes", poster: "https://image.tmdb.org/t/p/w300/9f8R9yQjch6NqvpQ3hGZVjj4HLd.jpg", description: "A high schooler skips school for an epic day of adventure in Chicago." },
        { title: "Moonrise Kingdom", year: 2012, director: "Wes Anderson", poster: "https://image.tmdb.org/t/p/w300/9L9An9RYOslgJpPFCp5S4U8pMfq.jpg", description: "Two young lovers run away together on a New England island in 1965." },
        { title: "The Princess Bride", year: 1987, director: "Rob Reiner", poster: "https://image.tmdb.org/t/p/w300/nN6xLfJqIZNkADAzMqKxXqkCtQl.jpg", description: "A fairy tale adventure filled with romance, revenge, and unforgettable characters." },
        { title: "Hunt for the Wilderpeople", year: 2016, director: "Taika Waititi", poster: "https://image.tmdb.org/t/p/w300/7PTrTL6iHtXuVqUsaApfN14maLe.jpg", description: "A rebellious kid and his foster uncle become fugitives in the New Zealand wilderness." },
        { title: "Fantastic Mr. Fox", year: 2009, director: "Wes Anderson", poster: "https://image.tmdb.org/t/p/w300/t5v2Zsb3sa6UAOmXhLm9m2ZWXnM.jpg", description: "An animated tale of a clever fox who outwits three mean farmers." },
        { title: "The Secret Life of Walter Mitty", year: 2013, director: "Ben Stiller", poster: "https://image.tmdb.org/t/p/w300/siRkmRGxQg6JF7W5WOSPgYVGk1H.jpg", description: "A daydreamer embarks on a global journey that becomes an adventure beyond his imagination." },
        { title: "About Time", year: 2013, director: "Richard Curtis", poster: "https://image.tmdb.org/t/p/w300/7V7WS4aFlfeySvfb1U5NcjsoGVO.jpg", description: "A young man with the ability to time travel uses his gift to improve his love life." },
        { title: "The Intouchables", year: 2011, director: "Olivier Nakache", poster: "https://image.tmdb.org/t/p/w300/4mFI8ugCpdUTZHTdxBY2IFRvHpC.jpg", description: "An unlikely friendship develops between a paralyzed aristocrat and his caretaker." },
        { title: "School of Rock", year: 2003, director: "Richard Linklater", poster: "https://image.tmdb.org/t/p/w300/bpHv9Cy2fJWyKv8T71Vvacq6ydM.jpg", description: "A wannabe rock star poses as a substitute teacher and forms a band with his students." },
        { title: "Booksmart", year: 2019, director: "Olivia Wilde", poster: "https://image.tmdb.org/t/p/w300/micaVOa1UZsdzs4fKGA67ZMGOzc.jpg", description: "Two academic overachievers realize they should have worked less and played more on their last day of high school." },
        { title: "The Apartment", year: 1960, director: "Billy Wilder", poster: "https://image.tmdb.org/t/p/w300/ht3HrI91D38Y9c4FudIDculXt18.jpg", description: "A charming romantic comedy about a man who lends his apartment to his bosses for affairs." },
        { title: "Singin' in the Rain", year: 1952, director: "Gene Kelly", poster: "https://image.tmdb.org/t/p/w300/w03EiJVHP8Un77DNka eta5sTEo.jpg", description: "A joyous musical celebrating the transition from silent films to talkies in Hollywood." },
        { title: "Roman Holiday", year: 1953, director: "William Wyler", poster: "https://image.tmdb.org/t/p/w300/8lI9dmz2FNVZnyaRQWWC05yRqtT.jpg", description: "A princess escapes her duties for a day of adventure with a charming reporter in Rome." },
        { title: "Some Like It Hot", year: 1959, director: "Billy Wilder", poster: "https://image.tmdb.org/t/p/w300/hVIKyTK15y8opr6XVjzhsoDFVXO.jpg", description: "Two musicians disguise themselves as women to escape gangsters in this hilarious comedy." },
        { title: "Mamma Mia!", year: 2008, director: "Phyllida Lloyd", poster: "https://image.tmdb.org/t/p/w300/zKHv4J2E6RlEWEejNyWDyTUZWSz.jpg", description: "A bride-to-be invites three men to her wedding, each possibly being her father, in this ABBA-fueled musical." },
        { title: "Legally Blonde", year: 2001, director: "Robert Luketic", poster: "https://image.tmdb.org/t/p/w300/4ABNnmkVpzplrEVQWt1piITT0Ey.jpg", description: "A sorority girl follows her ex to Harvard Law and discovers her own potential." },
        { title: "The Goonies", year: 1985, director: "Richard Donner", poster: "https://image.tmdb.org/t/p/w300/r2xfCEnZd0s57jK5Z37LYWiTGbi.jpg", description: "A group of kids search for pirate treasure to save their homes from foreclosure." },
        { title: "Mary Poppins", year: 1964, director: "Robert Stevenson", poster: "https://image.tmdb.org/t/p/w300/uV9b5liKKAfHPOzb3ihN39duE4g.jpg", description: "A magical nanny brings joy and wonder to a London family." },
        { title: "Toy Story", year: 1995, director: "John Lasseter", poster: "https://image.tmdb.org/t/p/w300/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", description: "Toys come to life when humans aren't around in this groundbreaking animated adventure." },
        { title: "The Truman Show", year: 1998, director: "Peter Weir", poster: "https://image.tmdb.org/t/p/w300/vuza0WqY239yBXOadKlGwJsZJFE.jpg", description: "A man discovers his entire life is a reality TV show in this uplifting and thought-provoking film." },
        { title: "Crazy Rich Asians", year: 2018, director: "Jon M. Chu", poster: "https://image.tmdb.org/t/p/w300/1XxL8LWudTV80d2V3K8EDlJPNNN.jpg", description: "A woman discovers her boyfriend comes from one of the wealthiest families in Singapore." },
    ],
    sad: [
        { title: "Eternal Sunshine of the Spotless Mind", year: 2004, director: "Michel Gondry", poster: "https://image.tmdb.org/t/p/w300/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg", description: "A couple undergoes a procedure to erase each other from their memories." },
        { title: "Manchester by the Sea", year: 2016, director: "Kenneth Lonergan", poster: "https://image.tmdb.org/t/p/w300/e8daDzP0vFOnGyKmve95Yv0D0io.jpg", description: "A man confronts his tragic past while caring for his teenage nephew." },
        { title: "The Tree of Life", year: 2011, director: "Terrence Malick", poster: "https://image.tmdb.org/t/p/w300/9K4YsWYgDjqHS9Je6E5q9Vs5aW1.jpg", description: "A poetic meditation on loss, memory, and the nature of existence." },
        { title: "Her", year: 2013, director: "Spike Jonze", poster: "https://image.tmdb.org/t/p/w300/lEIaL12hSkqqe83kgADkbUqEnvk.jpg", description: "A lonely writer develops an unlikely relationship with an AI operating system." },
        { title: "Blue Valentine", year: 2010, director: "Derek Cianfrance", poster: "https://image.tmdb.org/t/p/w300/6vZU4SqXpW6HSy8bjOyozKo2Dxe.jpg", description: "A couple's relationship is shown in both its blissful beginnings and painful dissolution." },
        { title: "The Farewell", year: 2019, director: "Lulu Wang", poster: "https://image.tmdb.org/t/p/w300/6XvB5mPNlbpbpCT7X4WJqe6RuVU.jpg", description: "A family decides not to tell their grandmother she has terminal cancer." },
        { title: "Aftersun", year: 2022, director: "Charlotte Wells", poster: "https://image.tmdb.org/t/p/w300/evKz85EKouVuof61ahYBoAwIKRt.jpg", description: "A woman reflects on a holiday with her father twenty years earlier." },
        { title: "A Ghost Story", year: 2017, director: "David Lowery", poster: "https://image.tmdb.org/t/p/w300/qWynTKrYW8fNQfr14p0cjM6m5he.jpg", description: "A ghost returns to his suburban home to console his bereft wife." },
        { title: "Grave of the Fireflies", year: 1988, director: "Isao Takahata", poster: "https://image.tmdb.org/t/p/w300/k9tv1rXZbOhH7eiCk4XYGZmC88Y.jpg", description: "Two siblings struggle to survive in Japan during World War II." },
        { title: "Requiem for a Dream", year: 2000, director: "Darren Aronofsky", poster: "https://image.tmdb.org/t/p/w300/nOd6NJeFNT3xVvl3jUTMWPe2FmA.jpg", description: "Four people's drug addictions lead them down a path of destruction." },
        { title: "Room", year: 2015, director: "Lenny Abrahamson", poster: "https://image.tmdb.org/t/p/w300/e56WF9DR1GBrsmoLZYud1u5tygg.jpg", description: "A young boy and his mother escape from captivity and adjust to the outside world." },
        { title: "The Pianist", year: 2002, director: "Roman Polanski", poster: "https://image.tmdb.org/t/p/w300/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg", description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto." },
        { title: "Schindler's List", year: 1993, director: "Steven Spielberg", poster: "https://image.tmdb.org/t/p/w300/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", description: "A businessman saves the lives of more than a thousand Jewish refugees during the Holocaust." },
        { title: "The Green Mile", year: 1999, director: "Frank Darabont", poster: "https://image.tmdb.org/t/p/w300/velWPhVMQeQKcxggNEU8YmIo52R.jpg", description: "Death row guards encounter a prisoner with a miraculous gift." },
        { title: "Atonement", year: 2007, director: "Joe Wright", poster: "https://image.tmdb.org/t/p/w300/hMRIyBjPzxaSNWLYwiRz86IM4DH.jpg", description: "A young girl's lie destroys the lives of two lovers across decades." },
        { title: "The Road", year: 2009, director: "John Hillcoat", poster: "https://image.tmdb.org/t/p/w300/pQJIv6mxDfE3cYAUOv2FjWbYv51.jpg", description: "A father and son journey through a post-apocalyptic landscape." },
        { title: "The Hours", year: 2002, director: "Stephen Daldry", poster: "https://image.tmdb.org/t/p/w300/4myDtHH68Cx4wfiv47C2CbbKms7.jpg", description: "Three women from different eras are connected by Virginia Woolf's novel Mrs. Dalloway." },
        { title: "The Elephant Man", year: 1980, director: "David Lynch", poster: "https://image.tmdb.org/t/p/w300/tRgYvZtvx4PgO6oNLNe19PhtLIO.jpg", description: "A severely disfigured man struggles to find dignity and acceptance in Victorian England." },
        { title: "Ordinary People", year: 1980, director: "Robert Redford", poster: "https://image.tmdb.org/t/p/w300/4i9R6CMRT5EnjUFzBklPi1FUfcV.jpg", description: "A family struggles to cope with grief and guilt after their eldest son's death." },
        { title: "Life Is Beautiful", year: 1997, director: "Roberto Benigni", poster: "https://image.tmdb.org/t/p/w300/74hLDKjD5aGYOotO6esUVaeISa2.jpg", description: "A father uses humor and imagination to shield his son from the horrors of a concentration camp." },
        { title: "The Boy in the Striped Pajamas", year: 2008, director: "Mark Herman", poster: "https://image.tmdb.org/t/p/w300/qR0Ng6EJQrWRK6BTSW48lbKjtUc.jpg", description: "The forbidden friendship between the son of a Nazi officer and a Jewish boy in a concentration camp." },
        { title: "Dancer in the Dark", year: 2000, director: "Lars von Trier", poster: "https://image.tmdb.org/t/p/w300/2Z5ssAaq8MgHnWN8zGl6xzjBfA.jpg", description: "A factory worker going blind must save money for her son's operation while escaping into musical fantasies." },
        { title: "The Bridges of Madison County", year: 1995, director: "Clint Eastwood", poster: "https://image.tmdb.org/t/p/w300/aZn4VqRFmxJ55BaDlDl7Tk9nYwi.jpg", description: "A brief but intense love affair between a photographer and an Iowa housewife." },
        { title: "21 Grams", year: 2003, director: "Alejandro González Iñárritu", poster: "https://image.tmdb.org/t/p/w300/eOqBihgqdLzfjZMCRAJpSbQWMsg.jpg", description: "Three lives are forever changed by a tragic accident in this nonlinear drama." },
        { title: "The Wrestler", year: 2008, director: "Darren Aronofsky", poster: "https://image.tmdb.org/t/p/w300/sJf7KKvJzIax8m4cDgPm1T3PQXM.jpg", description: "An aging wrestler fights to reconnect with his daughter and find redemption in the ring." },
        { title: "Mystic River", year: 2003, director: "Clint Eastwood", poster: "https://image.tmdb.org/t/p/w300/hCHHKd0xnavp4VhZLhFZirWKByZ.jpg", description: "Childhood friends are reunited when a murder forces them to confront their traumatic past." },
        { title: "Sophie's Choice", year: 1982, director: "Alan J. Pakula", poster: "https://image.tmdb.org/t/p/w300/sW45cLBH0OOqktn8lvlZPWmhyOJ.jpg", description: "A woman's dark secret from a Nazi concentration camp haunts her relationship with two men." },
    ],
    anxious: [
        { title: "Uncut Gems", year: 2019, director: "Benny Safdie, Josh Safdie", poster: "https://image.tmdb.org/t/p/w300/6XN1vxHc7kUSqNW1RbH3xHeLP17.jpg", description: "A jeweler makes increasingly risky bets to stay afloat." },
        { title: "Good Time", year: 2017, director: "Benny Safdie, Josh Safdie", poster: "https://image.tmdb.org/t/p/w300/mVdyPc7uJ6bF39BtKdZZuoJuU0w.jpg", description: "A bank robber races through New York's criminal underworld to free his brother." },
        { title: "Whiplash", year: 2014, director: "Damien Chazelle", poster: "https://image.tmdb.org/t/p/w300/7fn624j5lj3xTme2SgiLCeuedmO.jpg", description: "A young drummer struggles under an abusive instructor's relentless pursuit of perfection." },
        { title: "Nightcrawler", year: 2014, director: "Dan Gilroy", poster: "https://image.tmdb.org/t/p/w300/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg", description: "A man discovers the violent nocturnal world of freelance crime journalism." },
        { title: "Prisoners", year: 2013, director: "Denis Villeneuve", poster: "https://image.tmdb.org/t/p/w300/tuHe1TqIFpODdTsLCzBi4fP5bYk.jpg", description: "A desperate father takes matters into his own hands when his daughter goes missing." },
        { title: "Mother!", year: 2017, director: "Darren Aronofsky", poster: "https://image.tmdb.org/t/p/w300/qmi2dsuoyzZdJ0WFZYQazbX8ILj.jpg", description: "A couple's tranquil existence is disrupted by uninvited guests." },
        { title: "Victoria", year: 2015, director: "Sebastian Schipper", poster: "https://image.tmdb.org/t/p/w300/fWux8N9AGlAwm7dVGqkfJmLfCCw.jpg", description: "A woman's night out in Berlin spirals into a bank robbery, shot in one continuous take." },
        { title: "Climax", year: 2018, director: "Gaspar Noé", poster: "https://image.tmdb.org/t/p/w300/d2lelboXuPi1d59dj2oe3MmB5dZ.jpg", description: "Dancers at a rehearsal are drugged, descending into a hallucinatory nightmare." },
        { title: "127 Hours", year: 2010, director: "Danny Boyle", poster: "https://image.tmdb.org/t/p/w300/fDvCOoMAdJfCfk6rsMlpfKdMuyf.jpg", description: "A climber must make an impossible choice to survive after being trapped by a boulder." },
        { title: "Black Swan", year: 2010, director: "Darren Aronofsky", poster: "https://image.tmdb.org/t/p/w300/rH19vxjr2nsoA01ZuNwcsSxKW9P.jpg", description: "A ballerina's pursuit of perfection leads her into a dark psychological spiral." },
        { title: "Locke", year: 2013, director: "Steven Knight", poster: "https://image.tmdb.org/t/p/w300/tnwHzzH1EYNBRy6jh6u7IShpHh7.jpg", description: "A man's life unravels during a single car journey told entirely through phone calls." },
        { title: "Buried", year: 2010, director: "Rodrigo Cortés", poster: "https://image.tmdb.org/t/p/w300/mSSEUcN4zlhmvDYBoN46K4cPSwA.jpg", description: "A man wakes up buried alive in a coffin with only a lighter and phone." },
        { title: "Green Room", year: 2015, director: "Jeremy Saulnier", poster: "https://image.tmdb.org/t/p/w300/4l4KHkiLLMw9fKqGSxLkWLdVhDQ.jpg", description: "A punk band becomes trapped in a venue with violent white supremacists." },
        { title: "The Lighthouse", year: 2019, director: "Robert Eggers", poster: "https://image.tmdb.org/t/p/w300/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg", description: "Two lighthouse keepers descend into madness on a remote island." },
        { title: "Hereditary", year: 2018, director: "Ari Aster", poster: "https://image.tmdb.org/t/p/w300/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg", description: "A family is haunted by a mysterious presence after their grandmother dies." },
        { title: "No Country for Old Men", year: 2007, director: "Coen Brothers", poster: "https://image.tmdb.org/t/p/w300/bj1v6YKF8yHqA489VFfnQvOJpnc.jpg", description: "A hunter finds a drug deal gone wrong and is pursued by a relentless killer." },
        { title: "Zodiac", year: 2007, director: "David Fincher", poster: "https://image.tmdb.org/t/p/w300/kIeryTkWM7AaKJoYWgdqN75nFEu.jpg", description: "A cartoonist becomes obsessed with tracking down the Zodiac Killer in 1970s San Francisco." },
        { title: "Gone Girl", year: 2014, director: "David Fincher", poster: "https://image.tmdb.org/t/p/w300/lv5xShBIDPe7m4ufdlV0IAc7Avk.jpg", description: "A husband becomes the prime suspect when his wife disappears on their anniversary." },
        { title: "Sicario", year: 2015, director: "Denis Villeneuve", poster: "https://image.tmdb.org/t/p/w300/lKqjBF2lYQNarTHULfHl8FezJlk.jpg", description: "An FBI agent joins a task force to bring down a Mexican drug cartel with questionable tactics." },
        { title: "The Silence of the Lambs", year: 1991, director: "Jonathan Demme", poster: "https://image.tmdb.org/t/p/w300/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg", description: "An FBI trainee seeks help from an imprisoned cannibal to catch another serial killer." },
        { title: "Parasite", year: 2019, director: "Bong Joon-ho", poster: "https://image.tmdb.org/t/p/w300/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", description: "A poor family schemes to infiltrate a wealthy household with unpredictable consequences." },
        { title: "The Wages of Fear", year: 1953, director: "Henri-Georges Clouzot", poster: "https://image.tmdb.org/t/p/w300/9F3lDBL3KzVEYDhxIKl71TmLUVO.jpg", description: "Four desperate men transport volatile nitroglycerin across treacherous terrain." },
        { title: "Don't Breathe", year: 2016, director: "Fede Álvarez", poster: "https://image.tmdb.org/t/p/w300/plFLq8FXt7dZS6ue7F7YYk7rwnf.jpg", description: "Thieves break into a blind man's home and discover he's more dangerous than they imagined." },
        { title: "Panic Room", year: 2002, director: "David Fincher", poster: "https://image.tmdb.org/t/p/w300/bRfPWCljRJEOoXp8DvLjwYRqTco.jpg", description: "A mother and daughter hide in their panic room while intruders search for hidden money." },
        { title: "The Descent", year: 2005, director: "Neil Marshall", poster: "https://image.tmdb.org/t/p/w300/nSJRMbGpji78VpgFOI3Lqn1fVo8.jpg", description: "Six women exploring an uncharted cave system encounter terrifying creatures in the darkness." },
        { title: "Blue Ruin", year: 2013, director: "Jeremy Saulnier", poster: "https://image.tmdb.org/t/p/w300/aRkiBjYM6eYlLx2Q8JYxs6RbFZS.jpg", description: "A drifter's attempt at revenge spirals into a violent and desperate situation." },
    ],
    melancholic: [
        { title: "Lost in Translation", year: 2003, director: "Sofia Coppola", poster: "https://image.tmdb.org/t/p/w300/wv9VXVkXmluA7L7pPYMCp56NhwY.jpg", description: "Two lonely souls find connection in the isolation of Tokyo." },
        { title: "In the Mood for Love", year: 2000, director: "Wong Kar-wai", poster: "https://image.tmdb.org/t/p/w300/iYypPT4bhqXTt1lfZhGPShCqCJr.jpg", description: "Two neighbors form a bond after suspecting their spouses of an affair." },
        { title: "Moonlight", year: 2016, director: "Barry Jenkins", poster: "https://image.tmdb.org/t/p/w300/qhUIOTSi3kr4290tKrVyeriyvrv.jpg", description: "A young Black man grapples with identity and sexuality across three chapters of his life." },
        { title: "Paterson", year: 2016, director: "Jim Jarmusch", poster: "https://image.tmdb.org/t/p/w300/bz8AQlXPOE6YGIiLrKmRxuCiMBj.jpg", description: "A bus driver writes poetry and lives a quiet, contemplative life." },
        { title: "The Master", year: 2012, director: "Paul Thomas Anderson", poster: "https://image.tmdb.org/t/p/w300/cRrcpe7bWPHxYJZkHrLLd9rB3D4.jpg", description: "A WWII veteran becomes drawn to a charismatic philosophical movement." },
        { title: "Blade Runner 2049", year: 2017, director: "Denis Villeneuve", poster: "https://image.tmdb.org/t/p/w300/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", description: "A replicant blade runner uncovers a secret that could plunge society into chaos." },
        { title: "The Assassination of Jesse James", year: 2007, director: "Andrew Dominik", poster: "https://image.tmdb.org/t/p/w300/lSFYLoaL4eW7Q5VQ7SZQP4EHRCt.jpg", description: "The relationship between an outlaw and the man who would kill him." },
        { title: "Arrival", year: 2016, director: "Denis Villeneuve", poster: "https://image.tmdb.org/t/p/w300/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", description: "A linguist is recruited to communicate with extraterrestrial visitors." },
        { title: "Drive", year: 2011, director: "Nicolas Winding Refn", poster: "https://image.tmdb.org/t/p/w300/nu7XIa67cXc4mpPYYq26JkOfYYW.jpg", description: "A stunt driver becomes entangled in criminal underworld to protect his neighbor." },
        { title: "The Remains of the Day", year: 1993, director: "James Ivory", poster: "https://image.tmdb.org/t/p/w300/gLBj1TJ2q2NXNM5fG3y8rPMvZcZ.jpg", description: "A butler reflects on his life of service and suppressed emotions." },
        { title: "Only Lovers Left Alive", year: 2013, director: "Jim Jarmusch", poster: "https://image.tmdb.org/t/p/w300/iWDmGsgtPnkESmMZAKpZsVDLlBR.jpg", description: "Two vampires reflect on centuries of art and culture in the modern world." },
        { title: "Carol", year: 2015, director: "Todd Haynes", poster: "https://image.tmdb.org/t/p/w300/cJeled7EyPdur6TnCA5GYg0UfvG.jpg", description: "A forbidden romance develops between two women in 1950s New York." },
        { title: "The Rider", year: 2017, director: "Chloé Zhao", poster: "https://image.tmdb.org/t/p/w300/8SBfLqWvLK6WX7J94P3xj8GlFo5.jpg", description: "A rodeo rider struggles with his identity after a career-ending injury." },
        { title: "First Reformed", year: 2017, director: "Paul Schrader", poster: "https://image.tmdb.org/t/p/w300/5vaesD7tWmNPIVxk7zNpsf0CnXb.jpg", description: "A minister of a small church confronts his faith and despair." },
        { title: "Paris, Texas", year: 1984, director: "Wim Wenders", poster: "https://image.tmdb.org/t/p/w300/nQqPxRq0W2gJ1t0wQ3MyqPUyVqq.jpg", description: "A man emerges from the desert and reconnects with his young son." },
        { title: "Chungking Express", year: 1994, director: "Wong Kar-wai", poster: "https://image.tmdb.org/t/p/w300/43lcpGDQdxnimE8gWNAEsGCcIKN.jpg", description: "Two Hong Kong police officers cope with heartbreak through chance encounters." },
        { title: "Fallen Angels", year: 1995, director: "Wong Kar-wai", poster: "https://image.tmdb.org/t/p/w300/fnWyNCevJt03tBEePrO0PqLbxqM.jpg", description: "Intersecting stories of lonely souls drifting through the neon-lit nights of Hong Kong." },
        { title: "The End of the Affair", year: 1999, director: "Neil Jordan", poster: "https://image.tmdb.org/t/p/w300/iPEMCBV7cZqpJbNaxtbLkx4QHEY.jpg", description: "A writer reflects on his passionate but doomed wartime affair with a married woman." },
        { title: "Wings of Desire", year: 1987, director: "Wim Wenders", poster: "https://image.tmdb.org/t/p/w300/fGgrezGnIjEhybFSa1boFpzyLjP.jpg", description: "An angel watching over Berlin longs to experience human life and love." },
        { title: "Brokeback Mountain", year: 2005, director: "Ang Lee", poster: "https://image.tmdb.org/t/p/w300/z8pUSYjHfB6sNzMIXRlDlqwqiwf.jpg", description: "Two cowboys develop a forbidden relationship that spans decades." },
        { title: "The English Patient", year: 1996, director: "Anthony Minghella", poster: "https://image.tmdb.org/t/p/w300/4xzU6KRyONZfA2XxDpI1VqFCJLJ.jpg", description: "A badly burned man recounts his tragic love affair during World War II." },
        { title: "A Single Man", year: 2009, director: "Tom Ford", poster: "https://image.tmdb.org/t/p/w300/1x39bKjxsZCBbuH26XmIJB2zBxO.jpg", description: "A grieving professor plans his suicide while reliving memories of his deceased partner." },
        { title: "Le Samouraï", year: 1967, director: "Jean-Pierre Melville", poster: "https://image.tmdb.org/t/p/w300/hNLvbh8NOEoLlFDNhJHQZOhcOLV.jpg", description: "A solitary hitman faces betrayal in this stylish noir about loneliness and professionalism." },
        { title: "Anomalisa", year: 2015, director: "Charlie Kaufman", poster: "https://image.tmdb.org/t/p/w300/4DJ9kfZTNChU6zdSqH2pRkkZ4V.jpg", description: "A motivational speaker plagued by mundane life has a chance encounter at a hotel." },
        { title: "Vanya on 42nd Street", year: 1994, director: "Louis Malle", poster: "https://image.tmdb.org/t/p/w300/pxCQ7WMW77P8g0EAZB91UyP9Svo.jpg", description: "A rehearsal of Chekhov's Uncle Vanya exploring regret and lost opportunities." },
        { title: "Yi Yi", year: 2000, director: "Edward Yang", poster: "https://image.tmdb.org/t/p/w300/v0dcqjRZvdocSIETTpXO4FalNeu.jpg", description: "A Taiwanese family navigates life's disappointments and fleeting moments of connection." },
    ],
    energetic: [
        { title: "Mad Max: Fury Road", year: 2015, director: "George Miller", poster: "https://image.tmdb.org/t/p/w300/hA2ple9q4qnwxp3hKVNhroipsir.jpg", description: "A post-apocalyptic chase across the desert in pursuit of freedom." },
        { title: "Baby Driver", year: 2017, director: "Edgar Wright", poster: "https://image.tmdb.org/t/p/w300/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg", description: "A talented getaway driver tries to break free from a life of crime." },
        { title: "Scott Pilgrim vs. the World", year: 2010, director: "Edgar Wright", poster: "https://image.tmdb.org/t/p/w300/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg", description: "A bassist must defeat his girlfriend's seven evil exes." },
        { title: "The Social Network", year: 2010, director: "David Fincher", poster: "https://image.tmdb.org/t/p/w300/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg", description: "The founding of Facebook and the lawsuits that followed." },
        { title: "Edge of Tomorrow", year: 2014, director: "Doug Liman", poster: "https://image.tmdb.org/t/p/w300/7mgKeg18Qml5nJQa56RBZO7dIu0.jpg", description: "A soldier relives the same day of battle in a time loop." },
        { title: "Kingsman: The Secret Service", year: 2014, director: "Matthew Vaughn", poster: "https://image.tmdb.org/t/p/w300/8x7ej00VQsjcvZYW5kn6u4epwTR.jpg", description: "A street kid is recruited into a secret spy organization." },
        { title: "Spider-Man: Into the Spider-Verse", year: 2018, director: "Bob Persichetti", poster: "https://image.tmdb.org/t/p/w300/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", description: "A Brooklyn teen becomes Spider-Man and meets other Spider-People from parallel universes." },
        { title: "John Wick", year: 2014, director: "Chad Stahelski", poster: "https://image.tmdb.org/t/p/w300/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", description: "A retired assassin seeks vengeance for the killing of his dog." },
        { title: "Mission: Impossible - Fallout", year: 2018, director: "Christopher McQuarrie", poster: "https://image.tmdb.org/t/p/w300/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", description: "Ethan Hunt faces his toughest mission yet with global stakes." },
        { title: "The Raid", year: 2011, director: "Gareth Evans", poster: "https://image.tmdb.org/t/p/w300/lHQRHiI48I9uN3sTpD40SFCazBu.jpg", description: "A SWAT team becomes trapped in a building controlled by a ruthless mobster." },
        { title: "Kill Bill: Vol. 1", year: 2003, director: "Quentin Tarantino", poster: "https://image.tmdb.org/t/p/w300/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg", description: "A former assassin seeks revenge on her former colleagues." },
        { title: "Top Gun: Maverick", year: 2022, director: "Joseph Kosinski", poster: "https://image.tmdb.org/t/p/w300/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", description: "A test pilot trains a new generation of aviators for a dangerous mission." },
        { title: "Atomic Blonde", year: 2017, director: "David Leitch", poster: "https://image.tmdb.org/t/p/w300/kV9R5h0B5vAPH0Z0FFlrdzI8rYX.jpg", description: "A spy navigates the deadly Cold War world of espionage in 1989 Berlin." },
        { title: "Shaun of the Dead", year: 2004, director: "Edgar Wright", poster: "https://image.tmdb.org/t/p/w300/uJgfmLbkYM8bnm52r9bYfuP94BY.jpg", description: "A man attempts to win back his girlfriend during a zombie apocalypse." },
        { title: "Hot Fuzz", year: 2007, director: "Edgar Wright", poster: "https://image.tmdb.org/t/p/w300/zPib4ukTSdXvHP9pxGkFCe34f3y.jpg", description: "A top London cop is transferred to a quiet village with a dark secret." },
        { title: "The Matrix", year: 1999, director: "Wachowskis", poster: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", description: "A hacker discovers reality is a simulation and joins a rebellion against machines." },
        { title: "Inception", year: 2010, director: "Christopher Nolan", poster: "https://image.tmdb.org/t/p/w300/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg", description: "A thief who steals secrets through dream infiltration takes on a dangerous final job." },
        { title: "Die Hard", year: 1988, director: "John McTiernan", poster: "https://image.tmdb.org/t/p/w300/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", description: "A cop battles terrorists who have taken over a Los Angeles skyscraper." },
        { title: "Raiders of the Lost Ark", year: 1981, director: "Steven Spielberg", poster: "https://image.tmdb.org/t/p/w300/ceG9VzoRAVGwivFU403Wc3AHRys.jpg", description: "An archaeologist races to find the Ark of the Covenant before the Nazis." },
        { title: "Crank", year: 2006, director: "Mark Neveldine", poster: "https://image.tmdb.org/t/p/w300/bN6KL8wMfIrQ3dj78xQnLVHQDfG.jpg", description: "A hitman must keep his adrenaline flowing to survive after being poisoned." },
        { title: "The Bourne Ultimatum", year: 2007, director: "Paul Greengrass", poster: "https://image.tmdb.org/t/p/w300/5p4cGrT70SvDY1hH5UKMZl6aNMz.jpg", description: "An amnesiac spy races to uncover his past while evading CIA assassins." },
        { title: "Speed", year: 1994, director: "Jan de Bont", poster: "https://image.tmdb.org/t/p/w300/2smbxCn1oCmgIyYhslsmwEQgqTr.jpg", description: "A cop must keep a bus above 50 mph to prevent a bomb from exploding." },
        { title: "Point Break", year: 1991, director: "Kathryn Bigelow", poster: "https://image.tmdb.org/t/p/w300/9V16fBSNIbVuFWFQo34Y4MwTbgp.jpg", description: "An FBI agent goes undercover to infiltrate a gang of surfers who rob banks." },
        { title: "Run Lola Run", year: 1998, director: "Tom Tykwer", poster: "https://image.tmdb.org/t/p/w300/oZJyRyPIF1dHuL65f4ithqNIYqq.jpg", description: "A woman has 20 minutes to find money to save her boyfriend's life across three timelines." },
        { title: "Upgrade", year: 2018, director: "Leigh Whannell", poster: "https://image.tmdb.org/t/p/w300/aRYWdVGXK82hCqmkOLKKPq5uOud.jpg", description: "A paralyzed man receives an AI implant that lets him seek revenge on his attackers." },
        { title: "Casino Royale", year: 2006, director: "Martin Campbell", poster: "https://image.tmdb.org/t/p/w300/zlWBxz2pTA9p45kUThZRyWkGkCg.jpg", description: "James Bond earns his 00 status and takes on a terrorist banker in a high-stakes poker game." },
    ],
    nostalgic: [
        { title: "Before Sunrise", year: 1995, director: "Richard Linklater", poster: "https://image.tmdb.org/t/p/w300/7p2yFGgUlKdES0WnMiX7C8fprKf.jpg", description: "Two strangers meet on a train and spend a night walking through Vienna." },
        { title: "Call Me by Your Name", year: 2017, director: "Luca Guadagnino", poster: "https://image.tmdb.org/t/p/w300/mZ4gBdfkhP9tvLH1DO4m4HYtiyi.jpg", description: "A summer romance unfolds between a teenage boy and a visiting scholar in 1980s Italy." },
        { title: "Dazed and Confused", year: 1993, director: "Richard Linklater", poster: "https://image.tmdb.org/t/p/w300/kvgWAj5qS5a1XPy75MYKuM9zGVi.jpg", description: "The last day of school in 1976, as students celebrate the end of the year." },
        { title: "Lady Bird", year: 2017, director: "Greta Gerwig", poster: "https://image.tmdb.org/t/p/w300/iKsBSOoxdvKw78gw9hU55lv274M.jpg", description: "A high school senior navigates her turbulent relationship with her mother." },
        { title: "Boyhood", year: 2014, director: "Richard Linklater", poster: "https://image.tmdb.org/t/p/w300/tPzt57gzhx1pM0xR1B6RVe3g3Nn.jpg", description: "A boy's journey from childhood to adulthood, filmed over 12 years." },
        { title: "Stand by Me", year: 1986, director: "Rob Reiner", poster: "https://image.tmdb.org/t/p/w300/8tEvUfJY9jq6xzQGXPxU5PFq6C2.jpg", description: "Four boys set out on a journey to find a missing body in the Oregon woods." },
        { title: "Almost Famous", year: 2000, director: "Cameron Crowe", poster: "https://image.tmdb.org/t/p/w300/3qqF5fXKaALPt17BW42JfWbJSyP.jpg", description: "A teenager tours with a rock band in the 1970s as a journalist." },
        { title: "The Florida Project", year: 2017, director: "Sean Baker", poster: "https://image.tmdb.org/t/p/w300/bnSTP1PY2fDyat0eUa7SZnuNwnJ.jpg", description: "A girl and her friends have an adventurous summer at a budget motel." },
        { title: "The Breakfast Club", year: 1985, director: "John Hughes", poster: "https://image.tmdb.org/t/p/w300/5ViRejpxjxA6H0NiYvxQPzqSt47.jpg", description: "Five high school students from different cliques bond during Saturday detention." },
        { title: "Everybody Wants Some!!", year: 2016, director: "Richard Linklater", poster: "https://image.tmdb.org/t/p/w300/tAL0PEaUVS2LnPWbDQBPsR2b9P1.jpg", description: "College baseball players navigate the freedoms and responsibilities of their first weekend at school." },
        { title: "The Perks of Being a Wallflower", year: 2012, director: "Stephen Chbosky", poster: "https://image.tmdb.org/t/p/w300/wCd3H6xgPqpfLgX1ay4UmqHs5fT.jpg", description: "An introverted freshman is taken under the wings of two seniors." },
        { title: "Superbad", year: 2007, director: "Greg Mottola", poster: "https://image.tmdb.org/t/p/w300/fJ9k0YNQFhF3PZhNqswTyv12IQK.jpg", description: "Two co-dependent high school seniors try to score alcohol for a party." },
        { title: "E.T. the Extra-Terrestrial", year: 1982, director: "Steven Spielberg", poster: "https://image.tmdb.org/t/p/w300/5pUoE4J5kF8cBF0J82ZIpJbQyIp.jpg", description: "A young boy befriends an alien stranded on Earth." },
        { title: "The Sandlot", year: 1993, director: "David Mickey Evans", poster: "https://image.tmdb.org/t/p/w300/2FYRvqxsgWKvCvEG66JnXnGGpSx.jpg", description: "A group of kids play baseball during the summer of 1962." },
        { title: "Good Will Hunting", year: 1997, director: "Gus Van Sant", poster: "https://image.tmdb.org/t/p/w300/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg", description: "A janitor at MIT is discovered to be a mathematical genius." },
        { title: "Cinema Paradiso", year: 1988, director: "Giuseppe Tornatore", poster: "https://image.tmdb.org/t/p/w300/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg", description: "A filmmaker recalls his childhood friendship with a movie theater projectionist in Sicily." },
        { title: "Before Sunset", year: 2004, director: "Richard Linklater", poster: "https://image.tmdb.org/t/p/w300/gycdE1ARByGQcK4fYR2mgpzrafG.jpg", description: "Two former lovers reunite in Paris nine years after their first meeting in Vienna." },
        { title: "The Way We Were", year: 1973, director: "Sydney Pollack", poster: "https://image.tmdb.org/t/p/w300/vLqHdW6bIJbSMCR0fiMzGSU3XWj.jpg", description: "A politically active woman and a laid-back writer fall in love despite their differences." },
        { title: "American Graffiti", year: 1973, director: "George Lucas", poster: "https://image.tmdb.org/t/p/w300/6mY8LYML1Z3ERmM1eWyMvRqzjOD.jpg", description: "A group of teenagers spend their last night together before college in 1962." },
        { title: "Summer of '42", year: 1971, director: "Robert Mulligan", poster: "https://image.tmdb.org/t/p/w300/tnPXF6C3aWxGZmYvmX1rLwGRG6M.jpg", description: "A teenage boy experiences first love during a summer vacation in the 1940s." },
        { title: "The Tree of Life", year: 2011, director: "Terrence Malick", poster: "https://image.tmdb.org/t/p/w300/9K4YsWYgDjqHS9Je6E5q9Vs5aW1.jpg", description: "A man reflects on his childhood in 1950s Texas and his relationship with his father." },
        { title: "Moonrise Kingdom", year: 2012, director: "Wes Anderson", poster: "https://image.tmdb.org/t/p/w300/9L9An9RYOslgJpPFCp5S4U8pMfq.jpg", description: "Two young lovers run away together on a 1960s New England island." },
        { title: "The Virgin Suicides", year: 1999, director: "Sofia Coppola", poster: "https://image.tmdb.org/t/p/w300/poNySERmK7FI6z94VFh0I2RM4zN.jpg", description: "Five boys recall their obsession with mysterious sisters in 1970s suburban Detroit." },
        { title: "My Girl", year: 1991, director: "Howard Zieff", poster: "https://image.tmdb.org/t/p/w300/p0xM8GRMzCfpVbdJlP5iXjdQ8L1.jpg", description: "A young girl comes of age during the summer of 1972 in small-town Pennsylvania." },
        { title: "Wonder Years: The Movie", year: 1988, director: "Steve Miner", poster: "https://image.tmdb.org/t/p/w300/mN0gLTZS6h0PH4Q9aKiTKPWXCT8.jpg", description: "A nostalgic look at growing up in late 1960s suburban America." },
        { title: "A Christmas Story", year: 1983, director: "Bob Clark", poster: "https://image.tmdb.org/t/p/w300/s29hJSmmKJUl3O4g2xeahQdzlPV.jpg", description: "A boy dreams of getting a Red Ryder BB gun for Christmas in 1940s Indiana." },
    ],
    contemplative: [
        { title: "2001: A Space Odyssey", year: 1968, director: "Stanley Kubrick", poster: "https://image.tmdb.org/t/p/w300/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg", description: "A voyage to Jupiter turns into a philosophical journey through space and time." },
        { title: "Solaris", year: 1972, director: "Andrei Tarkovsky", poster: "https://image.tmdb.org/t/p/w300/95PZpzv1s7yC6uxqPwDgvNKZOAU.jpg", description: "A psychologist investigates strange occurrences on a space station." },
        { title: "The Fountain", year: 2006, director: "Darren Aronofsky", poster: "https://image.tmdb.org/t/p/w300/bR02kGnbjXTGBQWHnPBzjvxGZUb.jpg", description: "A man's thousand-year journey to save his love across three timelines." },
        { title: "Interstellar", year: 2014, director: "Christopher Nolan", poster: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", description: "A team of astronauts travels through a wormhole in search of a new home." },
        { title: "Under the Skin", year: 2013, director: "Jonathan Glazer", poster: "https://image.tmdb.org/t/p/w300/8HIphVy5DuiQcZcSe1VTgznnEPU.jpg", description: "An alien seduces lonely men in Scotland while exploring what it means to be human." },
        { title: "Stalker", year: 1979, director: "Andrei Tarkovsky", poster: "https://image.tmdb.org/t/p/w300/sLDWgWmUQDmTKojqRmYwPz0EfN.jpg", description: "A guide leads two men through a mysterious restricted zone." },
        { title: "The Man from Earth", year: 2007, director: "Richard Schenkman", poster: "https://image.tmdb.org/t/p/w300/kkBe4ZJg6diqEBaD0yL3aeXqHVG.jpg", description: "A professor reveals to colleagues that he is a 14,000-year-old immortal." },
        { title: "Annihilation", year: 2018, director: "Alex Garland", poster: "https://image.tmdb.org/t/p/w300/d3qcpfNwbAMCNqWDHzPhdgLjGQL.jpg", description: "A biologist enters a mysterious quarantined zone where nature has transformed." },
        { title: "The Tree of Life", year: 2011, director: "Terrence Malick", poster: "https://image.tmdb.org/t/p/w300/9K4YsWYgDjqHS9Je6E5q9Vs5aW1.jpg", description: "A meditation on the origins of the universe and a Texas family in the 1950s." },
        { title: "The Seventh Seal", year: 1957, director: "Ingmar Bergman", poster: "https://image.tmdb.org/t/p/w300/wPMh88I6XFmzfnWC6y8qK9xPf2Y.jpg", description: "A knight returning from the Crusades plays chess with Death." },
        { title: "Melancholia", year: 2011, director: "Lars von Trier", poster: "https://image.tmdb.org/t/p/w300/1VuakdZOFBEDgxbjyGY8sFMSZ6O.jpg", description: "Two sisters deal with the approach of a planet on a collision course with Earth." },
        { title: "The Holy Mountain", year: 1973, director: "Alejandro Jodorowsky", poster: "https://image.tmdb.org/t/p/w300/gCE2Av0MfxweCl8JHf3vOiXxiXs.jpg", description: "A spiritual journey through surreal landscapes in search of enlightenment." },
        { title: "Mr. Nobody", year: 2009, director: "Jaco Van Dormael", poster: "https://image.tmdb.org/t/p/w300/mPXCMC5HTtvczX2eWpkQNcLdIpr.jpg", description: "The last mortal man on Earth recalls his possible lives and parallel existences." },
        { title: "Contact", year: 1997, director: "Robert Zemeckis", poster: "https://image.tmdb.org/t/p/w300/zXHS3JiUqA1qpNiLcAJSQJMT8sH.jpg", description: "A scientist makes first contact with extraterrestrial intelligence." },
        { title: "The Mirror", year: 1975, director: "Andrei Tarkovsky", poster: "https://image.tmdb.org/t/p/w300/lMZfmCSBPDvUCP1REvQQBkSxAte.jpg", description: "A dying poet reflects on his life through memories, dreams, and Russian history." },
        { title: "Wild Strawberries", year: 1957, director: "Ingmar Bergman", poster: "https://image.tmdb.org/t/p/w300/fFqgYARed3b67wF7ksPfyaN3mty.jpg", description: "An elderly professor confronts his past through dreams and memories on a road trip." },
        { title: "Persona", year: 1966, director: "Ingmar Bergman", poster: "https://image.tmdb.org/t/p/w300/4csXkfgj1lAGAf80YaruDnMzCnU.jpg", description: "A nurse caring for a silent actress experiences a disturbing psychological merging." },
        { title: "8½", year: 1963, director: "Federico Fellini", poster: "https://image.tmdb.org/t/p/w300/aVhZvZCD1srStSzWJlhTibn32D8.jpg", description: "A film director struggles with creative block while reflecting on his life and art." },
        { title: "Ex Machina", year: 2014, director: "Alex Garland", poster: "https://image.tmdb.org/t/p/w300/btTbB8ZajCEolCK05y0MzKtLnVL.jpg", description: "A programmer evaluates the consciousness of an advanced AI in an isolated facility." },
        { title: "Blade Runner", year: 1982, director: "Ridley Scott", poster: "https://image.tmdb.org/t/p/w300/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg", description: "A detective hunts rogue replicants while questioning what it means to be human." },
        { title: "Her", year: 2013, director: "Spike Jonze", poster: "https://image.tmdb.org/t/p/w300/lEIaL12hSkqqe83kgADkbUqEnvk.jpg", description: "A lonely man develops a relationship with an AI operating system in near-future Los Angeles." },
        { title: "Embrace of the Serpent", year: 2015, director: "Ciro Guerra", poster: "https://image.tmdb.org/t/p/w300/3DGWnYMkwEIVqPpyI9MfzVWiIWp.jpg", description: "A shaman guides two scientists through the Amazon decades apart in this hypnotic journey." },
        { title: "The Thin Red Line", year: 1998, director: "Terrence Malick", poster: "https://image.tmdb.org/t/p/w300/t8FMflerWOgH9QxcLr1T3Cq2wHc.jpg", description: "Soldiers contemplate life, death, and nature during the Battle of Guadalcanal." },
        { title: "A.I. Artificial Intelligence", year: 2001, director: "Steven Spielberg", poster: "https://image.tmdb.org/t/p/w300/wnTzVL0fv1NNfo2TASoTTxU8Vzk.jpg", description: "A robotic boy seeks to become real to win back his human mother's love." },
        { title: "Cloud Atlas", year: 2012, director: "Wachowskis", poster: "https://image.tmdb.org/t/p/w300/1Y3bfD7JJTkhH0l5q6qPCrxHDlq.jpg", description: "Six stories across time explore how actions ripple through past, present, and future." },
    ],
    weird: [
        { title: "Swiss Army Man", year: 2016, director: "Daniel Kwan, Daniel Scheinert", poster: "https://image.tmdb.org/t/p/w300/4wNVzCUFO5k0sfJxT6dUfVCDGpJ.jpg", description: "A man stranded on an island befriends a flatulent corpse." },
        { title: "The Lobster", year: 2015, director: "Yorgos Lanthimos", poster: "https://image.tmdb.org/t/p/w300/pVQqbCRxTJDCVGqf2JvIAyxz8I1.jpg", description: "Single people must find a mate or be transformed into an animal." },
        { title: "Sorry to Bother You", year: 2018, director: "Boots Riley", poster: "https://image.tmdb.org/t/p/w300/peTl1V04E9ppvhgvNmSX0r2ALqO.jpg", description: "A telemarketer discovers a magical key to success with bizarre consequences." },
        { title: "Being John Malkovich", year: 1999, director: "Spike Jonze", poster: "https://image.tmdb.org/t/p/w300/nSSyxmAPHVlLVwLDkxqsqBXOI8x.jpg", description: "A puppeteer discovers a portal into actor John Malkovich's mind." },
        { title: "Synecdoche, New York", year: 2008, director: "Charlie Kaufman", poster: "https://image.tmdb.org/t/p/w300/qnGJALQHu2jXaJvXBweb4gNqoJr.jpg", description: "A theater director creates a life-sized replica of New York inside a warehouse." },
        { title: "I'm Thinking of Ending Things", year: 2020, director: "Charlie Kaufman", poster: "https://image.tmdb.org/t/p/w300/5hnqMzCf0vNV5oAGRfzLbjaPLXg.jpg", description: "A woman questions her relationship during a trip to meet her boyfriend's parents." },
        { title: "Dogtooth", year: 2009, director: "Yorgos Lanthimos", poster: "https://image.tmdb.org/t/p/w300/oReNPfE5D8pWl7wLr6qRhiVJxvf.jpg", description: "Parents keep their children isolated in a compound with bizarre rules." },
        { title: "Holy Motors", year: 2012, director: "Leos Carax", poster: "https://image.tmdb.org/t/p/w300/vRYFYqVKYr6Qm5yGqk8VXVABvPJ.jpg", description: "A man travels through Paris playing different characters in mysterious appointments." },
        { title: "Eraserhead", year: 1977, director: "David Lynch", poster: "https://image.tmdb.org/t/p/w300/ux5MLElaiwT9jXUxIGMEfvWZkfy.jpg", description: "A man faces anxieties about fatherhood in a nightmarish industrial landscape." },
        { title: "Enter the Void", year: 2009, director: "Gaspar Noé", poster: "https://image.tmdb.org/t/p/w300/6Gu06T0S5vlOc1DlBbM6ewj6v8V.jpg", description: "A drug dealer's spirit observes Tokyo from above after his death." },
        { title: "The Killing of a Sacred Deer", year: 2017, director: "Yorgos Lanthimos", poster: "https://image.tmdb.org/t/p/w300/pOXhD5eLm3TX81FO3dshqbqWjSJ.jpg", description: "A surgeon must make an impossible sacrifice when his family is cursed." },
        { title: "Rubber", year: 2010, director: "Quentin Dupieux", poster: "https://image.tmdb.org/t/p/w300/ryFMW5E6YYvYVZYcqBkGctzPjGa.jpg", description: "A sentient tire with psychokinetic powers goes on a killing spree." },
        { title: "The Holy Mountain", year: 1973, director: "Alejandro Jodorowsky", poster: "https://image.tmdb.org/t/p/w300/gCE2Av0MfxweCl8JHf3vOiXxiXs.jpg", description: "A thief joins a spiritual journey with seven powerful figures." },
        { title: "Mulholland Drive", year: 2001, director: "David Lynch", poster: "https://image.tmdb.org/t/p/w300/h52sVx7F0IqkqGVP3Xz1Hf4F2Pk.jpg", description: "A woman with amnesia and an aspiring actress search for answers in Los Angeles." },
        { title: "Adaptation", year: 2002, director: "Spike Jonze", poster: "https://image.tmdb.org/t/p/w300/fTYHWZriu1mpiFNbnpmI6s4hwGM.jpg", description: "A screenwriter struggles to adapt a book while his twin brother writes a thriller." },
        { title: "Brazil", year: 1985, director: "Terry Gilliam", poster: "https://image.tmdb.org/t/p/w300/4ctDCybazVweTFNTCO8rDRqyMbX.jpg", description: "A bureaucrat in a dystopian future dreams of escape through surreal fantasies." },
        { title: "El Topo", year: 1970, director: "Alejandro Jodorowsky", poster: "https://image.tmdb.org/t/p/w300/p1Iy3JfZDRx8sJnTUG1L5Y2EKqa.jpg", description: "A gunfighter and his son journey through a surreal western landscape." },
        { title: "Videodrome", year: 1983, director: "David Cronenberg", poster: "https://image.tmdb.org/t/p/w300/9FB1KdxUbOyGXKyQmrPG2LpZM7a.jpg", description: "A TV programmer discovers a broadcast signal that causes disturbing hallucinations." },
        { title: "The City of Lost Children", year: 1995, director: "Jean-Pierre Jeunet", poster: "https://image.tmdb.org/t/p/w300/2aMmc8cCOkHU6ZAS7fsNTWj3jU6.jpg", description: "A scientist kidnaps children to steal their dreams in this dark fantasy." },
        { title: "Naked Lunch", year: 1991, director: "David Cronenberg", poster: "https://image.tmdb.org/t/p/w300/rZv6B7bE4AXY2DjNsVNVMQVqEHQ.jpg", description: "A writer's drug-fueled hallucinations blur reality in this adaptation of Burroughs' novel." },
        { title: "Fear and Loathing in Las Vegas", year: 1998, director: "Terry Gilliam", poster: "https://image.tmdb.org/t/p/w300/pduitse3afvLVy8l8wqRk1Yq2aCo.jpg", description: "A journalist and his lawyer embark on a drug-fueled trip to Las Vegas." },
        { title: "The Zero Theorem", year: 2013, director: "Terry Gilliam", poster: "https://image.tmdb.org/t/p/w300/8ifHaZmG4y5A4nWE0HZrh3aFCgJ.jpg", description: "A computer hacker searches for meaning while working to prove life is meaningless." },
        { title: "Enemy", year: 2013, director: "Denis Villeneuve", poster: "https://image.tmdb.org/t/p/w300/tLwVGWFRaJSfOLZYhKdGd7mSU3p.jpg", description: "A man discovers his exact doppelgänger and becomes obsessed with meeting him." },
        { title: "Tusk", year: 2014, director: "Kevin Smith", poster: "https://image.tmdb.org/t/p/w300/sMfx50uJVwJM4VJFpDPG8EvQzEJ.jpg", description: "A podcaster is surgically transformed into a walrus by a deranged sailor." },
        { title: "The Voices", year: 2014, director: "Marjane Satrapi", poster: "https://image.tmdb.org/t/p/w300/iPOQRKBDHFxQhZPXB6kj2cU5Z6d.jpg", description: "A factory worker's pets give him advice that leads to increasingly dark situations." },
    ],
    cozy: [
        { title: "Kiki's Delivery Service", year: 1989, director: "Hayao Miyazaki", poster: "https://image.tmdb.org/t/p/w300/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg", description: "A young witch starts a delivery service in a seaside town." },
        { title: "My Neighbor Totoro", year: 1988, director: "Hayao Miyazaki", poster: "https://image.tmdb.org/t/p/w300/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg", description: "Two girls discover magical forest spirits while their mother is in the hospital." },
        { title: "When Harry Met Sally", year: 1989, director: "Rob Reiner", poster: "https://image.tmdb.org/t/p/w300/3wkbKeowUp1Zpkw1KkBqMWbt0P9.jpg", description: "Two friends question whether men and women can ever just be friends." },
        { title: "Julie & Julia", year: 2009, director: "Nora Ephron", poster: "https://image.tmdb.org/t/p/w300/vSNv7MNPvFhKAL0fEfr2uMCTy8v.jpg", description: "A woman cooks through Julia Child's cookbook, paralleling Child's own journey." },
        { title: "Midnight in Paris", year: 2011, director: "Woody Allen", poster: "https://image.tmdb.org/t/p/w300/4wBG5kbfagTQclETblPRRGihk0I.jpg", description: "A writer travels back to 1920s Paris every night at midnight." },
        { title: "Begin Again", year: 2013, director: "John Carney", poster: "https://image.tmdb.org/t/p/w300/pjdamAP2WE5sUQiLvVMsLsYwq7Q.jpg", description: "A music producer and a singer-songwriter collaborate on an album in New York." },
        { title: "The Station Agent", year: 2003, director: "Tom McCarthy", poster: "https://image.tmdb.org/t/p/w300/tLMv7iLX5qkT1GdKEkCeXfK8qCh.jpg", description: "A reclusive man finds friendship in an abandoned train station." },
        { title: "Brooklyn", year: 2015, director: "John Crowley", poster: "https://image.tmdb.org/t/p/w300/3zmTPXOsAYP0a6SDHXU2ivJJsM2.jpg", description: "An Irish immigrant navigates her new life in 1950s Brooklyn." },
        { title: "About Time", year: 2013, director: "Richard Curtis", poster: "https://image.tmdb.org/t/p/w300/7V7WS4aFlfeySvfb1U5NcjsoGVO.jpg", description: "A man uses time travel to improve his love life." },
        { title: "The Holiday", year: 2006, director: "Nancy Meyers", poster: "https://image.tmdb.org/t/p/w300/7ziKaySsU6BvjCR0IVCi8v4VEL0.jpg", description: "Two women swap homes for the holidays and find unexpected romance." },
        { title: "Chef", year: 2014, director: "Jon Favreau", poster: "https://image.tmdb.org/t/p/w300/jKxXM3RBkyvJ5lBfqsHLQ6wZj9w.jpg", description: "A chef starts a food truck to reclaim his passion." },
        { title: "Amélie", year: 2001, director: "Jean-Pierre Jeunet", poster: "https://image.tmdb.org/t/p/w300/nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg", description: "A whimsical waitress secretly improves the lives of those around her." },
        { title: "Notting Hill", year: 1999, director: "Roger Michell", poster: "https://image.tmdb.org/t/p/w300/3pCuYVEj3qwvOibiEk10RcXh3xw.jpg", description: "A bookshop owner falls in love with a famous American actress." },
        { title: "You've Got Mail", year: 1998, director: "Nora Ephron", poster: "https://image.tmdb.org/t/p/w300/4U8l2fGU6jxcA9HJWtQgCfOa28Y.jpg", description: "Two business rivals unknowingly fall in love over email." },
        { title: "Groundhog Day", year: 1993, director: "Harold Ramis", poster: "https://image.tmdb.org/t/p/w300/gCgt1WARPZaXnq523ySQEUKinCs.jpg", description: "A weatherman relives the same day over and over." },
        { title: "Howl's Moving Castle", year: 2004, director: "Hayao Miyazaki", poster: "https://image.tmdb.org/t/p/w300/6pZgH10jhpToPcf02jTmUAtiLIW.jpg", description: "A young woman is transformed into an old lady and seeks refuge in a wizard's moving castle." },
        { title: "Spirited Away", year: 2001, director: "Hayao Miyazaki", poster: "https://image.tmdb.org/t/p/w300/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", description: "A girl must work in a magical bathhouse to free her parents from a curse." },
        { title: "The Hundred-Foot Journey", year: 2014, director: "Lasse Hallström", poster: "https://image.tmdb.org/t/p/w300/wug4iEr2LBkV0bvQ3v7YOBPRdEu.jpg", description: "An Indian family opens a restaurant across from a Michelin-starred French establishment." },
        { title: "Chocolat", year: 2000, director: "Lasse Hallström", poster: "https://image.tmdb.org/t/p/w300/kGljuMwXDvXLzMQ0v6xrbKsuzFE.jpg", description: "A woman opens a chocolate shop in a conservative French village during Lent." },
        { title: "Ratatouille", year: 2007, director: "Brad Bird", poster: "https://image.tmdb.org/t/p/w300/t3vaWRPSf6WjDSq6QAJ1JMgFPnl.jpg", description: "A rat dreams of becoming a chef in a prestigious Paris restaurant." },
        { title: "Local Hero", year: 1983, director: "Bill Forsyth", poster: "https://image.tmdb.org/t/p/w300/lIfXjcA1GFmG7ChLpyDHf3E7XqO.jpg", description: "An oil company representative falls in love with a Scottish coastal village." },
        { title: "Sleepless in Seattle", year: 1993, director: "Nora Ephron", poster: "https://image.tmdb.org/t/p/w300/afkYP1EKpAAJP48BbfUlziLqT8w.jpg", description: "A widower's son calls a radio show to find his dad a new wife." },
        { title: "It's Complicated", year: 2009, director: "Nancy Meyers", poster: "https://image.tmdb.org/t/p/w300/bUsGQPZsZmMKdJZvhJVRTJVdpZw.jpg", description: "A divorced couple rekindles their romance while their lives become delightfully messy." },
        { title: "Something's Gotta Give", year: 2003, director: "Nancy Meyers", poster: "https://image.tmdb.org/t/p/w300/iCJJBMfxd6s1VWERLRJfubwELxR.jpg", description: "An aging bachelor falls for the mother of his young girlfriend." },
        { title: "The Best Exotic Marigold Hotel", year: 2011, director: "John Madden", poster: "https://image.tmdb.org/t/p/w300/7jKUixNuMvTg6RGvLEPY8fRhZ5f.jpg", description: "British retirees find new life and love at a hotel in India." },
        { title: "Waking Ned Devine", year: 1998, director: "Kirk Jones", poster: "https://image.tmdb.org/t/p/w300/wm7xOXpXv6wF1SMSwVz8Bi8sIEW.jpg", description: "A small Irish village conspires to claim a dead man's lottery winnings." },
        { title: "Once", year: 2007, director: "John Carney", poster: "https://image.tmdb.org/t/p/w300/bqGzrchr94MmUoHZxgpOo6OUW5N.jpg", description: "A Dublin street musician and a Czech immigrant bond over music and create an album together." },
    ],
};

// Keyword mapping for emotions
const emotionKeywords = {
    happy: ['happy', 'joyful', 'excited', 'cheerful', 'upbeat', 'elated', 'glad', 'good', 'great', 'amazing', 'wonderful'],
    sad: ['sad', 'down', 'depressed', 'blue', 'heartbroken', 'sorrowful', 'upset', 'crying', 'devastated', 'grief'],
    anxious: ['anxious', 'stressed', 'nervous', 'tense', 'worried', 'overwhelmed', 'panicked', 'on edge', 'frantic'],
    melancholic: ['melancholic', 'bittersweet', 'wistful', 'pensive', 'lonely', 'empty', 'numb', 'distant', 'reflective'],
    energetic: ['energetic', 'pumped', 'hyped', 'intense', 'adrenaline', 'wild', 'crazy', 'fired up', 'aggressive'],
    nostalgic: ['nostalgic', 'reminiscent', 'yearning', 'sentimental', 'memories', 'past', 'missing', 'longing'],
    contemplative: ['contemplative', 'thoughtful', 'philosophical', 'curious', 'questioning', 'deep', 'introspective', 'existential'],
    weird: ['weird', 'strange', 'bizarre', 'surreal', 'odd', 'quirky', 'offbeat', 'trippy', 'wtf'],
    cozy: ['cozy', 'warm', 'comfortable', 'peaceful', 'calm', 'relaxed', 'chill', 'mellow', 'content'],
};

const emotionSuggestions = [
    { text: 'happy', label: 'happy' },
    { text: 'melancholic', label: 'melancholic' },
    { text: 'anxious', label: 'anxious' },
    { text: 'nostalgic', label: 'nostalgic' },
    { text: 'cozy', label: 'cozy' },
    { text: 'weird', label: 'weird' },
    { text: 'energetic', label: 'energetic' },
    { text: 'contemplative', label: 'contemplative' },
    { text: 'sad', label: 'sad' },
];

let currentEmotions = [];
let usedMovies = [];

// Get elements
const emotionInput = document.getElementById('emotion-input');
const findBtn = document.getElementById('find-btn');
const regenerateBtn = document.getElementById('regenerate-btn');
const results = document.getElementById('results');
const moviesGrid = document.getElementById('movies-grid');
const modal = document.getElementById('movie-modal');
const modalClose = document.getElementById('modal-close');
const suggestionChips = document.getElementById('suggestion-chips');

// Create suggestion chips
emotionSuggestions.forEach(suggestion => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = suggestion.text;
    chip.addEventListener('click', () => {
        emotionInput.value = suggestion.text;
        findFilms();
    });
    suggestionChips.appendChild(chip);
});

// Detect emotions from input (supports multiple)
function detectEmotions(input) {
    const lowerInput = input.toLowerCase();
    const detectedEmotions = [];

    // Check for each emotion
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
        if (keywords.some(keyword => lowerInput.includes(keyword))) {
            detectedEmotions.push(emotion);
        }
    }

    // If no emotions detected, pick a random one
    if (detectedEmotions.length === 0) {
        const emotions = Object.keys(movieDatabase);
        detectedEmotions.push(emotions[Math.floor(Math.random() * emotions.length)]);
    }

    return detectedEmotions;
}

// Get random movies for one or more emotions
function getRandomMovies(emotions, count = 4) {
    let allMovies = [];

    // If single emotion, use movies from that category
    if (emotions.length === 1) {
        allMovies = [...movieDatabase[emotions[0]]];
    } else {
        // For multiple emotions, combine movies from all categories
        emotions.forEach(emotion => {
            allMovies = allMovies.concat([...movieDatabase[emotion]]);
        });

        // Shuffle the combined array
        allMovies.sort(() => Math.random() - 0.5);
    }

    const selected = [];

    // Filter out recently used movies
    const available = allMovies.filter(movie =>
        !usedMovies.some(used => used.title === movie.title)
    );

    // If we've used too many, reset
    if (available.length < count) {
        usedMovies = [];
        return getRandomMovies(emotions, count);
    }

    // Randomly select movies
    for (let i = 0; i < count && i < available.length; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
    }

    // Track used movies
    usedMovies.push(...selected);
    if (usedMovies.length > 20) {
        usedMovies = usedMovies.slice(-20);
    }

    return selected;
}

// Show movie details in modal
function showMovieDetails(movie) {
    const modalPoster = document.getElementById('modal-poster');
    
    // Clear previous content
    modalPoster.innerHTML = '';
    modalPoster.style.backgroundImage = '';
    modalPoster.style.backgroundColor = '';

    // If poster URL exists, use it as background image
    if (movie.poster && movie.poster.trim() !== '') {
        modalPoster.style.backgroundImage = `url('${movie.poster}')`;
        modalPoster.style.backgroundSize = 'cover';
        modalPoster.style.backgroundPosition = 'center';
    } else {
        // Fallback to colored background with text
        modalPoster.style.backgroundColor = stringToColor(movie.title);
        
        const title = document.createElement('div');
        title.className = 'modal-poster-title';
        title.textContent = movie.title;
        modalPoster.appendChild(title);
    }

    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-director').textContent = movie.director;
    document.getElementById('modal-description').textContent = movie.description;
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Generate consistent color from string
function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 40%, 25%)`;
}

// Display movies
function displayMovies(movies) {
    moviesGrid.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.addEventListener('click', () => showMovieDetails(movie));

        const poster = document.createElement('div');
        poster.className = 'movie-poster';

        // If poster URL exists, use it as background image
        if (movie.poster && movie.poster.trim() !== '') {
            poster.style.backgroundImage = `url('${movie.poster}')`;
            poster.style.backgroundSize = 'cover';
            poster.style.backgroundPosition = 'center';
        } else {
            // Fallback to colored background with text
            poster.style.backgroundColor = stringToColor(movie.title);

            const posterContent = document.createElement('div');

            const posterTitle = document.createElement('div');
            posterTitle.className = 'poster-title';
            posterTitle.textContent = movie.title;

            const posterYear = document.createElement('div');
            posterYear.className = 'poster-year';
            posterYear.textContent = movie.year;

            posterContent.appendChild(posterTitle);
            posterContent.appendChild(posterYear);
            poster.appendChild(posterContent);
        }

        movieCard.appendChild(poster);
        moviesGrid.appendChild(movieCard);
    });

    results.classList.remove('hidden');
}

// Find films based on emotion(s)
function findFilms() {
    const input = emotionInput.value.trim();

    if (!input) {
        emotionInput.focus();
        return;
    }

    currentEmotions = detectEmotions(input);
    const movies = getRandomMovies(currentEmotions);
    displayMovies(movies);
}

// Regenerate recommendations
function regenerate() {
    if (!currentEmotions || currentEmotions.length === 0) return;

    // Trigger fade out
    moviesGrid.style.opacity = '0';

    setTimeout(() => {
        const movies = getRandomMovies(currentEmotions);
        displayMovies(movies);
        moviesGrid.style.opacity = '1';
    }, 300);
}

// Event listeners
findBtn.addEventListener('click', findFilms);
regenerateBtn.addEventListener('click', regenerate);

emotionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        findFilms();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
