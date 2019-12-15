
# GIT User finder repositories

## Required create an OAuth App

https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/

after that Editing your clientID: '8a91cd834c4ea7e246cd' inside the github.service.js

## Deployed URL ( AWS Amplify )
This will be automation deploy if have any change on master branch on github

* https://master.d1o4vlm8phh8u.amplifyapp.com

## Install Library

```
1. npm install
2. npm start
3. if you wanna hosted by userseft, 
you can edit some information inside the github.service.js file
```

## Uses case

   * [x] Login by GitHub oAuth, after login, you wil be reditect to Search Page, and if you click Login again, it's means Logout and clear your current Token
   * [x] Display User Information
   * [x] CI/CD by AWS Amplify ( Auto deploy if have any change from master branch )
   * [x] Seach GitRepo by Username
   * [x] Responsive for Mobile
   * [x] Regex for input based on Github regex
   * [x] Loader when calling APIs 
   * [x] Apply GraphQL API v4, exchange the code from Github => token by seft-hosted from Heroku Cloud Service
   * [x] Route Guard ( required login for search )
   * [x] Fetch More features ( max show up 5 repositories for each fetch )
   * [x] Status of README.md file ( exist or not ). If not, you can not click to show up the readme file description popup.
   * [ ] Test Coverage
   
## Screenshoot

● Homepage 
-  Using your github account for getting the code and the token will be exchanged 
by my herokuapp for handshake with github.

![Alt text](https://i.ibb.co/BstWCdt/Screen-Shot-2019-12-15-at-14-26-31.png?raw=true "Title")

● Search Page 
- You can allow to input the username and press Enter, regex error message
will be show up if you try to enter the special characters.

![Alt text](https://i.ibb.co/WBhn9jp/Screen-Shot-2019-12-15-at-14-39-07.png?raw=true "Title")

- Fetch more feature ( if the results > 5 )

 ![Alt text](https://i.ibb.co/7n6K9fS/Screen-Shot-2019-12-15-at-14-39-26.png?raw=true "Title")

- Readme Reader Popup

![Alt text](https://i.ibb.co/J7ggyvw/Screen-Shot-2019-12-15-at-14-39-44.png?raw=true "Title")

- GitHub config ( you can change inside the github.service.js based on your own setting )

![Alt text](https://i.ibb.co/d0Y3xbq/Screen-Shot-2019-12-15-at-15-05-33.png?raw=true "Title")

- AWS Amplify Console 

![Alt text](https://i.ibb.co/r5rT1rq/Screen-Shot-2019-12-15-at-14-30-44.png?raw=true "Title")

## Ref
- https://aws.amazon.com/vi/getting-started/tutorials/deploy-react-app-cicd-amplify/
- https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
- https://developer.github.com/v4/
