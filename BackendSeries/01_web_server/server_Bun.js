// i am developing equvallant server of node using bun 

import {serve} from 'bun';


serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response('hellow this is / rout', {status: 200})
        }else if(url.pathname === '/sec'){
            return new Response('hellow this is /sec rout', {status: 200})
        }else{
            return new Response('404 not found', {status: 404})
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
})