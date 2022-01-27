# TestCafe_TheInternet

This project is a simple POC / playground using TestCafe with TS.

## TestCafe Notes

Best Practices: https://testcafe.io/documentation/402836/guides/basic-guides/best-practices#smart-assertions

### Smart Assertions

- https://testcafe.io/documentation/402836/guides/basic-guides/best-practices#smart-assertions 
- https://testcafe.io/documentation/402837/guides/basic-guides/assert#smart-assertion-query-mechanism

Synopsis: Do not use `await` with certain calls such as getting text from a element for assertion. Not using `await` allows testCafe to use its "Smart  Assertions" feature and keep checking the element until a timeout is reached. If you do use `await`, you are getting a static value at that point and time.

### File Structure

``` txt
├── .testcaferc.json
└── tests
    ├── |- test_group1/
    │   └── |-test1.js
    │       |-test2.js
    ├── |- test_group2/
    │   └── |-test1.js
    │       |-test2.js
    ├── |- page_model/
    │   └── |- page1.js
    │       |- page2.js
    ├── |- helpers/
    │   └── |- helper1.js
    │       |- helper2.js
    ├── |- roles/
    │   └── |- roles.js
    └── |-data
```

### Roles

https://testcafe.io/documentation/402845/guides/advanced-guides/authentication 

A feature of TestCafe that is like a pre-built helper function to call when you need to login with a specific user (e.g. Admin, Invalid user, valid user, etc...)

### Setup & Teardown

Read more - Hooks: https://testcafe.io/documentation/403435/guides/advanced-guides/hooks 
Hooks are reusable code sequences that run before or after tests and fixtures.

#### After & AfterEach (aka Teardown)
```js
fixture `My fixture`
    .page `http://example.com`
    .afterEach( async t => {
        await cleanDir();
    });

test('My test', async t => {
    //test actions
});
```

#### Before / BeforeEach (aka Setup)
``` js
fixture `Another fixture`
    .page `http://example.com`
    .beforeEach( async t => {
        await setupFileSystem();
    });

test('Another test', async t => {
    //test actions
});
```


### Selector Plugins

If the AUT is built using a specific JS framework, try using one of the selector plugins:
- Angular https://github.com/DevExpress/testcafe-angular-selectors
- React https://github.com/DevExpress/testcafe-react-selectors
- Vue https://github.com/DevExpress/testcafe-vue-selectors