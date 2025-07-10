<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
    <div class="flex flex-col items-center justify-start bg-gray-100">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center">Registration Form</h2>
            <form id="user-form" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input required type="text" id="name" name="username" placeholder="Enter full name" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                   <input required 
       type="email" 
       id="email" 
       name="email" 
       placeholder="Enter email" 
       class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input required type="password" id="password" name="password" placeholder="Enter password" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
                </div>
                <div>
                    <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input required type="date" min="1970-01-01" max="2007-12-31" id="dob" name="dob"  required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
                    
                </div>
                <div>
                    <input required type="checkbox" id="acceptTerms" name="terms" required class="mt-1 mr-2">
                    <label for="acceptTerms" class="text-sm font-medium text-gray-700">I accept the terms and conditions</label>
                </div>
                <button id="submit" type="submit" class="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">Submit</button>
            </form>
        </div>  
        </div>      
        
       
        <div class="relative bg-white px-6 mt-1 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10 max-w-4xl mx-auto">
            <div class="mx-auto">
                <h2 class="text-3xl text-center font-bold leading-tight">Entries</h2>
                <div class="divide-y divide-gray-300/50" id="user-entries">
            </div>
        </div>

 <script>
    const email = document.getElementById("email");
const form = document.getElementById("user-form");
email.addEventListener("input", () => validate(email));
const submit=document.getElementById('submit');
submit.addEventListener('click',()=>validate(email));
function validate(element){
    if (element.validity.typeMismatch) {
        element.setCustomValidity("Invalid email format.");
        element.reportValidity();
    } else {
        email.setCustomValidity("");
    }
}
dobInput.addEventListener("input", () => {
            const dob = new Date(dobInput.value);
            const today = new Date();
            const todayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
            const minAge = new Date(Date.UTC(todayUTC.getFullYear() - 55, todayUTC.getMonth(), todayUTC.getDate()));
            const maxAge = new Date(Date.UTC(todayUTC.getFullYear() - 18, todayUTC.getMonth(), todayUTC.getDate()));
            const dobFormatted = dob.toISOString().split("T")[0];
            const minDate = "1970-01-01";
            const maxDate = "2007-12-31";

            if (dobFormatted < minDate || dobFormatted > maxDate) {
                dobInput.setCustomValidity(`Date of birth must be between 18 and 55 years old (Valid range: ${minDate} to ${maxDate}).`);
                dobInput.reportValidity();
            } else {
                dobInput.setCustomValidity("");
            }
        });
form.addEventListener("submit", function(event) {
    validate(email);
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});
   
 </script>
 <script src="index.js"></script>
</body>
    
</html>
