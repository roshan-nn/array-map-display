const display = [
  {
    "albumId": 1,
    "id": 1,
    "title": "apple",
    "url": "https://picsum.photos/600/400?random=1",
    "thumbnailUrl": "https://picsum.photos/150/150?random=1"   
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "orange",
    "url": "https://picsum.photos/600/400?random=2",
    "thumbnailUrl": "https://picsum.photos/150/150?random=2"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "mango",
    "url": "https://picsum.photos/600/400?random=3",
    "thumbnailUrl": "https://picsum.photos/150/150?random=3"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "grapes",
    "url": "https://picsum.photos/600/400?random=4",
    "thumbnailUrl": "https://picsum.photos/150/150?random=4"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "guava",
    "url": "https://picsum.photos/600/400?random=5",
    "thumbnailUrl": "https://picsum.photos/150/150?random=5"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://picsum.photos/600/400?random=6",
    "thumbnailUrl": "https://picsum.photos/150/150?random=6"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://picsum.photos/600/400?random=7",
    "thumbnailUrl": "https://picsum.photos/150/150?random=7"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://picsum.photos/600/400?random=8",
    "thumbnailUrl": "https://picsum.photos/150/150?random=8"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://picsum.photos/600/400?random=9",
    "thumbnailUrl": "httpsum.photos/150/150?random=9"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://picsum.photos/600/400?random=10",
    "thumbnailUrl": "https://picsum.photos/150/150?random=10"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://picsum.photos/600/400?random=11",
    "thumbnailUrl": "https://picsum.photos/150/150?random=11"
  },
  {
    "albumId": 1,
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://picsum.photos/600/400?random=12",
    "thumbnailUrl": "https://picsum.photos/150/150?random=12"
  },
  {
    "albumId": 1,
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "url": "https://picsum.photos/600/400?random=13",
    "thumbnailUrl": "https://picsum.photos/150/150?random=13"
  },
  {
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://picsum.photos/600/400?random=14",
    "thumbnailUrl": "https://picsum.photos/150/150?random=14"
  },
  {
    "albumId": 1,
    "id": 15,
    "title": "harum dicta similique quis dolore earum ex qui",
    "url": "https://picsum.photos/600/400?random=15",
    "thumbnailUrl": "https://picsum.photos/150/150?random=15"
  }
];

   

  const value= document.getElementById("list").innerHTML=display.map(roshan=>{           
    return `
    <div class=cardcontainer key={roshan.id}>       
    <h1>${roshan?.title} </h1>         
    <img src=${roshan?.url}/>                                            
    <p>${roshan.albumId}</p>                                        
    </div>`} ).join("");  
    
    const values = document.getElementById("search"); 
    const inputelement = values.addEventListener('input', function(e){
    const result = e.target.value.toLowerCase(); 
    const names = display.filter(item=>{
      return item.title.includes(result);  
    })
    
    names.length!=0?  
    document.getElementById("list").innerHTML= names.map(roshan => {
      return `
     
      <div class=cardcontainer key={roshan.id}>       
    <h1>${roshan?.title} </h1>         
    <img src=${roshan?.url}/>                                            
    <p>${roshan.albumId}</p>                                        
    </div>`} ).join(""): alert(result+ "not getting");    
    console.log(names);

    })

  



    


    
    // const data= document.getElementById("list").innerHTML= items.filter(title);

    // function title(item){
    //   return item;
    // }

    // console.log(item);
    // console.log(title);




                                            
  

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
//    let a = [
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
//   {
//     "albumId": 1,
//     "id": 2,
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796"
//   },
//   {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//   },
//   {
//     "albumId": 1,
//     "id": 4,
//     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     "url": "https://via.placeholder.com/600/d32776",
//     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//   },
//   {
//     "albumId": 1,
//     "id": 5,
//     "title": "natus nisi omnis corporis facere molestiae rerum in",
//     "url": "https://via.placeholder.com/600/f66b97",
//     "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//   },
//   {
//     "albumId": 1,
//     "id": 6,
//     "title": "accusamus ea aliquid et amet sequi nemo",
//     "url": "https://via.placeholder.com/600/56a8c2",
//     "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//   },
//   {
//     "albumId": 1,
//     "id": 7,
//     "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//     "url": "https://via.placeholder.com/600/b0f7cc",
//     "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
//   },
//   {
//     "albumId": 1,
//     "id": 8,
//     "title": "aut porro officiis laborum odit ea laudantium corporis",
//     "url": "https://via.placeholder.com/600/54176f",
//     "thumbnailUrl": "https://via.placeholder.com/150/54176f"
//   },
//   {
//     "albumId": 1,
//     "id": 9,
//     "title": "qui eius qui autem sed",
//     "url": "https://via.placeholder.com/600/51aa97",
//     "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
//   },
//   {
//     "albumId": 1,
//     "id": 10,
//     "title": "beatae et provident et ut vel",
//     "url": "https://via.placeholder.com/600/810b14",
//     "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//   },
//   {
//     "albumId": 1,
//     "id": 11,
//     "title": "nihil at amet non hic quia qui",
//     "url": "https://via.placeholder.com/600/1ee8a4",
//     "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
//   },
//   {
//     "albumId": 1,
//     "id": 12,
//     "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
//     "url": "https://via.placeholder.com/600/66b7d2",
//     "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
//   },
//   {
//     "albumId": 1,
//     "id": 13,
//     "title": "repudiandae iusto deleniti rerum",
//     "url": "https://via.placeholder.com/600/197d29",
//     "thumbnailUrl": "https://via.placeholder.com/150/197d29"
//   },
//   {
//     "albumId": 1,
//     "id": 14,
//     "title": "est necessitatibus architecto ut laborum",
//     "url": "https://via.placeholder.com/600/61a65",
//     "thumbnailUrl": "https://via.placeholder.com/150/61a65"
//   },
//   {
//     "albumId": 1,
//     "id": 15,
//     "title": "harum dicta similique quis dolore earum ex qui",
//     "url": "https://via.placeholder.com/600/f9cee5",
//     "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
//   }
// ];

// let names = a.map(item => item);
// console.log(names);                 
