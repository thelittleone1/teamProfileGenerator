// Template Literal for Intern
const internProfile = function(cardI) { `
<div class="card m-5 shadow" style="width: 300px">
    <div class="card-header text-white bg-primary">
        <h3>${cardI.askName}</h3>
            <p class="h4">
            <img src="/images/mug_icon.png">
                ${cardI.askInternRole}
            </p>
    </div>

    <!-- Manager Bottom Card -->
        <div class="card-body bg-light" >
            <ul class="list-group">
                <li class="list-group-item">
                    <span>ID: </span>
                    ${cardI.askIdNumber}
                </li>
                <li class="list-group-item">
                    <span>Email: <a>${cardI.askEmail}</a> </span>
                    // <a>janedoe@aol.com</a>
                </li>
                <li class="list-group-item">
                    <span>Office: </span>
                    ${cardI.askSchoolName}
                    </li>
            </ul>
        </div>
    </div>`
}

module.exports = internProfile;