const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
]
let card = document.querySelector('.card');

dataAraay.map((item) => {
    const {userId, userName, userLastName, userImage,userAge,userAddresses} = item;
    
    //create sub_container
    let sub_container = document.createElement('div');
    card.appendChild(sub_container);
    sub_container.className = 'sub_container';

    //create Id
    let id = document.createElement('p');
    sub_container.appendChild(id)
    id.textContent = userId;
    id.className = 'id';

    //create image
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    sub_container.appendChild(imageDiv)
    imageDiv.appendChild(image);
    image.src = userImage;
    imageDiv.className = 'imageDiv';

    //create name
    let name = document.createElement('h4');
    sub_container.appendChild(name)
    name.textContent = userName;
    name.className = 'name';
    
    //create surname
    let surName = document.createElement('h5');
    sub_container.appendChild(surName)
    surName.textContent = userLastName;
    surName.className = 'surName';

    //Create Age
    let age = document.createElement('p');
    sub_container.appendChild(age)
    age.textContent = userAge + ' : years old';
    age.className = 'age';

    //create Address
    let address = document.createElement('p');
    sub_container.appendChild(address);
    address.textContent = 'address : ' + [...userAddresses];
    address.className = 'address';
})


//click

let subContainer = document.querySelectorAll('.sub_container');
subContainer.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('active')
    })
});
