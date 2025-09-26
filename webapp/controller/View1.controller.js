sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ndc/BarcodeScanner",
    "sap/m/MessageBox"
], (Controller,BarcodeScanner,MessageBox) => {
    "use strict";

    return Controller.extend("scanner.controller.View1", {
        onInit() {
        },
        OnScan:function(oEvent){
            var that = this;
            BarcodeScanner.scan(
                function(result){
                    if(!result.cancelled){
                        that.getView().byId("Materialnumber").setValue(result.text);
                        MessageBox.success("we got a bar code"+"\n"+"Result: "+result.text+"\n"+"Format: "+result.format )
                    }
                },
                function(error){
                    MessageBox.show("Scanning failed"+error);
                }
            )
        }
    });
});