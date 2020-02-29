# e2e
End-to-end testing suite for Share911 service. Relies on Share911/test-scripts repo. 

## Installing Submodule

- Clone repo
- Do ```git submodule init```
- Do ```git submodule update```
 
Use your own submodule repo doing:

git submodule add (YOUR_REPO_URL) gherkin-features
git add --all
git commit -m "Change repo url"

# Install npm (node_modules) within the Parent Folder
- npm install npm

![Parent Folder](https://i.ibb.co/Lp6zDXt/Screenshot-from-2020-02-26-11-43-14.png)

# Sync Gherkin-Features (e2eTest folder) with the tests inside the Cypress Folder. (Optional)
- npm run test:pull-features  
This will delete any Gherkin Feature files within the cypress/integration folder.  
This will not delete the cypress javascript file located within the cypress/integration/test.  
This will make sure only the tests within the Gherkin-Features will show up during the test run.  

# Run Tests Through any of These Modes.
-npm run cypress:open:prod  
-npm run cypress:open:local  
-npm run test:prod  
-npm run test:local  

