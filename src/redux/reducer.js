const inState=[{
  edit: false,
  from_time: "12/05/2021 06:25:00 PM",
  id: 1,
  image: "",
  to_time: "12/05/2021 06:27:00 PM",
  video: "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
},
]
export function counterReducer(state = [...inState], action) {
    switch (action.type) {
      case 'DATA':
        state= [...action.data]
        let i = 0
        state.map((x  )=>{
          if(x.image===""){
            x.type="image"
          }else {
            x.type="video"
          }
          i+=1
          x.edit=false
          return x.id=i
        })
        console.log(state)
        return state;
      case 'Edit':
        state =[...state ]
        let a= state.indexOf(action.x)
        console.log(a)
        state[a]=action.y
        console.log(state)
        return state;
      case "ADDITEM":
        state=[...state]
        state.unshift(action.x)
        console.log(state)
        return state;
      case "delete":
        let aa=[...state]
        state=aa.filter(x=>{
          return   x != action.x
        })
        return state
      default:
        return state ;
    }
  }