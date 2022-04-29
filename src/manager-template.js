// Template Literal for Manager
const managerProfile = function(cardM) { return `
<div class="card m-5 shadow" style="width: 300px">
    <div class="card-header text-white bg-primary">
        <h3>${cardM.name}</h3>
            <p class="h4">
            <img src="/images/mug_icon.png">
                Manager
            </p>
    </div>

    <!-- Manager Bottom Card -->
        <div class="card-body bg-light" >
            <ul class="list-group">
                <li class="list-group-item">
                    <span>ID: </span>
                    ${cardM.idNumber}
                </li>
                <li class="list-group-item">
                    <span>Email: <a>${cardM.email}</a> </span>
                </li>
                <li class="list-group-item">
                    <span>Office: </span>
                    ${cardM.officeNumber}
                    </li>
            </ul>
        </div>
    </div>`
}

module.exports = managerProfile;