import pug from 'pug'
import { writeFileSync } from 'fs'
import { exec } from 'child_process'
import { exit } from 'process'

const html = pug.renderFile('blueprint.pug', {
  pages: [
    {
      name:'Home',
      url: ''
    },
     {
      name:'Blog',
      url: 'blog.html'
    },
    {
      name:'Contact',
      url: 'contact.html'
    },
    {
      name:'About',
      url: 'about.html'
    },
  ]
})

try {
  writeFileSync('dist/index.html', html)
} catch (err) {
  console.error(err)
  exit(1)
}

exec('sass style.scss dist/style.css', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      exit(1)
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`)
      exit(1)
    }

    if (stdout) {
      console.log(`stdout: ${stdout}`)
    }
});