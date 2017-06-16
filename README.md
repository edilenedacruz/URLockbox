# URLockbox

URLockbox is a small Rails application where an user can create an account and save url’s similar to having a favorites tab but in a secure account.


URLockbox works beautifully on its own but it also works seamlessly with the Rails app [Hot Reads](https://github.com/edilenedacruz/hot_reads). Hot Reads will display the most popular/accessed links from URLockbox users by making API calls.

### Production site

https://urlockbox-g.herokuapp.com/

### Set up

If you would like to use this application locally, please follow the instructions below:

1. Clone down the repo
```
https://github.com/edilenedacruz/m4-final-starter.git
```
2. Select folder
```
$ cd /m4-final-starter
```
3. Install required gems
```
$ bundle install
```
4. Create database
```
$ rake db:create
```
5. Migrate
```
$ rake db:migrate
```

6. As the master has the production links to the work with the Hot Reads app, please visit the following files and comment out the production url links ```https://hot-reads-g.herokuapp.com/api/v1/links``` and then uncomment the localhost links ```http://localhost:3001/api/v1/links```.

```
$ app/javascripts/links.js.es6
$ app/javascripts/sendToHotReads.js.es6
```

7. Start up local server
```
$ rails server
```

8. In your preferred browser visit
```
http://localhost:3000
```


### Don’t want to clone the repo? Visit the app in production at

https://urlockbox-g.herokuapp.com/


### Running tests

```
$ bundle exec rspec
```
