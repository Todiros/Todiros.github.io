/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all URLs defined and not empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all Names defined and not empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });
        
    });

    /* Test suite named "The menu" */
    describe('The menu', () => {
        const bodyClass = $('body').attr('class');
        const menuToggle = document.querySelector('.menu-icon-link');
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('menu hidden', () => {
            expect(bodyClass).toBe('menu-hidden');
        });

        /* Test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
       it('menu toggles on click', () => {
            menuToggle.click();
            expect(document.body.className).not.toBe('menu-hidden');
            menuToggle.click();
            expect(document.body.className).toBe('menu-hidden');
       });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });

        it('loadFeeds has loaded a feed', (done) => {
            const feedContainer = document.querySelector('.feed');

            expect(feedContainer.hasChildNodes()).toBe(true);
            expect(feedContainer.firstElementChild.className).toBe('entry-link');

            done();
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        let currentFeed, newFeed;

        beforeEach((done) => {
            loadFeed(0, () => {
                currentFeed = document.querySelector('.feed').innerHTML;
                done();
            });
        });

        beforeEach((done) => {
            loadFeed(1, () => {
                newFeed = document.querySelector('.feed').innerHTML;
                done();
            });
        });

        it('content changes when new feed is loaded', (done) => {
            expect(currentFeed).not.toBe(newFeed);
            done();
        });
    });
}());
