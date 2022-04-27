// Template Literal for Engineer
const engineerProfile = function(cardE) { `
<div class="card m-5 shadow" style="width: 300px">
    <div class="card-header text-white bg-primary">
        <h3>${cardE.askName}</h3>
            <p class="h4">
            <img src="/images/mug_icon.png">
                ${cardE.askEngineerRole}
            </p>
    </div>

    <!-- Manager Bottom Card -->
        <div class="card-body bg-light" >
            <ul class="list-group">
                <li class="list-group-item">
                    <span>ID: </span>
                    ${cardE.askIdNumber}
                </li>
                <li class="list-group-item">
                    <span>Email: <a>${cardE.askEmail}</a> </span>
                    // <a>janedoe@aol.com</a>
                </li>
                <li class="list-group-item">
                    <span>Office: </span>
                    ${cardE.askGitHubName}
                    </li>
            </ul>
        </div>
    </div>`
}

module.exports = engineerProfile;