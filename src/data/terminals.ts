export interface Terminal {
  name: string;
  data: Point[];
}

export interface Point {
  date: string;
  direction: 'Arrival' | 'Departure';
  count: number;
}

export const terminals: Terminal[] =
  [{
    "name": "Terminal 1",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 401535,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 350829,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 425575,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 435996,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 449152,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 459302,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 469516,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 456601,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 382011,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 389307,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 414626,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 415516,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 392130,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 359940,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 429669,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 429147,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 441650,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 471758,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 479459,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 479868,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 380639,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 395874,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 398228,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 395023,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 379132,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 368650,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 426379,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 400728,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 433808,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 447584,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 451580,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 439991,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 366410,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 398712,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 359066,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 394635,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 346898,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 312085,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 382397,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 380872,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 380568,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 389976,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 403449,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 380437,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 347984,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 373866,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 343456,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 371175,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 335141,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 293345,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 360070,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 352251,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 379626,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 393387,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 405635,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 394292,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 346148,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 378946,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 364997,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 383292,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 352873,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 315291,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 383638,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 371422,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 403286,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 402323,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 422174,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 405608,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 354794,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 380670,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 368460,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 376555,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 336700,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 313056,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 387739,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 373748,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 417844,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 429152,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 458937,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 449003,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 382802,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 405600,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 390769,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 388094,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 355100,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 329094,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 419621,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 394326,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 427904,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 443289,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 440242,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 428442,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 372466,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 404670,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 381828,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 441022,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 379594,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 292789,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 334721,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 325368,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 346464,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 387708,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 387940,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 371189,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 320597,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 354318,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 339455,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 370330,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 310005,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 298575,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 368454,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 364725,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 392405,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 381713,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 396475,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 362011,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 323742,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 358742,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 379274,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 391622,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 333454,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 315385,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 391257,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 386792,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 416144,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 415880,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 414427,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 408646,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 386466,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 409588,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 402293,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 401339,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 357760,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 326618,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 405997,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 405692,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 416522,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 419131,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 427939,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 406204,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 380077,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 424096,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 414405,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 406238,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 384416,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 350204,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 417051,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 402201,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 426759,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 416239,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 422807,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 419276,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 377083,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 426632,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 416863,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 416459,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 378902,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 358568,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 428123, }]
  }, {
    "name": "Terminal 2",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 98991,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 88549,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 104482,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 100241,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103178,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 108894,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 120213,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 115441,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 95225,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103066,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 100641,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 96915,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 91493,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 82723,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 94524,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 91216,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 104777,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 109858,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 120476,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 113141,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 95208,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 96323,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 95882,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 96870,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 96098,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 89935,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 101469,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 91954,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103088,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 108787,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 120143,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 108212,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 91946,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 95757,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 87597,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 100614,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 86725,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 76069,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 87825,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 95027,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 99754,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 114577,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 26829,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 26553,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 16449,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 15566,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 14348,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 19690,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 15225,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 10830,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 12326,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 15151,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 16397,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 20636,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 28249,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 29820,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 20984,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 20197,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 22216,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 30949,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 25491,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 22123,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 22631,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 21201,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 32885,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 30422,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 28219,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 28170,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 22496,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 20725,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 20698,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 24015,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 22007,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 17744,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 25554,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 19936,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 24343,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 30940,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 39153,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 40976,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 32165,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 32055,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 28026,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 30594,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 24240,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 27158,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 28602,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 28395,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 32884,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 41801,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 48889,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 40870,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 31474,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 33248,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 27420,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 33878,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 29548,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 24858,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 28383,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 27871,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 34475,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 37428,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 52882,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 55895,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 42152,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 37270,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 34152,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 42001,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 35044,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 29347,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 35256,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 35250,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 40468,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 52181,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 58445,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 61120,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 42351,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 40068,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 37733,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 44580,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 38445,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 31523,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 38987,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 41252,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 46349,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 58878,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 68108,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 62804,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 45425,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 46059,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 43698,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 49461,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 44686,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 33106,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 41017,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 43110,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 136643,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 243953,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 260772,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 255764,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 213909,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 223879,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 202484,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 211693,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 188857,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 181130,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 202342,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 186350,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 183730,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 212470,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 217028,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218324,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 177311,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 202491,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 195081,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 223855,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 215863,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 209494,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 221637, }]
  }, {
    "name": "Terminal 3",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 121649,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 115531,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 139916,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 131026,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 141814,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 159549,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 181198,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 187002,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 147121,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 146297,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 150518,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 151011,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 139038,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 130171,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 164982,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 159461,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 174984,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 208173,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 228149,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 229337,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 162856,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 164666,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 154944,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 165201,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 146497,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 142600,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 169336,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 146895,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 179066,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 187681,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 203837,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 198749,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 106207,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 97968,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 90494,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 150150,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 127674,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 128747,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 159598,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 153402,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 159434,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 169988,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 181632,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 182083,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 159191,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 162632,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 156751,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 168867,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 145146,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 133674,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 161971,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 153673,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 158666,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 176694,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 186832,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 190601,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 159848,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 191376,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 191252,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 210599,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 182314,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 176948,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 218991,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 213650,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 235356,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 263526,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 278892,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 281772,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 238832,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 244000,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 238085,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 243336,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 220363,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 216472,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 234231,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 186487,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 177371,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 185367,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 203612,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 204654,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 170517,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 165918,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 165116,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 174198,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 153966,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 139917,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 177304,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 182605,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 231154,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 253345,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 267386,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 246493,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 211892,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 230194,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 195021,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 238014,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 209391,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 228871,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 304348,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 309962,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 332717,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 365130,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 386686,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 370950,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 303043,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 326752,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 228992,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 240312,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 215696,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 194916,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 229606,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 237674,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 274063,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 294383,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 322012,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 307995,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 262814,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 293911,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 283973,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 306347,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 279427,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 265709,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 304388,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 309816,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 342705,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 366716,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 402452,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 375042,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 332145,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 348692,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 334770,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 333465,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 324638,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 288113,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 344590,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 348387,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 335799,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 334780,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 343175,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 339048,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 282240,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 318036,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 303750,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 299893,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 282955,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 270473,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 345144,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 359880,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 386698,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 385539,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 417138,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 392314,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 322666,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 330385,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 299981,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 290020,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 266692,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 239246,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 333505, }]
  }, {
    "name": "Terminal 4",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 381419,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 341132,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 402709,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 408030,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 421319,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 428312,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 460367,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 437457,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 379889,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 409053,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 399315,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 414895,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 395418,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 355011,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 416798,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 416559,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 420116,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 435530,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 460896,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 449805,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 381062,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 412089,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 398951,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 418774,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 383767,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 356838,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 391934,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 390745,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 416048,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 417180,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 427481,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 425460,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 347854,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 360943,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 335043,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 335512,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 341683,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 311103,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 364565,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 377521,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 386482,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 391868,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 422117,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 410380,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 355401,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 388381,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 351824,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 371129,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 350123,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 302898,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 374184,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 377996,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 393008,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 396418,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 419766,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 409850,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 355567,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 385041,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 353035,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 368491,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 347547,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 319922,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 365887,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 406518,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 437546,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 443345,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 469390,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 444530,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 404050,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 378426,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 400841,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 407282,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 406375,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 382645,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 434864,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 436464,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 456259,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 448519,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 482025,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 470197,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 404128,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 431072,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 384563,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 376023,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 366058,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 302438,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 361156,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 366475,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 375711,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 385211,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 407031,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 387047,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 326246,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 363113,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 331106,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 385024,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 346767,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 308950,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 367146,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 379696,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 363150,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 378355,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 404403,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 397498,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 345277,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 389591,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 333493,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 361706,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 327393,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 298877,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 362569,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 356347,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 360207,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 382849,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 396657,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 382669,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 331976,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 356074,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 338507,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 358052,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 387189,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 285140,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 340005,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 335417,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 353068,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 425783,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 422257,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 421218,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 349410,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 362097,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 343535,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 355396,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 316510,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 273083,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 327234,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 324476,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 340844,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 361972,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 404417,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 378528,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 329781,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 372938,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 343114,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 352592,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 322493,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 299852,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 357875,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 354404,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 375369,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 385538,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 411994,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 387490,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 332474,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 375859,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 362623,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 386235,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 352988,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 324402,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 412326, }]
  }, {
    "name": "Terminal 5",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 135622,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 119847,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 157999,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 156099,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 150001,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 174320,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 196803,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 184823,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 140796,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 155735,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 153848,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 154062,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 148670,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 130192,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 173700,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 168675,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 163872,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 194037,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 238415,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 204656,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 195618,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 211245,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 204714,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 202664,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 184224,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 167490,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 197027,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 182831,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 184288,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218719,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 211556,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 221661,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 141771,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 159116,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 158332,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 165383,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 150929,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 130776,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 163453,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 155998,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 153021,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 171589,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 308152,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 273531,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 231732,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 226610,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 207383,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 219167,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 209023,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 177502,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 237382,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 217067,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 226692,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 225871,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 279427,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 266090,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 224902,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 233735,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 226401,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 221976,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 216480,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 217894,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 216615,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 310785,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 320432,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 263352,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 271741,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 285652,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 220619,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 245031,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 231098,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 171462,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 246743,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 211510,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 257806,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 262724,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 277144,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 259552,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 284948,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 283053,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 233920,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 250136,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 253338,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 243040,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 240142,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 207561,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 276472,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 263748,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 284547,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 318739,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 334420,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 334849,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 273973,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 296165,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 255045,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 290344,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 292559,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 268274,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 340085,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 338032,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 333540,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 354635,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 410742,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 381757,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 318835,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 334386,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 293539,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 321257,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 290753,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 286438,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 364628,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 348333,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 376833,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 364808,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 393389,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 379191,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 346750,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 362815,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 356708,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 353501,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 314602,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 313922,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 407564,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 377718,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 408555,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 431757,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 456188,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 403073,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 362702,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 393134,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 382598,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 410292,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 381253,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 338872,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 414390,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 423720,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 427551,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 438808,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 449295,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 436104,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 348559,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 383484,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 342013,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 363441,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 343748,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 315370,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 375045,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 364748,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 397872,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 425939,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 455005,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 427344,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 363282,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 373226,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 368481,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 376621,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 357695,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 307999,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 364810, }]
  }, {
    "name": "Terminal 6",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 195820,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 179516,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 211470,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 211819,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218606,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 232429,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 269170,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 249077,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 203218,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 219489,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 223027,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 223044,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 199926,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 181432,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 214580,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218441,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 226762,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 241311,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 266055,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 258121,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 200410,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 220415,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 210710,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 227445,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 201636,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 180920,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 221768,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218851,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 235748,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 246211,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 276318,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 281172,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 235662,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 253986,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 219532,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 205460,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 169184,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 148483,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 175185,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 153379,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 184750,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 215962,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 269706,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 261450,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 187499,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 202876,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 186428,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 214461,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 177973,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 167212,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 210347,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 210375,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 259682,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 289901,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 317445,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 308222,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 248083,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 233124,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 223356,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 235415,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 197567,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 134250,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 215627,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 182175,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 219942,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 246003,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 307256,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 271690,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 213974,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 223354,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 228019,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 233645,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 191381,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 185108,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 231786,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 291095,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 348401,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 410725,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 463572,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 437748,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 273651,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 299290,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 262961,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 302395,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 283282,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 259567,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 327752,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 305872,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 286715,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 283987,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 319129,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 310526,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 277103,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 277083,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 255497,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 287416,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 262902,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 231013,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 291474,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 310371,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 321739,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 362338,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 334880,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 304648,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 289006,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 300256,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 271520,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 320796,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 274853,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 256763,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 312653,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 281897,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 296301,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 330152,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 377939,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 374480,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 298697,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 345752,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 323178,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 334613,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 300302,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 281221,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 317866,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 312716,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 329138,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 357719,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 374394,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 364016,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 295413,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 305873,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 292918,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 313204,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 266800,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 268126,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 345277,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 308905,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 303383,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 270767,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 285600,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 289090,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 258157,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 269133,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 261506,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 266711,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 242067,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 230682,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 260463,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 255199,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 265966,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 275701,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 281527,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 271461,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 231807,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 253827,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 242146,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 240050,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 215954,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 201865,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 238396, }]
  }, {
    "name": "Terminal 7",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 240807,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 226341,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 272761,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 269491,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 278391,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 296558,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 305257,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 297564,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 241417,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 258890,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 244408,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 253102,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 243144,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 226053,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 276708,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 265226,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 269849,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 261849,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 265336,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 276768,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 212974,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 241498,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 242446,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 234885,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 207922,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 200132,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 235539,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 234159,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 244525,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 263479,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 279531,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 267209,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 219727,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 235803,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 205783,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 223868,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 201931,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 188975,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 230928,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 273327,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 279955,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 299649,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 325140,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 319834,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 239863,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 242040,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 217924,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 229077,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 225102,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 196771,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 234563,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 227822,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 236150,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 252902,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 267907,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 269570,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 230821,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 246520,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 225949,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 219208,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 209146,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 194391,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 228638,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218555,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 228224,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 238584,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 251207,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 243513,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 207483,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 214528,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 197119,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 206767,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 191967,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 196771,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 204476,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 175911,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 144987,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 149056,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 150480,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 153326,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 189804,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 206332,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 191845,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 220914,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 208559,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 188383,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 257831,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 230589,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 259811,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 292931,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 309952,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 286369,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 223035,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 242171,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 220161,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 261267,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 229315,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 209439,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 253496,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 265726,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 248411,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 285784,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 309501,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 297599,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 234369,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 264281,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 290965,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 320845,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 298378,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 260869,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 281564,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 271618,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 266972,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 291552,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 322519,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 299677,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 254224,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 275058,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 241220,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 267711,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 234319,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 220106,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 252744,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 246039,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 275110,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 282776,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 310520,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 298749,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 284361,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 314898,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 301844,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 317373,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 266653,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 224868,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 273834,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 281947,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 287321,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 297296,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 340304,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 324337,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 283499,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 323286,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 303708,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 339834,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 314613,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 286693,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 348330,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 326230,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 341554,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 352180,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 387616,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 363188,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 294304,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 325942,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 332262,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 345586,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 306081,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 276340,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 351474, }]
  }, {
    "name": "Terminal 8",
    "data": [{
      "date": "2005-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 101253,

    }, {
      "date": "2006-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 102735,

    }, {
      "date": "2006-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 123912,

    }, {
      "date": "2006-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 111821,

    }, {
      "date": "2006-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 118195,

    }, {
      "date": "2006-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 118608,

    }, {
      "date": "2006-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 117910,

    }, {
      "date": "2006-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 111537,

    }, {
      "date": "2006-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 114518,

    }, {
      "date": "2006-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 124154,

    }, {
      "date": "2006-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 115776,

    }, {
      "date": "2006-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 117047,

    }, {
      "date": "2006-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 114032,

    }, {
      "date": "2007-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 111075,

    }, {
      "date": "2007-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 125657,

    }, {
      "date": "2007-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 124222,

    }, {
      "date": "2007-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 123139,

    }, {
      "date": "2007-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 117497,

    }, {
      "date": "2007-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 109320,

    }, {
      "date": "2007-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 107231,

    }, {
      "date": "2007-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103489,

    }, {
      "date": "2007-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 117003,

    }, {
      "date": "2007-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 110146,

    }, {
      "date": "2007-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 107735,

    }, {
      "date": "2007-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 105727,

    }, {
      "date": "2008-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 106120,

    }, {
      "date": "2008-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 113516,

    }, {
      "date": "2008-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 107309,

    }, {
      "date": "2008-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 112646,

    }, {
      "date": "2008-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 111985,

    }, {
      "date": "2008-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 109063,

    }, {
      "date": "2008-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 104857,

    }, {
      "date": "2008-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 98592,

    }, {
      "date": "2008-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 105202,

    }, {
      "date": "2008-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 92965,

    }, {
      "date": "2008-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 98255,

    }, {
      "date": "2008-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 92232,

    }, {
      "date": "2009-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 84352,

    }, {
      "date": "2009-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 105202,

    }, {
      "date": "2009-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 101177,

    }, {
      "date": "2009-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103958,

    }, {
      "date": "2009-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 109665,

    }, {
      "date": "2009-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 111575,

    }, {
      "date": "2009-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 107362,

    }, {
      "date": "2009-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103867,

    }, {
      "date": "2009-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 135913,

    }, {
      "date": "2009-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 129021,

    }, {
      "date": "2009-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 142259,

    }, {
      "date": "2009-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 128882,

    }, {
      "date": "2010-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 128771,

    }, {
      "date": "2010-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 156659,

    }, {
      "date": "2010-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 147200,

    }, {
      "date": "2010-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 151455,

    }, {
      "date": "2010-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 165704,

    }, {
      "date": "2010-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 176118,

    }, {
      "date": "2010-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 166986,

    }, {
      "date": "2010-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 140107,

    }, {
      "date": "2010-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 152107,

    }, {
      "date": "2010-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 138503,

    }, {
      "date": "2010-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 149627,

    }, {
      "date": "2010-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 133620,

    }, {
      "date": "2011-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 124593,

    }, {
      "date": "2011-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 154272,

    }, {
      "date": "2011-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 147370,

    }, {
      "date": "2011-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 157407,

    }, {
      "date": "2011-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 172751,

    }, {
      "date": "2011-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 191413,

    }, {
      "date": "2011-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 176092,

    }, {
      "date": "2011-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 140421,

    }, {
      "date": "2011-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 143695,

    }, {
      "date": "2011-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 128127,

    }, {
      "date": "2011-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 156607,

    }, {
      "date": "2011-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 138519,

    }, {
      "date": "2012-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 121063,

    }, {
      "date": "2012-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 151396,

    }, {
      "date": "2012-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 143662,

    }, {
      "date": "2012-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 143433,

    }, {
      "date": "2012-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 160055,

    }, {
      "date": "2012-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 177887,

    }, {
      "date": "2012-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 161754,

    }, {
      "date": "2012-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 122063,

    }, {
      "date": "2012-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 126864,

    }, {
      "date": "2012-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 118738,

    }, {
      "date": "2012-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 131821,

    }, {
      "date": "2012-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 127860,

    }, {
      "date": "2013-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 116332,

    }, {
      "date": "2013-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 106319,

    }, {
      "date": "2013-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 101939,

    }, {
      "date": "2013-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 119773,

    }, {
      "date": "2013-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 131788,

    }, {
      "date": "2013-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 135826,

    }, {
      "date": "2013-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 132770,

    }, {
      "date": "2013-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 108331,

    }, {
      "date": "2013-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 115396,

    }, {
      "date": "2013-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 110591,

    }, {
      "date": "2013-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 132159,

    }, {
      "date": "2013-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 108836,

    }, {
      "date": "2014-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 102644,

    }, {
      "date": "2014-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 115357,

    }, {
      "date": "2014-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 125305,

    }, {
      "date": "2014-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 115937,

    }, {
      "date": "2014-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 128049,

    }, {
      "date": "2014-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 130575,

    }, {
      "date": "2014-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 127356,

    }, {
      "date": "2014-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 103515,

    }, {
      "date": "2014-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 114528,

    }, {
      "date": "2014-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 139916,

    }, {
      "date": "2014-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 154498,

    }, {
      "date": "2014-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 124520,

    }, {
      "date": "2015-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 126315,

    }, {
      "date": "2015-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 170270,

    }, {
      "date": "2015-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 166904,

    }, {
      "date": "2015-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 198891,

    }, {
      "date": "2015-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 208591,

    }, {
      "date": "2015-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 218026,

    }, {
      "date": "2015-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 211526,

    }, {
      "date": "2015-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 180477,

    }, {
      "date": "2015-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 197128,

    }, {
      "date": "2015-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 173734,

    }, {
      "date": "2015-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 180826,

    }, {
      "date": "2015-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 158131,

    }, {
      "date": "2016-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 146226,

    }, {
      "date": "2016-02-29T23:00:00.000Z",
      "direction": "Arrival",
      "count": 171341,

    }, {
      "date": "2016-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 164270,

    }, {
      "date": "2016-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 182052,

    }, {
      "date": "2016-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 202298,

    }, {
      "date": "2016-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 201518,

    }, {
      "date": "2016-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 197349,

    }, {
      "date": "2016-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 152444,

    }, {
      "date": "2016-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 157463,

    }, {
      "date": "2016-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 144849,

    }, {
      "date": "2016-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 146004,

    }, {
      "date": "2016-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 137309,

    }, {
      "date": "2017-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 127124,

    }, {
      "date": "2017-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 160869,

    }, {
      "date": "2017-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 156029,

    }, {
      "date": "2017-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 168348,

    }, {
      "date": "2017-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 180262,

    }, {
      "date": "2017-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 169545,

    }, {
      "date": "2017-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 162285,

    }, {
      "date": "2017-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 131841,

    }, {
      "date": "2017-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 143928,

    }, {
      "date": "2017-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 137451,

    }, {
      "date": "2017-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 117076,

    }, {
      "date": "2017-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 96228,

    }, {
      "date": "2018-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 91440,

    }, {
      "date": "2018-02-28T23:00:00.000Z",
      "direction": "Arrival",
      "count": 106857,

    }, {
      "date": "2018-03-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 150184,

    }, {
      "date": "2018-04-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 170420,

    }, {
      "date": "2018-05-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 183788,

    }, {
      "date": "2018-06-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 190387,

    }, {
      "date": "2018-07-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 177207,

    }, {
      "date": "2018-08-31T22:00:00.000Z",
      "direction": "Arrival",
      "count": 145864,

    }, {
      "date": "2018-09-30T22:00:00.000Z",
      "direction": "Arrival",
      "count": 156255,

    }, {
      "date": "2018-10-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 140835,

    }, {
      "date": "2018-11-30T23:00:00.000Z",
      "direction": "Arrival",
      "count": 141705,

    }, {
      "date": "2018-12-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 125553,

    }, {
      "date": "2019-01-31T23:00:00.000Z",
      "direction": "Arrival",
      "count": 111851,

    }, { "date": "2019-02-28T23:00:00.000Z", "direction": "Arrival", "count": 144933, }]
  }];
