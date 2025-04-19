function validateForm() 
{
    let x = document.forms["myForm"]["user"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["pwd"].value;

    if (x == ""|| y == ""|| z == "") 
    {
      alert("فیلدها را پر کنید!");
      return false;
    }
}