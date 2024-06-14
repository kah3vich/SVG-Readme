<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/kah3vich/SVG-Readme/main/assets/logo.png" alt="logo" width="256">
  <br />
  <br />
  <img src="https://svg-readme.vercel.app/readme/svg?type=title&content=SVG%20Readme%20%28backend%29" alt="title" width="100%" height="50">
  <br />
  <br />
</div>

<div align="center">
    <img src="https://svg-readme.vercel.app/readme/svg?type=subtitle&content=Backend%20for%20receiving%20svg%20inscriptions%20and%20cards." alt="subtitle" width="100%" height="100">
</div>

<img src="https://svg-readme.vercel.app/readme/svg?type=custom&content=Docs&align=left&size=28" alt="subtitle" width="100%" height="33">

### API

```
https://svg-readme.vercel.app/
```

### Readme:

#### GET - svg

```bash
GET /readme/svg?

type: 'title', 'subtitle', 'description', 'span', 'custom'
content: string
color: string  -> ('custom')
size: string -> ('custom')
weight: string -> ('custom')
align: 'left', 'center', 'right' -> ('custom')
```

#### POST - convert

```bash
POST /readme/convert

{
  "data": "SVG Readme (backend)"
}
```
