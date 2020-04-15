// all nutrients in mg per 1000kcal

const puppyNutrients = {
  vitamins: {
    E: 7.50,
    K: 0.41,
    A: 0.38,
    D: 0.0034,
    B1: 0.34,
    B2: 1.32,
    B3: 4.25,
    B5: 3.75,
    B6: 0.375,
    B9: 0.068,
    B12: 0.009,
    CHOLINE: 425,
  },
  fats: {
    ALA: 200,
    EPAnDHA: 130,
    LA: 3300,
  },
  minerals: {
    CALCIUM: 3000,
    PHOSPHORUS: 2500,
    MAGNESIUM: 100,
    POTASSIUM: 1100,
    SODIUM: 550,
    CHLORIDE: 720,
    IRON: 22,
    COPPER: 2.7,
    ZINC: 25,
    MANGANESE: 1.4,
    SELENIUM: 0.0875,
    IODINE: 0.22,
  },
  aminos: {
    ARGINIE: 1650,
    HISTIDINE: 630,
    ISOLEUCINE: 1250,
    LEUCINE: 2005,
    LYSINE: 1750,
    METHIONINE: 650,
    METHIONINEnCYSTINE: 1333,
    PHENYLALANINE: 1250,
    PHENYLALANINEnTYROSINE: 2500,
    THREONINE: 1580,
    TRYPTOPHAN: 450,
    VALINE: 1400,
  },
};

const adultNutrients = {
  vitamins: {
    E: 7.50,
    K: 0.41,
    A: 0.38,
    D: 0.0034,
    B1: 0.56,
    B2: 1.32,
    B3: 4.25,
    B5: 3.75,
    B6: 0.375,
    B9: 0.068,
    B12: 0.009,
    CHOLINE: 425,
  },
  fats: {
    ALA: 110,
    EPAnDHA: 110,
    LA: 2500,
  },
  minerals: {
    CALCIUM: 1000,
    PHOSPHORUS: 750,
    MAGNESIUM: 150,
    POTASSIUM: 1000,
    SODIUM: 200,
    CHLORIDE: 300,
    IRON: 7.5,
    COPPER: 1.5,
    ZINC: 15,
    MANGANESE: 1.2,
    SELENIUM: 0.0875,
    IODINE: 0.22,
  },
  aminos: {
    ARGINIE: 1000,
    HISTIDINE: 400,
    ISOLEUCINE: 900,
    LEUCINE: 1400,
    LYSINE: 1300,
    METHIONINE: 400,
    METHIONINEnCYSTINE: 800,
    PHENYLALANINE: 800,
    PHENYLALANINEnTYROSINE: 1600,
    THREONINE: 1000,
    TRYPTOPHAN: 350,
    VALINE: 900,
  },
};

export default {
  puppyNutrients,
  adultNutrients,
}