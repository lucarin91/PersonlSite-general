#PersonalSite

##Back-end API
Principle Path: `/api/`
All the request have to be with `Content-Type: application\json`.

All the request are mapped as usual:
- GET to get a json
- POST to add a new json object on the database
- PUT to modify one or all the property
- DELETE to delete a joson object

###Me
route: `/me`
request: `GET`, `POST`, `PUT`, `DELETE`

this entry return a single json object, like:
```
{
  id: {type:id,required:true},
  name: {type:String,required:true},
  surname: {type:String,required:true},
  email: {type:String,required:true},
  telephone: {type:String},
  address: {type:String},
  bio:  {
    eng: {type:String},
    ita: {type:String}
  },
  img:  {type:String}
}
```

###Education
route: `/curriculum`
request: `GET`, `POST`

route: `/curriculum/:id`
request: `PUT`, `DELETE`

this entry work with a json array like:
```
[
  {
    school: {
      eng: {type:String},
      ita: {type:String}
    },
    degree: {
      eng: {type:String},
      ita: {type:String}
    },
    location: {type:String},
    date: {
      begin: {type: Date},
      end: {type: Date}
    },
    score: {
      eng: {type:Number},
      ita: {type:Number}
    }
  }
]
```

###Projects
route: `/projects`
request: `GET`, `POST`

route: `/projects/:id`
request: `POST`, `PUT`, `DELETE`
use to add a new item in a project group, or modify and remove a project group

route: `/projects/item/:id`
request: `PUT`, `DELETE`
use to modify or remove a item project

this entry work with a json array like:
```
[
  {
    _id: {type: ObjectId},
    name: {type:String, required:true},
    items: [{
              _id: {type: ObjectId},
              name: {type:String, required:true},
              info: {type:String},
              link: {type:String}
            }]
  }
]
```

###Skills
route: `/skills`
request: `GET`, `POST`

route: `/skills/:id`
request: `POST`, `PUT`, `DELETE`
use to add a new item in a skill group, or modify and remove a skill group

route: `/skills/item/:id`
request: `PUT`, `DELETE`
use to modify or remove a skill

this entry work with a json array like:
```
[
  {
    _id: {type: ObjectId},
    name: {type:String, required:true},
    items: [{
              _id: {type: ObjectId},
              name: {type:String, required:true},
              point: {number:String,required:true}
            }]
  }
]
```
