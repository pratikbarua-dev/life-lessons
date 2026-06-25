const fs = require('fs');

const serverComponentFiles = [
  'src/app/(dashboard)/admin/dashboard/page.jsx',
  'src/app/(dashboard)/admin/queue/page.jsx',
  'src/app/(dashboard)/drafts/page.jsx',
  'src/app/(dashboard)/my-lessons/page.jsx',
  'src/app/(dashboard)/performance/page.jsx',
  'src/app/(dashboard)/saved-lessons/page.jsx',
  'src/app/(main)/home/page.jsx',
  'src/app/(main)/lessons/page.jsx'
];

serverComponentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/fetch\((['"])\/api\/backend\/(.*?)(['"])/g, "fetch(`${process.env.SERVER_URL || 'http://localhost:3100'}/api/$2`");
    content = content.replace(/fetch\(\`\/api\/backend\/(.*?)\`/g, "fetch(`${process.env.SERVER_URL || 'http://localhost:3100'}/api/$1`");

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed Server Component:', file);
    }
  }
});
