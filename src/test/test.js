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
    it('a) Should return an object, with an array count of 9 elements', async () => {
        await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
            .then((res) => {
                // res.should.have.status(200);
                return res.json()
            })
            .then((res) => {
                // console.log(res.hits);
                expect(res).to.be.an('object');
                expect(res.hits).to.have.lengthOf(9);

                const imageURLs = res.hits.map(x => ({largeImageURL: x.largeImageURL}));
                expect(imageURLs).to.have.lengthOf(9);

                const imageTags = res.hits.map(x => ({largeImageURL: x.tags}));
                expect(imageTags).to.have.lengthOf(9);

                const imageUser = res.hits.map(x => ({largeImageURL: x.user}));
                expect(imageUser).to.have.lengthOf(9);


            })
    })
})

describe('2) Key DOM elements exist', function() {

    beforeEach(function(done){
        JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
            return dom;
        });
        done();
      });

    it('a) Header element is present', function() {
            console.log(dom);
            const header = dom.window.document.getElementById('header');
            expect(header).to.exist;
            // expect(header).attr('style').toEqual('background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(&quot;https://pixabay.com/get/55e3d3474d57b108f5d084609621317b133fd8e04e50744e762c7ad39e4dc5_1280.jpg&quot;); background-repeat: no-repeat;');
    })
    it('b) Carousel container is present', function() {
        JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
            const carouselContainer = dom.window.document.getElementById('carousel-container');
            expect(carouselContainer).to.exist;
        });
    })
    it('c) Buttons section is present', function() {
        JSDOM.fromURL('http://localhost:3000/', ).then(dom => {
            // console.log(dom.serialize())
            const buttonsContainer = dom.window.document.getElementsByClassName('buttons');
            expect(buttonsContainer).to.exist;
        });
    });
  });

  describe('Sample', function () {

    beforeEach(function () {
      this.currentTest.value = 'Winning!';
    });
  
    it('Uses current test data', function () {
      expect(this.test.value).to.equal('Winning!');
      this.test.value = 'Win Later';
    });
  
    afterEach(function () {
      expect(this.currentTest.value).to.equal('Win Later');
    });
  
  });