const cacheName = 'HarmoFit'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            cache.addAll([
                './',
                './agradecimentos.html',
                './arrow-left.png',
                './avaliacao.html',
                './costas.html',
                './dislike-img.png',
                './esqueleto.png',
                './exerciciocostas.mp4',
                './exercicioombro.mp4',
                './exerciciojoelho.mp4',
                './feedback.html',
                './harmo.html',
                './icone-time.svg',
                './index.js',
                './joelho.html',
                './like-img.png',
                './logo.mp4',
                './logo2.mp4',
                './logoicon.png',
                './logo2.webp',
                './manifest.webmanifest',
                './ombro.html',
                './problema.html',
                './style.css',
            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e => {
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.login === location.origin){
        e.respondeWith(cacheFirst(req))
    } else {
        e.respondeWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName)
    try{
        const refresh = await fetch(req)
        await cache.put(req, refresh.clone())
        return refresh
    } catch(e){
        const cached = await macth(req)
        return cached;
    }
}