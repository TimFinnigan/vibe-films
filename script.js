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

let currentEmotion = '';
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

// Detect emotion from input
function detectEmotion(input) {
    const lowerInput = input.toLowerCase();

    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
        if (keywords.some(keyword => lowerInput.includes(keyword))) {
            return emotion;
        }
    }

    // Default to random emotion if no match
    const emotions = Object.keys(movieDatabase);
    return emotions[Math.floor(Math.random() * emotions.length)];
}

// Get random movies for an emotion
function getRandomMovies(emotion, count = 4) {
    const movies = [...movieDatabase[emotion]];
    const selected = [];

    // Filter out recently used movies
    const available = movies.filter(movie =>
        !usedMovies.some(used => used.title === movie.title)
    );

    // If we've used too many, reset
    if (available.length < count) {
        usedMovies = [];
        return getRandomMovies(emotion, count);
    }

    // Randomly select movies
    for (let i = 0; i < count; i++) {
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
    modalPoster.style.backgroundColor = stringToColor(movie.title);

    const modalPosterTitle = modalPoster.querySelector('.modal-poster-title');
    if (modalPosterTitle) {
        modalPosterTitle.textContent = movie.title;
    } else {
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
        movieCard.appendChild(poster);
        moviesGrid.appendChild(movieCard);
    });

    results.classList.remove('hidden');
}

// Find films based on emotion
function findFilms() {
    const emotion = emotionInput.value.trim();

    if (!emotion) {
        emotionInput.focus();
        return;
    }

    currentEmotion = detectEmotion(emotion);
    const movies = getRandomMovies(currentEmotion);
    displayMovies(movies);
}

// Regenerate recommendations
function regenerate() {
    if (!currentEmotion) return;

    // Trigger fade out
    moviesGrid.style.opacity = '0';

    setTimeout(() => {
        const movies = getRandomMovies(currentEmotion);
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
