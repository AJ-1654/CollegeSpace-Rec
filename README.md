# CollegeSpace-Blog
Blog (Created Using Express Express-Session Express-File-Upload)

Deploy Process :

1.) Go to a convinient location in your PC and create a Folder and name it Blog

2.) Start terminal or open git bash in above created Folder

3.) Initialise the current folder as git repo. by typing following command in terminal
    
    git init

4.) Add origin from github repo. to current folder by typing following command in terminal

    git remote add origin https://github.com/porcelainruler/CollegeSpace-Blog

5.) Pull from github repo. by typing following command in terminal

    git pull origin master

6.) Install all required modules used in Blog by typing following command in terminal

    npm install

7.) Run the web app by typing following command in terminal

    npm start

    The app will run on http://localhost:4000

Running Features :

1.) In home all the post posted will be shown along with time at which it is posted along with user who has posted it . On clicking the post its content and image if posted will be shown.

2.) Only the logged in user can access Create post or New Post part. User login is implemented using express-session

3.) Once user is logged in he can post after which he will be redirected to Home page

4.) Register Part is supplied with form validation and if there is error it is shown in red text and already correct filled data is persisted in register form with connect-flash module.

5.) For proper text show and html content rendering of content of post Summer Note is added.