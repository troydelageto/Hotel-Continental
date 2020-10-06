
self.oninstall=function(){
  caches.open('fayePIv1')
  .then(function(cache){
    cache.addAll([
      '/',
        'index.html',
        'about.html',
        'contact.html'

    ])
    .then(function(){
      console.log('cached');
    })
    .catch(function(err){
      console.log('err',err);
    })
  })
}

self.onactivate=function(){
  console.log('activate');
}

self.onfetch=function(event){
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if(response){
        return response;
      }else{
        return fetch(event.request);
      }
    })
  )
}