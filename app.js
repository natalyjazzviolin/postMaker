//Array of items
let items = [];

//Render items in the codeblock
function renderItem(item) {
    const list = document.querySelector('#itemList');

    //Create an 'li' element
    const node = document.createElement("li");

    //Set ID
    node.setAttribute('data-key', item.id);

    node.innerHTML = `${item.text}`;

    list.append(node);
}

//Create item component
function addItem(text) {
    const item = {
        text,
        id: Date.now(),
    };

    items.push(item);
    renderItem(item);
}

var object = {
    files: [],
    environment: {
        
    }
}

//Select the form element
const form = document.getElementById('itemForm');

form.addEventListener('submit', event => {
    //prevent page refresh on form submission
    event.preventDefault();

    //select text input
    var itemName = document.getElementById("itemName").value;

        //Capitalize item title
        function capitalize(str) {
            str = str.split(" ");
    
            for (var i=0, x = str.length; i < x; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
    
            return str.join(" ");
        }

    capitalize(itemName);

    var itemLink = document.getElementById("itemLink").value;
    var itemPrice = document.getElementById("itemPrice").value;
    var itemDescription = document.getElementById("itemDescription").value;
    var imageURL = document.getElementById("imageUrl").value;
    var image = document.getElementById("source");
    var photoPea = document.getElementById("photoPea");

    let titleBlock = `&lt;h3&gt; &lt;a href="${itemLink}"&gt;${itemName}&lt;/a&gt;, $${itemPrice}&lt;/h3&gt;<br><br>${itemDescription}`;
    let text = titleBlock;

    if (itemName !== '' && itemLink !== '' && itemDescription !== '' && itemPrice !== '') {
        addItem(text);
        
        image.src = imageURL;
        



        document.getElementById("itemName").value = '';
        document.getElementById("itemLink").value = '';
        document.getElementById("itemPrice").value = '';
        document.getElementById("itemDescription").value = '';
        document.getElementById("imageUrl").value = '';
        document.getElementById("itemName").focus();
    }
    
});


// object.files[0] = imageURL;
// let newURL = encodeURI(JSON.stringify(object))

// photoPea.src = `https://www.photopea.com#${newURL}`

// console.log(encodeURI(JSON.stringify(object)));



// function newItem() {
//     var li = document.createElement("li");
//     var itemName = document.getElementById("itemName").value;
//     var itemLink = document.getElementById("itemLink").value;
//     var itemPrice = document.getElementById("itemPrice").value;
//     let titleBlock = `&lt;h3&gt; &lt;a href="${itemLink}"&gt;${itemName}&lt;/a&gt;, $f${itemPrice}&lt;/h3&gt;`;
//     let t = document.createTextNode(titleBlock)

//     li.appendChild(t);

//     if (itemName === '' && itemLink === '' && itemPrice === '') {
//         console.log('Fill out all fields')
//     } else {
//         document.getElementById("itemList").appendChild(li);
//     }

    
//     document.getElementById("itemName").value = "";

// }