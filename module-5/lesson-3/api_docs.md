### API DOCS

<code>BaseULR=http://localhost:8080</code>

<small><code>/psosts</code></small>

- GET 

```
BaseULR+"/posts"
```

- POST 

```
BaseULR+"/posts"
method: "POST"
headers:{
    content-type: "application/json",
}
body:{
    title: string,
    body: string,
    id: string,
    created_at: string
}
```

- UPDATE 

```
BaseULR+"/posts/:id"
method: "PUT/PATCH"
headers:{
    content-type: "application/json",
}
body:{
    title: string,
    body: string,
    id: string,
    created_at: string
}
```

- DELETE 

```
BaseULR+"/posts/:id"
method:"DELETE",
headers:{
    content-type: "application/json",
    "Authorization": `Bearer+token`
}
```

