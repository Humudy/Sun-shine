echo "Pulling Github Changes ..."
git checkout master

echo "Removing Dependencies And Build Folder ..."
rm -rf /build /node_modules

echo "Installing Dependencies ..."
npm install

echo "Installing Dev Dependencies ..."
npm install -D

echo "Building Application ..."
npm run build

echo "Deploying Application to Stepups Server ..."
scp -r build/* root@146.190.117.151:/var/www/stepups.edubetter.co/html/

echo "STEPUPS FRONTEND IS UP AND RUNNING."

