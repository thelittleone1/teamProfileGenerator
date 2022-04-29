// Template Literal for Engineer
const engineerProfile = function(cardE) { return `
<div class="card m-5 shadow" style="width: 300px">
    <div class="card-header text-white bg-primary">
        <h3>${cardE.name}</h3>
            <p class="h4">
            <img src="/images/mug_icon.png">
                Engineer
            </p>
    </div>

    <!-- Engineer Bottom Card -->
        <div class="card-body bg-light" >
            <ul class="list-group">
                <li class="list-group-item">
                    <span>ID: </span>
                    ${cardE.idNumber}
                </li>
                <li class="list-group-item">
                    <span>Email: <a>${cardE.email}</a> </span>
                </li>
                <li class="list-group-item">
                    <span>Github: </span>
                    ${cardE.gitHubUserName}
                    </li>
            </ul>
        </div>
    </div>`
}

module.exports = engineerProfile;