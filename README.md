ODK-to-Github
=============

**WARNING:** This is not ready for production. This is not yet tested. Play with it, send any modifications as a pull request.

This small node.js app can publish submissions from [ODK Aggregate](http://opendatakit.org/use/aggregate/) to a [Github](http://github.com) repository. Submissions will be stored as raw JSON as received from ODK Aggregate, in a folder named as the Form ID.

To deploy to Heroku:

    git clone https://github.com/digidem/odk-to-github.git
    cd odk-to-github
    heroku login
    npm install
    heroku create
    git push heroku master
    
You will need to create a token/password for authentication between ODK Aggregate and ODK-to-Github. You can choose a long password or generate a random string:

    openssl rand -base64 32
    
Or [use another method](http://www.howtogeek.com/howto/30184/10-ways-to-generate-a-random-password-from-the-command-line/)

You will also need a to create a [Github Personal Access token](https://github.com/settings/tokens/new) from the account you want to use to update your repository. Add both these tokens to Heroku:

    heroku config:set ODK_TOKEN=THE_TOKEN_YOU_CREATED_ABOVE
    heroku config:set GITHUB_TOKEN=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
    
Create a repo in github to store the form entries, make sure the user that you created the access token for has commit rights to that repo. In ODK Aggregate admin add a publish server:

Publish to: Z-ALPHA JSON Server
Url to publish to: https://HEROKU_APP_ID.herokuapp.com/GITHUB_USER_NAME/REPO_NAME/BRANCH
(branch will probably be master)
Authentication token: THE_TOKEN_YOU_CREATED_ABOVE

That's it. When you submit a new form to ODK, it should appear in your Github repo. Note that Heroku free apps will go into [idle after 60 mins](https://devcenter.heroku.com/articles/dynos#dyno-sleeping) without inactivity. This might cause publishing from ODK to fail - I have not tested this yet.

