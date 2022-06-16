function GetContacts() {

        window.parent.Xrm.WebApi.online.retrieveMultipleRecords("contact", "?$select=address3_country,fullname,_parentcustomerid_value").then(
            function success(results) {
                for (var i = 0; i < results.entities.length; i++) {
                    var address3_country = results.entities[i]["address3_country"];
                    var fullname = results.entities[i]["fullname"];
                    var _parentcustomerid_value_formatted = results.entities[i]["_parentcustomerid_value@OData.Community.Display.V1.FormattedValue"];

                    var table = document.getElementById("LinkedContactsTable");
                    var row = table.insertRow();
                    var cell = row.insertCell();
                    cell.innerHTML = fullname;
                    cell = row.insertCell();
                    cell.innerHTML = _parentcustomerid_value_formatted;
                    cell = row.insertCell();
                    cell.innerHTML = address3_country;
                }
            },
            function (error) {
                Xrm.Utility.alertDialog(error.message);
            }
        );

        

}