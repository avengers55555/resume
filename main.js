

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      } else{
          reject(new Error('error'));
        }
    })
  })


}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievement(data.achievement);



})
var child2=document.querySelector("#child2");
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="Career objective";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  child2.appendChild(hLine);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}

function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="Education Qualification";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td>S.NO</td> <td>degree</td> <td> institute</td> <td> pesantage</td> </tr>";
  //table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(var i=0;i<edu.length;i++){
tr1+="<tr><td>"+(i+1)+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";

  }
  table.innerHTML=tr+tr1;
}
  function skills(skill){
    var heading=document.createElement("h2");
    heading.textContent="Technical  Skills";
    child2.appendChild(heading);
    var hLine=document.createElement("hr");
    heading.appendChild(hLine);
    for (var i=0;i< skill.length;i++) {
      var title=document.createElement("h4");
      title.textContent=skill[i].title;
      child2.appendChild(title);
var list=document.createElement("ul");
child2.appendChild(list);

for(var j=0;j<skill[i].set.length;j++)
{
var listItem=document.createElement("li");
listItem.textContent=skill[i].set[j];
list.appendChild(listItem);
}

    }

}
function achievement(achievement){
  var heading=document.createElement("h2");
  heading.textContent="achievement";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var list=document.createElement("ul");
  child2.appendChild(list)
  var listItem="";
  for(var i=0;i<achievement.length;i++){
    //var listItem=document.createElement("li");
    //listItem.textContent=achievement[i].achievedData;
  //list.appendChild(listItem);
listItem+="<li>"+achievement[i].achievedData+"</li>";
  }
  list.innerHTML=listItem;

}
