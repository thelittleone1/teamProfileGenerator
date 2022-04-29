// Template Literal for Intern
const internProfile = function(cardI) { return `
<div class="card m-5 shadow" style="width: 300px">
    <div class="card-header text-white bg-primary">
        <h3>${cardI.name}</h3>
            <p class="h4">
            <img src="/images/mug_icon.png">
                Intern
            </p>
    </div>

    <!-- Intern Bottom Card -->
        <div class="card-body bg-light" >
            <ul class="list-group">
                <li class="list-group-item">
                    <span>ID: </span>
                    ${cardI.idNumber}
                </li>
                <li class="list-group-item">
                    <span>Email: <a>${cardI.email}</a> </span>
                </li>
                <li class="list-group-item">
                    <span>School Name: </span>
                    ${cardI.schoolName}
                    </li>
            </ul>
        </div>
    </div>`
}

module.exports = internProfile;