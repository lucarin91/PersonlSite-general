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
request: `GET`, `PUT`

this entry return a single json object, like:
```
{
  id: {type:id,required:true},
  name: {type:String,required:true},
  surname: {type:String,required:true},
  bio:  {
    eng: {type:String},
    ita: {type:String}
  },
  img:  {type:String}
}
```

###Education
route: `/education`
request: `GET`, `POST`

route: `/education/:id`
request: `PUT`, `DELETE`

this entry work with a json array like:
```
[
  {
    id: {type: ObjectId},
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

###ProjectsCat
route: `/projectscat`
request: `GET`, `POST`

route: `/projectscat/:id`
request: `PUT`, `DELETE`
use to add a new item in a project group, or modify and remove a project group

this entry work with a json array like:
```
[
  {
    id: {type: ObjectId},
    name: {
      eng: {type:String},
      ita: {type:String}
    }
  }
]
```

###Projects
route: `/projects`
request: `GET`, `POST`

route: `/projects/:id`
request: `PUT`, `DELETE`
use to add a new item in a project group, or modify and remove a project group

this entry work with a json array like:
```
[
  {
    id: {type: ObjectId},
    name: {type:String,required:true},
    info: {
      eng: {type:String},
      ita: {type:String}
    },
    link: {type:String},
    date: {
      begin: {type: Date},
      end: {type: Date}
    },
    category: { type: Schema.Types.ObjectId, ref: 'Projects' }
  }
]
```

###SkillsCat
route: `/skillscat`
request: `GET`, `POST`

route: `/skillscat/:id`
request: `PUT`, `DELETE`
use to add a new item in a project group, or modify and remove a project group

this entry work with a json array like:
```
[
  {
    id: {type: ObjectId},
    name: {
      eng: {type:String},
      ita: {type:String}
    }
  }
]
```

###Skills
route: `/skills`
request: `GET`, `POST`

route: `/skills/:id`
request: `POST`, `PUT`, `DELETE`
use to add a new item in a skill group, or modify and remove a skill group

this entry work with a json array like:

```
[
  {
    id: {type: ObjectId},
    name: {
      eng: {type:String},
      ita: {type:String}
    },
    point: {type:Number, required:true},
    category: { type: Schema.Types.ObjectId, ref: 'Skills' }
  }
]
```
