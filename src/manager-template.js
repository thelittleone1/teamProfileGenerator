// Template Literal for Manager
const managerProfile = function(cardM) { `
<div class="card m-5 shadow" style="width: 300px">
    <div class="card-header text-white bg-primary">
        <h3>${cardM.askName}</h3>
            <p class="h4">
            <img src="/images/mug_icon.png">
                ${cardM.askManagerRole}
            </p>
    </div>

    <!-- Manager Bottom Card -->
        <div class="card-body bg-light" >
            <ul class="list-group">
                <li class="list-group-item">
                    <span>ID: </span>
                    ${cardM.askIdNumber}
                </li>
                <li class="list-group-item">
                    <span>Email: <a>${cardM.askEmail}</a> </span>
                    // <a>janedoe@aol.com</a>
                </li>
                <li class="list-group-item">
                    <span>Office: </span>
                    ${cardM.askOfficeNumber}
                    </li>
            </ul>
        </div>
    </div>`
}

module.exports = managerProfile;