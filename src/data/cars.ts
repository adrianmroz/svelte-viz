export interface Car {
  name: string;
  mpg: number;
  cylinders: number;
  cc: number;
  hp: number;
  weight: number;
  acceleration: number;
  origin: 'USA' | 'Europe' | 'Japan'
}

export const cars: Car[] =
  [{
    'name': 'chevrolet chevelle malibu',
    'mpg': 18,
    'cylinders': 8,
    'cc': 307,
    'hp': 130,
    'weight': 3504,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'buick skylark 320',
    'mpg': 15,
    'cylinders': 8,
    'cc': 350,
    'hp': 165,
    'weight': 3693,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'plymouth satellite',
    'mpg': 18,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 3436,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'amc rebel sst',
    'mpg': 16,
    'cylinders': 8,
    'cc': 304,
    'hp': 150,
    'weight': 3433,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'ford torino',
    'mpg': 17,
    'cylinders': 8,
    'cc': 302,
    'hp': 140,
    'weight': 3449,
    'acceleration': 10.5,
    'origin': 'USA'
  }, {
    'name': 'ford galaxie 500',
    'mpg': 15,
    'cylinders': 8,
    'cc': 429,
    'hp': 198,
    'weight': 4341,
    'acceleration': 10,
    'origin': 'USA'
  }, {
    'name': 'chevrolet impala',
    'mpg': 14,
    'cylinders': 8,
    'cc': 454,
    'hp': 220,
    'weight': 4354,
    'acceleration': 9,
    'origin': 'USA'
  }, {
    'name': 'plymouth fury iii',
    'mpg': 14,
    'cylinders': 8,
    'cc': 440,
    'hp': 215,
    'weight': 4312,
    'acceleration': 8.5,
    'origin': 'USA'
  }, {
    'name': 'pontiac catalina',
    'mpg': 14,
    'cylinders': 8,
    'cc': 455,
    'hp': 225,
    'weight': 4425,
    'acceleration': 10,
    'origin': 'USA'
  }, {
    'name': 'amc ambassador dpl',
    'mpg': 15,
    'cylinders': 8,
    'cc': 390,
    'hp': 190,
    'weight': 3850,
    'acceleration': 8.5,
    'origin': 'USA'
  }, {
    'name': 'dodge challenger se',
    'mpg': 15,
    'cylinders': 8,
    'cc': 383,
    'hp': 170,
    'weight': 3563,
    'acceleration': 10,
    'origin': 'USA'
  }, {
    'name': 'plymouth \'cuda 340',
    'mpg': 14,
    'cylinders': 8,
    'cc': 340,
    'hp': 160,
    'weight': 3609,
    'acceleration': 8,
    'origin': 'USA'
  }, {
    'name': 'chevrolet monte carlo',
    'mpg': 15,
    'cylinders': 8,
    'cc': 400,
    'hp': 150,
    'weight': 3761,
    'acceleration': 9.5,
    'origin': 'USA'
  }, {
    'name': 'buick estate wagon (sw)',
    'mpg': 14,
    'cylinders': 8,
    'cc': 455,
    'hp': 225,
    'weight': 3086,
    'acceleration': 10,
    'origin': 'USA'
  }, {
    'name': 'toyota corona mark ii',
    'mpg': 24,
    'cylinders': 4,
    'cc': 113,
    'hp': 95,
    'weight': 2372,
    'acceleration': 15,
    'origin': 'Japan'
  }, {
    'name': 'plymouth duster',
    'mpg': 22,
    'cylinders': 6,
    'cc': 198,
    'hp': 95,
    'weight': 2833,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'amc hornet',
    'mpg': 18,
    'cylinders': 6,
    'cc': 199,
    'hp': 97,
    'weight': 2774,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'ford maverick',
    'mpg': 21,
    'cylinders': 6,
    'cc': 200,
    'hp': 85,
    'weight': 2587,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'datsun pl510',
    'mpg': 27,
    'cylinders': 4,
    'cc': 97,
    'hp': 88,
    'weight': 2130,
    'acceleration': 14.5,
    'origin': 'Japan'
  }, {
    'name': 'volkswagen 1131 deluxe sedan',
    'mpg': 26,
    'cylinders': 4,
    'cc': 97,
    'hp': 46,
    'weight': 1835,
    'acceleration': 20.5,
    'origin': 'Europe'
  }, {
    'name': 'peugeot 504',
    'mpg': 25,
    'cylinders': 4,
    'cc': 110,
    'hp': 87,
    'weight': 2672,
    'acceleration': 17.5,
    'origin': 'Europe'
  }, {
    'name': 'audi 100 ls',
    'mpg': 24,
    'cylinders': 4,
    'cc': 107,
    'hp': 90,
    'weight': 2430,
    'acceleration': 14.5,
    'origin': 'Europe'
  }, {
    'name': 'saab 99e',
    'mpg': 25,
    'cylinders': 4,
    'cc': 104,
    'hp': 95,
    'weight': 2375,
    'acceleration': 17.5,
    'origin': 'Europe'
  }, {
    'name': 'bmw 2002',
    'mpg': 26,
    'cylinders': 4,
    'cc': 121,
    'hp': 113,
    'weight': 2234,
    'acceleration': 12.5,
    'origin': 'Europe'
  }, {
    'name': 'amc gremlin',
    'mpg': 21,
    'cylinders': 6,
    'cc': 199,
    'hp': 90,
    'weight': 2648,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'ford f250',
    'mpg': 10,
    'cylinders': 8,
    'cc': 360,
    'hp': 215,
    'weight': 4615,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'chevy c20',
    'mpg': 10,
    'cylinders': 8,
    'cc': 307,
    'hp': 200,
    'weight': 4376,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'dodge d200',
    'mpg': 11,
    'cylinders': 8,
    'cc': 318,
    'hp': 210,
    'weight': 4382,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'hi 1200d',
    'mpg': 9,
    'cylinders': 8,
    'cc': 304,
    'hp': 193,
    'weight': 4732,
    'acceleration': 18.5,
    'origin': 'USA'
  }, {
    'name': 'datsun pl510',
    'mpg': 27,
    'cylinders': 4,
    'cc': 97,
    'hp': 88,
    'weight': 2130,
    'acceleration': 14.5,
    'origin': 'Japan'
  }, {
    'name': 'chevrolet vega 2300',
    'mpg': 28,
    'cylinders': 4,
    'cc': 140,
    'hp': 90,
    'weight': 2264,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'toyota corona',
    'mpg': 25,
    'cylinders': 4,
    'cc': 113,
    'hp': 95,
    'weight': 2228,
    'acceleration': 14,
    'origin': 'Japan'
  }, {
    'name': 'amc gremlin',
    'mpg': 19,
    'cylinders': 6,
    'cc': 232,
    'hp': 100,
    'weight': 2634,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'plymouth satellite custom',
    'mpg': 16,
    'cylinders': 6,
    'cc': 225,
    'hp': 105,
    'weight': 3439,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet chevelle malibu',
    'mpg': 17,
    'cylinders': 6,
    'cc': 250,
    'hp': 100,
    'weight': 3329,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'ford torino 500',
    'mpg': 19,
    'cylinders': 6,
    'cc': 250,
    'hp': 88,
    'weight': 3302,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'amc matador',
    'mpg': 18,
    'cylinders': 6,
    'cc': 232,
    'hp': 100,
    'weight': 3288,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet impala',
    'mpg': 14,
    'cylinders': 8,
    'cc': 350,
    'hp': 165,
    'weight': 4209,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'pontiac catalina brougham',
    'mpg': 14,
    'cylinders': 8,
    'cc': 400,
    'hp': 175,
    'weight': 4464,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'ford galaxie 500',
    'mpg': 14,
    'cylinders': 8,
    'cc': 351,
    'hp': 153,
    'weight': 4154,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'plymouth fury iii',
    'mpg': 14,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4096,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'dodge monaco (sw)',
    'mpg': 12,
    'cylinders': 8,
    'cc': 383,
    'hp': 180,
    'weight': 4955,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'ford country squire (sw)',
    'mpg': 13,
    'cylinders': 8,
    'cc': 400,
    'hp': 170,
    'weight': 4746,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'pontiac safari (sw)',
    'mpg': 13,
    'cylinders': 8,
    'cc': 400,
    'hp': 175,
    'weight': 5140,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'amc hornet sportabout (sw)',
    'mpg': 18,
    'cylinders': 6,
    'cc': 258,
    'hp': 110,
    'weight': 2962,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet vega (sw)',
    'mpg': 22,
    'cylinders': 4,
    'cc': 140,
    'hp': 72,
    'weight': 2408,
    'acceleration': 19,
    'origin': 'USA'
  }, {
    'name': 'pontiac firebird',
    'mpg': 19,
    'cylinders': 6,
    'cc': 250,
    'hp': 100,
    'weight': 3282,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'ford mustang',
    'mpg': 18,
    'cylinders': 6,
    'cc': 250,
    'hp': 88,
    'weight': 3139,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'mercury capri 2000',
    'mpg': 23,
    'cylinders': 4,
    'cc': 122,
    'hp': 86,
    'weight': 2220,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'opel 1900',
    'mpg': 28,
    'cylinders': 4,
    'cc': 116,
    'hp': 90,
    'weight': 2123,
    'acceleration': 14,
    'origin': 'Europe'
  }, {
    'name': 'peugeot 304',
    'mpg': 30,
    'cylinders': 4,
    'cc': 79,
    'hp': 70,
    'weight': 2074,
    'acceleration': 19.5,
    'origin': 'Europe'
  }, {
    'name': 'fiat 124b',
    'mpg': 30,
    'cylinders': 4,
    'cc': 88,
    'hp': 76,
    'weight': 2065,
    'acceleration': 14.5,
    'origin': 'Europe'
  }, {
    'name': 'toyota corolla 1200',
    'mpg': 31,
    'cylinders': 4,
    'cc': 71,
    'hp': 65,
    'weight': 1773,
    'acceleration': 19,
    'origin': 'Japan'
  }, {
    'name': 'datsun 1200',
    'mpg': 35,
    'cylinders': 4,
    'cc': 72,
    'hp': 69,
    'weight': 1613,
    'acceleration': 18,
    'origin': 'Japan'
  }, {
    'name': 'volkswagen model 111',
    'mpg': 27,
    'cylinders': 4,
    'cc': 97,
    'hp': 60,
    'weight': 1834,
    'acceleration': 19,
    'origin': 'Europe'
  }, {
    'name': 'plymouth cricket',
    'mpg': 26,
    'cylinders': 4,
    'cc': 91,
    'hp': 70,
    'weight': 1955,
    'acceleration': 20.5,
    'origin': 'USA'
  }, {
    'name': 'toyota corona hardtop',
    'mpg': 24,
    'cylinders': 4,
    'cc': 113,
    'hp': 95,
    'weight': 2278,
    'acceleration': 15.5,
    'origin': 'Japan'
  }, {
    'name': 'dodge colt hardtop',
    'mpg': 25,
    'cylinders': 4,
    'cc': 97.5,
    'hp': 80,
    'weight': 2126,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'volkswagen type 3',
    'mpg': 23,
    'cylinders': 4,
    'cc': 97,
    'hp': 54,
    'weight': 2254,
    'acceleration': 23.5,
    'origin': 'Europe'
  }, {
    'name': 'chevrolet vega',
    'mpg': 20,
    'cylinders': 4,
    'cc': 140,
    'hp': 90,
    'weight': 2408,
    'acceleration': 19.5,
    'origin': 'USA'
  }, {
    'name': 'ford pinto runabout',
    'mpg': 21,
    'cylinders': 4,
    'cc': 122,
    'hp': 86,
    'weight': 2226,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet impala',
    'mpg': 13,
    'cylinders': 8,
    'cc': 350,
    'hp': 165,
    'weight': 4274,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'pontiac catalina',
    'mpg': 14,
    'cylinders': 8,
    'cc': 400,
    'hp': 175,
    'weight': 4385,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'plymouth fury iii',
    'mpg': 15,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4135,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'ford galaxie 500',
    'mpg': 14,
    'cylinders': 8,
    'cc': 351,
    'hp': 153,
    'weight': 4129,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'amc ambassador sst',
    'mpg': 17,
    'cylinders': 8,
    'cc': 304,
    'hp': 150,
    'weight': 3672,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'mercury marquis',
    'mpg': 11,
    'cylinders': 8,
    'cc': 429,
    'hp': 208,
    'weight': 4633,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'buick lesabre custom',
    'mpg': 13,
    'cylinders': 8,
    'cc': 350,
    'hp': 155,
    'weight': 4502,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile delta 88 royale',
    'mpg': 12,
    'cylinders': 8,
    'cc': 350,
    'hp': 160,
    'weight': 4456,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'chrysler newport royal',
    'mpg': 13,
    'cylinders': 8,
    'cc': 400,
    'hp': 190,
    'weight': 4422,
    'acceleration': 12.5,
    'origin': 'USA'
  }, {
    'name': 'mazda rx2 coupe',
    'mpg': 19,
    'cylinders': 3,
    'cc': 70,
    'hp': 97,
    'weight': 2330,
    'acceleration': 13.5,
    'origin': 'Japan'
  }, {
    'name': 'amc matador (sw)',
    'mpg': 15,
    'cylinders': 8,
    'cc': 304,
    'hp': 150,
    'weight': 3892,
    'acceleration': 12.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet chevelle concours (sw)',
    'mpg': 13,
    'cylinders': 8,
    'cc': 307,
    'hp': 130,
    'weight': 4098,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'ford gran torino (sw)',
    'mpg': 13,
    'cylinders': 8,
    'cc': 302,
    'hp': 140,
    'weight': 4294,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'plymouth satellite custom (sw)',
    'mpg': 14,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4077,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'volvo 145e (sw)',
    'mpg': 18,
    'cylinders': 4,
    'cc': 121,
    'hp': 112,
    'weight': 2933,
    'acceleration': 14.5,
    'origin': 'Europe'
  }, {
    'name': 'volkswagen 411 (sw)',
    'mpg': 22,
    'cylinders': 4,
    'cc': 121,
    'hp': 76,
    'weight': 2511,
    'acceleration': 18,
    'origin': 'Europe'
  }, {
    'name': 'peugeot 504 (sw)',
    'mpg': 21,
    'cylinders': 4,
    'cc': 120,
    'hp': 87,
    'weight': 2979,
    'acceleration': 19.5,
    'origin': 'Europe'
  }, {
    'name': 'renault 12 (sw)',
    'mpg': 26,
    'cylinders': 4,
    'cc': 96,
    'hp': 69,
    'weight': 2189,
    'acceleration': 18,
    'origin': 'Europe'
  }, {
    'name': 'ford pinto (sw)',
    'mpg': 22,
    'cylinders': 4,
    'cc': 122,
    'hp': 86,
    'weight': 2395,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'datsun 510 (sw)',
    'mpg': 28,
    'cylinders': 4,
    'cc': 97,
    'hp': 92,
    'weight': 2288,
    'acceleration': 17,
    'origin': 'Japan'
  }, {
    'name': 'toyouta corona mark ii (sw)',
    'mpg': 23,
    'cylinders': 4,
    'cc': 120,
    'hp': 97,
    'weight': 2506,
    'acceleration': 14.5,
    'origin': 'Japan'
  }, {
    'name': 'dodge colt (sw)',
    'mpg': 28,
    'cylinders': 4,
    'cc': 98,
    'hp': 80,
    'weight': 2164,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'toyota corolla 1600 (sw)',
    'mpg': 27,
    'cylinders': 4,
    'cc': 97,
    'hp': 88,
    'weight': 2100,
    'acceleration': 16.5,
    'origin': 'Japan'
  }, {
    'name': 'buick century 350',
    'mpg': 13,
    'cylinders': 8,
    'cc': 350,
    'hp': 175,
    'weight': 4100,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'amc matador',
    'mpg': 14,
    'cylinders': 8,
    'cc': 304,
    'hp': 150,
    'weight': 3672,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet malibu',
    'mpg': 13,
    'cylinders': 8,
    'cc': 350,
    'hp': 145,
    'weight': 3988,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'ford gran torino',
    'mpg': 14,
    'cylinders': 8,
    'cc': 302,
    'hp': 137,
    'weight': 4042,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'dodge coronet custom',
    'mpg': 15,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 3777,
    'acceleration': 12.5,
    'origin': 'USA'
  }, {
    'name': 'mercury marquis brougham',
    'mpg': 12,
    'cylinders': 8,
    'cc': 429,
    'hp': 198,
    'weight': 4952,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet caprice classic',
    'mpg': 13,
    'cylinders': 8,
    'cc': 400,
    'hp': 150,
    'weight': 4464,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'ford ltd',
    'mpg': 13,
    'cylinders': 8,
    'cc': 351,
    'hp': 158,
    'weight': 4363,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'plymouth fury gran sedan',
    'mpg': 14,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4237,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'chrysler new yorker brougham',
    'mpg': 13,
    'cylinders': 8,
    'cc': 440,
    'hp': 215,
    'weight': 4735,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'buick electra 225 custom',
    'mpg': 12,
    'cylinders': 8,
    'cc': 455,
    'hp': 225,
    'weight': 4951,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'amc ambassador brougham',
    'mpg': 13,
    'cylinders': 8,
    'cc': 360,
    'hp': 175,
    'weight': 3821,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'plymouth valiant',
    'mpg': 18,
    'cylinders': 6,
    'cc': 225,
    'hp': 105,
    'weight': 3121,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet nova custom',
    'mpg': 16,
    'cylinders': 6,
    'cc': 250,
    'hp': 100,
    'weight': 3278,
    'acceleration': 18,
    'origin': 'USA'
  }, {
    'name': 'amc hornet',
    'mpg': 18,
    'cylinders': 6,
    'cc': 232,
    'hp': 100,
    'weight': 2945,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'ford maverick',
    'mpg': 18,
    'cylinders': 6,
    'cc': 250,
    'hp': 88,
    'weight': 3021,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'plymouth duster',
    'mpg': 23,
    'cylinders': 6,
    'cc': 198,
    'hp': 95,
    'weight': 2904,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'volkswagen super beetle',
    'mpg': 26,
    'cylinders': 4,
    'cc': 97,
    'hp': 46,
    'weight': 1950,
    'acceleration': 21,
    'origin': 'Europe'
  }, {
    'name': 'chevrolet impala',
    'mpg': 11,
    'cylinders': 8,
    'cc': 400,
    'hp': 150,
    'weight': 4997,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'ford country',
    'mpg': 12,
    'cylinders': 8,
    'cc': 400,
    'hp': 167,
    'weight': 4906,
    'acceleration': 12.5,
    'origin': 'USA'
  }, {
    'name': 'plymouth custom suburb',
    'mpg': 13,
    'cylinders': 8,
    'cc': 360,
    'hp': 170,
    'weight': 4654,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile vista cruiser',
    'mpg': 12,
    'cylinders': 8,
    'cc': 350,
    'hp': 180,
    'weight': 4499,
    'acceleration': 12.5,
    'origin': 'USA'
  }, {
    'name': 'amc gremlin',
    'mpg': 18,
    'cylinders': 6,
    'cc': 232,
    'hp': 100,
    'weight': 2789,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'toyota carina',
    'mpg': 20,
    'cylinders': 4,
    'cc': 97,
    'hp': 88,
    'weight': 2279,
    'acceleration': 19,
    'origin': 'Japan'
  }, {
    'name': 'chevrolet vega',
    'mpg': 21,
    'cylinders': 4,
    'cc': 140,
    'hp': 72,
    'weight': 2401,
    'acceleration': 19.5,
    'origin': 'USA'
  }, {
    'name': 'datsun 610',
    'mpg': 22,
    'cylinders': 4,
    'cc': 108,
    'hp': 94,
    'weight': 2379,
    'acceleration': 16.5,
    'origin': 'Japan'
  }, {
    'name': 'maxda rx3',
    'mpg': 18,
    'cylinders': 3,
    'cc': 70,
    'hp': 90,
    'weight': 2124,
    'acceleration': 13.5,
    'origin': 'Japan'
  }, {
    'name': 'ford pinto',
    'mpg': 19,
    'cylinders': 4,
    'cc': 122,
    'hp': 85,
    'weight': 2310,
    'acceleration': 18.5,
    'origin': 'USA'
  }, {
    'name': 'mercury capri v6',
    'mpg': 21,
    'cylinders': 6,
    'cc': 155,
    'hp': 107,
    'weight': 2472,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'fiat 124 sport coupe',
    'mpg': 26,
    'cylinders': 4,
    'cc': 98,
    'hp': 90,
    'weight': 2265,
    'acceleration': 15.5,
    'origin': 'Europe'
  }, {
    'name': 'chevrolet monte carlo s',
    'mpg': 15,
    'cylinders': 8,
    'cc': 350,
    'hp': 145,
    'weight': 4082,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'pontiac grand prix',
    'mpg': 16,
    'cylinders': 8,
    'cc': 400,
    'hp': 230,
    'weight': 4278,
    'acceleration': 9.5,
    'origin': 'USA'
  }, {
    'name': 'fiat 128',
    'mpg': 29,
    'cylinders': 4,
    'cc': 68,
    'hp': 49,
    'weight': 1867,
    'acceleration': 19.5,
    'origin': 'Europe'
  }, {
    'name': 'opel manta',
    'mpg': 24,
    'cylinders': 4,
    'cc': 116,
    'hp': 75,
    'weight': 2158,
    'acceleration': 15.5,
    'origin': 'Europe'
  }, {
    'name': 'audi 100ls',
    'mpg': 20,
    'cylinders': 4,
    'cc': 114,
    'hp': 91,
    'weight': 2582,
    'acceleration': 14,
    'origin': 'Europe'
  }, {
    'name': 'volvo 144ea',
    'mpg': 19,
    'cylinders': 4,
    'cc': 121,
    'hp': 112,
    'weight': 2868,
    'acceleration': 15.5,
    'origin': 'Europe'
  }, {
    'name': 'dodge dart custom',
    'mpg': 15,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 3399,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'saab 99le',
    'mpg': 24,
    'cylinders': 4,
    'cc': 121,
    'hp': 110,
    'weight': 2660,
    'acceleration': 14,
    'origin': 'Europe'
  }, {
    'name': 'toyota mark ii',
    'mpg': 20,
    'cylinders': 6,
    'cc': 156,
    'hp': 122,
    'weight': 2807,
    'acceleration': 13.5,
    'origin': 'Japan'
  }, {
    'name': 'oldsmobile omega',
    'mpg': 11,
    'cylinders': 8,
    'cc': 350,
    'hp': 180,
    'weight': 3664,
    'acceleration': 11,
    'origin': 'USA'
  }, {
    'name': 'plymouth duster',
    'mpg': 20,
    'cylinders': 6,
    'cc': 198,
    'hp': 95,
    'weight': 3102,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'amc hornet',
    'mpg': 19,
    'cylinders': 6,
    'cc': 232,
    'hp': 100,
    'weight': 2901,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'chevrolet nova',
    'mpg': 15,
    'cylinders': 6,
    'cc': 250,
    'hp': 100,
    'weight': 3336,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'datsun b210',
    'mpg': 31,
    'cylinders': 4,
    'cc': 79,
    'hp': 67,
    'weight': 1950,
    'acceleration': 19,
    'origin': 'Japan'
  }, {
    'name': 'ford pinto',
    'mpg': 26,
    'cylinders': 4,
    'cc': 122,
    'hp': 80,
    'weight': 2451,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'toyota corolla 1200',
    'mpg': 32,
    'cylinders': 4,
    'cc': 71,
    'hp': 65,
    'weight': 1836,
    'acceleration': 21,
    'origin': 'Japan'
  }, {
    'name': 'chevrolet vega',
    'mpg': 25,
    'cylinders': 4,
    'cc': 140,
    'hp': 75,
    'weight': 2542,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'chevrolet chevelle malibu classic',
    'mpg': 16,
    'cylinders': 6,
    'cc': 250,
    'hp': 100,
    'weight': 3781,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'amc matador',
    'mpg': 16,
    'cylinders': 6,
    'cc': 258,
    'hp': 110,
    'weight': 3632,
    'acceleration': 18,
    'origin': 'USA'
  }, {
    'name': 'plymouth satellite sebring',
    'mpg': 18,
    'cylinders': 6,
    'cc': 225,
    'hp': 105,
    'weight': 3613,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'ford gran torino',
    'mpg': 16,
    'cylinders': 8,
    'cc': 302,
    'hp': 140,
    'weight': 4141,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'buick century luxus (sw)',
    'mpg': 13,
    'cylinders': 8,
    'cc': 350,
    'hp': 150,
    'weight': 4699,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'dodge coronet custom (sw)',
    'mpg': 14,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4457,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'ford gran torino (sw)',
    'mpg': 14,
    'cylinders': 8,
    'cc': 302,
    'hp': 140,
    'weight': 4638,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'amc matador (sw)',
    'mpg': 14,
    'cylinders': 8,
    'cc': 304,
    'hp': 150,
    'weight': 4257,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'audi fox',
    'mpg': 29,
    'cylinders': 4,
    'cc': 98,
    'hp': 83,
    'weight': 2219,
    'acceleration': 16.5,
    'origin': 'Europe'
  }, {
    'name': 'volkswagen dasher',
    'mpg': 26,
    'cylinders': 4,
    'cc': 79,
    'hp': 67,
    'weight': 1963,
    'acceleration': 15.5,
    'origin': 'Europe'
  }, {
    'name': 'opel manta',
    'mpg': 26,
    'cylinders': 4,
    'cc': 97,
    'hp': 78,
    'weight': 2300,
    'acceleration': 14.5,
    'origin': 'Europe'
  }, {
    'name': 'toyota corona',
    'mpg': 31,
    'cylinders': 4,
    'cc': 76,
    'hp': 52,
    'weight': 1649,
    'acceleration': 16.5,
    'origin': 'Japan'
  }, {
    'name': 'datsun 710',
    'mpg': 32,
    'cylinders': 4,
    'cc': 83,
    'hp': 61,
    'weight': 2003,
    'acceleration': 19,
    'origin': 'Japan'
  }, {
    'name': 'dodge colt',
    'mpg': 28,
    'cylinders': 4,
    'cc': 90,
    'hp': 75,
    'weight': 2125,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'fiat 128',
    'mpg': 24,
    'cylinders': 4,
    'cc': 90,
    'hp': 75,
    'weight': 2108,
    'acceleration': 15.5,
    'origin': 'Europe'
  }, {
    'name': 'fiat 124 tc',
    'mpg': 26,
    'cylinders': 4,
    'cc': 116,
    'hp': 75,
    'weight': 2246,
    'acceleration': 14,
    'origin': 'Europe'
  }, {
    'name': 'honda civic',
    'mpg': 24,
    'cylinders': 4,
    'cc': 120,
    'hp': 97,
    'weight': 2489,
    'acceleration': 15,
    'origin': 'Japan'
  }, {
    'name': 'subaru',
    'mpg': 26,
    'cylinders': 4,
    'cc': 108,
    'hp': 93,
    'weight': 2391,
    'acceleration': 15.5,
    'origin': 'Japan'
  }, {
    'name': 'fiat x1.9',
    'mpg': 31,
    'cylinders': 4,
    'cc': 79,
    'hp': 67,
    'weight': 2000,
    'acceleration': 16,
    'origin': 'Europe'
  }, {
    'name': 'plymouth valiant custom',
    'mpg': 19,
    'cylinders': 6,
    'cc': 225,
    'hp': 95,
    'weight': 3264,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'chevrolet nova',
    'mpg': 18,
    'cylinders': 6,
    'cc': 250,
    'hp': 105,
    'weight': 3459,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'mercury monarch',
    'mpg': 15,
    'cylinders': 6,
    'cc': 250,
    'hp': 72,
    'weight': 3432,
    'acceleration': 21,
    'origin': 'USA'
  }, {
    'name': 'ford maverick',
    'mpg': 15,
    'cylinders': 6,
    'cc': 250,
    'hp': 72,
    'weight': 3158,
    'acceleration': 19.5,
    'origin': 'USA'
  }, {
    'name': 'pontiac catalina',
    'mpg': 16,
    'cylinders': 8,
    'cc': 400,
    'hp': 170,
    'weight': 4668,
    'acceleration': 11.5,
    'origin': 'USA'
  }, {
    'name': 'chevrolet bel air',
    'mpg': 15,
    'cylinders': 8,
    'cc': 350,
    'hp': 145,
    'weight': 4440,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'plymouth grand fury',
    'mpg': 16,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4498,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'ford ltd',
    'mpg': 14,
    'cylinders': 8,
    'cc': 351,
    'hp': 148,
    'weight': 4657,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'buick century',
    'mpg': 17,
    'cylinders': 6,
    'cc': 231,
    'hp': 110,
    'weight': 3907,
    'acceleration': 21,
    'origin': 'USA'
  }, {
    'name': 'chevroelt chevelle malibu',
    'mpg': 16,
    'cylinders': 6,
    'cc': 250,
    'hp': 105,
    'weight': 3897,
    'acceleration': 18.5,
    'origin': 'USA'
  }, {
    'name': 'amc matador',
    'mpg': 15,
    'cylinders': 6,
    'cc': 258,
    'hp': 110,
    'weight': 3730,
    'acceleration': 19,
    'origin': 'USA'
  }, {
    'name': 'plymouth fury',
    'mpg': 18,
    'cylinders': 6,
    'cc': 225,
    'hp': 95,
    'weight': 3785,
    'acceleration': 19,
    'origin': 'USA'
  }, {
    'name': 'buick skyhawk',
    'mpg': 21,
    'cylinders': 6,
    'cc': 231,
    'hp': 110,
    'weight': 3039,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'chevrolet monza 2+2',
    'mpg': 20,
    'cylinders': 8,
    'cc': 262,
    'hp': 110,
    'weight': 3221,
    'acceleration': 13.5,
    'origin': 'USA'
  }, {
    'name': 'ford mustang ii',
    'mpg': 13,
    'cylinders': 8,
    'cc': 302,
    'hp': 129,
    'weight': 3169,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'toyota corolla',
    'mpg': 29,
    'cylinders': 4,
    'cc': 97,
    'hp': 75,
    'weight': 2171,
    'acceleration': 16,
    'origin': 'Japan'
  }, {
    'name': 'ford pinto',
    'mpg': 23,
    'cylinders': 4,
    'cc': 140,
    'hp': 83,
    'weight': 2639,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'amc gremlin',
    'mpg': 20,
    'cylinders': 6,
    'cc': 232,
    'hp': 100,
    'weight': 2914,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'pontiac astro',
    'mpg': 23,
    'cylinders': 4,
    'cc': 140,
    'hp': 78,
    'weight': 2592,
    'acceleration': 18.5,
    'origin': 'USA'
  }, {
    'name': 'toyota corona',
    'mpg': 24,
    'cylinders': 4,
    'cc': 134,
    'hp': 96,
    'weight': 2702,
    'acceleration': 13.5,
    'origin': 'Japan'
  }, {
    'name': 'volkswagen dasher',
    'mpg': 25,
    'cylinders': 4,
    'cc': 90,
    'hp': 71,
    'weight': 2223,
    'acceleration': 16.5,
    'origin': 'Europe'
  }, {
    'name': 'datsun 710',
    'mpg': 24,
    'cylinders': 4,
    'cc': 119,
    'hp': 97,
    'weight': 2545,
    'acceleration': 17,
    'origin': 'Japan'
  }, {
    'name': 'ford pinto',
    'mpg': 18,
    'cylinders': 6,
    'cc': 171,
    'hp': 97,
    'weight': 2984,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'volkswagen rabbit',
    'mpg': 29,
    'cylinders': 4,
    'cc': 90,
    'hp': 70,
    'weight': 1937,
    'acceleration': 14,
    'origin': 'Europe'
  }, {
    'name': 'amc pacer',
    'mpg': 19,
    'cylinders': 6,
    'cc': 232,
    'hp': 90,
    'weight': 3211,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'audi 100ls',
    'mpg': 23,
    'cylinders': 4,
    'cc': 115,
    'hp': 95,
    'weight': 2694,
    'acceleration': 15,
    'origin': 'Europe'
  }, {
    'name': 'peugeot 504',
    'mpg': 23,
    'cylinders': 4,
    'cc': 120,
    'hp': 88,
    'weight': 2957,
    'acceleration': 17,
    'origin': 'Europe'
  }, {
    'name': 'volvo 244dl',
    'mpg': 22,
    'cylinders': 4,
    'cc': 121,
    'hp': 98,
    'weight': 2945,
    'acceleration': 14.5,
    'origin': 'Europe'
  }, {
    'name': 'saab 99le',
    'mpg': 25,
    'cylinders': 4,
    'cc': 121,
    'hp': 115,
    'weight': 2671,
    'acceleration': 13.5,
    'origin': 'Europe'
  }, {
    'name': 'honda civic cvcc',
    'mpg': 33,
    'cylinders': 4,
    'cc': 91,
    'hp': 53,
    'weight': 1795,
    'acceleration': 17.5,
    'origin': 'Japan'
  }, {
    'name': 'fiat 131',
    'mpg': 28,
    'cylinders': 4,
    'cc': 107,
    'hp': 86,
    'weight': 2464,
    'acceleration': 15.5,
    'origin': 'Europe'
  }, {
    'name': 'opel 1900',
    'mpg': 25,
    'cylinders': 4,
    'cc': 116,
    'hp': 81,
    'weight': 2220,
    'acceleration': 16.9,
    'origin': 'Europe'
  }, {
    'name': 'capri ii',
    'mpg': 25,
    'cylinders': 4,
    'cc': 140,
    'hp': 92,
    'weight': 2572,
    'acceleration': 14.9,
    'origin': 'USA'
  }, {
    'name': 'dodge colt',
    'mpg': 26,
    'cylinders': 4,
    'cc': 98,
    'hp': 79,
    'weight': 2255,
    'acceleration': 17.7,
    'origin': 'USA'
  }, {
    'name': 'renault 12tl',
    'mpg': 27,
    'cylinders': 4,
    'cc': 101,
    'hp': 83,
    'weight': 2202,
    'acceleration': 15.3,
    'origin': 'Europe'
  }, {
    'name': 'chevrolet chevelle malibu classic',
    'mpg': 17.5,
    'cylinders': 8,
    'cc': 305,
    'hp': 140,
    'weight': 4215,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'dodge coronet brougham',
    'mpg': 16,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 4190,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'amc matador',
    'mpg': 15.5,
    'cylinders': 8,
    'cc': 304,
    'hp': 120,
    'weight': 3962,
    'acceleration': 13.9,
    'origin': 'USA'
  }, {
    'name': 'ford gran torino',
    'mpg': 14.5,
    'cylinders': 8,
    'cc': 351,
    'hp': 152,
    'weight': 4215,
    'acceleration': 12.8,
    'origin': 'USA'
  }, {
    'name': 'plymouth valiant',
    'mpg': 22,
    'cylinders': 6,
    'cc': 225,
    'hp': 100,
    'weight': 3233,
    'acceleration': 15.4,
    'origin': 'USA'
  }, {
    'name': 'chevrolet nova',
    'mpg': 22,
    'cylinders': 6,
    'cc': 250,
    'hp': 105,
    'weight': 3353,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'ford maverick',
    'mpg': 24,
    'cylinders': 6,
    'cc': 200,
    'hp': 81,
    'weight': 3012,
    'acceleration': 17.6,
    'origin': 'USA'
  }, {
    'name': 'amc hornet',
    'mpg': 22.5,
    'cylinders': 6,
    'cc': 232,
    'hp': 90,
    'weight': 3085,
    'acceleration': 17.6,
    'origin': 'USA'
  }, {
    'name': 'chevrolet chevette',
    'mpg': 29,
    'cylinders': 4,
    'cc': 85,
    'hp': 52,
    'weight': 2035,
    'acceleration': 22.2,
    'origin': 'USA'
  }, {
    'name': 'chevrolet woody',
    'mpg': 24.5,
    'cylinders': 4,
    'cc': 98,
    'hp': 60,
    'weight': 2164,
    'acceleration': 22.1,
    'origin': 'USA'
  }, {
    'name': 'vw rabbit',
    'mpg': 29,
    'cylinders': 4,
    'cc': 90,
    'hp': 70,
    'weight': 1937,
    'acceleration': 14.2,
    'origin': 'Europe'
  }, {
    'name': 'honda civic',
    'mpg': 33,
    'cylinders': 4,
    'cc': 91,
    'hp': 53,
    'weight': 1795,
    'acceleration': 17.4,
    'origin': 'Japan'
  }, {
    'name': 'dodge aspen se',
    'mpg': 20,
    'cylinders': 6,
    'cc': 225,
    'hp': 100,
    'weight': 3651,
    'acceleration': 17.7,
    'origin': 'USA'
  }, {
    'name': 'ford granada ghia',
    'mpg': 18,
    'cylinders': 6,
    'cc': 250,
    'hp': 78,
    'weight': 3574,
    'acceleration': 21,
    'origin': 'USA'
  }, {
    'name': 'pontiac ventura sj',
    'mpg': 18.5,
    'cylinders': 6,
    'cc': 250,
    'hp': 110,
    'weight': 3645,
    'acceleration': 16.2,
    'origin': 'USA'
  }, {
    'name': 'amc pacer d/l',
    'mpg': 17.5,
    'cylinders': 6,
    'cc': 258,
    'hp': 95,
    'weight': 3193,
    'acceleration': 17.8,
    'origin': 'USA'
  }, {
    'name': 'volkswagen rabbit',
    'mpg': 29.5,
    'cylinders': 4,
    'cc': 97,
    'hp': 71,
    'weight': 1825,
    'acceleration': 12.2,
    'origin': 'Europe'
  }, {
    'name': 'datsun b-210',
    'mpg': 32,
    'cylinders': 4,
    'cc': 85,
    'hp': 70,
    'weight': 1990,
    'acceleration': 17,
    'origin': 'Japan'
  }, {
    'name': 'toyota corolla',
    'mpg': 28,
    'cylinders': 4,
    'cc': 97,
    'hp': 75,
    'weight': 2155,
    'acceleration': 16.4,
    'origin': 'Japan'
  }, {
    'name': 'ford pinto',
    'mpg': 26.5,
    'cylinders': 4,
    'cc': 140,
    'hp': 72,
    'weight': 2565,
    'acceleration': 13.6,
    'origin': 'USA'
  }, {
    'name': 'volvo 245',
    'mpg': 20,
    'cylinders': 4,
    'cc': 130,
    'hp': 102,
    'weight': 3150,
    'acceleration': 15.7,
    'origin': 'Europe'
  }, {
    'name': 'plymouth volare premier v8',
    'mpg': 13,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 3940,
    'acceleration': 13.2,
    'origin': 'USA'
  }, {
    'name': 'peugeot 504',
    'mpg': 19,
    'cylinders': 4,
    'cc': 120,
    'hp': 88,
    'weight': 3270,
    'acceleration': 21.9,
    'origin': 'Europe'
  }, {
    'name': 'toyota mark ii',
    'mpg': 19,
    'cylinders': 6,
    'cc': 156,
    'hp': 108,
    'weight': 2930,
    'acceleration': 15.5,
    'origin': 'Japan'
  }, {
    'name': 'mercedes-benz 280s',
    'mpg': 16.5,
    'cylinders': 6,
    'cc': 168,
    'hp': 120,
    'weight': 3820,
    'acceleration': 16.7,
    'origin': 'Europe'
  }, {
    'name': 'cadillac seville',
    'mpg': 16.5,
    'cylinders': 8,
    'cc': 350,
    'hp': 180,
    'weight': 4380,
    'acceleration': 12.1,
    'origin': 'USA'
  }, {
    'name': 'chevy c10',
    'mpg': 13,
    'cylinders': 8,
    'cc': 350,
    'hp': 145,
    'weight': 4055,
    'acceleration': 12,
    'origin': 'USA'
  }, {
    'name': 'ford f108',
    'mpg': 13,
    'cylinders': 8,
    'cc': 302,
    'hp': 130,
    'weight': 3870,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'dodge d100',
    'mpg': 13,
    'cylinders': 8,
    'cc': 318,
    'hp': 150,
    'weight': 3755,
    'acceleration': 14,
    'origin': 'USA'
  }, {
    'name': 'honda Accelerationord cvcc',
    'mpg': 31.5,
    'cylinders': 4,
    'cc': 98,
    'hp': 68,
    'weight': 2045,
    'acceleration': 18.5,
    'origin': 'Japan'
  }, {
    'name': 'buick opel isuzu deluxe',
    'mpg': 30,
    'cylinders': 4,
    'cc': 111,
    'hp': 80,
    'weight': 2155,
    'acceleration': 14.8,
    'origin': 'USA'
  }, {
    'name': 'renault 5 gtl',
    'mpg': 36,
    'cylinders': 4,
    'cc': 79,
    'hp': 58,
    'weight': 1825,
    'acceleration': 18.6,
    'origin': 'Europe'
  }, {
    'name': 'plymouth arrow gs',
    'mpg': 25.5,
    'cylinders': 4,
    'cc': 122,
    'hp': 96,
    'weight': 2300,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'datsun f-10 hatchback',
    'mpg': 33.5,
    'cylinders': 4,
    'cc': 85,
    'hp': 70,
    'weight': 1945,
    'acceleration': 16.8,
    'origin': 'Japan'
  }, {
    'name': 'chevrolet caprice classic',
    'mpg': 17.5,
    'cylinders': 8,
    'cc': 305,
    'hp': 145,
    'weight': 3880,
    'acceleration': 12.5,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile cutlass supreme',
    'mpg': 17,
    'cylinders': 8,
    'cc': 260,
    'hp': 110,
    'weight': 4060,
    'acceleration': 19,
    'origin': 'USA'
  }, {
    'name': 'dodge monaco brougham',
    'mpg': 15.5,
    'cylinders': 8,
    'cc': 318,
    'hp': 145,
    'weight': 4140,
    'acceleration': 13.7,
    'origin': 'USA'
  }, {
    'name': 'mercury cougar brougham',
    'mpg': 15,
    'cylinders': 8,
    'cc': 302,
    'hp': 130,
    'weight': 4295,
    'acceleration': 14.9,
    'origin': 'USA'
  }, {
    'name': 'chevrolet concours',
    'mpg': 17.5,
    'cylinders': 6,
    'cc': 250,
    'hp': 110,
    'weight': 3520,
    'acceleration': 16.4,
    'origin': 'USA'
  }, {
    'name': 'buick skylark',
    'mpg': 20.5,
    'cylinders': 6,
    'cc': 231,
    'hp': 105,
    'weight': 3425,
    'acceleration': 16.9,
    'origin': 'USA'
  }, {
    'name': 'plymouth volare custom',
    'mpg': 19,
    'cylinders': 6,
    'cc': 225,
    'hp': 100,
    'weight': 3630,
    'acceleration': 17.7,
    'origin': 'USA'
  }, {
    'name': 'ford granada',
    'mpg': 18.5,
    'cylinders': 6,
    'cc': 250,
    'hp': 98,
    'weight': 3525,
    'acceleration': 19,
    'origin': 'USA'
  }, {
    'name': 'pontiac grand prix lj',
    'mpg': 16,
    'cylinders': 8,
    'cc': 400,
    'hp': 180,
    'weight': 4220,
    'acceleration': 11.1,
    'origin': 'USA'
  }, {
    'name': 'chevrolet monte carlo landau',
    'mpg': 15.5,
    'cylinders': 8,
    'cc': 350,
    'hp': 170,
    'weight': 4165,
    'acceleration': 11.4,
    'origin': 'USA'
  }, {
    'name': 'chrysler cordoba',
    'mpg': 15.5,
    'cylinders': 8,
    'cc': 400,
    'hp': 190,
    'weight': 4325,
    'acceleration': 12.2,
    'origin': 'USA'
  }, {
    'name': 'ford thunderbird',
    'mpg': 16,
    'cylinders': 8,
    'cc': 351,
    'hp': 149,
    'weight': 4335,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'volkswagen rabbit custom',
    'mpg': 29,
    'cylinders': 4,
    'cc': 97,
    'hp': 78,
    'weight': 1940,
    'acceleration': 14.5,
    'origin': 'Europe'
  }, {
    'name': 'pontiac sunbird coupe',
    'mpg': 24.5,
    'cylinders': 4,
    'cc': 151,
    'hp': 88,
    'weight': 2740,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'toyota corolla liftback',
    'mpg': 26,
    'cylinders': 4,
    'cc': 97,
    'hp': 75,
    'weight': 2265,
    'acceleration': 18.2,
    'origin': 'Japan'
  }, {
    'name': 'ford mustang ii 2+2',
    'mpg': 25.5,
    'cylinders': 4,
    'cc': 140,
    'hp': 89,
    'weight': 2755,
    'acceleration': 15.8,
    'origin': 'USA'
  }, {
    'name': 'chevrolet chevette',
    'mpg': 30.5,
    'cylinders': 4,
    'cc': 98,
    'hp': 63,
    'weight': 2051,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'dodge colt m/m',
    'mpg': 33.5,
    'cylinders': 4,
    'cc': 98,
    'hp': 83,
    'weight': 2075,
    'acceleration': 15.9,
    'origin': 'USA'
  }, {
    'name': 'subaru dl',
    'mpg': 30,
    'cylinders': 4,
    'cc': 97,
    'hp': 67,
    'weight': 1985,
    'acceleration': 16.4,
    'origin': 'Japan'
  }, {
    'name': 'volkswagen dasher',
    'mpg': 30.5,
    'cylinders': 4,
    'cc': 97,
    'hp': 78,
    'weight': 2190,
    'acceleration': 14.1,
    'origin': 'Europe'
  }, {
    'name': 'datsun 810',
    'mpg': 22,
    'cylinders': 6,
    'cc': 146,
    'hp': 97,
    'weight': 2815,
    'acceleration': 14.5,
    'origin': 'Japan'
  }, {
    'name': 'bmw 320i',
    'mpg': 21.5,
    'cylinders': 4,
    'cc': 121,
    'hp': 110,
    'weight': 2600,
    'acceleration': 12.8,
    'origin': 'Europe'
  }, {
    'name': 'mazda rx-4',
    'mpg': 21.5,
    'cylinders': 3,
    'cc': 80,
    'hp': 110,
    'weight': 2720,
    'acceleration': 13.5,
    'origin': 'Japan'
  }, {
    'name': 'volkswagen rabbit custom diesel',
    'mpg': 43.1,
    'cylinders': 4,
    'cc': 90,
    'hp': 48,
    'weight': 1985,
    'acceleration': 21.5,
    'origin': 'Europe'
  }, {
    'name': 'ford fiesta',
    'mpg': 36.1,
    'cylinders': 4,
    'cc': 98,
    'hp': 66,
    'weight': 1800,
    'acceleration': 14.4,
    'origin': 'USA'
  }, {
    'name': 'mazda glc deluxe',
    'mpg': 32.8,
    'cylinders': 4,
    'cc': 78,
    'hp': 52,
    'weight': 1985,
    'acceleration': 19.4,
    'origin': 'Japan'
  }, {
    'name': 'datsun b210 gx',
    'mpg': 39.4,
    'cylinders': 4,
    'cc': 85,
    'hp': 70,
    'weight': 2070,
    'acceleration': 18.6,
    'origin': 'Japan'
  }, {
    'name': 'honda civic cvcc',
    'mpg': 36.1,
    'cylinders': 4,
    'cc': 91,
    'hp': 60,
    'weight': 1800,
    'acceleration': 16.4,
    'origin': 'Japan'
  }, {
    'name': 'oldsmobile cutlass salon brougham',
    'mpg': 19.9,
    'cylinders': 8,
    'cc': 260,
    'hp': 110,
    'weight': 3365,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'dodge diplomat',
    'mpg': 19.4,
    'cylinders': 8,
    'cc': 318,
    'hp': 140,
    'weight': 3735,
    'acceleration': 13.2,
    'origin': 'USA'
  }, {
    'name': 'mercury monarch ghia',
    'mpg': 20.2,
    'cylinders': 8,
    'cc': 302,
    'hp': 139,
    'weight': 3570,
    'acceleration': 12.8,
    'origin': 'USA'
  }, {
    'name': 'pontiac phoenix lj',
    'mpg': 19.2,
    'cylinders': 6,
    'cc': 231,
    'hp': 105,
    'weight': 3535,
    'acceleration': 19.2,
    'origin': 'USA'
  }, {
    'name': 'chevrolet malibu',
    'mpg': 20.5,
    'cylinders': 6,
    'cc': 200,
    'hp': 95,
    'weight': 3155,
    'acceleration': 18.2,
    'origin': 'USA'
  }, {
    'name': 'ford fairmont (auto)',
    'mpg': 20.2,
    'cylinders': 6,
    'cc': 200,
    'hp': 85,
    'weight': 2965,
    'acceleration': 15.8,
    'origin': 'USA'
  }, {
    'name': 'ford fairmont (man)',
    'mpg': 25.1,
    'cylinders': 4,
    'cc': 140,
    'hp': 88,
    'weight': 2720,
    'acceleration': 15.4,
    'origin': 'USA'
  }, {
    'name': 'plymouth volare',
    'mpg': 20.5,
    'cylinders': 6,
    'cc': 225,
    'hp': 100,
    'weight': 3430,
    'acceleration': 17.2,
    'origin': 'USA'
  }, {
    'name': 'amc concord',
    'mpg': 19.4,
    'cylinders': 6,
    'cc': 232,
    'hp': 90,
    'weight': 3210,
    'acceleration': 17.2,
    'origin': 'USA'
  }, {
    'name': 'buick century special',
    'mpg': 20.6,
    'cylinders': 6,
    'cc': 231,
    'hp': 105,
    'weight': 3380,
    'acceleration': 15.8,
    'origin': 'USA'
  }, {
    'name': 'mercury zephyr',
    'mpg': 20.8,
    'cylinders': 6,
    'cc': 200,
    'hp': 85,
    'weight': 3070,
    'acceleration': 16.7,
    'origin': 'USA'
  }, {
    'name': 'dodge aspen',
    'mpg': 18.6,
    'cylinders': 6,
    'cc': 225,
    'hp': 110,
    'weight': 3620,
    'acceleration': 18.7,
    'origin': 'USA'
  }, {
    'name': 'amc concord d/l',
    'mpg': 18.1,
    'cylinders': 6,
    'cc': 258,
    'hp': 120,
    'weight': 3410,
    'acceleration': 15.1,
    'origin': 'USA'
  }, {
    'name': 'chevrolet monte carlo landau',
    'mpg': 19.2,
    'cylinders': 8,
    'cc': 305,
    'hp': 145,
    'weight': 3425,
    'acceleration': 13.2,
    'origin': 'USA'
  }, {
    'name': 'buick regal sport coupe (turbo)',
    'mpg': 17.7,
    'cylinders': 6,
    'cc': 231,
    'hp': 165,
    'weight': 3445,
    'acceleration': 13.4,
    'origin': 'USA'
  }, {
    'name': 'ford futura',
    'mpg': 18.1,
    'cylinders': 8,
    'cc': 302,
    'hp': 139,
    'weight': 3205,
    'acceleration': 11.2,
    'origin': 'USA'
  }, {
    'name': 'dodge magnum xe',
    'mpg': 17.5,
    'cylinders': 8,
    'cc': 318,
    'hp': 140,
    'weight': 4080,
    'acceleration': 13.7,
    'origin': 'USA'
  }, {
    'name': 'chevrolet chevette',
    'mpg': 30,
    'cylinders': 4,
    'cc': 98,
    'hp': 68,
    'weight': 2155,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'toyota corona',
    'mpg': 27.5,
    'cylinders': 4,
    'cc': 134,
    'hp': 95,
    'weight': 2560,
    'acceleration': 14.2,
    'origin': 'Japan'
  }, {
    'name': 'datsun 510',
    'mpg': 27.2,
    'cylinders': 4,
    'cc': 119,
    'hp': 97,
    'weight': 2300,
    'acceleration': 14.7,
    'origin': 'Japan'
  }, {
    'name': 'dodge omni',
    'mpg': 30.9,
    'cylinders': 4,
    'cc': 105,
    'hp': 75,
    'weight': 2230,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'toyota celica gt liftback',
    'mpg': 21.1,
    'cylinders': 4,
    'cc': 134,
    'hp': 95,
    'weight': 2515,
    'acceleration': 14.8,
    'origin': 'Japan'
  }, {
    'name': 'plymouth sapporo',
    'mpg': 23.2,
    'cylinders': 4,
    'cc': 156,
    'hp': 105,
    'weight': 2745,
    'acceleration': 16.7,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile starfire sx',
    'mpg': 23.8,
    'cylinders': 4,
    'cc': 151,
    'hp': 85,
    'weight': 2855,
    'acceleration': 17.6,
    'origin': 'USA'
  }, {
    'name': 'datsun 200-sx',
    'mpg': 23.9,
    'cylinders': 4,
    'cc': 119,
    'hp': 97,
    'weight': 2405,
    'acceleration': 14.9,
    'origin': 'Japan'
  }, {
    'name': 'audi 5000',
    'mpg': 20.3,
    'cylinders': 5,
    'cc': 131,
    'hp': 103,
    'weight': 2830,
    'acceleration': 15.9,
    'origin': 'Europe'
  }, {
    'name': 'volvo 264gl',
    'mpg': 17,
    'cylinders': 6,
    'cc': 163,
    'hp': 125,
    'weight': 3140,
    'acceleration': 13.6,
    'origin': 'Europe'
  }, {
    'name': 'saab 99gle',
    'mpg': 21.6,
    'cylinders': 4,
    'cc': 121,
    'hp': 115,
    'weight': 2795,
    'acceleration': 15.7,
    'origin': 'Europe'
  }, {
    'name': 'peugeot 604sl',
    'mpg': 16.2,
    'cylinders': 6,
    'cc': 163,
    'hp': 133,
    'weight': 3410,
    'acceleration': 15.8,
    'origin': 'Europe'
  }, {
    'name': 'volkswagen scirocco',
    'mpg': 31.5,
    'cylinders': 4,
    'cc': 89,
    'hp': 71,
    'weight': 1990,
    'acceleration': 14.9,
    'origin': 'Europe'
  }, {
    'name': 'honda Accelerationord lx',
    'mpg': 29.5,
    'cylinders': 4,
    'cc': 98,
    'hp': 68,
    'weight': 2135,
    'acceleration': 16.6,
    'origin': 'Japan'
  }, {
    'name': 'pontiac lemans v6',
    'mpg': 21.5,
    'cylinders': 6,
    'cc': 231,
    'hp': 115,
    'weight': 3245,
    'acceleration': 15.4,
    'origin': 'USA'
  }, {
    'name': 'mercury zephyr 6',
    'mpg': 19.8,
    'cylinders': 6,
    'cc': 200,
    'hp': 85,
    'weight': 2990,
    'acceleration': 18.2,
    'origin': 'USA'
  }, {
    'name': 'ford fairmont 4',
    'mpg': 22.3,
    'cylinders': 4,
    'cc': 140,
    'hp': 88,
    'weight': 2890,
    'acceleration': 17.3,
    'origin': 'USA'
  }, {
    'name': 'amc concord dl 6',
    'mpg': 20.2,
    'cylinders': 6,
    'cc': 232,
    'hp': 90,
    'weight': 3265,
    'acceleration': 18.2,
    'origin': 'USA'
  }, {
    'name': 'dodge aspen 6',
    'mpg': 20.6,
    'cylinders': 6,
    'cc': 225,
    'hp': 110,
    'weight': 3360,
    'acceleration': 16.6,
    'origin': 'USA'
  }, {
    'name': 'chevrolet caprice classic',
    'mpg': 17,
    'cylinders': 8,
    'cc': 305,
    'hp': 130,
    'weight': 3840,
    'acceleration': 15.4,
    'origin': 'USA'
  }, {
    'name': 'ford ltd landau',
    'mpg': 17.6,
    'cylinders': 8,
    'cc': 302,
    'hp': 129,
    'weight': 3725,
    'acceleration': 13.4,
    'origin': 'USA'
  }, {
    'name': 'mercury grand marquis',
    'mpg': 16.5,
    'cylinders': 8,
    'cc': 351,
    'hp': 138,
    'weight': 3955,
    'acceleration': 13.2,
    'origin': 'USA'
  }, {
    'name': 'dodge st. regis',
    'mpg': 18.2,
    'cylinders': 8,
    'cc': 318,
    'hp': 135,
    'weight': 3830,
    'acceleration': 15.2,
    'origin': 'USA'
  }, {
    'name': 'buick estate wagon (sw)',
    'mpg': 16.9,
    'cylinders': 8,
    'cc': 350,
    'hp': 155,
    'weight': 4360,
    'acceleration': 14.9,
    'origin': 'USA'
  }, {
    'name': 'ford country squire (sw)',
    'mpg': 15.5,
    'cylinders': 8,
    'cc': 351,
    'hp': 142,
    'weight': 4054,
    'acceleration': 14.3,
    'origin': 'USA'
  }, {
    'name': 'chevrolet malibu classic (sw)',
    'mpg': 19.2,
    'cylinders': 8,
    'cc': 267,
    'hp': 125,
    'weight': 3605,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'chrysler lebaron town @ country (sw)',
    'mpg': 18.5,
    'cylinders': 8,
    'cc': 360,
    'hp': 150,
    'weight': 3940,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'vw rabbit custom',
    'mpg': 31.9,
    'cylinders': 4,
    'cc': 89,
    'hp': 71,
    'weight': 1925,
    'acceleration': 14,
    'origin': 'Europe'
  }, {
    'name': 'maxda glc deluxe',
    'mpg': 34.1,
    'cylinders': 4,
    'cc': 86,
    'hp': 65,
    'weight': 1975,
    'acceleration': 15.2,
    'origin': 'Japan'
  }, {
    'name': 'dodge colt hatchback custom',
    'mpg': 35.7,
    'cylinders': 4,
    'cc': 98,
    'hp': 80,
    'weight': 1915,
    'acceleration': 14.4,
    'origin': 'USA'
  }, {
    'name': 'amc spirit dl',
    'mpg': 27.4,
    'cylinders': 4,
    'cc': 121,
    'hp': 80,
    'weight': 2670,
    'acceleration': 15,
    'origin': 'USA'
  }, {
    'name': 'mercedes benz 300d',
    'mpg': 25.4,
    'cylinders': 5,
    'cc': 183,
    'hp': 77,
    'weight': 3530,
    'acceleration': 20.1,
    'origin': 'Europe'
  }, {
    'name': 'cadillac eldorado',
    'mpg': 23,
    'cylinders': 8,
    'cc': 350,
    'hp': 125,
    'weight': 3900,
    'acceleration': 17.4,
    'origin': 'USA'
  }, {
    'name': 'peugeot 504',
    'mpg': 27.2,
    'cylinders': 4,
    'cc': 141,
    'hp': 71,
    'weight': 3190,
    'acceleration': 24.8,
    'origin': 'Europe'
  }, {
    'name': 'oldsmobile cutlass salon brougham',
    'mpg': 23.9,
    'cylinders': 8,
    'cc': 260,
    'hp': 90,
    'weight': 3420,
    'acceleration': 22.2,
    'origin': 'USA'
  }, {
    'name': 'plymouth horizon',
    'mpg': 34.2,
    'cylinders': 4,
    'cc': 105,
    'hp': 70,
    'weight': 2200,
    'acceleration': 13.2,
    'origin': 'USA'
  }, {
    'name': 'plymouth horizon tc3',
    'mpg': 34.5,
    'cylinders': 4,
    'cc': 105,
    'hp': 70,
    'weight': 2150,
    'acceleration': 14.9,
    'origin': 'USA'
  }, {
    'name': 'datsun 210',
    'mpg': 31.8,
    'cylinders': 4,
    'cc': 85,
    'hp': 65,
    'weight': 2020,
    'acceleration': 19.2,
    'origin': 'Japan'
  }, {
    'name': 'fiat strada custom',
    'mpg': 37.3,
    'cylinders': 4,
    'cc': 91,
    'hp': 69,
    'weight': 2130,
    'acceleration': 14.7,
    'origin': 'Europe'
  }, {
    'name': 'buick skylark limited',
    'mpg': 28.4,
    'cylinders': 4,
    'cc': 151,
    'hp': 90,
    'weight': 2670,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'chevrolet citation',
    'mpg': 28.8,
    'cylinders': 6,
    'cc': 173,
    'hp': 115,
    'weight': 2595,
    'acceleration': 11.3,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile omega brougham',
    'mpg': 26.8,
    'cylinders': 6,
    'cc': 173,
    'hp': 115,
    'weight': 2700,
    'acceleration': 12.9,
    'origin': 'USA'
  }, {
    'name': 'pontiac phoenix',
    'mpg': 33.5,
    'cylinders': 4,
    'cc': 151,
    'hp': 90,
    'weight': 2556,
    'acceleration': 13.2,
    'origin': 'USA'
  }, {
    'name': 'vw rabbit',
    'mpg': 41.5,
    'cylinders': 4,
    'cc': 98,
    'hp': 76,
    'weight': 2144,
    'acceleration': 14.7,
    'origin': 'Europe'
  }, {
    'name': 'toyota corolla tercel',
    'mpg': 38.1,
    'cylinders': 4,
    'cc': 89,
    'hp': 60,
    'weight': 1968,
    'acceleration': 18.8,
    'origin': 'Japan'
  }, {
    'name': 'chevrolet chevette',
    'mpg': 32.1,
    'cylinders': 4,
    'cc': 98,
    'hp': 70,
    'weight': 2120,
    'acceleration': 15.5,
    'origin': 'USA'
  }, {
    'name': 'datsun 310',
    'mpg': 37.2,
    'cylinders': 4,
    'cc': 86,
    'hp': 65,
    'weight': 2019,
    'acceleration': 16.4,
    'origin': 'Japan'
  }, {
    'name': 'chevrolet citation',
    'mpg': 28,
    'cylinders': 4,
    'cc': 151,
    'hp': 90,
    'weight': 2678,
    'acceleration': 16.5,
    'origin': 'USA'
  }, {
    'name': 'ford fairmont',
    'mpg': 26.4,
    'cylinders': 4,
    'cc': 140,
    'hp': 88,
    'weight': 2870,
    'acceleration': 18.1,
    'origin': 'USA'
  }, {
    'name': 'amc concord',
    'mpg': 24.3,
    'cylinders': 4,
    'cc': 151,
    'hp': 90,
    'weight': 3003,
    'acceleration': 20.1,
    'origin': 'USA'
  }, {
    'name': 'dodge aspen',
    'mpg': 19.1,
    'cylinders': 6,
    'cc': 225,
    'hp': 90,
    'weight': 3381,
    'acceleration': 18.7,
    'origin': 'USA'
  }, {
    'name': 'audi 4000',
    'mpg': 34.3,
    'cylinders': 4,
    'cc': 97,
    'hp': 78,
    'weight': 2188,
    'acceleration': 15.8,
    'origin': 'Europe'
  }, {
    'name': 'toyota corona liftback',
    'mpg': 29.8,
    'cylinders': 4,
    'cc': 134,
    'hp': 90,
    'weight': 2711,
    'acceleration': 15.5,
    'origin': 'Japan'
  }, {
    'name': 'mazda 626',
    'mpg': 31.3,
    'cylinders': 4,
    'cc': 120,
    'hp': 75,
    'weight': 2542,
    'acceleration': 17.5,
    'origin': 'Japan'
  }, {
    'name': 'datsun 510 hatchback',
    'mpg': 37,
    'cylinders': 4,
    'cc': 119,
    'hp': 92,
    'weight': 2434,
    'acceleration': 15,
    'origin': 'Japan'
  }, {
    'name': 'toyota corolla',
    'mpg': 32.2,
    'cylinders': 4,
    'cc': 108,
    'hp': 75,
    'weight': 2265,
    'acceleration': 15.2,
    'origin': 'Japan'
  }, {
    'name': 'mazda glc',
    'mpg': 46.6,
    'cylinders': 4,
    'cc': 86,
    'hp': 65,
    'weight': 2110,
    'acceleration': 17.9,
    'origin': 'Japan'
  }, {
    'name': 'dodge colt',
    'mpg': 27.9,
    'cylinders': 4,
    'cc': 156,
    'hp': 105,
    'weight': 2800,
    'acceleration': 14.4,
    'origin': 'USA'
  }, {
    'name': 'datsun 210',
    'mpg': 40.8,
    'cylinders': 4,
    'cc': 85,
    'hp': 65,
    'weight': 2110,
    'acceleration': 19.2,
    'origin': 'Japan'
  }, {
    'name': 'vw rabbit c (diesel)',
    'mpg': 44.3,
    'cylinders': 4,
    'cc': 90,
    'hp': 48,
    'weight': 2085,
    'acceleration': 21.7,
    'origin': 'Europe'
  }, {
    'name': 'vw dasher (diesel)',
    'mpg': 43.4,
    'cylinders': 4,
    'cc': 90,
    'hp': 48,
    'weight': 2335,
    'acceleration': 23.7,
    'origin': 'Europe'
  }, {
    'name': 'audi 5000s (diesel)',
    'mpg': 36.4,
    'cylinders': 5,
    'cc': 121,
    'hp': 67,
    'weight': 2950,
    'acceleration': 19.9,
    'origin': 'Europe'
  }, {
    'name': 'mercedes-benz 240d',
    'mpg': 30,
    'cylinders': 4,
    'cc': 146,
    'hp': 67,
    'weight': 3250,
    'acceleration': 21.8,
    'origin': 'Europe'
  }, {
    'name': 'honda civic 1500 gl',
    'mpg': 44.6,
    'cylinders': 4,
    'cc': 91,
    'hp': 67,
    'weight': 1850,
    'acceleration': 13.8,
    'origin': 'Japan'
  }, {
    'name': 'subaru dl',
    'mpg': 33.8,
    'cylinders': 4,
    'cc': 97,
    'hp': 67,
    'weight': 2145,
    'acceleration': 18,
    'origin': 'Japan'
  }, {
    'name': 'vokswagen rabbit',
    'mpg': 29.8,
    'cylinders': 4,
    'cc': 89,
    'hp': 62,
    'weight': 1845,
    'acceleration': 15.3,
    'origin': 'Europe'
  }, {
    'name': 'datsun 280-zx',
    'mpg': 32.7,
    'cylinders': 6,
    'cc': 168,
    'hp': 132,
    'weight': 2910,
    'acceleration': 11.4,
    'origin': 'Japan'
  }, {
    'name': 'mazda rx-7 gs',
    'mpg': 23.7,
    'cylinders': 3,
    'cc': 70,
    'hp': 100,
    'weight': 2420,
    'acceleration': 12.5,
    'origin': 'Japan'
  }, {
    'name': 'triumph tr7 coupe',
    'mpg': 35,
    'cylinders': 4,
    'cc': 122,
    'hp': 88,
    'weight': 2500,
    'acceleration': 15.1,
    'origin': 'Europe'
  }, {
    'name': 'honda Accelerationord',
    'mpg': 32.4,
    'cylinders': 4,
    'cc': 107,
    'hp': 72,
    'weight': 2290,
    'acceleration': 17,
    'origin': 'Japan'
  }, {
    'name': 'plymouth reliant',
    'mpg': 27.2,
    'cylinders': 4,
    'cc': 135,
    'hp': 84,
    'weight': 2490,
    'acceleration': 15.7,
    'origin': 'USA'
  }, {
    'name': 'buick skylark',
    'mpg': 26.6,
    'cylinders': 4,
    'cc': 151,
    'hp': 84,
    'weight': 2635,
    'acceleration': 16.4,
    'origin': 'USA'
  }, {
    'name': 'dodge aries wagon (sw)',
    'mpg': 25.8,
    'cylinders': 4,
    'cc': 156,
    'hp': 92,
    'weight': 2620,
    'acceleration': 14.4,
    'origin': 'USA'
  }, {
    'name': 'chevrolet citation',
    'mpg': 23.5,
    'cylinders': 6,
    'cc': 173,
    'hp': 110,
    'weight': 2725,
    'acceleration': 12.6,
    'origin': 'USA'
  }, {
    'name': 'plymouth reliant',
    'mpg': 30,
    'cylinders': 4,
    'cc': 135,
    'hp': 84,
    'weight': 2385,
    'acceleration': 12.9,
    'origin': 'USA'
  }, {
    'name': 'toyota starlet',
    'mpg': 39.1,
    'cylinders': 4,
    'cc': 79,
    'hp': 58,
    'weight': 1755,
    'acceleration': 16.9,
    'origin': 'Japan'
  }, {
    'name': 'plymouth champ',
    'mpg': 39,
    'cylinders': 4,
    'cc': 86,
    'hp': 64,
    'weight': 1875,
    'acceleration': 16.4,
    'origin': 'USA'
  }, {
    'name': 'honda civic 1300',
    'mpg': 35.1,
    'cylinders': 4,
    'cc': 81,
    'hp': 60,
    'weight': 1760,
    'acceleration': 16.1,
    'origin': 'Japan'
  }, {
    'name': 'subaru',
    'mpg': 32.3,
    'cylinders': 4,
    'cc': 97,
    'hp': 67,
    'weight': 2065,
    'acceleration': 17.8,
    'origin': 'Japan'
  }, {
    'name': 'datsun 210',
    'mpg': 37,
    'cylinders': 4,
    'cc': 85,
    'hp': 65,
    'weight': 1975,
    'acceleration': 19.4,
    'origin': 'Japan'
  }, {
    'name': 'toyota tercel',
    'mpg': 37.7,
    'cylinders': 4,
    'cc': 89,
    'hp': 62,
    'weight': 2050,
    'acceleration': 17.3,
    'origin': 'Japan'
  }, {
    'name': 'mazda glc 4',
    'mpg': 34.1,
    'cylinders': 4,
    'cc': 91,
    'hp': 68,
    'weight': 1985,
    'acceleration': 16,
    'origin': 'Japan'
  }, {
    'name': 'plymouth horizon 4',
    'mpg': 34.7,
    'cylinders': 4,
    'cc': 105,
    'hp': 63,
    'weight': 2215,
    'acceleration': 14.9,
    'origin': 'USA'
  }, {
    'name': 'ford escort 4w',
    'mpg': 34.4,
    'cylinders': 4,
    'cc': 98,
    'hp': 65,
    'weight': 2045,
    'acceleration': 16.2,
    'origin': 'USA'
  }, {
    'name': 'ford escort 2h',
    'mpg': 29.9,
    'cylinders': 4,
    'cc': 98,
    'hp': 65,
    'weight': 2380,
    'acceleration': 20.7,
    'origin': 'USA'
  }, {
    'name': 'volkswagen jetta',
    'mpg': 33,
    'cylinders': 4,
    'cc': 105,
    'hp': 74,
    'weight': 2190,
    'acceleration': 14.2,
    'origin': 'Europe'
  }, {
    'name': 'honda prelude',
    'mpg': 33.7,
    'cylinders': 4,
    'cc': 107,
    'hp': 75,
    'weight': 2210,
    'acceleration': 14.4,
    'origin': 'Japan'
  }, {
    'name': 'toyota corolla',
    'mpg': 32.4,
    'cylinders': 4,
    'cc': 108,
    'hp': 75,
    'weight': 2350,
    'acceleration': 16.8,
    'origin': 'Japan'
  }, {
    'name': 'datsun 200sx',
    'mpg': 32.9,
    'cylinders': 4,
    'cc': 119,
    'hp': 100,
    'weight': 2615,
    'acceleration': 14.8,
    'origin': 'Japan'
  }, {
    'name': 'mazda 626',
    'mpg': 31.6,
    'cylinders': 4,
    'cc': 120,
    'hp': 74,
    'weight': 2635,
    'acceleration': 18.3,
    'origin': 'Japan'
  }, {
    'name': 'peugeot 505s turbo diesel',
    'mpg': 28.1,
    'cylinders': 4,
    'cc': 141,
    'hp': 80,
    'weight': 3230,
    'acceleration': 20.4,
    'origin': 'Europe'
  }, {
    'name': 'volvo diesel',
    'mpg': 30.7,
    'cylinders': 6,
    'cc': 145,
    'hp': 76,
    'weight': 3160,
    'acceleration': 19.6,
    'origin': 'Europe'
  }, {
    'name': 'toyota cressida',
    'mpg': 25.4,
    'cylinders': 6,
    'cc': 168,
    'hp': 116,
    'weight': 2900,
    'acceleration': 12.6,
    'origin': 'Japan'
  }, {
    'name': 'datsun 810 maxima',
    'mpg': 24.2,
    'cylinders': 6,
    'cc': 146,
    'hp': 120,
    'weight': 2930,
    'acceleration': 13.8,
    'origin': 'Japan'
  }, {
    'name': 'buick century',
    'mpg': 22.4,
    'cylinders': 6,
    'cc': 231,
    'hp': 110,
    'weight': 3415,
    'acceleration': 15.8,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile cutlass ls',
    'mpg': 26.6,
    'cylinders': 8,
    'cc': 350,
    'hp': 105,
    'weight': 3725,
    'acceleration': 19,
    'origin': 'USA'
  }, {
    'name': 'ford granada gl',
    'mpg': 20.2,
    'cylinders': 6,
    'cc': 200,
    'hp': 88,
    'weight': 3060,
    'acceleration': 17.1,
    'origin': 'USA'
  }, {
    'name': 'chrysler lebaron salon',
    'mpg': 17.6,
    'cylinders': 6,
    'cc': 225,
    'hp': 85,
    'weight': 3465,
    'acceleration': 16.6,
    'origin': 'USA'
  }, {
    'name': 'chevrolet cavalier',
    'mpg': 28,
    'cylinders': 4,
    'cc': 112,
    'hp': 88,
    'weight': 2605,
    'acceleration': 19.6,
    'origin': 'USA'
  }, {
    'name': 'chevrolet cavalier wagon',
    'mpg': 27,
    'cylinders': 4,
    'cc': 112,
    'hp': 88,
    'weight': 2640,
    'acceleration': 18.6,
    'origin': 'USA'
  }, {
    'name': 'chevrolet cavalier 2-door',
    'mpg': 34,
    'cylinders': 4,
    'cc': 112,
    'hp': 88,
    'weight': 2395,
    'acceleration': 18,
    'origin': 'USA'
  }, {
    'name': 'pontiac j2000 se hatchback',
    'mpg': 31,
    'cylinders': 4,
    'cc': 112,
    'hp': 85,
    'weight': 2575,
    'acceleration': 16.2,
    'origin': 'USA'
  }, {
    'name': 'dodge aries se',
    'mpg': 29,
    'cylinders': 4,
    'cc': 135,
    'hp': 84,
    'weight': 2525,
    'acceleration': 16,
    'origin': 'USA'
  }, {
    'name': 'pontiac phoenix',
    'mpg': 27,
    'cylinders': 4,
    'cc': 151,
    'hp': 90,
    'weight': 2735,
    'acceleration': 18,
    'origin': 'USA'
  }, {
    'name': 'ford fairmont futura',
    'mpg': 24,
    'cylinders': 4,
    'cc': 140,
    'hp': 92,
    'weight': 2865,
    'acceleration': 16.4,
    'origin': 'USA'
  }, {
    'name': 'volkswagen rabbit l',
    'mpg': 36,
    'cylinders': 4,
    'cc': 105,
    'hp': 74,
    'weight': 1980,
    'acceleration': 15.3,
    'origin': 'Europe'
  }, {
    'name': 'mazda glc custom l',
    'mpg': 37,
    'cylinders': 4,
    'cc': 91,
    'hp': 68,
    'weight': 2025,
    'acceleration': 18.2,
    'origin': 'Japan'
  }, {
    'name': 'mazda glc custom',
    'mpg': 31,
    'cylinders': 4,
    'cc': 91,
    'hp': 68,
    'weight': 1970,
    'acceleration': 17.6,
    'origin': 'Japan'
  }, {
    'name': 'plymouth horizon miser',
    'mpg': 38,
    'cylinders': 4,
    'cc': 105,
    'hp': 63,
    'weight': 2125,
    'acceleration': 14.7,
    'origin': 'USA'
  }, {
    'name': 'mercury lynx l',
    'mpg': 36,
    'cylinders': 4,
    'cc': 98,
    'hp': 70,
    'weight': 2125,
    'acceleration': 17.3,
    'origin': 'USA'
  }, {
    'name': 'nissan stanza xe',
    'mpg': 36,
    'cylinders': 4,
    'cc': 120,
    'hp': 88,
    'weight': 2160,
    'acceleration': 14.5,
    'origin': 'Japan'
  }, {
    'name': 'honda Accelerationord',
    'mpg': 36,
    'cylinders': 4,
    'cc': 107,
    'hp': 75,
    'weight': 2205,
    'acceleration': 14.5,
    'origin': 'Japan'
  }, {
    'name': 'toyota corolla',
    'mpg': 34,
    'cylinders': 4,
    'cc': 108,
    'hp': 70,
    'weight': 2245,
    'acceleration': 16.9,
    'origin': 'Japan'
  }, {
    'name': 'honda civic',
    'mpg': 38,
    'cylinders': 4,
    'cc': 91,
    'hp': 67,
    'weight': 1965,
    'acceleration': 15,
    'origin': 'Japan'
  }, {
    'name': 'honda civic (auto)',
    'mpg': 32,
    'cylinders': 4,
    'cc': 91,
    'hp': 67,
    'weight': 1965,
    'acceleration': 15.7,
    'origin': 'Japan'
  }, {
    'name': 'datsun 310 gx',
    'mpg': 38,
    'cylinders': 4,
    'cc': 91,
    'hp': 67,
    'weight': 1995,
    'acceleration': 16.2,
    'origin': 'Japan'
  }, {
    'name': 'buick century limited',
    'mpg': 25,
    'cylinders': 6,
    'cc': 181,
    'hp': 110,
    'weight': 2945,
    'acceleration': 16.4,
    'origin': 'USA'
  }, {
    'name': 'oldsmobile cutlass ciera (diesel)',
    'mpg': 38,
    'cylinders': 6,
    'cc': 262,
    'hp': 85,
    'weight': 3015,
    'acceleration': 17,
    'origin': 'USA'
  }, {
    'name': 'chrysler lebaron medallion',
    'mpg': 26,
    'cylinders': 4,
    'cc': 156,
    'hp': 92,
    'weight': 2585,
    'acceleration': 14.5,
    'origin': 'USA'
  }, {
    'name': 'ford granada l',
    'mpg': 22,
    'cylinders': 6,
    'cc': 232,
    'hp': 112,
    'weight': 2835,
    'acceleration': 14.7,
    'origin': 'USA'
  }, {
    'name': 'toyota celica gt',
    'mpg': 32,
    'cylinders': 4,
    'cc': 144,
    'hp': 96,
    'weight': 2665,
    'acceleration': 13.9,
    'origin': 'Japan'
  }, {
    'name': 'dodge charger 2.2',
    'mpg': 36,
    'cylinders': 4,
    'cc': 135,
    'hp': 84,
    'weight': 2370,
    'acceleration': 13,
    'origin': 'USA'
  }, {
    'name': 'chevrolet camaro',
    'mpg': 27,
    'cylinders': 4,
    'cc': 151,
    'hp': 90,
    'weight': 2950,
    'acceleration': 17.3,
    'origin': 'USA'
  }, {
    'name': 'ford mustang gl',
    'mpg': 27,
    'cylinders': 4,
    'cc': 140,
    'hp': 86,
    'weight': 2790,
    'acceleration': 15.6,
    'origin': 'USA'
  }, {
    'name': 'vw pickup',
    'mpg': 44,
    'cylinders': 4,
    'cc': 97,
    'hp': 52,
    'weight': 2130,
    'acceleration': 24.6,
    'origin': 'Europe'
  }, {
    'name': 'dodge rampage',
    'mpg': 32,
    'cylinders': 4,
    'cc': 135,
    'hp': 84,
    'weight': 2295,
    'acceleration': 11.6,
    'origin': 'USA'
  }, {
    'name': 'ford ranger',
    'mpg': 28,
    'cylinders': 4,
    'cc': 120,
    'hp': 79,
    'weight': 2625,
    'acceleration': 18.6,
    'origin': 'USA'
  }, {
    'name': 'chevy s-10',
    'mpg': 31,
    'cylinders': 4,
    'cc': 119,
    'hp': 82,
    'weight': 2720,
    'acceleration': 19.4,
    'origin': 'USA'
  }];
