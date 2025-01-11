
let cardConteiner =document.getElementById('cardContainer');
let appbrands = 'https://realauto.limsa.uz/api/brands'
function getelement() {
    cardConteiner.innerHTML += `
            <div role="status" class="absolute top-[150px] left-[590px] " id="loading">
                <svg aria-hidden="true" class="w-[150px] h-[150px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
    `
    fetch(`${appbrands}`).
    then((response) => response.json())
    .then((res) => {
        // console.log(res);
        cardConteiner.innerHTML = ''
        res?.data?.forEach(data => {
            let card = document.createElement('div');
            let button = document.createElement('button');
            let editbutton = document.createElement('button');
            button.className = 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:shadow-gray-700 hover:shadow-[0px_6px_12px_6px] hover:scale-[101%] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-3'
            button.textContent = 'delet'
            button.onclick = () =>{daletebrands(data?.id)}
            editbutton.className = 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:shadow-gray-700 hover:shadow-[0px_6px_12px_6px] hover:scale-[101%] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-3'
            editbutton.textContent = 'edit'
            editbutton.onclick = () =>{showvalue(data)}

            card.className = 'bg-gray-400 rounded-[10px] h-[320px] shadow-gray-300 shadow-[0px_6px_12px_6px] hover:shadow-gray-600 hover:shadow-[0px_6px_12px_6px] hover:scale-[101%] hover:transition-all'
            card.innerHTML = `
                <img src="https://realauto.limsa.uz/api/uploads/images/${data?.image_src}" alt="" class="rounded-t-[10px] w-full h-[230px]">
                <p class="text-xl text pt-3 text-center text-gray-200">${data?.title}</p>
            `
            cardConteiner.appendChild(card);
            card.appendChild(button);
            card.appendChild(editbutton);            
        });
        
    }).catch((err) => {
        console.log("xatolik");
        
    })

}
getelement()

// malumot qo'shish\\\\\\\\
let form = document.getElementById('form');
let formtext = document.getElementById('formtext');
// let formfile = document.getElementById('formfile');
// let modalbtn = document.getElementById('modalbtn');
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzFmY2NmNjUtZTIzOC00N2NmLWE3MWItYTUyNmJhZDcyYmEzIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTczNjI0MzY1MCwiZXhwIjoxNzY3Nzc5NjUwfQ.NrnqBfOI9yHXtBHDB7hTvucLjshs8UrJdDFkuip8-Pw";

// modalbtn.addEventListener('click' , function(e){
//     e.preventDefault();
//     let formData = new FormData();
//     formData.append('title' , formtext.value);
//     formData.append('images' , formfile.files[0]);
//     fetch("https://realauto.limsa.uz/api/brands" , {
//         method: 'POST',
//         headers:{
//             'Authorization':`Bearer ${token}`
//         },
//         body: formData
//     }).then(res=>{
//         // console.log("success");
//         form.reset();
//         getelement()
//         Swal.fire({
//             title: "Good job!",
//             text: "You clicked the button!",
//             icon: "success"
//           });
//     }).catch(err=>{
//         // console.log('error')
//         Swal.fire({
//             title: "Good job!",
//             text: "You clicked the button!",
//             icon: "error"
//           });
//     })
// });


function daletebrands(id) {
    fetch(`${appbrands}/${id}`,{
        method: 'DELETE',
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }).then(res =>{
        cardConteiner.innerHTML = ''
        getelement()
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }).catch(err=>{
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "error"
      });
})
}

var brandid = ""

function showvalue (data){
    brandid = data?.id
    formtext.value = data?.title
}

function editbrends (id){
    let formData = new FormData();
    formData.append('title', formtext.value)
    if(formfile.files[0]){
        formData.append('images' , formfile.files[0])
    }
    fetch(`${appbrands}/${brandid}`,{
        method: 'PUT',
        headers:{
            'Authorization':`Bearer ${token}`
        },
        body: formData
    }).then(res=>{
        if(res.ok){
            form.reset();
            cardConteiner.innerHTML = ''
            getelement()
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }  
    }).catch(err=>{
        // console.log('error')
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "error"
          });
    })
}
editbrends()