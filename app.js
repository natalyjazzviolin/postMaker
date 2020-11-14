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
    var image = document.getElementById("source");
    var photoPea = document.getElementById("photoPea");

    let titleBlock = `&lt;h3&gt; &lt;a href="${itemLink}" target="_blank" rel="noopener" &gt;<mark>${itemName}</mark>&lt;/a&gt;, $${itemPrice}&lt;/h3&gt;<br><br>${itemDescription}`;
    let text = titleBlock;

    if (itemName !== '' && itemLink !== '' && itemDescription !== '' && itemPrice !== '') {
        addItem(text);
        
    
        



        document.getElementById("itemName").value = '';
        document.getElementById("itemLink").value = '';
        document.getElementById("itemPrice").value = '';
        document.getElementById("itemDescription").value = '';
        document.getElementById("itemName").focus();
    }
    
});

var mybtn = document.getElementsByClassName("tablinks")[0];
mybtn.click();

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }