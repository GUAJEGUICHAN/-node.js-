const fs = require('fs');

const videoExtensions = ['mp4','mov'];
const capturedExtensions = ['png','aae'];

let video =[];
let captured=[];
let duplicated=[];

//폴더 만들기
fs.mkdir('./media/video',()=>{});
fs.mkdir('./media/captured',()=>{});
fs.mkdir('./media/duplicated',()=>{});

fs.readdir('./media',(error, filelist)=>{
    filelist.forEach(item=>{
        const name = item.split('.');
        if(videoExtensions.includes(name[1])){
            video.push(item);
        }else if(capturedExtensions.includes(name[1])){
            captured.push(item);
        }else if(name[0].includes('E')){
            duplicated.push(item.split('E').join(''));
        }
    })
    
    console.log(video);
    console.log(captured);
    console.log(duplicated);

    video.forEach(i=>{
        fs.rename('./media/'+i,'./media/video/'+i,(error)=>{console.error})
    }
        
    );
    captured.forEach(
        i=>{
            fs.rename('./media/'+i,'./media/captured/'+i,(error)=>{console.error})
        } 
    );
    duplicated.forEach(
        i=>{
            fs.rename('./media/'+i,'./media/duplicated/'+i,(error)=>{console.error})
        }
    );



})

