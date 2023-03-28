# Prototype


* *Date Created*: 18.11.2022
* *Last Modification Date*: 07.12.2022
* *Git URL*: https://git.cs.dal.ca/ngulati/technologyinnovation
* *Deployment URL (Front-end Prototype)*: https://investnow-frontend.herokuapp.com/
* *Deployed Backend URL (Heroku)*: https://investnow-backend.herokuapp.com/


## Authors

* [Kavya Kasaraneni] -- Front-end Developer
* [Parampal Singh] -- Business Research and Backend Developer
* [Fenil Minalkumar Parmar] -- Full Stack Developer
* [Jenish Girish Patel] -- Integration and Deployment
* [Neelansh Gulati] -- Scrum Master and Developer
* [Aitzaz Qadir Khowaja] -- Designing and Documentation

### Prerequisites

* Node
* Git
* React
* VSCode
* Heroku
* Express
* Mongo DB

### Installing


* Login to the gitlab and clone the repository with https link

* Now open the git bash terminal in your local system and clone the repository using the below command.

```
$ git clone https://git.cs.dal.ca/ngulati/technologyinnovation.git

```

* The required repository is cloned into the system.

* Now open the repository in IDE such as Visual Studio Code.

* Give the following command to enter the repository for Front-end project.

```
$ cd .\frontend\

```
* For installing the node modules and required dependencies use the below command. (Some of the dependencies not satisfied with current version of node / react, so because of that use '--force').
```
$ npm install --force

```

* For starting and running the project use the below command.

```
$ npm run start

```
* Give the following command to enter the repository for Backend project.

```
$ cd .\backend\

```
* For installing the node modules and required dependencies use the below command.
```
$ npm install

```

* For starting and running the project use the below command.

```
$ node index.js

```

You can see the app running in development mode and when you open http://localhost:3000 you can view the front-end in the browser.

# Deployment

The developed application is deployed on Heroku using the steps below:

* Download and install the Heroku CLI from <https://devcenter.heroku.com/articles/heroku-command-line>.

* Log in into the Heroku account and enter the below command to create new public SSH key

```
$ heroku login

```

* We have connected Heroku repository to Gitlab repository. The pipeline is handling the deployment of heroku whenever there is new commit in Main branch.

* Deployed the application

* We can also Use the below commands to commit the code into git and push into heroku from git

```
$ heroku create -a investnow-frontend
$ heroku git:remote -a investnow-frontend
$ git remote rename heroku heroku-staging
$ git push heroku main

```

## Built With

* [ReactJS](https://reactjs.org/) - The JavaScript library used for building the front-end
* [npm](https://www.npmjs.com/) - Package Management used
* [Gitlab](https://git.cs.dal.ca/) - Used for versioning
* [Heroku](https://heroku.com/) - Used for deployement
* [React-Mui](https://mui.com/) - Front-end UI
* [VS Code](https://code.visualstudio.com/) - Code editing

**
**

## Sources Used

* https://www.jotform.com/myforms/
* https://enlear.academy/create-responsive-iframe-embed-in-a-react-way-f52075bf3b04
* https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/PostFeed.js
* https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/Posts.js
* https://angel.co/startups/location/nova-scotia
* https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/server.js
* https://mui.com/material-ui/getting-started/templates/ , https://github.com/mui/material-ui/blob/v5.10.16/docs/data/material/getting-started/templates/sign-in/SignIn.js  
* https://daily.dev/blog/the-4-creational-design-patterns-in-node-js-you-should-know  
* https://www.npmjs.com/package/react-stripe-checkout , https://www.npmjs.com/package/react-paypal-button-v2, https://bobbyhadz.com/blog/react-center-div#:~:text=js%2C%20set%20its%20display%20property,be%20horizontally%20and%20vertically%20centered  
* https://git.cs.dal.ca/golani/csci-5709-group8-backend/-/blob/main/controller/productController.js 
* https://www.nngroup.com/articles/usability-101-introduction-to-usability/ 
* https://www.jotform.com/myforms/  
* https://enlear.academy/create-responsive-iframe-embed-in-a-react-way-f52075bf3b04 
* https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/PostFeed.js 
* https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/Posts.js 
* https://angel.co/startups/location/nova-scotia 
* https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/server.js 
* https://git.cs.dal.ca/shah3/group22_tutorly/-/blob/main/backend/src/api/notification/controllers/notification.js 
* https://git.cs.dal.ca/shah3/group22_tutorly/-/blob/main/frontend/src/components/AddNotification.js 
* https://git.cs.dal.ca/shah3/group22_tutorly/-/blob/main/frontend/src/components/notificationDialog.js 
* https://investmentu.com/wp-content/uploads/2020/04/shutterstock_252152341.jpg
* https://github.com/app-generator/sample-react-mui-introduction/tree/main/src/components
* https://www.bdc.ca/en/articles-tools/entrepreneur-toolkit/templates-business-guides/glossary/business-incubators#:~:text=A%20business%20incubator%20is%20a,move%20beyond%20their%20embryonic%20phase.
* https://www.fidelitycharitable.org/guidance/philanthropy/impact-investing.html
* https://github.com/app-generator/sample-react-mui-introduction/tree/main/src/components
* https://github.com/app-generator/sample-react-mui-introduction/blob/main/src/components
* https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg
* https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg
* https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg
* https://mui.com/material-ui/react-stepper/#text-with-carousel-effect
* https://inc42.com/cdn-cgi/image/width=797,height=657,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/10/startup-investments-feature.png
* https://img.freepik.com/free-vector/capital-fund-financing-small-firm-with-high-growth-potential-venture-capital-venture-investment-venture-financing-business-angel-concept_335657-2154.jpg?w=797
* https://git.cs.dal.ca/kharwar/csci5709-group11-dal-media
* https://img.freepik.com/premium-vector/venture-capital-flat-modern-design-illustration_566886-823.jpg?w=797
* https://incubatorlist.com/top-startup-accelerators-incubators-and-vcs-in-canada/
* https://www.crunchbase.com/organization/knowledghub/
* https://mui.com/material-ui/getting-started/templates/blog/
* https://content.fortune.com/wp-content/uploads/2015/10/gettyimages-4725288622.jpg 
* https://img.freepik.com/free-vector/investment-crowdfunding-concept_74855-7563.jpg
* https://s3.amazonaws.com/technori-bucket/wordpress/wp-content/uploads/2013/06/30020826/private-equity-vs-venture-capital-2.jpg
* https://venturexfranchise.com/blog/five-key-things-to-consider-when-investing-in-a-startup-incubator/
* https://mui.com/material-ui/react-stack/





