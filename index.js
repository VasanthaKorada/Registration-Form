let userform = document.getElementById("user-form");
const retrieveUserEntries = () => {
    let entries = sessionStorage.getItem("userEntries");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
};

let userEntries = retrieveUserEntries();
const displayUserEntries = () => {
    const entries = retrieveUserEntries();
    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsAndCondtionsCell = `<td class='border px-4 py-2'>${entry.acceptTermsAndCondtions}</td>`;
        const row = `<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${acceptTermsAndCondtionsCell}</tr>`;
        return row;
    }).join("\n");

    const table = `<table class='table-auto w-full ${entries.length > 0 ? "border" : ""}'>
        <tr>
            <th class='${entries.length > 0 ? "border" : ""} px-4 py-2'>Name</th>
            <th class='${entries.length > 0 ? "border" : ""} px-4 py-2'>Email</th>
            <th class='${entries.length > 0 ? "border" : ""} px-4 py-2'>Password</th>
            <th class='${entries.length > 0 ? "border" : ""} px-4 py-2'>dob</th>
            <th class='${entries.length > 0 ? "border" : ""} px-4 py-2'>accepted terms?</th>
        </tr>${tableEntries}
        </table>`;
    let details = document.getElementById("user-entries");
    details.innerHTML = table;
};
const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptTermsAndCondtions = document.getElementById("acceptTerms").checked;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptTermsAndCondtions,
    };
    userEntries.push(entry);
    sessionStorage.setItem("userEntries", JSON.stringify(userEntries));
    displayUserEntries();
};

userform.addEventListener("submit", saveUserForm);
displayUserEntries();
