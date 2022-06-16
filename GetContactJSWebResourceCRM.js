function GetContacts() {
    debugger;

    window.parent.Xrm.WebApi.online.retrieveMultipleRecords("contact", "?$select=_accountid_value,fullname").then(
        function success(results) {
            //debugger;
            for (var i = 0; i < results.entities.length; i++) {
                var _accountid_value = results.entities[i]["_accountid_value"];
                var _accountid_value_formatted = results.entities[i]["_accountid_value@OData.Community.Display.V1.FormattedValue"];
                var _accountid_value_lookuplogicalname = results.entities[i]["_accountid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                var fullname = results.entities[i]["fullname"];

                var table = document.getElementById("IrakTable");
                var row = table.insertRow();
                var cell = row.insertCell();
                cell.innerHTML = _accountid_value + " " + _accountid_value_formatted + " " + _accountid_value_lookuplogicalname;
                cell = row.insertCell();
                cell.innerHTML = fullname;
            }

        },
        function (error) {
            Xrm.Utility.alertDialog(error.message);
        }
    );

}