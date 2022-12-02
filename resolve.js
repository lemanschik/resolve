const baseUrl = new URL(import.meta.url);

// Handle all the import quircs of package.json and other family members of lock files. 
const handlePkg = (pkg) => {}


const resolve = (id, importee) => {
  // Do we need to use NodeResolve? if yes
  const Uri = new URL(id, new URL(importee, baseUrl.origin));
  let lastPath = '';
  const pathes = Uri.pathname.split('/')
    .map(x=>(lastPath += '/' + x || ''))
    // Check for existence.
    .map(x => ({}) && [
      x + '/package.json', 
      x + '/node_modules',
    ]);
    // most best would maybe be to abstract that into a filesystem.Search and or simply directly load it // Cases
    // example id === 'my' relative always to importee
    // ./my.js .cjs .mjs .json or what so ever
    // ./node_modules/my/ package.json index.js  
    // NOTE: maybe also add server if no index and no other alter nate server.js 
    // NOTE: maybe also add my.js my.cjs my.mjs what so ever to implement dir imports / like the steal loader does.
    
}
