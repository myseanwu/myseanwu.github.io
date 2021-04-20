// photos
const images = [{
    url: 'images/project/coursera/algo_graph.png',
    alt: 'algorithm on graph course'
    
    },{
    url: 'images/project/coursera/algo_toolbox.png',
    alt: 'algorithm toolbox course'},
    {
        url:'images/project/coursera/data_structure.png',
        alt:'data structure course'
    },{
        url:'images/project/coursera/deep_learning.png',
        alt: 'deep learning course'
    },{
        url:'images/project/coursera/gans.png',
        alt: 'generative adversarial networks course'
    },{
        url:'images/project/coursera/google_bigdata.png',
        alt:'google big data course'
    }
    ];
// photos
let highlighted;
let advanceTimeout;
let HL = 0;
function carousel(idx){
    const prev = document.getElementById('thumbnails').childNodes[HL];
    const current = document.getElementById('thumbnails').childNodes[idx]
    const image_url = current.src;
    const image_alt = current.alt;
    console.log(image_alt)
    const large = document.getElementById("featured");

    large.setAttribute('src',image_url);
    large.setAttribute('alt',image_alt);
    prev.removeAttribute('class');
    current.setAttribute('class',"highlighted");
    HL = idx;

    clearTimeout(advanceTimeout);

    advanceTimeout = setTimeout(() => {
        carousel((idx+1)%images.length);
    }, 3000);
};

for (let k=0;k<images.length;k++){
    let current = images[k];
    const div_thumb = document.getElementById("thumbnails");
    const small_img = document.createElement("img");
    div_thumb.append(small_img);
    const image_url = current.url;
    const image_alt = current.alt;
    
    small_img.setAttribute('src',image_url);
    small_img.setAttribute('alt',image_alt);


    small_img.addEventListener('click',()=>{
        carousel(k);
        highlighted = small_img;
    })
  };

  carousel(HL);


