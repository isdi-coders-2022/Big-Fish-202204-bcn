const beers = [
  {
    id: 4,
    name: "Pilsen Lager",
    tagline: "Unleash the Yeast Series.",
    first_brewed: "09/2013",
    description:
      "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
    image_url: "https://images.punkapi.com/v2/4.png",
    abv: 6.3,
    ibu: 55,
    target_fg: 1012,
    target_og: 1060,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 80,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: null,
        },
      ],
      fermentation: {
        temp: {
          value: 9,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 4.58,
            unit: "kilograms",
          },
        },
        {
          name: "Caramalt",
          amount: {
            value: 0.25,
            unit: "kilograms",
          },
        },
        {
          name: "Dark Crystal",
          amount: {
            value: 0.06,
            unit: "kilograms",
          },
        },
        {
          name: "Munich",
          amount: {
            value: 0.25,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Centennial",
          amount: {
            value: 5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: {
            value: 5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Centennial",
          amount: {
            value: 10,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: {
            value: 10,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Centennial",
          amount: {
            value: 17.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: {
            value: 17.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 2007 - Pilsen Lager™",
    },
    food_pairing: [
      "Spicy crab cakes",
      "Spicy cucumber and carrot Thai salad",
      "Sweet filled dumplings",
    ],
    brewers_tips:
      "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    id: 8,
    name: "Fake Lager",
    tagline: "Bohemian Pilsner.",
    first_brewed: "03/2013",
    description:
      "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
    image_url: "https://images.punkapi.com/v2/8.png",
    abv: 4.7,
    ibu: 40,
    target_fg: 1010,
    target_og: 1046,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 78,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 10,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 3.33,
            unit: "kilograms",
          },
        },
        {
          name: "Munich",
          amount: {
            value: 0.42,
            unit: "kilograms",
          },
        },
        {
          name: "Caramalt",
          amount: {
            value: 0.28,
            unit: "kilograms",
          },
        },
        {
          name: "Acidulated Malt",
          amount: {
            value: 0.07,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Magnum",
          amount: {
            value: 7.5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Magnum",
          amount: {
            value: 5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Hersbrucker",
          amount: {
            value: 6.25,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Saaz",
          amount: {
            value: 6.25,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Hersbrucker",
          amount: {
            value: 18.75,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Saaz",
          amount: {
            value: 18.75,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 2007 - Pilsen Lager™",
    },
    food_pairing: [
      "Fried crab cakes with avocado salsa",
      "Spicy shredded pork roll with hot dipping sauce",
      "Key lime pie",
    ],
    brewers_tips:
      "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 81,
    name: "India Session Lager - Prototype Challenge",
    tagline: "Refreshing Hop Fix.",
    first_brewed: "11/2015",
    description:
      "BrewDog’s level of dry-hop to a beer formed with a baseline of 100% pilsner malt – and at under 4.5% ABV – gives you a style that flirts at the edges of several others. Think aromas of fresh cut grass, nettle, white grape, melon, tangerine - with similar flavours leading to a dry, bitter finish.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.4,
    ibu: 35,
    target_fg: 1007,
    target_og: 1040,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 79.5,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 10,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Pilsner",
          amount: {
            value: 3.25,
            unit: "kilograms",
          },
        },
        {
          name: "Dextrin Malt",
          amount: {
            value: 0.38,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Chinook",
          amount: {
            value: 2.5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Citra",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Mosaic",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: {
            value: 63,
            unit: "grams",
          },
          add: "dry hop",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: {
            value: 63,
            unit: "grams",
          },
          add: "dry hop",
          attribute: "flavour",
        },
        {
          name: "Citra",
          amount: {
            value: 63,
            unit: "grams",
          },
          add: "dry hop",
          attribute: "aroma",
        },
      ],
      yeast: "Wyeast 2007 - Pilsen Lager™",
    },
    food_pairing: [
      "Tomato and rosemary palmiers",
      "Bratwurst with sauerkraut",
      "Lemon drizzle cake",
    ],
    brewers_tips:
      "Let the beer lager at a low temperature for 3-4 weeks before adding the dry hops.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 159,
    name: "Black Tokyo Horizon (w/Nøgne Ø & Mikkeller)",
    tagline: "Imperial Stout Collaboration.",
    first_brewed: "12/2010",
    description:
      "Special Collaboration between Nøgne, Mikkeller and BrewDog which is a recipe based on all three brewers’ big stouts; Nøgne Ø Dark Horizon, Mikkeller Black and BrewDog Tokyo*.",
    image_url: "https://images.punkapi.com/v2/159.png",
    abv: 17.2,
    ibu: 75,
    target_fg: 1030,
    target_og: 1156,
    ebc: 128,
    srm: 64,
    ph: 4.4,
    attenuation_level: 80.8,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: 120,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 4.38,
            unit: "kilograms",
          },
        },
        {
          name: "Carafa Special Malt Type 1",
          amount: {
            value: 1.5,
            unit: "kilograms",
          },
        },
        {
          name: "Flaked Oats",
          amount: {
            value: 0.56,
            unit: "kilograms",
          },
        },
        {
          name: "Smoked Malt",
          amount: {
            value: 0.25,
            unit: "kilograms",
          },
        },
        {
          name: "Crystal 150",
          amount: {
            value: 0.25,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Columbus",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Columbus",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "First Gold",
          amount: {
            value: 18.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Motueka",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Hersbrucker",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "First Gold",
          amount: {
            value: 18.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Motueka",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Hersbrucker",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1272 - American Ale II™",
    },
    food_pairing: [
      "Truffle oil filet mignon",
      "Sweet sticky beef brisket",
      "Chocolate and dark cherry fondant",
    ],
    brewers_tips:
      "Extend the mash time as much as possible to create maximum fermentable sugars. Boil for longer in the kettle to help evaporate off the water, and make the sugar concentration stronger.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];

export default beers;
