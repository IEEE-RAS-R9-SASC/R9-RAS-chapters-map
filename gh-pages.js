var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/IEEE-RAS-R9-SASC/R9-RAS-chapters-map', // Update to point to your repository  
        user: {
            name: 'ieeerasr9sac', // update to use your name
            email: 'ieeerasr9sac@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)