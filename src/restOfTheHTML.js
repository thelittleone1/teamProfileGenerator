// Template Literal for the HTML format, will insert template literals
// for manager, engineer, and intern templates
const htmlFormat = function(teamManager, teamEngineer, teamIntern) { return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap -->
        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
        crossorigin="anonymous"/>

        <!-- Font Awesome For Icons -->
        <script 
        src="https://kit.fontawesome.com/0ab7143fdf.js" 
        crossorigin="anonymous">
        </script>

        <title>Team Profile Genarator!</title>
    </head>

    <body>

        <header class="bg-danger py-4">
            <h1 class="text-center text-white">
              My Team
            </h1>
          </header>

        <!-- Main content of Site -->
        <main>
            <!-- div container for profile cards -->
            <div class="container">
                <!-- Profile classes -->
                <div class="d-flex row align-items-center justify-content-center">
                    ${teamManager} 
                    ${teamEngineer} 
                    ${teamIntern}
                </div>
            </div>
        </main>
    </body>
</html>`
}

module.exports = htmlFormat;