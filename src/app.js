const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = require('./page-template.js');

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

//console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = profileDataArr => {
    // This...
 //   for (let i = 0; i < profileDataArr.length; i += 1) {
  //    console.log(profileDataArr[i]);
 //   }
  
  //  console.log('================');
  
    // Is the same as this...
   // profileDataArr.forEach((profileItem) => {
      //console.log(profileItem)
  //  });
 // profileDataArr.forEach(profileItem => console.log(profileItem));
  //};
  //printProfileData(profileDataArgs);


  //const generatePage = () => 'Name: Jane, Github: janehub';
  //console.log(generatePage());
