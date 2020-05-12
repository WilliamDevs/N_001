import fs from 'fs';
import MsgReader from '@kenjiuno/msgreader';


let orders = [];
let keyword = "yourWord";
let msgFiles = [];
fs.readdir("./",(err,files)=>{
  if(err){
    console.log(err);
  } else{

  for(let i = 0;i<files.length;i++){
      if (files[i].includes(keyword)){


        let msgFileBuffer = fs.readFileSync(files[i]);
        let msg = new MsgReader(msgFileBuffer);
        let msgInfo = msg.getFileData();
        let msgInfoArray = msgInfo.body.split(" ")
        for ( let i =0;i< msgInfoArray.length;i++){
          if(msgInfoArray[i].includes("<https")){
            msgFiles.push(msgInfoArray[i-1].slice(1));
        //  console.log(msgInfoArray[i-1] + " " + i);
        }

      }
        // if(msgInfo.body.split(" ")[10])
      //  console.log(msgInfo.body.split(" ")[10]);
      }else{
        console.log("not an order");
      }
    }
    // let csvContent = "data:text/csv;charset=utf-8,"
    //     + msgFiles.map(function(e){ e.join(",").join("\n")});
    let csvContent = msgFiles.join(",\n");
    fs.writeFile('name.csv', csvContent, 'utf8', function(err) {
  if (err) {
    console.log('Some error occured - file either not saved or corrupted file saved.');
  } else {
    console.log('It\'s saved!');
  }
});

console.log(csvContent);
    //console.log(msgFiles.length);
  }

});

//console.log(  msgFiles.length);

let msgFileBuffer = fs.readFileSync("Choose your file name");
let msg = new MsgReader(msgFileBuffer);
let msgInfo = msg.getFileData();
// console.log(msgInfo.body.split(" "));
let msgInfoArray = msgInfo.body.split(" ")
for ( let i =0;i< msgInfoArray.length;i++){
  if(msgInfoArray[i].includes("<https")){
  // console.log(msgInfoArray[i] + " " + i);
}
}
