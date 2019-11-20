const chai      = require('chai');
const assert    = require('chai').assert;
const expect    = require('chai').expect;
const fetch     = require('node-fetch');
const mocha     = require('mocha');
const describe  = mocha.describe;
const it        = mocha.it;
const jsdom     = require("jsdom");
const { JSDOM } = jsdom;
chai.use(require('chai-dom'));

const dom = new JSDOM(``, {
    url: "http://localhost:3000/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
    runScripts: "dangerously"
  });

describe('1) Check for succcessful fetech API call', () => {
  // beforeEach(async (done) => {
  //       await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
  //         .then((res) => {
  //             expect(res.status).to.be.eq(200);
  //             return res.json();
  //         })
  //      done();
  // });

  it('a) API is successfully returned with status code 200', async () => {
    await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
    .then((res) => {
      expect(res.status).to.be.eq(200);
      return res.json()
    })
  })

  it('b) Expect API response object to have a length of 9 objs', async () => {
    await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      expect(res).to.be.an('object');
      expect(res.hits).to.have.lengthOf(9);
    })
  })

  it('c) Expect API response to contain object key "largeImageURL"', async () => {
    await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      const imageURLs = res.hits.map(x => ({largeImageURL: x.largeImageURL}));
      expect(imageURLs).to.have.lengthOf(9);
    })
  })

  it('d) Expect API response to contain object key "likes"', async () => {
    await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      const imageTags = res.hits.map(x => ({largeImageURL: x.likes}));
      expect(imageTags).to.have.lengthOf(9);
    })
  })

  it('e) Expect API response to contain object key "user"', async () => {
    await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      const imageUser = res.hits.map(x => ({largeImageURL: x.user}));
      expect(imageUser).to.have.lengthOf(9);
    })
  })
})

describe('2) Key DOM elements exist', function() {
    // beforeEach(function(done){
    //     JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
    //         this.testDOM = dom.serialize();
    //         // return dom;
    //     });
    //     done();
    //   });

    it('a) Header element is present', function() {
      JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
            const header = dom.window.document.getElementById('header');
            expect(header).to.exist;
      });
    })
    it('b) Carousel container is present', function() {
        JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
            const carouselContainer = dom.window.document.getElementById('carousel-container');
            expect(carouselContainer).to.exist;
        });
    })
    it('c) Buttons section is present', function() {
        JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
            const buttonsContainer = dom.window.document.getElementsByClassName('buttons');
            expect(buttonsContainer).to.exist;
        });
    });
  });