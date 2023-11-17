const resMenuMockData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    title: "Recommended",
    itemCards: [
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "117101911",
            name: "Blazing Onion & Paprika",
            category: "New Launches",
            description:
              "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
            imageId: "257508279a8ed217b14b01bee97ba9a1",
            inStock: 1,
            isVeg: 1,
            price: 32900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186385",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99625005",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186387",
                        variationId: "99625022",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99625006",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186387",
                        variationId: "99625027",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99625009",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186387",
                        variationId: "99625029",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99625012",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186387",
                        variationId: "99625035",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99625014",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186387",
                        variationId: "99625038",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186387",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 179,
                      id: "99625017",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 549,
                      id: "99625020",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 329,
                      default: 1,
                      id: "99625022",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 209,
                      id: "99625025",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 379,
                      id: "99625027",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 428,
                      id: "99625029",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 254,
                      id: "99625031",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 209,
                      id: "99625033",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 379,
                      id: "99625035",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 278,
                      id: "99625038",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625005",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625017",
                    },
                  ],
                  price: 17900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625005",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625020",
                    },
                  ],
                  price: 54900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625005",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625022",
                    },
                  ],
                  price: 32900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625006",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625025",
                    },
                  ],
                  price: 20900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625006",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625027",
                    },
                  ],
                  price: 37900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625009",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625029",
                    },
                  ],
                  price: 42800,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625009",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625031",
                    },
                  ],
                  price: 25400,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625012",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625033",
                    },
                  ],
                  price: 20900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625012",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625035",
                    },
                  ],
                  price: 37900,
                },
                {
                  variations: [
                    {
                      groupId: "32186385",
                      variationId: "99625014",
                    },
                    {
                      groupId: "32186387",
                      variationId: "99625038",
                    },
                  ],
                  price: 27800,
                  addonCombinations: [
                    {
                      groupId: "110829876",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829876",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829876",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 32900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "117101912",
            name: "Fiery Jalapeno & Paprika",
            category: "New Launches",
            description:
              "Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.",
            imageId: "285d47a0c466347ba3d199a33ea37831",
            inStock: 1,
            isVeg: 1,
            price: 32900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186373",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99624915",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186375",
                        variationId: "99624929",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99624917",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186375",
                        variationId: "99624935",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99624918",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186375",
                        variationId: "99624939",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99624920",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186375",
                        variationId: "99624948",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99624922",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186375",
                        variationId: "99624951",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186375",
                  name: "Size",
                  variations: [
                    {
                      name: "Large",
                      price: 549,
                      id: "99624926",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 329,
                      default: 1,
                      id: "99624929",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 179,
                      id: "99624931",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 209,
                      id: "99624933",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 379,
                      id: "99624935",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 428,
                      id: "99624939",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 254,
                      id: "99624941",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 209,
                      id: "99624944",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 379,
                      id: "99624948",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 278,
                      id: "99624951",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624915",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624926",
                    },
                  ],
                  price: 54900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624915",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624929",
                    },
                  ],
                  price: 32900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624915",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624931",
                    },
                  ],
                  price: 17900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624917",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624933",
                    },
                  ],
                  price: 20900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624917",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624935",
                    },
                  ],
                  price: 37900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624918",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624939",
                    },
                  ],
                  price: 42800,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624918",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624941",
                    },
                  ],
                  price: 25400,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624920",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624944",
                    },
                  ],
                  price: 20900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624920",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624948",
                    },
                  ],
                  price: 37900,
                },
                {
                  variations: [
                    {
                      groupId: "32186373",
                      variationId: "99624922",
                    },
                    {
                      groupId: "32186375",
                      variationId: "99624951",
                    },
                  ],
                  price: 27800,
                  addonCombinations: [
                    {
                      groupId: "110829869",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829869",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829869",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 32900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "5.0",
                ratingCount: "3 ratings",
                ratingCountV2: "3",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "121171528",
            name: "Indi Tandoori Paneer with Ragi Crust",
            category: "Ragi Pizza",
            description:
              "Enjoy your favourite hot & spicy pizza, now with the goodness of our new Ragi Super Crust. Made with 100% Mozzarella Cheese & topped with tandoori Paneer, crisp Capsicum, spicy red Paprika & garnished with mint mayo. Our delicious Ragi crust is also packed with super-seeds such as Sunflower, Watermelon, Pumpkin & Flax seeds for extra touch of goodness.",
            imageId: "d55348de940951cbfca3ed5e53cddd5d",
            inStock: 1,
            isVeg: 1,
            price: 41800,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186410",
                  name: "Crust",
                  variations: [
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      default: 1,
                      id: "99625161",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186411",
                        variationId: "99625166",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186411",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 418,
                      default: 1,
                      id: "99625166",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186410",
                      variationId: "99625161",
                    },
                    {
                      groupId: "32186411",
                      variationId: "99625166",
                    },
                  ],
                  price: 41800,
                  addonCombinations: [
                    {
                      groupId: "110829884",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829884",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829884",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 41800,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "121171530",
            name: "Peppy Paneer with Ragi Crust",
            category: "Ragi Pizza",
            description:
              "Relish our all-time bestseller, now with the goodness of our new Ragi Super Crust. Made with 100% Mozzarella Cheese & topped with masala Paneer, crisp Capsicum & spicy red Paprika. Our delicious Ragi crust is also packed with super-seeds such as Sunflower, Watermelon, Pumpkin & Flax seeds for extra touch of goodness.",
            imageId: "7c134c050e1af5ec4cd22f53a6a0c7ca",
            inStock: 1,
            isVeg: 1,
            price: 36800,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186421",
                  name: "Crust",
                  variations: [
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      default: 1,
                      id: "99625242",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186422",
                        variationId: "99625246",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186422",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 368,
                      default: 1,
                      id: "99625246",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186421",
                      variationId: "99625242",
                    },
                    {
                      groupId: "32186422",
                      variationId: "99625246",
                    },
                  ],
                  price: 36800,
                  addonCombinations: [
                    {
                      groupId: "110829889",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829889",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829889",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 36800,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "121171531",
            name: "Veg Paradise with Ragi Crust",
            category: "Ragi Pizza",
            description:
              "Enjoy your favourite pizza, now with the goodness of our new Ragi Super Crust. Made with 100% Mozzarella Cheese & topped with golden Corn, crisp Capsicum, black Olives & spicy red Paprika. Our delicious Ragi crust is also packed with super-seeds such as Sunflower, Watermelon, Pumpkin & Flax seeds for extra touch of goodness.",
            imageId: "9cbad0fdbcfa0cf00ffcb2bab0b005e1",
            inStock: 1,
            isVeg: 1,
            price: 36800,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186435",
                  name: "Crust",
                  variations: [
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      default: 1,
                      id: "99625316",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186436",
                        variationId: "99625319",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186436",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 368,
                      default: 1,
                      id: "99625319",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186435",
                      variationId: "99625316",
                    },
                    {
                      groupId: "32186436",
                      variationId: "99625319",
                    },
                  ],
                  price: 36800,
                  addonCombinations: [
                    {
                      groupId: "110829895",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829895",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829895",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 36800,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "121171532",
            name: "Margherita with Ragi Crust",
            category: "Ragi Pizza",
            description:
              "Enjoy the all-time Classic delight, now with the goodness of our new Ragi Super Crust. Made with 100% mozzarella cheese, our delicious Ragi crust is also packed with super-seeds such as Sunflower, Watermelon, Pumpkin & Flax seeds for extra touch of goodness.",
            imageId: "3d652d2fcc51c7225798f94ea513b93e",
            inStock: 1,
            isVeg: 1,
            price: 20800,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186429",
                  name: "Crust",
                  variations: [
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      default: 1,
                      id: "99625292",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186431",
                        variationId: "99625293",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186431",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 208,
                      default: 1,
                      id: "99625293",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186429",
                      variationId: "99625292",
                    },
                    {
                      groupId: "32186431",
                      variationId: "99625293",
                    },
                  ],
                  price: 20800,
                  addonCombinations: [
                    {
                      groupId: "110829894",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829894",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829894",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 20800,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "113676413",
            name: "Match Day Veg Combo @Rs.75 off",
            category: "Match Day Combos",
            description:
              "Regular Margherita +Regular  Farmhouse + Garlic Bread + Pepsi",
            imageId: "69a16e7d310b785ab043441281e6f973",
            inStock: 1,
            isVeg: 1,
            price: 46900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "2.7",
                ratingCount: "5 ratings",
                ratingCountV2: "5",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "113676415",
            name: "Super Over Combo (Veg) @Rs.180 off",
            category: "Match Day Combos",
            description:
              "Medium Peppy Paneer + Medium Farmhouse + Garlic Bread + 2 Pepsi",
            imageId: "31c36b0f76effabbde5a3ad6c2fcad4a",
            inStock: 1,
            isVeg: 1,
            price: 99900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "119164184",
            name: "Team Huddle Combo (Veg) @Rs. 130  off",
            category: "Match Day Combos",
            description:
              "Meal for 4: Medium Margherita + Medium Farmhouse with Garlic Bread & 2 Pepsi",
            imageId: "faf4ef937df8355ffce5dd37b972a8a2",
            inStock: 1,
            isVeg: 1,
            price: 82900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "119164186",
            name: "Match Day Veg Party Combo @Rs. 180 off",
            category: "Match Day Combos",
            description:
              "Meal for 4: Regular Veg Extravaganza + Regular Indi Tandoori Paneer + Regular Farmhouse + Regular Veggie Paradise",
            imageId: "0cd4398343d013e2feeeb691be0a1f6b",
            inStock: 1,
            isVeg: 1,
            price: 99900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "119164187",
            name: "Match Day Veg Combo @Rs. 110 off",
            category: "Match Day Combos",
            description:
              "Meal for 2: Regular Veg Extravaganza + Regular Indi Tandoori Paneer with Chocolava Cake & Pepsi",
            imageId: "980e6b393c0abe57c0e0a37dbd79bdda",
            inStock: 1,
            isVeg: 1,
            price: 69900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "125890653",
            name: "Big Hitter Combo (Veg) @Rs. 105  off",
            category: "Match Day Combos",
            description:
              "Regular Farmhouse + Regular Peppy Paneer + Garlic Bread + Pepsi",
            imageId: "23e37d4d955b6daa62a5d2ad7ab3df2e",
            inStock: 1,
            isVeg: 1,
            price: 59900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558566",
            name: "Double Cheese Margherita Pizza",
            category: "Veg Pizza",
            description:
              "A classic delight loaded with extra 100% real mozzarella cheese",
            imageId: "eb10d3bbeea43e9150307a8ebb32b220",
            inStock: 1,
            isVeg: 1,
            price: 39900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32187047",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99628545",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187048",
                        variationId: "99628555",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99628546",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187048",
                        variationId: "99628557",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99628548",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187048",
                        variationId: "99628559",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99628549",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187048",
                        variationId: "99628563",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99628551",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187048",
                        variationId: "99628565",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99628552",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187048",
                        variationId: "99628566",
                      },
                    },
                  ],
                },
                {
                  groupId: "32187048",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 219,
                      id: "99628553",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 639,
                      id: "99628554",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 399,
                      default: 1,
                      id: "99628555",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 249,
                      id: "99628556",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 449,
                      id: "99628557",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 498,
                      id: "99628559",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 294,
                      id: "99628560",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 249,
                      id: "99628562",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 449,
                      id: "99628563",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 219,
                      id: "99628565",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 308,
                      id: "99628566",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628545",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628553",
                    },
                  ],
                  price: 21900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628545",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628554",
                    },
                  ],
                  price: 63900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628545",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628555",
                    },
                  ],
                  price: 39900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628546",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628556",
                    },
                  ],
                  price: 24900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628546",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628557",
                    },
                  ],
                  price: 44900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628548",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628559",
                    },
                  ],
                  price: 49800,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628548",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628560",
                    },
                  ],
                  price: 29400,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628549",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628562",
                    },
                  ],
                  price: 24900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628549",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628563",
                    },
                  ],
                  price: 44900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628551",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628565",
                    },
                  ],
                  price: 21900,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187047",
                      variationId: "99628552",
                    },
                    {
                      groupId: "32187048",
                      variationId: "99628566",
                    },
                  ],
                  price: 30800,
                  addonCombinations: [
                    {
                      groupId: "110830079",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830079",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110830079",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 39900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "4.2",
                ratingCount: "131 ratings",
                ratingCountV2: "131",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558576",
            name: "Fresh Veggie Pizza",
            category: "Veg Pizza",
            description:
              "Delectable combination of onion & capsicum, a veggie lovers pick",
            imageId: "4f3395d60363f951a7f9e2debbc352f2",
            inStock: 1,
            isVeg: 1,
            price: 39900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32187081",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99628747",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187083",
                        variationId: "99628764",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99628749",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187083",
                        variationId: "99628768",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99628752",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187083",
                        variationId: "99628771",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99628754",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187083",
                        variationId: "99628780",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99628757",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187083",
                        variationId: "99628784",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99628759",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187083",
                        variationId: "99628788",
                      },
                    },
                  ],
                },
                {
                  groupId: "32187083",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 219,
                      id: "99628761",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 639,
                      id: "99628762",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 399,
                      default: 1,
                      id: "99628764",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 249,
                      id: "99628766",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 449,
                      id: "99628768",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 498,
                      id: "99628771",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 294,
                      id: "99628773",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 249,
                      id: "99628777",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 449,
                      id: "99628780",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 219,
                      id: "99628784",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 308,
                      id: "99628788",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628747",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628761",
                    },
                  ],
                  price: 21900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628747",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628762",
                    },
                  ],
                  price: 63900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628747",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628764",
                    },
                  ],
                  price: 39900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628749",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628766",
                    },
                  ],
                  price: 24900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628749",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628768",
                    },
                  ],
                  price: 44900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628752",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628771",
                    },
                  ],
                  price: 49800,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628752",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628773",
                    },
                  ],
                  price: 29400,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628754",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628777",
                    },
                  ],
                  price: 24900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628754",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628780",
                    },
                  ],
                  price: 44900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628757",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628784",
                    },
                  ],
                  price: 21900,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187081",
                      variationId: "99628759",
                    },
                    {
                      groupId: "32187083",
                      variationId: "99628788",
                    },
                  ],
                  price: 30800,
                  addonCombinations: [
                    {
                      groupId: "110830091",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830091",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110830091",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 39900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "4.0",
                ratingCount: "81 ratings",
                ratingCountV2: "81",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558581",
            name: "Farmhouse Pizza",
            category: "Veg Pizza",
            description:
              "Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
            imageId: "f7ef8df0fed856ee03c983f156fbb68d",
            inStock: 1,
            isVeg: 1,
            price: 47900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186703",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99626753",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186715",
                        variationId: "99626807",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99626761",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186715",
                        variationId: "99626814",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99626768",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186715",
                        variationId: "99626818",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99626776",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186715",
                        variationId: "99626830",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99626783",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186715",
                        variationId: "99626834",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99626790",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186715",
                        variationId: "99626842",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186715",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 269,
                      id: "99626798",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 719,
                      id: "99626802",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 479,
                      default: 1,
                      id: "99626807",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99626812",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99626814",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 578,
                      id: "99626818",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 344,
                      id: "99626822",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99626826",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99626830",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 269,
                      id: "99626834",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 358,
                      id: "99626842",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626753",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626798",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626753",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626802",
                    },
                  ],
                  price: 71900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626753",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626807",
                    },
                  ],
                  price: 47900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626761",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626812",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626761",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626814",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626768",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626818",
                    },
                  ],
                  price: 57800,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626768",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626822",
                    },
                  ],
                  price: 34400,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626776",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626826",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626776",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626830",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626783",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626834",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186703",
                      variationId: "99626790",
                    },
                    {
                      groupId: "32186715",
                      variationId: "99626842",
                    },
                  ],
                  price: 35800,
                  addonCombinations: [
                    {
                      groupId: "110829982",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829982",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829982",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 47900,
            ribbon: {
              text: "Bestseller",
              textColor: "#ffffff",
              topBackgroundColor: "#d53d4c",
              bottomBackgroundColor: "#b02331",
            },
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            isBestseller: true,
            ratings: {
              aggregatedRating: {
                rating: "4.1",
                ratingCount: "266 ratings",
                ratingCountV2: "266",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558586",
            name: "Peppy Paneer Pizza",
            category: "Veg Pizza",
            description:
              "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
            imageId: "81fbe5f6e8576cc7bdae699c3900197c",
            inStock: 1,
            isVeg: 1,
            price: 47900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32187030",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99628450",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187031",
                        variationId: "99628462",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99628451",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187031",
                        variationId: "99628464",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99628453",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187031",
                        variationId: "99628466",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99628455",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187031",
                        variationId: "99628468",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99628456",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187031",
                        variationId: "99628469",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99628458",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187031",
                        variationId: "99628470",
                      },
                    },
                  ],
                },
                {
                  groupId: "32187031",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 269,
                      id: "99628460",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 719,
                      id: "99628461",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 479,
                      default: 1,
                      id: "99628462",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99628463",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99628464",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 344,
                      id: "99628465",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 578,
                      id: "99628466",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99628467",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99628468",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 269,
                      id: "99628469",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 358,
                      id: "99628470",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628450",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628460",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628450",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628461",
                    },
                  ],
                  price: 71900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628450",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628462",
                    },
                  ],
                  price: 47900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628451",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628463",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628451",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628464",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628453",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628465",
                    },
                  ],
                  price: 34400,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628453",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628466",
                    },
                  ],
                  price: 57800,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628455",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628467",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628455",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628468",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628456",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628469",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187030",
                      variationId: "99628458",
                    },
                    {
                      groupId: "32187031",
                      variationId: "99628470",
                    },
                  ],
                  price: 35800,
                  addonCombinations: [
                    {
                      groupId: "110830073",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830073",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110830073",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 47900,
            ribbon: {
              text: "Bestseller",
              textColor: "#ffffff",
              topBackgroundColor: "#d53d4c",
              bottomBackgroundColor: "#b02331",
            },
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            isBestseller: true,
            ratings: {
              aggregatedRating: {
                rating: "4.0",
                ratingCount: "231 ratings",
                ratingCountV2: "231",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558593",
            name: "Mexican Green Wave Pizza",
            category: "Veg Pizza",
            description:
              "Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
            imageId: "d8c9b9418213d3d7f813808d91a98fbc",
            inStock: 1,
            isVeg: 1,
            price: 47900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32187062",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99628637",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187064",
                        variationId: "99628655",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99628639",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187064",
                        variationId: "99628656",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99628641",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187064",
                        variationId: "99628658",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99628643",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187064",
                        variationId: "99628661",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99628646",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187064",
                        variationId: "99628662",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99628648",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187064",
                        variationId: "99628663",
                      },
                    },
                  ],
                },
                {
                  groupId: "32187064",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 269,
                      id: "99628651",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 719,
                      id: "99628653",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 479,
                      default: 1,
                      id: "99628655",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99628656",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99628657",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 578,
                      id: "99628658",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 344,
                      id: "99628659",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99628660",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99628661",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 269,
                      id: "99628662",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 358,
                      id: "99628663",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628637",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628651",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628637",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628653",
                    },
                  ],
                  price: 71900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628637",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628655",
                    },
                  ],
                  price: 47900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628639",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628656",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628639",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628657",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628641",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628658",
                    },
                  ],
                  price: 57800,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628641",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628659",
                    },
                  ],
                  price: 34400,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628643",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628660",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628643",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628661",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628646",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628662",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187062",
                      variationId: "99628648",
                    },
                    {
                      groupId: "32187064",
                      variationId: "99628663",
                    },
                  ],
                  price: 35800,
                  addonCombinations: [
                    {
                      groupId: "110830085",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830085",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110830085",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 47900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "3.8",
                ratingCount: "116 ratings",
                ratingCountV2: "116",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558596",
            name: "Veggie Paradise Pizza",
            category: "Veg Pizza",
            description:
              "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
            imageId: "d256f07dc0da10e511f6442ee0886131",
            inStock: 1,
            isVeg: 1,
            price: 47900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32187534",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99631132",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187542",
                        variationId: "99631177",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99631137",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187542",
                        variationId: "99631189",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99631142",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187542",
                        variationId: "99631194",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99631147",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187542",
                        variationId: "99631200",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99631153",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187542",
                        variationId: "99631202",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99631158",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187542",
                        variationId: "99631205",
                      },
                    },
                  ],
                },
                {
                  groupId: "32187542",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 269,
                      id: "99631166",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 719,
                      id: "99631172",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 479,
                      default: 1,
                      id: "99631177",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99631183",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99631189",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 578,
                      id: "99631194",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 344,
                      id: "99631198",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 299,
                      id: "99631199",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 529,
                      id: "99631200",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 269,
                      id: "99631202",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 358,
                      id: "99631205",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631132",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631166",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631132",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631172",
                    },
                  ],
                  price: 71900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631132",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631177",
                    },
                  ],
                  price: 47900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631137",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631183",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631137",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631189",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631142",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631194",
                    },
                  ],
                  price: 57800,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631142",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631198",
                    },
                  ],
                  price: 34400,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631147",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631199",
                    },
                  ],
                  price: 29900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631147",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631200",
                    },
                  ],
                  price: 52900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631153",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631202",
                    },
                  ],
                  price: 26900,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187534",
                      variationId: "99631158",
                    },
                    {
                      groupId: "32187542",
                      variationId: "99631205",
                    },
                  ],
                  price: 35800,
                  addonCombinations: [
                    {
                      groupId: "110830221",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830221",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110830221",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 47900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "3.9",
                ratingCount: "117 ratings",
                ratingCountV2: "117",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "20558612",
            name: "Veg Extravaganza Pizza",
            category: "Veg Pizza",
            description:
              "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
            imageId: "b337ca46e24a31366f59f64d3ad923f5",
            inStock: 1,
            isVeg: 1,
            price: 57900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32187509",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99630986",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187512",
                        variationId: "99631004",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99630988",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187512",
                        variationId: "99631011",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99630990",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187512",
                        variationId: "99631017",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99630992",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187512",
                        variationId: "99631019",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99630994",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187512",
                        variationId: "99631024",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99630996",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32187512",
                        variationId: "99631026",
                      },
                    },
                  ],
                },
                {
                  groupId: "32187512",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 319,
                      id: "99631001",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 579,
                      default: 1,
                      id: "99631004",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 839,
                      id: "99631008",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 629,
                      id: "99631011",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 349,
                      id: "99631013",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 394,
                      id: "99631016",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 678,
                      id: "99631017",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 629,
                      id: "99631019",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 349,
                      id: "99631021",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 319,
                      id: "99631024",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 398,
                      id: "99631026",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630986",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631001",
                    },
                  ],
                  price: 31900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630986",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631004",
                    },
                  ],
                  price: 57900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630986",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631008",
                    },
                  ],
                  price: 83900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630988",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631011",
                    },
                  ],
                  price: 62900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630988",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631013",
                    },
                  ],
                  price: 34900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630990",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631016",
                    },
                  ],
                  price: 39400,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630990",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631017",
                    },
                  ],
                  price: 67800,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630992",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631019",
                    },
                  ],
                  price: 62900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630992",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631021",
                    },
                  ],
                  price: 34900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630994",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631024",
                    },
                  ],
                  price: 31900,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32187509",
                      variationId: "99630996",
                    },
                    {
                      groupId: "32187512",
                      variationId: "99631026",
                    },
                  ],
                  price: 39800,
                  addonCombinations: [
                    {
                      groupId: "110830214",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110830214",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110830214",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 57900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "4.4",
                ratingCount: "126 ratings",
                ratingCountV2: "126",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "42340224",
            name: "Indi Tandoori Paneer Pizza",
            category: "Veg Pizza",
            description:
              "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
            imageId: "3f7b4790495d3ad00cc5de3c40edb8d3",
            inStock: 1,
            isVeg: 1,
            price: 57900,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "32186617",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "99626264",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186627",
                        variationId: "99626336",
                      },
                    },
                    {
                      name: "100% Wheat Thin Crust",
                      id: "99626273",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186627",
                        variationId: "99626353",
                      },
                    },
                    {
                      name: "Cheese Burst",
                      id: "99626282",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186627",
                        variationId: "99626361",
                      },
                    },
                    {
                      name: "Fresh Pan Pizza",
                      id: "99626291",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186627",
                        variationId: "99626374",
                      },
                    },
                    {
                      name: "Classic Hand Tossed",
                      id: "99626302",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186627",
                        variationId: "99626377",
                      },
                    },
                    {
                      name: "Ragi Crust (Regular Size Only)",
                      id: "99626310",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "32186627",
                        variationId: "99626381",
                      },
                    },
                  ],
                },
                {
                  groupId: "32186627",
                  name: "Size",
                  variations: [
                    {
                      name: "Regular",
                      price: 319,
                      id: "99626321",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      price: 839,
                      id: "99626328",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 579,
                      default: 1,
                      id: "99626336",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 349,
                      id: "99626345",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 629,
                      id: "99626353",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 678,
                      id: "99626361",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 394,
                      id: "99626367",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 349,
                      id: "99626371",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Medium",
                      price: 629,
                      id: "99626374",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 319,
                      id: "99626377",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Regular",
                      price: 398,
                      id: "99626381",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626264",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626321",
                    },
                  ],
                  price: 31900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626264",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626328",
                    },
                  ],
                  price: 83900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004517",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004509",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004515",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004519",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004501",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004520",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004514",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004511",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004510",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626264",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626336",
                    },
                  ],
                  price: 57900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626273",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626345",
                    },
                  ],
                  price: 34900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626273",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626353",
                    },
                  ],
                  price: 62900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626282",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626361",
                    },
                  ],
                  price: 67800,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626282",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626367",
                    },
                  ],
                  price: 39400,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626291",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626371",
                    },
                  ],
                  price: 34900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626291",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626374",
                    },
                  ],
                  price: 62900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004503",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004516",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004505",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004512",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004518",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004513",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004506",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004507",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004508",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626302",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626377",
                    },
                  ],
                  price: 31900,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004371",
                    },
                  ],
                },
                {
                  variations: [
                    {
                      groupId: "32186617",
                      variationId: "99626310",
                    },
                    {
                      groupId: "32186627",
                      variationId: "99626381",
                    },
                  ],
                  price: 39800,
                  addonCombinations: [
                    {
                      groupId: "110829955",
                      addonId: "100004374",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004376",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004372",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004378",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004377",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004379",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004373",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004375",
                    },
                    {
                      groupId: "110829955",
                      addonId: "100004371",
                    },
                  ],
                },
              ],
            },
            addons: [
              {
                groupId: "110829955",
                groupName: "Topping",
                choices: [
                  {
                    id: "100004501",
                    name: "Red Pepper",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004520",
                    name: "Jalapeno",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004505",
                    name: "Extra Cheese",
                    price: 7500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004503",
                    name: "Crisp Capsicum",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004508",
                    name: "Onion",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004509",
                    name: "Fresh Tomato",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004506",
                    name: "Black Olive",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004507",
                    name: "Grilled Mushrooms",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004371",
                    name: "Onion",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004372",
                    name: "Extra Cheese",
                    price: 5000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004375",
                    name: "Grilled Mushrooms",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004376",
                    name: "Fresh Tomato",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004373",
                    name: "Black Olive",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004374",
                    name: "Crisp Capsicum",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004511",
                    name: "Grilled Mushrooms",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004379",
                    name: "Jalapeno",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004512",
                    name: "Paneer",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004377",
                    name: "Red Pepper",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004510",
                    name: "Onion",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004378",
                    name: "Paneer",
                    price: 3500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004515",
                    name: "Extra Cheese",
                    price: 9500,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004516",
                    name: "Fresh Tomato",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004513",
                    name: "Jalapeno",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004514",
                    name: "Black Olive",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004519",
                    name: "Paneer",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004517",
                    name: "Crisp Capsicum",
                    price: 8000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                  {
                    id: "100004518",
                    name: "Red Pepper",
                    price: 6000,
                    inStock: 1,
                    isVeg: 1,
                    isEnabled: 1,
                  },
                ],
                maxAddons: -1,
                maxFreeAddons: -1,
              },
            ],
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 57900,
            ribbon: {},
            showImage: true,
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "4.2",
                ratingCount: "114 ratings",
                ratingCountV2: "114",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
    ],
    type: "CATEGORY_TYPE_RECOMMENDED",
  },
];


export default resMenuMockData;