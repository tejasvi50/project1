document.getElementById("popup").addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector('.popup').style.display='block';
    });
    document.getElementById('close-btn').addEventListener('click',function(){
    document.querySelector('.popup').style.display='none';
    });
    //save and close button 
    function openForm() {
    document.getElementById("student-form").style.display = "block";
    }
    function closeForm() {
    document.getElementById("student-form").style.display = "none";
    }
    // table and form
    var selectedRow = null
    function onFormSubmit() {
    if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
    }
    }
    //To retrive the data
    function readFormData() {
    var formData = {};
    formData["sno"] = document.getElementById("sno").value;
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
    }
    //To insert the data
    function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sno;    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;   
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `
    <a class="edit" onClick="onEdit(this)">Edit
    </a>
    <a class="edit1" onClick="onDelete(this)">Delete
    </a>`;
    }
    //To reset the data
    function resetForm() {
    document.getElementById("sno").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
    }
    //To edit 
    function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sno").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
    }
    function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sno;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.contact;
    }
    //To delete the data
    function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
    resetForm();
    }
    }
    //validation
       function validate() {
           debugger;
        isValid = true;
        //name validation
        if (document.getElementById("name").value == "") {
            isValid = false;
            document.getElementById("nameValidationError").classList.remove("hide");
            document.getElementById("name").style.border='1px solid red'
            } else {
            isValid = true;
            if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
            document.getElementById("name").style.border='1px solid green';
            }
            //email validation
            if (document.getElementById("email").value == "") {
                isValid = false;
                document.getElementById("emailValidationError").classList.remove("hide");
                document.getElementById("email").style.border='1px solid red';
                } else {
                isValid = true;
                if (!document.getElementById("emailValidationError").classList.contains("hide"))
                document.getElementById("emailValidationError").classList.add("hide");
                document.getElementById("email").style.border='1px solid green'
                }
//contact validation
if (document.getElementById("contact").value == "") {
        isValid = false;
        document.getElementById("contactValidationError").classList.remove("hide");
        document.getElementById("contact").style.border='1px solid red'
        } else {
        isValid = true;
        if (!document.getElementById("contactValidationError").classList.contains("hide"))
        document.getElementById("contactValidationError").classList.add("hide");
        document.getElementById("contact").style.border='1px solid green';
        }
        return isValid;
        }
        
        